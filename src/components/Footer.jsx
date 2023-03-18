import { AiFillHeart } from "react-icons/ai";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="grid grid-cols-3 px-6 md:px-12 lg:px-24 py-3 bg-gray-100">
      <div>
        <a href="/">
          <img src={logo} alt="logo" className="w-24" />
        </a>
      </div>
      <div className="text-center">
        <span className="flex items-center text-sm">
          Made with&nbsp;
          <span className="text-red-600 text-2xl">
            <AiFillHeart />
          </span>
          &nbsp;by team-18 &nbsp;
          <a
            href="https://github.com/chingu-voyages/v43-tier2-team-18"
            className="text-blue-600 font-bold"
          >
            v43-tier2, chingu
          </a>
        </span>
      </div>
      <div className="text-right">
        <span className="text-sm">copyright, 2023. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
