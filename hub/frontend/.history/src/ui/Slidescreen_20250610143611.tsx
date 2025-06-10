import React, { useEffect, useState } from 'react';
import ''

const SlideScreen: React.FC = () => { 
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagePaths: string[] = [
        'https://picsum.photos/800/600?random=1', // A random image 800x600 from Lorem Picsum
        'https://picsum.photos/800/600?random=2', // Another random image
        'https://source.unsplash.com/random/800x600?nature', // Random nature image from Unsplash
        'https://source.unsplash.com/random/800x600?city',   // Random city image from Unsplash
        'https://dummyimage.com/800x600/000/fff&text=Slide+5', // A plain black image with white text
        // You can add more public image URLs here
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
                <p>No slideshow images available.</p>
            </div>
        );
    }

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