import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from ".";

const LayoutRoute = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutRoute;
