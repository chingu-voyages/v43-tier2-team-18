import React from "react";

const features = [
  {
    title: "Explore",
    text: "Embark on an adventure and uncover the world's hidden gems with our expertly curated travel guides. From breathtaking landscapes to vibrant cultures, explore the wonders of the world like never before.",
    img: "https://images.unsplash.com/photo-1495756650324-e45118cb3e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGFkdmVudHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
  },

  {
    title: "Embrace",
    text: "Immerse yourself in new cultures, try exotic cuisine, and embrace the unknown with our personalized travel experiences. Discover new perspectives and make unforgettable memories that will last a lifetime.",
    img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    flexDir: "flex-row-reverse",
  },
  {
    title: "Discover",
    text: "Unearth the beauty of the world and discover new horizons with our bespoke travel guides. Whether it's a tropical paradise, a bustling city or a remote wilderness, our guides will help you discover the destination of your dreams.",
    img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFyYWRpc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];

function HowItWorks() {
  return (
    <div className="p-8 dark:bg-zinc-800 " id="howItWorks">
      <h2 className="text-center lg:text-5xl xs:text-4xl font-bold text-gray-800 md:mb-16  dark:text-white">
        How it Works
      </h2>
      {features.map((feature) => (
        <div
          key={feature.title}
          className={`text-gray-800 my-8 md:mb-20 md:flex ${
            feature.flexDir ? feature.flexDir : "flex-row"
          } items-center justify-center gap-12 dark:text-white`}
        >
          <div className="text-left lg:w-1/3">
            <h3 className="xs:text-center sm:text-3xl md:text-left lg:text-4xl font-semibold mb-8">
              {feature.title}
            </h3>
            <p className="xs:mb-8 text-lg lg:text-xl text-gray-600 dark:text-white">
              {feature.text}
            </p>
          </div>
          <img
            className="w-full rounded-xl md:w-1/2 lg:w-1/3  lg:h-72 lg:object-cover xl:h-80"
            src={feature.img}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}

export default HowItWorks;
