import React from "react";
import { HowItWorks, CallToAction } from ".";

const Main = () => {
  return (
    <div className="w-full">
      {/* ----EVERY SECTION ON THE PAGE GOES IN THIS FILE----
        - HEADER,
        - HOW IT WORKS,
        - CALL TO ACTION,
        ...and others (if any) */}
      <HowItWorks />
      <CallToAction />
    </div>
  );
};

export default Main;
