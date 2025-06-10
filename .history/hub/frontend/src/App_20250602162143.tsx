import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'



function App() {

    return (
        <div>
            <Navbar />
            <p>Message: </p>
            <button>Increment Message</button>
        </div>
    );
}

export default App;
