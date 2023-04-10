import React from "react";
import DestinationCard from "../components/DestinationCard";
import { Navbar, Footer } from "../components";
import { travelData } from ".././data.js";

export default function TravelGuide() {
  const destinationCards = travelData.map((destination, index) => (
    <DestinationCard key={destination.id} {...destination} index={index} />
  ));
  return (
    <div>
      <Navbar />
      {/* Popular Destinations(JIRA TASK NAME) */}

      {/* Destination destinations(JIRA TASK NAME) */}
      <section className="p-8 md:px-12 lg:px-24 dark:bg-black dark:text-white">
        <h2 className="font-bold text-3xl lg:text-4xl pt-8 pb-8 text-center">
          Popular Destinations
        </h2>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 grid-flow-row-dense">
          {destinationCards}
        </div>
      </section>
      <Footer />
    </div>
  );
}
