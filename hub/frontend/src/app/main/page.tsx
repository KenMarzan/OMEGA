"use client";

import AI_assistant from "./AI-assistant";
import Subheading from "./Subheading";
import Cards from "../../components/Cards";
import Banner from "../../components/Banner";
import WelcomeSection from "./WelcomeSection";
import { useAuth } from "@/contexts/AuthContext";

export default function Main(): React.JSX.Element {
  const { isLoggedIn } = useAuth();

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
