import AI_assistant from "./Main-content/AI-assistant";
import Subheading from "@/app/Market_analysis/Subheading";
import Cards from "./Cards";
import Banner from "./Banner";

export default function Main(): React.JSX.Element {
  return (
    <div>
      <AI_assistant />
      <Subheading />
      <Cards />
      <Banner />
    </div>
  );
}
