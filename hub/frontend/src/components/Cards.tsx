import React from "react";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    imageSrc:
      "https://media.licdn.com/dms/image/v2/C4D03AQHKhXkwlry9UQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655316407125?e=2147483647&v=beta&t=4BdyGzR_3Qf6O1fYauh552uPLqUhdQ94v5NFmq7HUI0",
    title: "Fresh Farm Produce",
    location: "Philippines",
    origin: "Laguna",
    price: "₱ 8,000",
  },
  {
    id: 2,
    imageSrc:
      "https://media.licdn.com/dms/image/v2/C4D03AQHKhXkwlry9UQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655316407125?e=2147483647&v=beta&t=4BdyGzR_3Qf6O1fYauh552uPLqUhdQ94v5NFmq7HUI0",
    title: "Organic Rice Harvest",
    location: "Philippines",
    origin: "Isabela",
    price: "₱ 5,500",
  },
  {
    id: 3,
    imageSrc:
      "https://media.licdn.com/dms/image/v2/C4D03AQHKhXkwlry9UQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655316407125?e=2147483647&v=beta&t=4BdyGzR_3Qf6O1fYauh552uPLqUhdQ94v5NFmq7HUI0",
    title: "Artisanal Coffee Beans",
    location: "Philippines",
    origin: "Batangas",
    price: "₱ 12,000",
  },
];

interface CardProps {
  imageSrc: string;
  title: string;
  location: string;
  origin: string;
  price: string;
}

function Card({ imageSrc, title, location, origin, price }: CardProps) {
  return (
    <div className="w-56 shadow-md h-64 flex flex-col rounded-lg overflow-hidden border border-gray-200">
      <div className="relative w-full h-1/2">
        <Image src={imageSrc} alt={title} className="object-cover" fill sizes="(max-width: 768px) 100vw, 224px" />
      </div>

      <div className="p-3 flex-grow flex flex-col justify-between">
        {" "}
        <h1 className="text-lg font-semibold text-gray-800 mb-1">
          {title}
        </h1>{" "}
        <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
          {" "}
          <span className="font-medium">Location:</span>
          <span>{location}</span>
        </div>
        <div>
          <div className="w-full h-1 bg-[#008000] my-2"></div>
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-sm text-gray-700">{origin}</h1>
            <h1 className="text-[#008000] font-bold text-lg">{price}</h1>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-5">
      <div className="flex-row justify-center gap-10 flex">
        {cardData.map((card) => (
          <Card
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
            location={card.location}
            origin={card.origin}
            price={card.price}
          />
        ))}
      </div>

      <button className="w-48 h-10 bg-[#008000] text-white rounded-full">
        Lets gooooo
      </button>
    </div>
  );
}

export default Cards;
