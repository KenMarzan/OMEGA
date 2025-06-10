"use client";

import React, { useState } from "react";

export default function MainPage(): JSX.Element {
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
          className={`absolute inset-0 bg-gray-900 text-white flex items-center justify-center z-50 transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
          onClick={handleOverlayClick}
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-lg">Click anywhere to explore!</p>
          </div>
        </div>
      )}

      {/* Main Website */}
      <nav
        className={`flex justify-between items-center p-4 bg-gray-800 text-white ${
          showOverlay ? "pointer-events-none" : ""
        }`}
      >
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
    </div>
  );
}