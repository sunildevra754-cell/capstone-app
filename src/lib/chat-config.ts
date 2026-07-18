// Central configuration for the AI chat feature.
// Keep the system prompt and model settings here so future 
// changes (e.g. FE-07's tool calling) touch only this file.

export const CHAT_MODEL = "claude-sonnet-5";

export const SYSTEM_PROMPT = `You are a helpful assistant embedded in a 
capstone project. Answer clearly and concisely. If you don't know 
something, say so instead of guessing.`;

export const CHAT_CONFIG = {
  maxOutputTokens: 1024,
  temperature: 0.7,
};