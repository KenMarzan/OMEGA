import React, { useState, useEffect } from "react";
import styles from "./Firstpage.module.css"; // adjust as needed

const imagePaths = ["/img1.jpg", "/img2.jpg", "/img3.jpg"]; // <-- define this

export default function Firstpage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);
    const messages = ["Welcome to Our App", "Explore the Features"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % imagePaths.length);
            setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const currentMessage = messages[messageIndex];

    if (imagePaths.length === 0) {
        return (
            <div className={styles.slideScreen}>
                <div className={styles.welcomeMessage}>
                    <h1>{currentMessage}</h1>
                    <p>No slideshow images available.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.slideScreen}>
            <div className={styles.welcomeMessage}>
                <h1>{currentMessage}</h1>
            </div>
            <div
                className={styles.slides}
                style={{
                    transform: `translateX(-${currentIndex * 100}vw)`,
                    width: `${imagePaths.length * 100}vw`,
                }}
            >
                {imagePaths.map((path, index) => (
                    <img
                        key={index}
                        src={path}
                        alt={`Slide ${index}`}
                        className={styles.slideImage}
                    />
                ))}
            </div>
        </div>
    );
}
