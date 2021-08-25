import React from "react";
import Image from "next/image";

export default function LargeCard({ img, description, title, buttonText }) {
  return (
    <section className="capitalize relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>

        <button className="capitalize text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:bg-gray-700 active:scale-95">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

//start at 2:11:25
