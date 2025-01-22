// app/api/chat/route.ts
import { NextResponse } from 'next/server'
import redis from '@/utils/redis'
import openai from '@/utils/openai'
import { getChapterPrompts } from '@/data/prompts'
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions'

interface ChatMessage {
    messageNo: number;
    timestamp: string;
    character: string;
    role: string;
    character_id: string;
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

function formatHistoryForPrompt(history: ChatMessage[]) {
  const formattedHistory = {
    messages: history.map(msg => ({
      messageNo: msg.messageNo,
      timestamp: msg.timestamp,
      sender: msg.character,
      sender_role: msg.role,
      content: msg.message
    }))
  };
  return JSON.stringify(formattedHistory, null, 2);
}

function getCurrentTimestamp(): string {
  return new Date().toISOString();
}

function getNextMessageNumber(chatHistory: ChatMessage[]): number {
  if (chatHistory.length === 0) return 1;
  const lastMessage = chatHistory[chatHistory.length - 1];
  return lastMessage.messageNo + 1;
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

    // Get chapter-specific prompts
    const { systemPrompt, humanPrompt } = getChapterPrompts(chapter_id)

    // Get existing chat history from Redis
    const chatHistory = await getStoredChat(chapter_id, session_id)
    const historyString = formatHistoryForPrompt(chatHistory)

    // Create message array for OpenAI with proper typing
    const messages: ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: systemPrompt
      },
      {
        role: "user",
        content: humanPrompt
          .replace('{text}', "who is the latest person in the chat history, if there is no chat history create a mock message")
          .replace('{history}', historyString)
      }
    ];

    console.log('Sending to OpenAI:', messages);

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4-0125-preview",
      messages,
      temperature: 0.7,
      response_format: { type: "json_object" }
    });

    // Parse the response
    const responseContent = completion.choices[0].message.content;
    if (!responseContent) {
      throw new Error('No response from OpenAI');
    }

    const parsedResponse = JSON.parse(responseContent);
    
    // Format the response with message number and timestamp
    const formattedResponse: ChatMessage = {
      messageNo: getNextMessageNumber(chatHistory),
      timestamp: getCurrentTimestamp(),
      character: parsedResponse.character,
      message: parsedResponse.message,
      character_id : parsedResponse.character_id,
      role : parsedResponse.role
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
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}