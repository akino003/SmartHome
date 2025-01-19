import React, { useState } from "react";

const AIInsightsPage = () => {
  const [selectedDuration, setSelectedDuration] = useState("1 Day");
  const insights = [
    "The air conditioner consumed 12.5 kWh last week.",
    "Reducing your heater usage by 1 hour daily saves 15% energy.",
    "Lighting accounted for 20% of your energy bill last month.",
    "Switching to LED lights reduces energy consumption by 30%.",
  ];

  const randomInsight = insights[Math.floor(Math.random() * insights.length)];

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

      {/* Insights Section */}
      <main className="flex-grow flex flex-col justify-center items-center p-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Energy Insights</h2>
        <p className="text-lg bg-white shadow-md p-4 rounded-lg">
          {randomInsight}
        </p>
      </main>
    </div>
  );
};

export default AIInsightsPage;