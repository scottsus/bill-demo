import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { getResume } from '@/app/lib/getResume';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const resume = getResume();

  const result = await streamText({
    model: openai('gpt-4-turbo'),
    system: `You know all about Bill Susanto from the given resume: ${resume}. Answer only professional questions related to Bill.`,
    messages: messages,
  });

  return result.toAIStreamResponse();
}
