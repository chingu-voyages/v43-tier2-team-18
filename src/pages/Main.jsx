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
      <Header />
      <HowItWorks />
      <LandingPageCarousal />
      <CallToAction />
    </div>
  );
};

export default Main;
