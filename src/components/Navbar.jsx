import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

// ICONS
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const navItemStyles = `
  border-l-2 border-l-transparent px-3 ml-3 md:px-0 hover:border-l-blue-600 md:border-l-0  hover:text-blue-600 py-2 transition duration-150 ease-in-out dark:hover:text-blue-300
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: light)");

  // BUILD PERSISTENCE USING LOCAL STORAGE

  function onWindowMatch() {
    if (
      localStorage.isActive === "dark" ||
      (!("isActive" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  onWindowMatch();

  useEffect(() => {
    if (isActive === 'moon') {
      element.classList.add("dark");
      localStorage.setItem("isActive", "dark");
    }

    if (isActive === 'sun') {
      element.classList.remove("dark");
      localStorage.setItem("isActive", "light");
    }

    if (!isActive) localStorage.removeItem('isActive')
  }, [isActive]);

  return (
    <nav className="border-b px-6 md:px-12 lg:px-24 py-3 text-slate-800 dark:text-gray-100 dark:bg-black dark:border-b-slate-600">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="w-20 md:w-24" />
          </Link>
        </div>
        <div
          className={`${
            isOpen ? "grid" : "hidden"
          } z-50 bg-white absolute top-20 left-0 gap-3 md:flex w-full md:w-fit md:static md:gap-8 text-sm  dark:bg-black dark:top-16 dark:pt-5 dark:md:pt-0`}
        >
          <Link
            to="/"
            className={navItemStyles}
          >
            Home
          </Link>
          <Link
            to="/destination"
            className={navItemStyles}
          >
            Explore
          </Link>

          <Link
            to='/destination'
            className={navItemStyles}
          >
            Destination
          </Link>

          <Link
            to="#"
            className={navItemStyles}
          >
            Contact
          </Link>

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
          } gap-3 z-50 bg-white justify-center absolute top-[216px] left-0 w-full md:w-fit md:flex md:static items-center md:gap-2 text-sm dark:bg-black`}
        >
          <Link
            to="#"
            className="border-l-2 border-l-transparent px-3 ml-3 py-2 md:py-0 md:hover:py-2 md:ml-0 pt-5 md:pt-0 md:px-0 hover:border-l-blue-600 md:border-l-0  hover:text-blue-600  transition duration-150 ease-in-out dark:hover:text-blue-300"
          >
            Login
          </Link>
          <Link
            to="#"
            className="px-4 py-2 md:px-5 text-gray-100 bg-[#486284] rounded-3xl hover:translate-y-1 md:hover:translate-y-0 md:hover:scale-105 transition duration-50 ease-in-out w-24 ml-5 md:ml-0 mb-5 md:mb-0"
          >
            Signup
          </Link>
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
