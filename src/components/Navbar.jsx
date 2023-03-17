import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

// ICONS
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");

  const element = document.documentElement;

  useEffect(() => {
    switch (isActive) {
      case "moon":
        element.classList.add("dark");
        localStorage.setItem("isActive", "dark");
        break;
      case "sun":
        element.classList.remove("dark");
        localStorage.setItem("isActive", "light");
        break;
      default:
        localStorage.removeItem("isActive");
        break;
    }
  }, [isActive]);

  return (
    <nav className="border-b px-6 md:px-12 lg:px-24 py-3 text-slate-800">
      <div className="flex justify-between items-center">
        <div>
          <a href="/">
            <img src={logo} alt="logo" className="w-20 md:w-24" />
          </a>
        </div>
        <div
          className={`${
            isOpen ? "grid" : "hidden"
          } absolute top-20 gap-3 md:flex md:static md:gap-8 text-sm`}
        >
          <a
            href="#"
            className="border-l-2 border-l-white pl-2 md:pl-0 hover:border-l-blue-600 md:border-l-0 border-b-2 border-b-white hover:border-b-2 hover:text-blue-600 md:hover:border-b-blue-600 py-2 transition duration-150 ease-in-out"
          >
            Home
          </a>
          <a
            href="#"
            className="border-l-2 border-l-white pl-2 md:pl-0 hover:border-l-blue-600 md:border-l-0 border-b-2 border-b-white hover:border-b-2 hover:text-blue-600 md:hover:border-b-blue-600 py-2 transition duration-150 ease-in-out"
          >
            Explore
          </a>
          <a
            href="#"
            className="border-l-2 border-l-white pl-2 md:pl-0 hover:border-l-blue-600 md:border-l-0 border-b-2 border-b-white hover:border-b-2 hover:text-blue-600 md:hover:border-b-blue-600 py-2 transition duration-150 ease-in-out"
          >
            Contact
          </a>

          {/* TOGGLE THEME MODE */}
          <div className="hidden md:flex gap-5 bg-[#486284] border-2 border-[#325078]  px-3 py-2 rounded-full text-white">
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

        {/* LOGIN & SIGNUP */}
        <div
          className={`${
            isOpen ? "grid" : "hidden"
          } gap-3 absolute top-[229px] md:flex md:static items-center md:gap-2 text-sm`}
        >
          <a
            href="#"
            className="border-l-2 border-l-white pl-2 md:pl-0 hover:border-l-blue-600 md:border-l-0 border-b-2 border-b-white hover:border-b-2 hover:text-blue-600 md:hover:border-b-blue-600 py-2 transition duration-150 ease-in-out"
          >
            Login
          </a>
          <a
            href="#"
            className="px-4 py-2 md:px-5 text-gray-100 bg-[#486284] rounded-3xl hover:translate-y-1 md:hover:translate-y-0 md:hover:scale-105 transition duration-50 ease-in-out"
          >
            Signup
          </a>
        </div>

        {/*--- MOBILE VIEW --- */}

        <div className="flex md:hidden gap-3 items-center">
          {/* TOGGLE THEME MODE FOR MOBILE VIEW*/}
          <div className="flex gap-3 bg-[#486284] border-2 border-[#325078]  px-2 py-1 rounded-full text-white">
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

          {/* HARMBUGER MENU */}
          <div
            className="md:hidden text-2xl text-[#486284] items-baseline py-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <AiOutlineClose /> : <FiMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
