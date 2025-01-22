// app/api/chat/route.ts
import { NextResponse } from 'next/server'
import redis from '@/utils/redis'
import flowiseClient from '@/utils/flowise'
import { getChapterPrompts } from '@/data/prompts'

// Static values
const STATIC_VALUES = {
  question: "send me my user prompt again as a helper"
}

// Verify environment variables
if (!process.env.INTENT_RECOGNIZER_CHATFLOW_ID) {
  throw new Error('INTENT_RECOGNIZER_CHATFLOW_ID is not defined in environment variables');
}

const CHATFLOW_ID = process.env.INTENT_RECOGNIZER_CHATFLOW_ID;

interface ChatMessage {
  character: string;
  message: string;
}

// Helper function to get chat history from Redis
async function getStoredChat(chapterId: string, sessionId: string) {
  try {
    const redisKey = `chat:${chapterId}:${sessionId}`;
    const storedChat = await redis.get<ChatMessage[]>(redisKey);
    return storedChat || [];
  } catch (error) {
    console.error('Error getting stored chat:', error);
    return [];
  }
}

// Helper function to store chat in Redis
async function storeChat(key: string, data: ChatMessage[], expiry: number = 86400) {
  try {
    await redis.set(key, data, {
      ex: expiry
    });
    return true;
  } catch (error) {
    console.error('Error storing chat:', error);
    return false;
  }
}

function formatHistoryForFlowise(history: ChatMessage[]) {
  const formattedHistory = {
    messages: history.map(msg => ({
      sender: msg.character,
      content: msg.message
    }))
  };
  return JSON.stringify(formattedHistory);
}

export async function POST(request: Request) {
  try {
    const { chapter_id, session_id } = await request.json()

    if (!chapter_id || !session_id) {
      return NextResponse.json(
        { error: 'chapter_id and session_id are required' },
        { status: 400 }
      )
    }

    const { systemPrompt, humanPrompt } = getChapterPrompts(chapter_id)
    // Get existing chat history from Redis
    const chatHistory = await getStoredChat(chapter_id, session_id)
    const historyString = formatHistoryForFlowise(chatHistory)

    console.log(humanPrompt.replace('{text}', STATIC_VALUES.question).replace('{history}', historyString))


    // Make prediction using Flowise with chat history
    const prediction = await flowiseClient.createPrediction({
        chatflowId: CHATFLOW_ID,
        question: STATIC_VALUES.question,
        overrideConfig: {
            chatPromptTemplate_0 : {
                systemMessagePrompt: systemPrompt,
          humanMessagePrompt: humanPrompt.replace('{text}', STATIC_VALUES.question).replace('{history}', historyString)
            }
          
        },
      });

    // Format the response
    const formattedResponse: ChatMessage = {
      character: prediction.json.character,
      message: prediction.json.message || prediction.text
    }

    // Generate Redis key using chapter_id + session_id
    const redisKey = `chat:${chapter_id}:${session_id}`

    // Append new message to chat history
    const updatedHistory = [...chatHistory, formattedResponse]

    // Store updated history in Redis
    const stored = await storeChat(redisKey, updatedHistory)
    if (!stored) {
      console.warn('Failed to store chat history in Redis')
    }

    return NextResponse.json(formattedResponse)
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : 'Unknown error',
        chatflowId: CHATFLOW_ID
      },
      { status: 500 }
    )
  }
}