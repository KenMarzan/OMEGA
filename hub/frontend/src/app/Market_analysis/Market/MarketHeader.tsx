"use client";
import { useState, useEffect } from "react";

export default function MarketHeader() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [marketStatus, setMarketStatus] = useState<"OPEN" | "CLOSED">("OPEN");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString());

      // Simple market hours logic (9 AM - 5 PM)
      const hour = now.getHours();
      setMarketStatus(hour >= 9 && hour < 17 ? "OPEN" : "CLOSED");
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Market Analysis
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 max-w-3xl mx-auto leading-relaxed">
            Real-time agricultural commodity prices, trends, and market insights
            powered by AI
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 min-w-[200px]">
              <div className="text-sm mb-1">
                Market Status:
                <span
                  className={`font-bold ml-2 ${
                    marketStatus === "OPEN" ? "text-green-200" : "text-red-200"
                  }`}
                >
                  {marketStatus}
                </span>
              </div>
              <div className="text-xs opacity-90">
                Last Updated: {currentTime || "Loading..."}
              </div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 min-w-[200px]">
              <div className="text-sm mb-1">
                Active Markets:{" "}
                <span className="font-bold text-green-200">12</span>
              </div>
              <div className="text-xs opacity-90">Commodities Tracked: 45+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
