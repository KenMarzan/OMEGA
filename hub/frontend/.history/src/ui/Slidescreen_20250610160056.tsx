import React, { useEffect, useState } from 'react';
import './Slidescreen.css';

const SlideScreen: React.FC = () => { 
    const [currentIndex, setCurrentIndex] = useState(0);

    const imagePaths: string[] = [
        "https://miro.medium.com/v2/resize:fit:1400/1*X1mMOf_pijwb-bwbfxcBEw.png",
        "https://eastasiaforum.org/wp-content/uploads/2019/03/2018-04-23T060116Z_636846600_RC14C03D96D0_RTRMADP_3_GLOBAL-AGRICULTURE.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/96/J9020Burol15Balagtasfvf.JPG",
        "https://opecfund.org/var/site/storage/images/_aliases/content/6/4/6/7/1667646-1-eng-GB/3dac31e2bf55-philippines_oq_oct_2015_ss_1088045873.jpg",
        "https://dailyguardian.com.ph/wp-content/uploads/2022/04/pexels-photo-4530779.jpeg"

      ];
      
    useEffect(() => {
        if (imagePaths.length === 0) {
            console.warn("No image paths defined for the slideshow.");
            return;
        }

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (imagePaths.length - 1));
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
                    width: `${imagePaths.length * 100}vw`
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