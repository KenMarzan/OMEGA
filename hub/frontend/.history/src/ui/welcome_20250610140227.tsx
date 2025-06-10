import React, { useEffect, useState } from 'react';

const WelcomeSlideshow: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState<string[]>([
        '/images/picture1.jpg',
        '/images/picture2.jpg',
        '/images/picture3.jpg',
        '/images/picture4.jpg',
        // Add more images as needed
    ]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/images', { method: 'GET' });
                const imageList = await response.json();
                setImages(imageList);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    transition: 'transform 1s ease-in-out',
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
                    />
                ))}
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '10%',
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '2rem',
                    color: 'white',
                    textShadow: '0px 0px 10px rgba(0, 0, 0, 0.7)',
                    zIndex: 1,
                }}
            >
                Welcome to Our Website
            </div>
        </div>
    );
};

export default WelcomeSlideshow;