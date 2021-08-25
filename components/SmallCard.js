import React from "react";
import Image from "next/image";

export default function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      <div>
        <h4>{location}</h4>
        <h4 className="text-gray-500">{distance}</h4>
      </div>
    </div>
  );
}
