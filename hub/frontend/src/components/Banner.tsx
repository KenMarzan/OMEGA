import React from "react";

export default function FarmersBanner() {
  const imageUrl =
    "https://media.licdn.com/dms/image/v2/C4D03AQHKhXkwlry9UQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655316407125?e=2147483647&v=beta&t=4BdyGzR_3Qf6O1fYauh552uPLqUhdQ94v5NFmq7HUI0"; // Updated image filename
  const greenColor = "#008000";

  return (
    <div className="relative w-full overflow-hidden rounded-md p-20 ">
      <div className="relative w-full h-auto min-h-[250px] flex items-center p-0 lg:min-h-[300px] rounded-md ">
        <img
          src={imageUrl}
          alt="Farmers and community members celebrating a successful agricultural initiative"
          className="absolute inset-0 w-full h-full object-cover object-right z-0"
        />

        <div
          className="absolute inset-0 z-0 rounded-md"
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${greenColor} 2%, ${greenColor} 40%, transparent 70%, transparent 80%)`,
          }}
        ></div>

        <div className="relative z-10 w-full md:w-1/2 lg:w-2/5 xl:w-1/2 flex flex-col justify-center text-white px-6 md:px-12 py-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Empowering Farmers, <br /> Cultivating Futures
          </h2>
          <p className="text-base md:text-lg mb-6 leading-relaxed">
            Every seed counts. Support our farmers today and become a part of a
            real, sustainable change in agriculture.
          </p>
          <button className="bg-[#FFD700] text-[#008000] font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#FFC400] transition duration-300 self-start">
            Support Our Farmers Now
          </button>
        </div>
      </div>
    </div>
  );
}
