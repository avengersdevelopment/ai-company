// app/api/president_message/route.ts
import { NextResponse } from 'next/server'
import redis from '@/utils/redis'

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
    const { chapter_id, session_id, message } = await request.json()

    if (!chapter_id || !session_id || !message) {
      return NextResponse.json(
        { error: 'chapter_id, session_id, and message are required' },
        { status: 400 }
      )
    }

    // Get existing chat history from Redis
    const chatHistory = await getStoredChat(chapter_id, session_id)

    // Format the president's message
    const presidentMessage: ChatMessage = {
      messageNo: getNextMessageNumber(chatHistory),
      timestamp: getCurrentTimestamp(),
      character: "President Trump",
      role: "President",
      character_id: "99",
      message: message
    }

    // Generate Redis key using chapter_id + session_id
    const redisKey = `chat:${chapter_id}:${session_id}`

    // Append new message to chat history
    const updatedHistory = [...chatHistory, presidentMessage]

    // Store updated history in Redis
    const stored = await storeChat(redisKey, updatedHistory)
    if (!stored) {
      console.warn('Failed to store chat history in Redis')
      return NextResponse.json(
        { error: 'Failed to store message' },
        { status: 500 }
      )
    }

    return NextResponse.json(presidentMessage)
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