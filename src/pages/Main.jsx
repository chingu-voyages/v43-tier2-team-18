import React from "react";
import {
  Header,
  HowItWorks,
  CallToAction,
  LandingPageCarousal,
} from "../components";

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
      <LandingPageCarousal />
      <CallToAction />
    </div>
  );
};

export default Main;
