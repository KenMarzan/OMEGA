import React, { useEffect, useState } from 'react';
import './Slidescreen.css';

const SlideScreen: React.FC = () => { 
    const [currentIndex, setCurrentIndex] = useState(0);

    const imagePaths: string[] = [
        "https://via.placeholder.com/512?text=Philippines+rice+farm+1",
        "https://via.placeholder.com/512?text=Philippines+rice+farm+2",
        "https://via.placeholder.com/512?text=Philippines+farmer+working",
        "https://via.placeholder.com/512?text=Coastal+farm+Camiguin"
      ];
      
    useEffect(() => {
        if (imagePaths.length === 0) {
            console.warn("No image paths defined for the slideshow.");
            return;
        }

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [imagePaths]); 

    if (imagePaths.length === 0) {
        return (
            <div className="slide-screen">
                <div className="welcome-message">
                    <h1>Welcome to Our App</h1>
                </div>
                <p style={{ color: 'white' }}>No slideshow images available.</p> {/* Added style for visibility */}
            </div>
        );
    }

    return (
        <div className="slide-screen">
            <div className="welcome-message">
                <h1>Welcome to Our App</h1>
            </div>
            {/* The transform property handles the sliding */}
            <div
                className="slides"
                style={{
                    transform: `translateX(-${currentIndex * 100}vw)`, // Use vw for full viewport width shift
                }}
            >
                {imagePaths.map((path, index) => (
                    <img key={index} src={path} alt={`Slide ${index}`} className="slide-image" />
                ))}
            </div>
        </div>
    );
};

export default SlideScreen;