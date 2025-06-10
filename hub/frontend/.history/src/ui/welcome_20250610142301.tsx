import React, { useEffect, useState } from 'react';
import './welcome.css'; // Add styles for fullscreen and sliding animations

interface SlideScreenProps {
    imagePaths: string[];
}

const SlideScreen: React.FC<SlideScreenProps> = ({ imagePaths }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, [imagePaths]);

    return (
        <div className="slide-screen">
            <div className="welcome-message">
                <h1>Welcome to Our App</h1>
            </div>
            <div
                className="slides"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    width: `${imagePaths.length * 100}%`,
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