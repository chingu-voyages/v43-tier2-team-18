import React from "react";

function BackgroundWithText({ link, height, obj }) {
  return (
    <div
      className={`w-full ${
        height ? "h-[70vh]" : "h-screen"
      } lg:h-screen relative`}
    >
      <img className="h-screen w-full object-cover z-0" src={obj.image} />
      <div
        className={`absolute inset-0 h-full text-white flex justify-center items-center bg-gray-400 bg-opacity-30 ${
          link ? "hover:opacity-80 transition-opacity" : "cursor-default"
        } bg-opacity-30 font-bold z-10 xs:text-5xl sm:text-7xl md:text-9xl h-screen md:px-12 lg:px-24`}
      >
        <h1 className="xs:p-8 md:p-0 z-30">
          {link ? "" : "Destination"} {obj.name}
        </h1>
      </div>
    </div>
  );
}

export default BackgroundWithText;
