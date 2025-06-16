import AI_assistant from "./Main-content/AI-assistant";
import Market_analysis from "./Main-content/Market-analysis";
import Learning_hub from "./Main-content/Learning-hub";

export default function Main(): React.JSX.Element {
  return (
    <div id="Main-content">
      <AI_assistant />
      <Market_analysis />
      <Learning_hub />
    </div>
  );
}
