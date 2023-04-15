import React, { useEffect, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import { Navbar, Footer } from "../components";
import { travelData } from ".././data.js";

const destinations = travelData.map((destination) => destination);

export default function TravelGuide() {
  const [filteredDestinations, setFilteredDestination] = useState(destinations);
  const [filter, setFilter] = useState("");

  const filterDestinations = filter ? filteredDestinations : destinations;

  const destinationCards = filterDestinations.map((destination, index) => (
    <DestinationCard key={destination.id} {...destination} index={index} />
  ));

  const continents = new Set([
    ...travelData.map((destination) => destination.destination.continent),
  ]);

  const continentFilters = Array.from(continents).map((continent) => (
    <>
      <span
        key={continent}
        className={` rounded-xl inline-block text-white py-2 px-4 m-2 lg:text-xl hover:opacity-70 focus:opacity-70 cursor-pointer ${
          filter === continent ? "bg-slate-600" : "bg-emerald-600"
        }`}
        onClick={() => setFilter(continent)}
      >
        {continent}
      </span>
    </>
  ));

  function handleFilterChange() {
    setFilteredDestination(
      travelData.filter(
        (destination) =>
          destination.destination.continent.toLowerCase() ===
          filter.toLowerCase()
      )
    );
  }
  useEffect(() => {
    handleFilterChange();
  }, [filter]);

  return (
    <div>
      <Navbar />

      {/* Destination destinations(JIRA TASK NAME) */}
      <section className="p-8 md:px-12 lg:px-24 bg-gray-100 dark:bg-zinc-800 dark:text-white">
        <h2 className="font-bold text-3xl lg:text-4xl pt-8 pb-8 text-center">
          Popular Destinations
        </h2>
        <div className="mb-6">
          {continentFilters}{" "}
          {filter ? (
            <span
              className="bg-red-400 rounded-xl inline-block text-white py-2 px-4 m-2 lg:text-xl hover:opacity-70 focus:opacity-70 cursor-pointer"
              onClick={() => setFilter("")}
            >
              <span>Clear filter</span>
            </span>
          ) : null}
        </div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 grid-flow-row-dense">
          {destinationCards}
        </div>
      </section>
      <Footer />
    </div>
  );
}
