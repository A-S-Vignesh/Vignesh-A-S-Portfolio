import React, { useState, useEffect, useRef, useCallback } from "react";
import { chatimage } from "./Images";
import responses, { options } from "../utils/botResponses";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatMessages");
    return saved
      ? JSON.parse(saved)
      : [{ sender: "bot", text: "Hello! How can I help you?" }];
  });
  const messagesEndRef = useRef(null);
  const [inputMode, setInputMode] = useState("buttons"); // 'buttons' or 'text'

  // Auto-scroll to bottom when messages change
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleQuickQuestion = async (question) => {
    const newMessages = [...messages, { sender: "user", text: question }];
    setMessages(newMessages);

    setIsTyping(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const reply =
      responses[question] ||
      "I'm sorry, I don't understand that. Please try one of the options below.";
    const botMessage = { sender: "bot", text: reply };

    // Check if response has follow-up options
    const followUps = responses.getFollowUps(question);
    if (followUps) {
      botMessage.options = followUps;
    }

    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleClearChat = () => {
    setMessages([{ sender: "bot", text: "Hello! How can I help you?" }]);
  };

  const renderMessageContent = (text) => {
    // Detect URLs and convert to links
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="fixed bottom-24 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          aria-label="Chat"
        >
          <img className="w-12 h-12" src={chatimage} alt="Chat" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl w-80 max-h-[80vh] flex flex-col">
          <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Portfolio Assistant
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={handleClearChat}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                title="Clear chat"
              >
                🗑️
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3 ${
                    msg.sender === "bot"
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      : "bg-sky-500 text-white"
                  }`}
                >
                  <div className="text-sm">
                    {renderMessageContent(msg.text)}
                  </div>
                  {msg.options && (
                    <div className="mt-2 space-y-2">
                      {msg.options.map((opt, j) => (
                        <button
                          key={j}
                          onClick={() => handleQuickQuestion(opt)}
                          className="block w-full text-left p-2 text-sm rounded bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t dark:border-gray-700">
            <div className="grid grid-cols-2 gap-2">
              {options.slice(0, 4).map((option) => (
                <button
                  key={option}
                  onClick={() => handleQuickQuestion(option)}
                  className="p-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .typing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: currentColor;
          animation: typing 1.4s infinite ease-in-out;
        }

        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
