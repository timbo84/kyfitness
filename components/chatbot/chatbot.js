"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function ChatbotModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messageContainerRef = useRef(null);

  const toggleChat = () => {
    if (!isOpen) {
      setMessages([
        {
          role: "assistant",
          content:
            "Hello! I'm FitBot, your fitness companion. How can I help you today?",
        },
      ]); // Add robot's greeting when opening the modal
    }

    setIsOpen(!isOpen);

    // Disable scrolling on background when the modal is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"; // Disables background scrolling
    } else {
      document.body.style.overflow = ""; // Restores scrolling when modal closes
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]); // Update local state
    setInput(""); // Clear input field
    setLoading(true); // Set loading state

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage], // Pass the conversation history
        }),
      });
      const data = await res.json();

      if (data.message) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "assistant", content: data.message },
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Scroll to the bottom of the message container whenever messages are updated
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          cursor: "pointer",
          width: "10vw", // 10% of the viewport width
          maxWidth: "175px", // Ensures it doesn't grow too large
          minWidth: "90px", // Ensures it doesn't shrink too small
          height: "auto",
        }}
      >
        <img
          src="/fitbot.gif"
          alt="Chatbot Robot"
          style={{
            width: "100%", // Stretches to match the parent container
            height: "auto",
          }}
        />
      </div>
      )}
      

      {/* Modal */}
      {isOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black/70 z-100"
            onClick={toggleChat}
          ></div>

          {/* Modal Content */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="bg-zinc-900 text-white rounded-lg shadow-lg relative"
              style={{
                width: "75%",
                height: "500px",
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Header */}
              <div
                className="flex justify-between items-center p-4 rounded-t"
                style={{
                  display: "flex",
                  alignItems: "center", // Vertically center all items
                  backgroundColor: "#FFB7C5",
                  color: "#f1ffc4",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  borderBottom: "2px solid #f4d03f",
                  position: "relative", // Allows additional positioning if needed
                }}
              >
                {/* Left: Fitness Chatbot Title */}
                <span
                  className="ChatbotHeader"
                  style={{
                    color: "#8884ff",
                    whiteSpace: "nowrap", // Prevents wrapping of the text
                    textAlign: "center",
                  }}
                >
                  Fitness <br />
                  Chatbot
                </span>

                {/* Center: Robot Image */}
                <div
                  style={{
                    flex: "1", // Takes up remaining space to center-align the image
                    display: "flex",
                    justifyContent: "center", // Centers the image in its container
                  }}
                >
                  <img
                    src="/fitbotBounce.gif" // Replace with the correct path to your robot image
                    alt="Robot"
                    style={{
                      width: "100px", // Adjust size as needed
                      height: "100px",
                    }}
                  />
                </div>

                {/* Right: Close Button */}
                <button
                  onClick={toggleChat}
                  className="custom-btn"
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                  }}
                >
                  X
                </button>
              </div>

              {/* Messages Section */}
              <div
                ref={messageContainerRef} // Attach the ref for auto-scroll
                className="overflow-y-auto p-4"
                style={{
                  maxHeight: "350px",
                  height: "350px",
                  backgroundColor: "#000", // Modal background
                }}
              >
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex", // Ensures consistent alignment
                      justifyContent:
                        msg.role === "user" ? "flex-end" : "flex-start", // User messages to the right, assistant messages to the left
                      marginBottom: "10px", // Spacing between messages
                    }}
                  >
                    <div
                      className="p-3 rounded-lg max-w-[80%]"
                      style={{
                        backgroundColor:
                          msg.role === "user" ? "#5d576b" : "#f1ffc4", // Bubble color
                        color: msg.role === "user" ? "#f1ffc4" : "#000", // Text color
                        borderRadius: "20px", // Bubble style
                        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)", // Shadow effect
                        padding: "10px 15px", // Internal spacing
                      }}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div
                    className="text-sm"
                    style={{
                      color: "#f1ffc4",
                      marginTop: "10px",
                    }}
                  >
                    Typing...
                  </div>
                )}
              </div>

              {/* Input Section */}
              <div
                className="p-4 flex border-t"
                style={{
                  display: "flex", // Enables flex layout
                  flexWrap: "wrap", // Allows wrapping to the next row when space is insufficient
                  alignItems: "center", // Centers elements vertically
                  gap: "1rem", // Adds space between input and button
                  backgroundColor: "#000", // Keeps consistent styling
                  color: "#fff",
                  width: "100%", // Ensures the section spans the full modal width
                }}
              >
                {/* Input Field */}
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage(); // Sends message with Enter key
                  }}
                  className="border p-2 focus:outline-none"
                  placeholder="Ask me anything..."
                  style={{
                    flex: "1", // Stretches input to take available space
                    backgroundColor: "#5d576b", // Matches modal styling
                    color: "#f1ffc4", // Text color for readability
                    borderColor: "#f1ffc4", // Border styling
                    padding: "10px", // Internal spacing for text
                    borderRadius: "4px", // Rounded corners
                  }}
                />

                {/* Send Button */}
                <button
                  onClick={sendMessage}
                  className="custom-btnChat"
                  style={{
                    flexShrink: "0",
                    padding: "10px 15px",
                    cursor: "pointer",
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
