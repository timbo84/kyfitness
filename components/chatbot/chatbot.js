"use client";
import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();

      if (data.reply) {
        setMessages([...messages, userMessage, { role: "assistant", content: data.reply }]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button 
        onClick={toggleChat} 
        className="custom-btn"
        style={{ position: 'fixed', bottom: '1rem', right: '1rem' }} 
      >
        💬
      </button>

      {/* Chat Window and Backdrop */}
      {isOpen && (
        <div className=" inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <div 
            className=" inset-0 bg-black bg-opacity-50" 
            onClick={toggleChat}
          ></div>

          {/* Chat Modal */}
          <div className="relative " style={{
              backgroundColor: "#5d576b",
              color: "#f1ffc4",
            }}>
            {/* Chat Header */}
            <div className="">
              <span className="font-semibold">Fitness Chatbot</span>
              <button onClick={toggleChat} className="custom-btn">&times;</button>
            </div>

            {/* Chat Messages */}
            <div className="">
              {messages.map((msg, index) => (
                <div key={index} className={`p-2 rounded-md max-w-[80%] ${msg.role === "user" ? "ml-auto bg-gray-300 text-right" : "mr-auto bg-blue-100 text-left"}`}>
                  {msg.content}
                </div>
              ))}
              {loading && <div className="text-sm">Typing...</div>}
            </div>

            {/* Chat Input */}
            <div className="p-2 border-t flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border p-2 rounded-l focus:outline-none"
                placeholder="Ask me anything..."
                style={{
                    backgroundColor: "#5d576b",
                    color: "#f1ffc4",
                  }}
              />
              <button 
                onClick={sendMessage} 
                className="custom-btn "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
