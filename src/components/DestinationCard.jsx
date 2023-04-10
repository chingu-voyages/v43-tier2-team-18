import React from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ destination, index }) => {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div
      className={`${
        index % 4 === 0 ? "lg:col-span-2 lg:row-span-2" : "col-span-1"
      }   rounded shadow-lg bg-white dark:bg-gray-700 cursor-pointer`}
    >
      <Link
        to={`/v43-tier2-team-18/destination/${destination.id}`}
        className="scale-100 hover:scale-110 focus:scale-110   transition duration-150 ease-in-out"
        onClick={scrollToTop}
      >
        <img
          className={`w-full object-cover object-center ${
            index % 4 === 0 ? "lg:h-[88%] xl:h-[90%]" : "lg:h-[75%]"
          } `}
          src={destination.image}
          alt={destination.name}
        />
        <div
          className={`flex justify-between items-baseline px-6 py-4 -pb-4 ${
            index % 4 === 0 ? "lg:-mt-1" : "lg:-mb-5"
          }`}
        >
          <span className={`font-bold text-xl mb-2 `}>{destination.name}</span>
          <div className="text-yellow-500 text-lg pb-2">
            {Array.from({ length: destination.rating }, (_, i) => (
              <span key={i} role="img" aria-label="star">
                ★
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default DestinationCard;
