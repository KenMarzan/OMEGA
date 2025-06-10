import React, { useEffect, useState } from 'react';
import styles from './Firstpage.module.css';

const imagePaths: string[] = [
    "https://miro.medium.com/v2/resize:fit:1400/1*X1mMOf_pijwb-bwbfxcBEw.png",
    "https://eastasiaforum.org/wp-content/uploads/2019/03/2018-04-23T060116Z_636846600_RC14C03D96D0_RTRMADP_3_GLOBAL-AGRICULTURE.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/J9020Burol15Balagtasfvf.JPG",
    "https://opecfund.org/var/site/storage/images/_aliases/content/6/4/6/7/1667646-1-eng-GB/3dac31e2bf55-philippines_oq_oct_2015_ss_1088045873.jpg",
    "https://dailyguardian.com.ph/wp-content/uploads/2022/04/pexels-photo-4530779.jpeg"
];

export default function Firstpage(){
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval: number | NodeJS.Timeout = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const    
    },);

    if (imagePaths.length === 0) {
        return (
            <div className={styles.slideScreen}>
                <div className={styles.welcomeMessage}>
                    <h1>Welcome to Our App</h1>
                    <p>No slideshow images available.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.slideScreen}>
            <div className={styles.welcomeMessage}>
                <h1>Welcome to Our App</h1>
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
};
