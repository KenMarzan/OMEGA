"use client";

import React   from "react";
import Main from "./Main/page";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainPage(): React.JSX.Element {
  
  return (
    <div className="flex flex-col ">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
