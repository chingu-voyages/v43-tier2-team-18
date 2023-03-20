import { AiFillHeart } from "react-icons/ai";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-12 lg:px-24 py-3 bg-gray-100 dark:bg-black dark:text-gray-100">
      <div>
        <a href="/">
          <img src={logo} alt="logo" className="w-24" />
        </a>
      </div>
      <div className="md:text-right lg:text-center">
        <span className="flex items-center text-sm float-right">
          Made with&nbsp;
          <span className="text-red-600 text-2xl">
            <AiFillHeart />
          </span>
          &nbsp;by &nbsp;
          <a
            href="https://github.com/chingu-voyages/v43-tier2-team-18"
            className="text-blue-600 font-bold"
          >
            v43-tier2-team-18
          </a>
        </span>
      </div>
      <div className="md:text-left lg:text-right">
        <span className="text-sm">copyright, 2023. All rights reserved.</span>
      </div>
    </footer>
  );
  
};

export default Footer;
