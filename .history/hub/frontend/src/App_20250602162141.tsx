import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';


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
