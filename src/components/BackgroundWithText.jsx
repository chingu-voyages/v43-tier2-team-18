import React from "react";

function BackgroundWithText({ link, height, obj }) {
  return (
    <div
      className={`w-full ${
        height ? "h-[70vh]" : "h-screen"
      } lg:h-screen relative`}
    >
      <img className="min-h-screen w-full object-cover z-0" src={obj.img} />
      <div
        className={`absolute inset-0 text-white flex justify-center items-center bg-gray-400 bg-opacity-30 ${
          link ? "hover:opacity-60 transition-opacity" : "cursor-default"
        } bg-opacity-30 font-bold z-10 xs:text-5xl sm:text-7xl md:text-9xl h-screen`}
      >
        <h1 className="p-8 z-30">{obj.text}</h1>
      </div>
    </div>
  );
}

export default BackgroundWithText;
