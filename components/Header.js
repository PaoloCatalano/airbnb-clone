import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

export default function Header({ placeholder }) {
  const [searchInput, setSearchInput] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [noOfGuests, setNoOfGuests] = React.useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || "Start your search"}
          className="bg-transparent pl-5 outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon
          onClick={search}
          className="hidden md:inline-flex  h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mr-1 "
        />
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-2">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />
          <div className="flex border-b items-center mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              min={1}
              max={26}
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
