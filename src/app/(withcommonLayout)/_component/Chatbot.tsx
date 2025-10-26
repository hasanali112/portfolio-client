"use client";

import { useState } from "react";
import axios from "axios";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const renderMessage = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\n/g, "<br/>");
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        `https://portfolio-chatbot-phi.vercel.app/chat?user_input=${encodeURIComponent(
          userMessage
        )}`
      );

      setMessages((prev) => [
        ...prev,
        {
          text: response.data.response || "No response received",
          isUser: false,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I encountered an error. Please try again.",
          isUser: false,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] text-white rounded-full shadow-lg hover:scale-105 z-50 flex items-center justify-center text-sm font-medium transition-transform duration-200"
      >
        <span className="text-xl md:text-2xl animate-bounce drop-shadow-sm">
          🤖
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 md:bottom-24 right-2 md:right-4 w-[calc(100vw-16px)] md:w-96 h-[70vh] md:h-[500px] bg-gradient-to-r from-white/5 via-white/5 to-transparent backdrop-blur-lg border border-[#8ac9f4]/50 text-white  rounded-lg shadow-xl z-50 flex flex-col">
          <div className="flex justify-between items-center p-3 border-b border-gray-700">
            <h3 className="font-semibold text-white">Chat Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white text-xl font-bold w-6 h-6 flex items-center justify-center"
            >
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 ${msg.isUser ? "text-right" : "text-left"}`}
              >
                <span
                  className={`inline-block p-2 rounded text-sm ${
                    msg.isUser
                      ? "bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] text-white"
                      : "bg-gray-600 text-white"
                  }`}
                  dangerouslySetInnerHTML={{ __html: renderMessage(msg.text) }}
                />
              </div>
            ))}
            {loading && (
              <div className="mb-2 text-left">
                <span className="inline-block p-2 rounded text-sm bg-gray-800 text-white">
                  Typing...
                </span>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask me anything..."
                disabled={loading}
                className="flex-1 p-2 border border-gray-600 bg-[#1f2937] text-white rounded text-sm disabled:opacity-50 placeholder-gray-400"
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="px-3 py-2 bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] text-white rounded text-sm hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:hover:scale-100"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
