import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Cart } from "./";

// ICONS
import { BsSunFill, BsMoonFill, BsCart4 } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

// working with redux stores
import { store } from "../app/store";
import { useDispatch } from "react-redux";
import { logoutCurrentUser } from "../features/auth/loginUserSlice";
import { useSelector } from "react-redux";

const navItemStyles = `
  border-l-2 border-l-transparent px-3 ml-3 md:px-0 hover:border-l-blue-600 md:border-l-0  hover:text-blue-600 py-2 transition duration-150 ease-in-out dark:hover:text-blue-300
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [cart, setCart] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: light)");

  // BUILD PERSISTENCE USING LOCAL STORAGE
  function onWindowMatch() {
    if (
      localStorage.isActive === "light" ||
      (!("isActive" in localStorage) && !darkQuery.matches)
    ) {
      element.classList.remove("dark");
    } else {
      element.classList.add("dark");
    }
  }

  onWindowMatch();

  useEffect(() => {
    const isLoggedin = store.getState().auth.loginState.isLoggedIn;
    if (isLoggedin) {
      const currentUser = store.getState().auth.loginState.currentUser;
      setLoggedInUser(currentUser);
      setIsValidated(true);
    }
  }, []);

  useEffect(() => {
    if (isActive === "moon") {
      element.classList.add("dark");
      localStorage.setItem("isActive", "dark");
    }

    if (isActive === "sun" || !localStorage.isActive) {
      element.classList.remove("dark");
      localStorage.setItem("isActive", "light");
    }
  }, [isActive]);

  const itemCount = useSelector((state) => state.auth.favoritesState.itemCount);
  // console.log("ItemsCount:" + itemCount);

  const handleLogout = () => {
    dispatch(logoutCurrentUser());
    setTimeout(() => {
      navigate("/v43-tier2-team-18/");
    }, 100);
  };

  return (
    <nav className="border-b px-6 md:px-12 lg:px-24 py-6 text-slate-800 dark:text-gray-100  dark:bg-black dark:border-b-slate-600">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/v43-tier2-team-18">
            <img src={logo} alt="logo" className="w-20 md:w-24" />
          </Link>
        </div>
        {/* dark:top-16 dark:pt-5 dark:md:pt-0 */}
        <div
          className={`${
            isOpen ? "grid" : "hidden"
          } z-50 bg-white absolute top-20 left-0 gap-3 md:flex w-full md:w-fit md:static md:gap-8 text-sm md:text-lg dark:bg-black `}
        >
          <Link to="/v43-tier2-team-18" className={navItemStyles}>
            Home
          </Link>
          <Link to="/v43-tier2-team-18/destination" className={navItemStyles}>
            Explore
          </Link>

          {/* TOGGLE THEME MODE */}
          <div className="hidden md:flex gap-5 items-center bg-[#486284] border-2 border-[#325078]  px-3 py-2 rounded-full text-white">
            <span
              className={`cursor-pointer ${
                isActive === "sun" && "text-yellow-400"
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

        {/* LOGIN, SIGNUP & CART */}
        <div
          className={`${
            isOpen ? "grid" : "hidden"
          } gap-3 z-50 bg-white justify-start absolute top-[160px] left-0 w-full md:w-fit md:flex md:static items-center md:gap-2 text-sm dark:bg-black md:text-lg`}
        >
          <Link
            to={!isValidated && "/v43-tier2-team-18/login"}
            className="border-l-2 border-l-transparent px-3 ml-3 py-2 md:py-0 md:hover:py-2 md:ml-0 pt-5 md:pt-0 md:px-0 hover:border-l-blue-600 md:border-l-0  hover:text-blue-600  transition duration-150 ease-in-out dark:hover:text-blue-300"
          >
            {!isValidated ? "Login" : loggedInUser}
          </Link>
          <Link
            to={!isValidated && "/v43-tier2-team-18/signup"}
            className="px-6 lg:px-8 py-2 md:px-5 text-gray-100 bg-[#486284] rounded-3xl hover:translate-y-1 md:hover:translate-y-0 md:hover:scale-105 transition duration-50 ease-in-out ml-5 md:ml-4 mb-5 md:mb-0"
            onClick={isValidated && handleLogout}
          >
            {!isValidated ? "Signup" : "Logout"}
          </Link>
          {isValidated && (
            <div
              className="relative text-2xl w-8 cursor-pointer"
              onClick={() => setCart(!cart)}
            >
              <span>
                <BsCart4 />
              </span>
              <span
                className={`${
                  itemCount > 0 && "bg-red-500"
                } flex justify-center items-center absolute top-2 -right-1 text-white rounded-full w-6 h-6 text-sm text-center`}
              >
                {itemCount}
              </span>
            </div>
          )}
        </div>

        {/* FAVORITES CART */}
        {cart && <Cart />}

        {/*--- MOBILE VIEW --- */}

        <div className="flex md:hidden gap-3 items-center">
          {/* TOGGLE THEME MODE FOR MOBILE VIEW*/}
          <div className="flex gap-3 bg-[#486284] border-2 border-[#325078]  px-2 py-1 rounded-full text-white">
            <span
              className={`cursor-pointer ${
                isActive === "sun" && "text-yellow-400"
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
