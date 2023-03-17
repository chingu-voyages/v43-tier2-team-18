import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="border-b px-24 py-3 text-slate-800">
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" className="w-24" />
        </div>
        <div className="flex gap-8 text-sm">
          <a
            href="#"
            className="border-b-2 border-b-white hover:border-b-2 hover:text-blue-600 hover:border-b-blue-600 py-2 transition duration-150 ease-in-out"
          >
            Home
          </a>
          <a
            href="#"
            className="border-b-2 border-b-white hover:border-b-2 hover:text-blue-600 hover:border-b-blue-600 py-2 transition duration-150 ease-in-out"
          >
            Explore
          </a>
          <a
            href="#"
            className="border-b-2 border-b-white hover:border-b-2 hover:text-blue-600 hover:border-b-blue-600 py-2 transition duration-150 ease-in-out"
          >
            Contact
          </a>
          <a
            href="#"
            className="border-b-2 border-b-white hover:border-b-2 hover:text-blue-600 hover:border-b-blue-600 py-2 transition duration-150 ease-in-out"
          >
            Login
          </a>
          <a
            href="#"
            className="py-2 px-5 text-gray-100 bg-[#486284] rounded-3xl"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
