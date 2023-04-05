import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="font-Poppins text-black h-[400px] dark:text-white dark:bg-black dark:border-b-2 border-gray-700">
      <div className="max-w-2xl mx-auto text-center py-12 px-4">
        <h2 className="text-3xl font-extrabold  sm:text-4xl mt-14">
          <span className="block">Start Your Journey Today.</span>
        </h2>

        <p className="mt-4 text-lg leading-6 font-extrabold">
          Discover new places, meet new people, and create unforgettable
          memories.
        </p>

        <Link
          to="/destination"
          className="block mt-8 px-10 button bg-[#486284] text-white max-w-xl mx-auto"
        >
          <span className="inline-block mx-auto">Get started</span>
        </Link>
      </div>
    </section>
  );
}
