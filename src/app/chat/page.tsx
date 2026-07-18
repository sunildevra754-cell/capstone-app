import ChatInterface from "@/components/ChatInterface";

export default function ChatPage() {
  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">AI Chat</h1>
      <ChatInterface />
    </div>
  );
}