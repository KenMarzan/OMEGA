// page.tsx
"use client"; // Marks this page as a client-side component

import React, { useState, useEffect } from "react";
import SlideScreen from "@/ui/Slidescreen"; // Imports the SlideScreen component

export default function MainPage(): React.JSX.Element {
  // State to control the visibility of the initial overlay.
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  // State to trigger the fade-out animation for the overlay.
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  // Handler for when the overlay is clicked, initiating the fade-out process.
  const handleOverlayClick = (): void => {
    setFadeOut(true);
  };

  // Effect hook to manage the overlay's complete removal after fade-out.
  useEffect(() => {
    if (fadeOut) {
      // Sets a timeout to hide the overlay completely after the transition duration.
      const timeout = setTimeout(() => {
        setShowOverlay(false);
      }, 1000); // Duration matches the CSS transition duration.
      // Cleanup function to clear the timeout if the component unmounts or fadeOut changes.
      return () => clearTimeout(timeout);
    }
  }, [fadeOut]); // Dependency array ensures effect runs only when fadeOut changes.

  return (
<div className="transition-opacity duration-1000 bg-white text-gray-900 min-h-screen">
{/* The full-screen overlay, displayed conditionally.
          It fades out and becomes non-interactive after a click. */}
      {showOverlay && (
        <div
          className={`absolute inset-0 flex items-center justify-center z-50 transition-opacity duration-1000 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onClick={handleOverlayClick} // Attaches click handler to trigger fade-out.
        >
          {/* Renders the SlideScreen component inside the overlay. */}
          <div className="text-center">
            <SlideScreen />
          </div>
        </div>
      )}

      {/* Main website content, which becomes visible after the overlay fades out.
          It also has a transition for a smooth appearance. */}
<div
  className={`transition-opacity duration-1000 min-h-screen ${
    showOverlay && !fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
  }`}
>
        {/* Navigation bar section. */}
        <nav className="flex justify-between items-center p-4 navbar">
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

        {/* Main content area, structured with various sections. */}
        <div className="content mt-8 p-4"> {/* Added padding for better layout */}
          {/* Section for harvested products. */}
          <div className="slidescreen flex flex-col gap-8">
            <div className="slide-screen bg-green-100 p-4 rounded shadow">
              <h2 className="text-2xl font-bold mb-2">Harvested Products</h2>
              <p className="text-lg">
                Explore the variety of products harvested by farmers.
              </p>
            </div>

            {/* Section for market prices and SRP. */}
            <div className="slide-screen bg-blue-100 p-4 rounded shadow">
              <h2 className="text-2xl font-bold mb-2">Market Prices and SRP</h2>
              <p className="text-lg">
                Stay updated with the latest market prices and suggested retail
                prices.
              </p>
            </div>
          </div>

          {/* Section for weather report. */}
          <div className="weather-report bg-yellow-100 p-4 rounded shadow mt-8">
            <h2 className="text-2xl font-bold mb-2">Weather Report</h2>
            <p className="text-lg">
              Get the latest weather updates to plan your farming activities.
            </p>
          </div>

          {/* Section encouraging farming and providing a course link. */}
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

          {/* Section for reviews. */}
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
