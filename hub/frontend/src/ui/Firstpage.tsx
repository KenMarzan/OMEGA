import React, { useState, useEffect } from "react";
import styles from "./Firstpage.module.css";

const imagePaths: string[] = [
    "https://miro.medium.com/v2/resize:fit:1400/1*X1mMOf_pijwb-bwbfxcBEw.png",
    "https://eastasiaforum.org/wp-content/uploads/2019/03/2018-04-23T060116Z_636846600_RC14C03D96D0_RTRMADP_3_GLOBAL-AGRICULTURE.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/J9020Burol15Balagtasfvf.JPG"
];

export default function Firstpage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);
    const [fadeKey, setFadeKey] = useState(0);

    const messages = [
        "Welcome to Our App",
        "Explore the Features",
        "Click anywhere on the screen to continue"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % imagePaths.length);
            setMessageIndex((prev) => {
                const next = (prev + 1) % messages.length;
                setFadeKey(next);
                return next;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.slideScreen}>
            <div className={styles.slides}
                style={{
                    transform: `translateX(-${currentIndex * 100}vw)`,
                    width: `${imagePaths.length * 100}vw`
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
            <div key={fadeKey} className={`${styles.welcomeMessage} ${styles.fadeText}`}>
                <h1>{messages[messageIndex]}</h1>
            </div>
        </div>
    );
}
