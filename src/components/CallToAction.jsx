import React from "react";

export default function CallToAction() {
  return (
    <section class="bg-hotAir bg-gray-300 bg-blend-multiply bg-cover bg-center font-Poppins">
      <div class="max-w-2xl mx-auto text-center py-12 px-4">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          <span class="block">Start Your Journey Today.</span>
        </h2>

        <p class="mt-4 text-lg leading-6 text-white font-extrabold">
          Discover new places, meet new people, and create unforgettable
          memories.
        </p>

        <a
          href="#"
          class="min-w-[150px] max-w-[300px] mx-auto mt-8 text-md flex items-center justify-center
        px-5 py-3 font-medium  rounded-md text-indigo-600 bg-white sm:justify-between sm:inline-flex sm:mr-2 hover:opacity-70 focus:opacity-70"
        >
          <span className="inline-block mx-auto">Explore</span>
        </a>

        <a
          href="#"
          class="min-w-[150px] max-w-[300px] mx-auto mt-8 text-md flex items-center justify-center
        px-5 py-3 font-medium  rounded-md text-indigo-600 bg-white sm:justify-between sm:inline-flex sm:mr-2 hover:opacity-70 focus:opacity-70"
        >
          <span className="inline-block mx-auto">Get started</span>
        </a>

        <a
          href="#"
          class="min-w-[150px] max-w-[300px] mx-auto mt-8 text-md flex items-center justify-center
        px-5 py-3 font-medium  rounded-md text-indigo-600 bg-white sm:justify-between sm:inline-flex hover:opacity-70 focus:opacity-70"
        >
          <span className="inline-block mx-auto">Learn more</span>
        </a>
      </div>
    </section>
  );
}
