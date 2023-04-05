import React from "react";

const DestinationCard = ({ destination, index }) => {
  // console.log(props);
  return (
    <div
      className={`${
        index == 0 ? "lg:col-span-2" : "col-span-1"
      }   rounded shadow-lg bg-white cursor-pointer`}
    >
      <img
        className="w-full h-48 object-cover object-center"
        src={destination.image}
        alt={destination.name}
      />
      <div className=" flex justify-between items-center px-6 py-4 dark:bg-gray-700 ">
        <div className="font-bold text-xl mb-2 ">{destination.name}</div>
        <div className="text-yellow-500 text-lg pb-2">
          {Array.from({ length: destination.rating }, (_, i) => (
            <span key={i} role="img" aria-label="star">
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DestinationCard;
