import React from "react";
import { HowItWorks, CallToAction, DestinationInfo } from "../components";
import Header from "../components/Header";

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
      {/* <DestinationInfo /> */}
    </div>
  );
};

export default Main;
