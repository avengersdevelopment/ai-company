// src/utils/flowise.ts
import { FlowiseClient } from 'flowise-sdk';

if (!process.env.AI_API_URL) {
  throw new Error('AI_API_URL or AI_API_KEY is not defined in environment variables');
}

const flowiseClient = new FlowiseClient({
  baseUrl: process.env.AI_API_URL,
  apiKey: process.env.AI_API_KEY,
});

export default flowiseClient;