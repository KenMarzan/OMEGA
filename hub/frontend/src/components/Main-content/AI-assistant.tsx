import { KeyboardEventHandler, MouseEventHandler, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function AI_assistant(): React.JSX.Element {
  const enter: KeyboardEventHandler = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key == "Enter") {
      if (!event.shiftKey) {
        event.preventDefault();
        console.log("Enter is working");
        const ai = document.getElementById(
          "prompt"
        ) as HTMLTextAreaElement | null;
        const form = document.getElementById(
          "prompt-box"
        ) as HTMLFormElement | null;
        if (ai && form) {
          const temp: string = ai.style.backgroundColor;
          ai.style.backgroundColor = "green";
          form.style.transform = "translate()";
          setTimeout(() => {
            ai.style.backgroundColor = temp;
          }, 1000);
        }
      }
    }
  };
  const click: MouseEventHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (event.currentTarget) {
      console.log("Clickity");
    }
  };

  return (
    <div className=" h-screen flex flex-col justify-between  w-full">
      <div>
        <div className="h-[60vh] flex flex-row justify-between  w-full">
          <div className="w-1/2  flex justify-center items-center flex-col">
            <div className="p-20">
              <h1 className="text-[#008000] text-2xl font-bold">
                Cultivating Life, Harvest by Harvest.
              </h1>
              <h1 className=" text-[#1e1f1ed3] font-black text-6xl mb-6">
                Rooted in Tradition, Growing the Future
              </h1>

              <p className="font-quicksand">
                From the fertile soil to your table, we honor time-tested wisdom
                while embracing innovation. Our commitment to sustainable
                practices ensures bountiful harvests and a healthier planet for
                generations to come. Join us in cultivating a legacy of quality
                and care.
              </p>
            </div>

            <div className=" flex gap-20 items-center">
              <button className="w-36 h-10 p-1  rounded-3xl bg-[#008000] shadow-md">
                <h1 className="text-white ">Try our Ai</h1>
              </button>
              <div>
                <button>Watch the tutorial</button>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex items-center justify-center relative">
            <div className="w-56 h-20 bg-white shadow-md rounded-2xl p-4 absolute top-3/12 left-26">
              <p>Masarap at mura</p>
              <p className="font-bold">Cheap and affordable</p>
            </div>

            <div className="w-56 h-20 bg-white shadow-md rounded-2xl p-4 absolute top-5/12 right-16">
              <p>Masarap at mura</p>
              <p className="font-bold">Cheap and affordable</p>
            </div>

            <div className="w-20 h-20 bg-white shadow-md rounded-full p-4 absolute top-8/12 right-32 m-auto">
              <h1>
                <i className="bi bi-telephone-forward-fill">P</i>
              </h1>
            </div>

            <div className="w-80 h-0 mt-[-100px] rounded-2xl p-4 absolute top-0  rotate-0 ">
              <img src="/bunny.png" alt="" />
            </div>
            <div className="w-80 h-36 rounded-2xl p-4 absolute top-3/12 right-5 rotate-140 ">
              <img src="/arrow.png" alt="" />
            </div>

            <img
              src="https://media.licdn.com/dms/image/v2/C4D03AQHKhXkwlry9UQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655316407125?e=2147483647&v=beta&t=4BdyGzR_3Qf6O1fYauh552uPLqUhdQ94v5NFmq7HUI0"
              alt=""
              className="w-[500px]  h-[400px]"
            />
          </div>
        </div>

        <div className="bg-white shadow-md flex flex-row h-32 items-center justify-center m-20 rounded-md">
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
