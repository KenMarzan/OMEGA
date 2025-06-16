import { useState } from "react";
import React from "react";

export default function MarketAnalysis(): React.JSX.Element {
  const [currentContent, setCurrentContent] = useState(0);

  const handleNextContent = () => {
    setCurrentContent((prevContent) => (prevContent + 1) % 3);
  };

  let contentToDisplay: React.JSX.Element | null;
  switch (currentContent) {
    case 0:
      contentToDisplay = (
        <div id="stocks">
          <img
            src="https://b83eeb945e2915539af8.ucr.io/-/quality/best/https://d1qwl4ymp6qhug.cloudfront.net/Images%20for%20blog/Market%20Analysis%20Examples/market-analysis-examples-1.jpg"
            alt=""
          />
        </div>
      );
      break;
    case 1:
      contentToDisplay = (
        <div id="Popular-products">
          This is where the pictures of popular products are
        </div>
      );
      break;
    case 2:
      contentToDisplay = <div id="Supply-demand">Here is for supply</div>;
      break;
    default:
      contentToDisplay = null;
      break;
  }

  return (
    <div className="Market-analysis">
      {contentToDisplay}
      <button onClick={handleNextContent}>Next Content</button>
    </div>
  );
}
