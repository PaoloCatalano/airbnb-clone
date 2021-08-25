import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center border-2 rounded-full py-2 md:border-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="bg-transparent pl-5 outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex  h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mr-1 " />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end text-gray-500 space-x-2">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
//https://youtu.be/BbilqOBOfg8?list=PLf16UKl7nR5AOGvcX_WtjqXMge-a1B1Lo&t=2275