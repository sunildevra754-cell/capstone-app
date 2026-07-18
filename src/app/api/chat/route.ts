import { anthropic } from "@ai-sdk/anthropic";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { CHAT_MODEL, SYSTEM_PROMPT, CHAT_CONFIG } from "@/lib/chat-config";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: anthropic(CHAT_MODEL),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    maxOutputTokens: CHAT_CONFIG.maxOutputTokens,
    temperature: CHAT_CONFIG.temperature,
  });

  return result.toUIMessageStreamResponse();
}