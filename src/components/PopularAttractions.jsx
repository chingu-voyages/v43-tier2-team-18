import React from "react";
import PopularAttractionsCard from "./PopularAttractionsCard";

function PopularAttractions({ destination }) {
  const toShow = destination.attractions.length > 4;

  return (
    <div className="bg-heroBg bg-cover xs:p-6 md:p-8 md:px-12 lg:px-24">
      <h3 className="text-center font-bold text-4xl lg:text-5xl mb-10 mt-0">
        Popular Attractions
      </h3>
      <div
        className={`w-full flex flex-nowrap gap-8 pb-8 overflow-x-scroll  mt-8 ${
          !toShow ? "xl:hide-scrollbar" : ""
        }`}
      >
        {destination.attractions.map((attraction) => (
          <PopularAttractionsCard
            key={attraction.name}
            attraction={attraction}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularAttractions;
