import React from "react";
import { HowItWorks, CallToAction } from ".";
import Header from "./Header";

const Main = () => {
  return (
    <div className="w-full">
      {/* ----EVERY SECTION ON THE PAGE GOES IN THIS FILE----
        - HEADER,
        - HOW IT WORKS,
        - CALL TO ACTION,
        ...and others (if any) */}
      <Header />
      <HowItWorks />
      <CallToAction />
    </div>
  );
};

export default Main;
