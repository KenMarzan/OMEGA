"use client";

import React, { useState } from "react";

const MainPage: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const appear = async (): Promise<void> => {
    setIsAnimating(true);
    // Simulate animation duration
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsAnimating(false);
  };

  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="logo">
          <h1 className="text-xl font-bold">Website Logo</h1>
        </div>
        <div className="clickables flex gap-4">
          <button>Customer Page</button>
          <button>Vendor Page</button>
          <button>Farmer Page</button>
          <button>About Us</button>
        </div>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded border"
          />
        </div>
        <div className="dropdown-options flex gap-4">
          <button>Category</button>
          <button>Sign In</button>
          <button>Help</button>
        </div>
      </nav>

      {/* Content */}
      <div className={`content ${isAnimating ? "pointer-events-none" : ""}`}>
        {/* Slidescreen */}
        <div className="slidescreen">
          <button onClick={appear}>Show Wonders</button>
          <div className="slideScreen-content">
            <div>About sa mga produktong naani</div>
            <div>Presyuhan sa palengke at SRP</div>
          </div>
        </div>

        {/* Other Components */}
        <div className="weather-report">
          <h2>Weather Report</h2>
          <p>Details about the current weather...</p>
        </div>
        <div className="why-be-a-farmer">
          <h2>Why Be a Farmer?</h2>
          <a href="/course">Learn More</a>
        </div>
        <div className="reviews">
          <h2>Reviews About Us</h2>
          <p>Customer feedback...</p>
        </div>
      </div>

      {/* Animation Overlay */}
      {isAnimating && (
        <div className="absolute inset-0 bg-black opacity-50 z-50"></div>
      )}
    </div>
  );
};

export default MainPage;
