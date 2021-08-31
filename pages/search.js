import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

export default function Search({ searchResult }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStart = startDate
    ? format(new Date(startDate), "dd MMM yy")
    : "Start";
  const formattedEnd = endDate ? format(new Date(endDate), "dd MMM yy") : "End";

  return (
    <div>
      <Header
        placeholder={`${
          location || "Wherever"
        } | ${formattedStart} - ${formattedEnd}`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays from <span className="font-bold"> {formattedStart}</span>{" "}
            to <span className="font-bold"> {formattedEnd} </span>
            for{" "}
            <span className="text-red-400 font-bold">
              {noOfGuests || 0}
            </span>{" "}
            guest/s
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location?.toUpperCase() || "London"}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flex</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More FIlters</p>
          </div>
          <div className="flex flex-col">
            {searchResult.map(
              (
                { img, location, title, description, star, price, total },
                index
              ) => (
                <InfoCard
                  key={index}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const searchResult = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResult,
    },
  };
}
