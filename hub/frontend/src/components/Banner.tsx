import React from "react";
import Image from "next/image";

export default function FarmersBanner() {
  const imageUrl =
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=600&fit=crop&crop=center"; // Philippine farmer in rice field
  const greenColor = "#008000";

  return (
    <div className="relative w-full overflow-hidden rounded-xl p-6 lg:p-8">
      <div className="relative w-full h-auto min-h-[300px] flex items-center lg:min-h-[400px] rounded-xl shadow-2xl overflow-hidden">
        <Image
          src={imageUrl}
          alt="Filipino farmers working in rice fields, showcasing agricultural excellence"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          fill
          sizes="100vw"
          priority
        />

        <div
          className="absolute inset-0 z-10 rounded-xl"
          style={{
            backgroundImage: `linear-gradient(135deg, ${greenColor}CC 0%, ${greenColor}99 30%, transparent 60%, transparent 100%)`,
          }}
        ></div>

        <div className="relative z-20 w-full md:w-1/2 lg:w-2/5 xl:w-1/2 flex flex-col justify-center text-white px-8 md:px-12 py-8">
          <div className="mb-4">
            <span className="inline-block bg-yellow-400 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🌾 Philippine Agriculture
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Empowering Farmers,
            <br />
            <span className="text-yellow-300">Cultivating Futures</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-100">
            Supporting Filipino farmers with modern technology and sustainable
            practices. Join us in transforming Philippine agriculture for a
            better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-800 font-bold py-4 px-8 rounded-full shadow-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105">
              Support Our Farmers
            </button>
            <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-green-800 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
