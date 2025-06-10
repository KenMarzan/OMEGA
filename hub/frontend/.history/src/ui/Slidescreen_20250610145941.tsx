import React, { useEffect, useState } from 'react';
import './Slidescreen.css';

const SlideScreen: React.FC = () => { 
    const [currentIndex, setCurrentIndex] = useState(0);

    const imagePaths: string[] = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWdQGsA2KZpQSdb4BbYoUDpCFEw7Y2HaTucw&s",
        "https://miro.medium.com/v2/resize:fit:1400/1*X1mMOf_pijwb-bwbfxcBEw.png"
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
                    transform: `translateX(-${currentIndex * 100}vw)`,
                    width: `${imagePaths.length * 100}vw`, // ADD THIS LINE
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