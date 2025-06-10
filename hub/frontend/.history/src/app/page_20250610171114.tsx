"use client"; 

import React, { useState, useEffect } from "react";
import SlideScreen from "@/ui/Slidescreen"; 

export default function MainPage(): React.JSX.Element {
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const handleOverlayClick = (): void => {
    setFadeOut(true);
  };

  useEffect(() => {
    if (fadeOut) {

      const timeout = setTimeout(() => {
        setShowOverlay(false);
      }, 1000); 

      return () => clearTimeout(timeout);
    }
  }, [fadeOut]); 

  return (
<div className="transition-opacity duration-1000 bg-white text-gray-900 min-h-screen">
      {showOverlay && (
        <div
          className={`absolute inset-0 flex items-center justify-center z-50 transition-opacity duration-1000 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onClick={handleOverlayClick} 
        >
          <div className="text-center">
            <SlideScreen />
          </div>
        </div>
      )}

<div
  className={`transition-opacity duration-1000 min-h-screen ${
    showOverlay && !fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
  }`}
>
        <div className="content mt-8 p-4">
          <div className="slidescreen flex flex-col gap-8">
            <div className="slide-screen bg-green-100 p-4 rounded shadow">
              <h2 className="text-2xl font-bold mb-2">Harvested Products</h2>
              <p className="text-lg">
                Explore the variety of products harvested by farmers.
              </p>
            </div>

            <div className="slide-screen bg-blue-100 p-4 rounded shadow">
              <h2 className="text-2xl font-bold mb-2">Market Prices and SRP</h2>
              <p className="text-lg">
                Stay updated with the latest market prices and suggested retail
                prices.
              </p>
            </div>
          </div>

          <div className="weather-report bg-yellow-100 p-4 rounded shadow mt-8">
            <h2 className="text-2xl font-bold mb-2">Weather Report</h2>
            <p className="text-lg">
              Get the latest weather updates to plan your farming activities.
            </p>
          </div>

          {}
          <div className="why-be-a-farmer bg-orange-100 p-4 rounded shadow mt-8">
            <h2 className="text-2xl font-bold mb-2">Why Be a Farmer?</h2>
            <p className="text-lg">
              Discover the benefits of being a farmer and explore our course on
              how to start.
            </p>
            <a
              href="/course"
              className="text-blue-500 underline mt-2 inline-block"
            >
              Learn More
            </a>
          </div>

          <div className="reviews bg-gray-100 p-4 rounded shadow mt-8">
            <h2 className="text-2xl font-bold mb-2">Reviews About Us</h2>
            <p className="text-lg">
              See what others are saying about our platform and services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}