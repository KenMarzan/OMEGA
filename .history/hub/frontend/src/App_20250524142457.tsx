import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [message, setMessage] = useState(0);

    function incrementMessage() {
        setMessage(message + 1);
    }

    return (
        <div>
            <p>Message: {message}</p>
            <button onClick={incrementMessage}>Increment Message</button>
        </div>
    );
}

export default App;
