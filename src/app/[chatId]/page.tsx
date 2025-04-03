import AutoScrollContainer from "@/components/custom/AutoScrollContainer";
import { Bot, User } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import PromptInput from "@/components/custom/PromptInput";

export default async function Page({
  params,
}: {
  params: Promise<{ chatId: string }>;
}) {
  const { chatId } = await params;
  const { userId } = await auth();
  const messages = [
    { id: "1242", text: "Hello! How can I assist you today?", sender: "bot" },
    { id: "242qeda", text: "Hi! I need help with my project.", sender: "user" },
    { id: "3eq", text: "Sure! What do you need help with?", sender: "bot" },
    { id: "4d22", text: "Hi! I need help with my project.", sender: "user" },
    { id: "5eq", text: "Sure! What do you need help with?", sender: "bot" },
    { id: "6deq", text: "Hi! I need help with my project.", sender: "user" },

    {
      id: "7eq",
      text: "Sure! What do you need help with? Sure! What do you need help with?Sure! What do you need help with?Sure! What do you need help with?Sure! What do you need help with?Sure! What do you need help with?Sure! What do you need help with?Sure! What do you need help with?Sure! What do you need help with?Sure! What do you need help with?Sure! What do you need help with?Sure! What do you need help with?Sure! What do you need help with?Sure! What do you need help with?Sure! What do you need help with?Sure! What do you need help with?",
      sender: "bot",
    },
  ];

  return (
    <AutoScrollContainer>
      <div className="flex flex-col p-4">
        {/* Messages List */}

        <div className="flex-1 overflow-y-auto space-y-4 p-4 rounded-lg ">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-3 rounded-lg flex items-start space-x-3 w-full md:w-[75%] shadow-lg ${
                msg.sender === "user"
                  ? "ml-auto flex-row-reverse text-right"
                  : ""
              }`}
            >
              {msg.sender === "user" ? (
                <User className="w-6 h-6 flex-shrink-0" />
              ) : (
                <Bot className="w-6 h-6 flex-shrink-0" />
              )}
              <span className="break-words">{msg.text}</span>
            </div>
          ))}
        </div>
      </div>
    </AutoScrollContainer>
  );
}
