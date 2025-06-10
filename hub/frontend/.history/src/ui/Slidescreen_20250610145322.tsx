import React, { useEffect, useState } from 'react';
import './Slidescreen.css';

const SlideScreen: React.FC = () => { 
    const [currentIndex, setCurrentIndex] = useState(0);

    const imagePaths: string[] = [
        // Department of Agriculture - Often has photo galleries in their news/press releases
        "https://www.da.gov.ph/wp-content/uploads/2023/10/da_photo_rice_harvest.jpg", // Placeholder, you'll need to browse their actual news/galleries for specific image URLs
        "https://www.da.gov.ph/wp-content/uploads/2023/08/da_photo_farm_training.jpg", // Placeholder
        "https://www.da.gov.ph/wp-content/uploads/2024/02/da_photo_vegetable_farm.jpg", // Placeholder
    
        // Philippine Information Agency (PIA) - Government news agency, good for public domain photos
        "https://pia.gov.ph/photos/file/2023-09-01-rice-field-philippines.jpg", // Example, search PIA's photo releases
        "https://pia.gov.ph/photos/file/2024-01-15-coconuts-farming-philippines.jpg", // Example
    
        // FAO (Food and Agriculture Organization of the United Nations) - Often has public domain photos of their projects
        "https://www.fao.org/philippines/news/detail/en/c/1234567/", // You'll need to navigate their site for direct image links within news or project pages. Look for "Photo Gallery" sections.
        "https://www.fao.org/assets/image/2022/philippines_rice_farmer.jpg", // Placeholder, check their multimedia library
    
        // ADB (Asian Development Bank) - Also features project photos
        "https://www.adb.org/sites/default/files/styles/content_media/public/content-media/502126-philippines-agriculture.jpg", // Example from an ADB article/report
        "https://www.adb.org/sites/default/files/styles/content_media/public/content-media/600742-philippines-farmer.jpg", // Another example
    
        // World Bank - Similar to ADB, often has project-related photos
        "https://www.worldbank.org/en/news/feature/2022/11/22/philippines-agriculture-resilience-project-photo.jpg", // Example from a news feature
        "https://www.worldbank.org/content/dam/photos/780x439/2021/04/philippines-farmers.jpg", // Another example
    
        // Reputable News Outlets (Look for their photo essays or news images)
        // Note: These may be copyrighted. Use with caution and ensure proper attribution or permission if re-hosting.
        // Better to link to the article/photo essay itself.
        "https://www.rappler.com/nation/photos/agriculture-philippines-farming-scenes/", // Example of a photo essay link, not a direct image
        "https://newsinfo.inquirer.net/files/2023/07/rice-fields-philippines.jpg", // Example from an Inquirer article
        "https://www.gmanetwork.com/news/money/economy/photo/photo_gallery_philippine_agriculture_industry.html", // Example of a photo gallery link
    
        // Other potentially useful sources (search within these for images):
        // Flickr (search for "Philippines agriculture" - filter by "Commercial use & mods allowed" or "Public domain")
        // Wikimedia Commons (search for "Agriculture in the Philippines" - generally public domain or Creative Commons)
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Rice_terraces_in_Banaue%2C_Ifugao%2C_Philippines.jpg/1280px-Rice_terraces_in_Banaue%2C_Ifugao%2C_Philippines.jpg", // Banaue Rice Terraces, common public domain image
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Coconut_plantation_in_the_Philippines.jpg/1280px-Coconut_plantation_in_the_Philippines.jpg", // Coconut plantation
    
        // Stock photo sites (Unsplash, Pexels, Pixabay) - Filter by "Philippines agriculture" and check licenses
        // These offer free-to-use images, but attribution is often appreciated.
        "https://images.unsplash.com/photo-1579899385552-4752c4a9b400?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", // Example from Unsplash (search for "Philippines agriculture")
        "https://images.pexels.com/photos/8437937/pexels-photo-8437937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Example from Pexels
        "https://cdn.pixabay.com/photo/2016/11/29/08/33/farmer-1869850_1280.jpg", // Example from Pixabay
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