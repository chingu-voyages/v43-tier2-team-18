import { useState } from "react";
import React from "react";
import logo from "../assets/logo.png";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const Navbar = () => {
  const [isActive, setIsActive] = useState("");

  return (
    <nav className="border-b px-24 py-3 text-slate-800">
      <div className="flex justify-between items-center">
        <div>
          <a href="/">
            <img src={logo} alt="logo" className="w-24" />
          </a>
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

          {/* TOGGLE THEME MODE */}
          <div className="flex gap-5 bg-[#486284] border-2 border-[#325078]  px-3 py-2 rounded-full text-white">
            <span
              className={`cursor-pointer ${
                isActive === "sun" && "text-blue-400"
              }`}
              title="light mode"
              onClick={() => setIsActive("sun")}
            >
              <BsSunFill />
            </span>
            <span
              className={`cursor-pointer ${
                isActive === "moon" && "text-blue-400"
              }`}
              title="dark mode"
              onClick={() => setIsActive("moon")}
            >
              <BsMoonFill />
            </span>
          </div>
        </div>
        <div className="flex gap-2 text-sm">
          <a
            href="#"
            className="border-b-2 border-b-white hover:border-b-2 hover:text-blue-600 hover:border-b-blue-600 py-2 transition duration-150 ease-in-out"
          >
            Login
          </a>
          <a
            href="#"
            className="py-2 px-5 text-gray-100 bg-[#486284] rounded-3xl hover:scale-105 transition duration-100 ease-in-out"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
