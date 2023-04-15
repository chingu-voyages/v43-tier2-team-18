import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="flex items-center justify-center font-Poppins text-black h-[400px] dark:text-white dark:bg-zinc-800 dark:border-b-2 border-gray-700">
      <div className="mx-auto text-center py-12 md:px-36 px-0 bg-gray-200 dark:bg-zinc-800 rounded-lg">
        <h2 className="text-3xl font-bold  sm:text-4xl mt-5">
          <span className="text-zinc-800 dark:text-gray-100">
            Start Your Journey Today
          </span>
        </h2>

        <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-300 w-96 mx-auto">
          Discover new places, meet new people, and create unforgettable
          memories.
        </p>

        <Link
          to="/v43-tier2-team-18/destination"
          className="block mt-4 px-10 button bg-[#486284] text-gray-100 max-w-xs mx-auto"
        >
          <span className="inline-block mx-auto font-semibold">
            Get started
          </span>
        </Link>
      </div>
    </section>
  );
}
