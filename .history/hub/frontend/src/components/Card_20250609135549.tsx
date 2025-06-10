import React from 'react';

// Define the props interface for your Card component
interface CardProps {
    content: string; // The text content for the card
    imageUrl?: string; // Optional image URL
    linkHref?: string; // Optional link for the button
    title?: string; // Optional card title
}

export default const Card: React.FC<CardProps> = ({
    content,
    imageUrl = 'https://via.placeholder.com/150', // Default image if none provided
    linkHref = '#', // Default link if none provided
    title = 'Card title', // Default title if none provided
}) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imageUrl} className="card-img-top" alt="Card image" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p> {/* Use the content prop here */}
                <a href={linkHref} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};
