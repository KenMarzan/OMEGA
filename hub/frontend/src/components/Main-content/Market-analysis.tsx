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
          {/* <img
            src="https://b83eeb945e2915539af8.ucr.io/-/quality/best/https://d1qwl4ymp6qhug.cloudfront.net/Images%20for%20blog/Market%20Analysis%20Examples/market-analysis-examples-1.jpg"
            alt=""
          /> */}
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
  }

  return (
    <div className="h-46 bg-white shadow-md flex flex-row items-center justify-center gap-20  m-20 p-20">
      <div className="w-1/4">
        <h1 className="text-[#008000] font-bold text-xl">
          Aquaculture Program
        </h1>
        <h1 className="font-bold text-xl ">LBS Harvested Yearly</h1>
        <br />
        <p>
          Focuses on sustainable fish farming techniques, aiming to maximize
          yield while minimizing environmental impact.
        </p>
      </div>

      <div className="w-1/4">
        <h1 className="text-[#008000] font-bold text-xl">
          Agricultural Yield Initiative
        </h1>
        <h1 className="font-bold text-xl ">Tons Produced Annually</h1>

        <br />
        <p>
          Dedicated to enhancing crop production through advanced farming
          methods and organic fertilizers.
        </p>
      </div>

      <div className="w-1/4">
        <h1 className="text-[#008000] font-bold text-xl">
          Livestock Development
        </h1>

        <h1 className="font-bold text-xl ">Heads Supported</h1>

        <br />

        <p>
          Provides support and resources for ethical and efficient livestock
          rearing.
        </p>
      </div>

      <div className="w-1/4">
        <h1 className="text-[#008000] font-bold text-xl">Community Outreach</h1>
        <h1 className="font-bold text-xl ">Families Benefited</h1>

        <p>
          Engages with local communities to provide training, resources, and
          support for agricultural and aquacultural projects.
        </p>
      </div>
    </div>
  );
}
