"use client";

import AI_assistant from "./AI-assistant";
import Subheading from "./Subheading";
import Cards from "../../components/Cards";
import Banner from "../../components/Banner";
import WelcomeSection from "./WelcomeSection";

export default function Main(): React.JSX.Element {
  return (
    <div>
      <WelcomeSection />
      <AI_assistant />
      <Subheading />
      <Cards />
      <Banner />
    </div>
  );
}
