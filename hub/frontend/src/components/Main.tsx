import AI_assistant from "./Main-content/AI-assistant";
import Market_analysis from "./Main-content/Market-analysis";
import Learning_hub from "./Main-content/Learning-hub";
import Subheading from "@/app/Market_analysis/Subheading";
import Cards from "./Cards";
import Banner from "./Banner";

export default function Main(): React.JSX.Element {
  return (
    <div>
      <AI_assistant />
      <Market_analysis />
      <Subheading />
      <Cards />
      <Banner />
    </div>
  );
}
