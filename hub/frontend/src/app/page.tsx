"use client";

import React from "react";
import Main from "./main/page";
import Footer from "@/components/Footer";

export default function MainPage(): React.JSX.Element {
  return (
    <div className="flex flex-col">
      <Main />
      <Footer />
    </div>
  );
}
