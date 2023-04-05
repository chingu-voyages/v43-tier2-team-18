import React from "react";

function PopularAttractionsCard({ attraction }) {
  return (
    <div className="relative min-w-[250px] max-w-[300px] text-black text-left border border-transparent rounded-xl bg-white dark:text-white dark:bg-gray-900">
      <img
        className="w-full h-[200px] border-t border-transparent rounded-t-xl"
        src={attraction.images}
      />
      <h4 className="my-2 mx-4 font-semibold  xs:text-lg text-xl">
        {attraction.name}
      </h4>
      <p className="font-light text-sm m-4 mt-0">{attraction.description}</p>
    </div>
  );
}

export default PopularAttractionsCard;
