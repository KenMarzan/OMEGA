"use client";

import React, { useState } from "react";
import SlideScreen from "@/ui/Slidescreen";

export default function MainPage(): React.JSX.Element {
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  const handleOverlayClick = (): void => {
    setFadeOut(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen">
      {/* Overlay */}
      {showOverlay && (
      <div
        className={`absolute inset-0 ${
          fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        } transition-opacity duration-1000 bg-gray-900 text-white flex items-center justify-center z-50`}
        onClick={handleOverlayClick}
      >
        <div className="text-center">
          <SlideScreen />
        </div>
      </div>
    )}


      {/* Main Website */}
      <nav
        className={`flex justify-between items-center p-4 navbar ${
          showOverlay ? "pointer-events-none" : ""
        }`}
      >
        <div className="logo">
          <h1 className="text-xl font-bold">Website Logo</h1>
        </div>
        <div className="clickables flex gap-4">
          <button className="button">Customer Page</button>
          <button className="button">Vendor Page</button>
          <button className="button">Farmer Page</button>
          <button className="button">About Us</button>
        </div>
        <div className="searchbar">
          <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded border"
          />
        </div>
        <div className="dropdown-options flex gap-4">
          <button className="button">Category</button>
          <button className="button">Sign In</button>
          <button className="button">Help</button>
        </div>
      </nav>

      <div className="content mt-8">
        {/* Slide Screen Section */}
        <div className="slidescreen flex flex-col gap-8">
          {/* Component: Slide Screen about harvested products */}
          <div className="slide-screen bg-green-100 p-4 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Harvested Products</h2>
            <p className="text-lg">Explore the variety of products harvested by farmers.</p>
          </div>

          {/* Component: Slide Screen about market prices and SRP */}
          <div className="slide-screen bg-blue-100 p-4 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Market Prices and SRP</h2>
            <p className="text-lg">Stay updated with the latest market prices and suggested retail prices.</p>
          </div>
        </div>

        {/* Component: Weather Report */}
        <div className="weather-report bg-yellow-100 p-4 rounded shadow mt-8">
          <h2 className="text-2xl font-bold mb-2">Weather Report</h2>
          <p className="text-lg">Get the latest weather updates to plan your farming activities.</p>
        </div>

        {/* Component: Why Be a Farmer */}
        <div className="why-be-a-farmer bg-orange-100 p-4 rounded shadow mt-8">
          <h2 className="text-2xl font-bold mb-2">Why Be a Farmer?</h2>
          <p className="text-lg">Discover the benefits of being a farmer and explore our course on how to start.</p>
          <a
            href="/course"
            className="text-blue-500 underline mt-2 inline-block"
          >
            Learn More
          </a>
        </div>

        {/* Component: Reviews About Us */}
        <div className="reviews bg-gray-100 p-4 rounded shadow mt-8">
          <h2 className="text-2xl font-bold mb-2">Reviews About Us</h2>
          <p className="text-lg">See what others are saying about our platform and services.</p>
        </div>
      </div>
    </div>
  );
}