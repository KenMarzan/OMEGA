import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [message, messageChange] = useState();

    function messageChange(){
        message = message + 1;
    }
    return {

    };
}

export default App;
