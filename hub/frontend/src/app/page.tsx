"use client"; 

import React, { useState, useEffect } from "react";
import Main from "../components/Main";
import Navbar from "@/components/Navbar";


export default function MainPage(): React.JSX.Element {

  return(
    <div id = "Main-page">
        <Navbar/>
        <Main/> 
    </div>
  );
}