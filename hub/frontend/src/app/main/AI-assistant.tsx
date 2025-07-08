import { MouseEventHandler } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";

export default function AI_assistant(): React.JSX.Element {
  const tutorial: MouseEventHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (event.currentTarget && event.currentTarget.id === "tutorial") {
      console.log("Clickity1");
    }
    else if (event.currentTarget && event.currentTarget.id === "watch") {
      console.log("Clickity2");
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div>
        <div className="min-h-[60vh] flex flex-row justify-between w-full">
          <div className="w-1/2  flex justify-center items-center flex-col">
            <div className="p-20">
              <div className="mb-4">
                <span className="bg-green-100 text-[#008000] px-3 py-1 rounded-full text-sm font-medium">
                  AI-DE: Smart Agriculture
                </span>
              </div>
              <h1 className="text-[#008000] text-2xl font-bold mb-2">
                Cultivating Life, Harvest by Harvest.
              </h1>
              <h1 className=" text-[#1e1f1ed3] font-black text-6xl mb-4">
                Rooted in Tradition, Growing the Future
              </h1>
              <div className="mb-6">
                <p className="text-[#008000] text-xl font-semibold italic">
                  &quot;Where Artificial Intelligence Meets Agricultural Excellence&quot;
                </p>
              </div>

              <p className="font-quicksand text-gray-700">
                From the fertile soil to your table, we honor time-tested wisdom
                while embracing innovation. Our AI-powered platform connects farmers,
                customers, and government officials, ensuring sustainable practices,
                bountiful harvests, and a healthier planet for generations to come.
                Join us in cultivating a legacy of quality and care.
              </p>
            </div>

            <div className=" flex gap-20 items-center">
              <button className="w-36 h-10 p-1  rounded-3xl bg-[#008000] shadow-md" id = "watch" onClick={tutorial}>
                <h1 className="text-white ">Try our Ai</h1>
              </button>
              <div>
                <button id="tutorial" onClick={tutorial}>Watch the tutorial</button>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex items-center justify-center relative">
                      {/* AI-Powered Insights Card */}
            <div className="w-64 h-24 bg-white shadow-lg rounded-2xl p-4 absolute top-3/12 left-20 border-l-4 border-green-500">
              <p className="text-sm text-gray-600">🤖 AI Insights</p>
              <p className="font-bold text-green-700">Smart crop predictions increased my yield by 35%!</p>
            </div>

            {/* Farmer Testimonial Card */}
            <div className="w-64 h-24 bg-white shadow-lg rounded-2xl p-4 absolute top-5/12 right-16 border-l-4 border-blue-500">
              <p className="text-sm text-gray-600">👨‍🌾 Farmer John M.</p>
              <p className="font-bold text-blue-700">Fresh produce, direct from farm to your table!</p>
            </div>

            {/* Connection Icon */}
            <div className="w-20 h-20 bg-green-100 shadow-md rounded-full p-4 absolute top-8/12 right-32 m-auto flex items-center justify-center">
              <span className="text-green-600 text-2xl">🌾</span>
            </div>

            <div className="w-80 h-36 rounded-2xl p-4 absolute top-3/12 right-5 rotate-140 ">
              <Image src="/arrow.png" alt="" width={320} height={144} />
            </div>

            <Image
              src="/farmer.jpg"
              alt=""
              className="w-[500px]  h-[400px]"
              width={500}
              height={400}
            />
          </div>
        </div>

        <div className="bg-white shadow-md flex flex-row h-32 items-center justify-center mx-20 my-8 rounded-md">
          <div className="border-r-1 flex items-center justify-center flex-col w-1/3 h-[80px]">
            <h1 className="text-[#008000] text-2xl font-bold">500+</h1>
            <h1>Acres Cultivated</h1>
          </div>

          <div className="border-r-1 flex items-center justify-center flex-col w-1/3 h-[80px]">
            <h1 className="text-[#008000] text-2xl font-bold">100K+</h1>
            <h1>LBS Harvested Yearly</h1>
          </div>

          <div className="border-r-1 flex items-center justify-center flex-col w-1/3 h-[80px]">
            <h1 className="text-[#008000] text-2xl font-bold">20+</h1>
            <h1>Farm Products</h1>
          </div>

          <div className="flex items-center justify-center flex-col w-1/3 h-[80px]">
            <h1 className="text-[#008000] text-2xl font-bold">40+</h1>
            <h1>Years Experience</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
