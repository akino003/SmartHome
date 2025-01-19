import React, { useState } from "react";

const HomePage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("1 Day");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "User", text: input }]);
      setMessages((prev) => [...prev, { sender: "Server", text: "This is a dummy reply from the server." }]);
      setInput("");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-[#008388] p-4 flex justify-between items-center text-white shadow-md">
        <h1 className="text-2xl font-bold">SMART HOMES</h1>
        <select
          className="bg-[#007474] text-white p-2 rounded"
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(e.target.value)}
        >
          <option value="1 Day">1 Day</option>
          <option value="1 Month">1 Month</option>
        </select>
      </header>

      {/* Chat Area */}
      <main className="flex-grow p-4 overflow-auto">
        <div className="space-y-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.sender === "User" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
              } p-2 rounded-lg w-fit max-w-[70%] ${message.sender === "User" ? "ml-auto" : "mr-auto"}`}
            >
              {message.text}
            </div>
          ))}
        </div>
      </main>

      {/* Input Area */}
      <div className="p-4 bg-white shadow-md flex">
        <input
          type="text"
          className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-400"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="ml-2 bg-[#008388] text-white px-4 py-2 rounded-lg shadow hover:opacity-90"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default HomePage;