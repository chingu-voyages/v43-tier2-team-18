import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-heroBg bg-cover xs:px-6 md:px-12 lg:px-24 bg-zinc-600 bg-blend-overlay w-full h-screen">
      <div className="z-20 flex flex-col justify-center items-start gap-8 max-w-3xl w-full h-screen">
        <h1 className="xs:text-center sm:text-left text-shadow xs:text-[45px] sm:text-6xl text-7xl lg:text-8xl font-bold text-white">
          Experience the adventure of a lifetime
        </h1>
        <p className="xs:text-center sm:text-left xs:text-xl text-2xl text-white text-shadow font-semibold md:w-[520px]">
          Indulge in the beauty of the world and discover hidden treasures with
          our curated travel guides.
        </p>
        <div className="flex gap-7 justify-center w-full items-stretch xs:flex-col md:flex-row max-w-xl">
          <Link
            to="/v43-tier2-team-18/destination"
            className="font-semibold px-10 button bg-[#486284] text-white"
          >
            Get started
          </Link>
          <a
            href="/v43-tier2-team-18/#howItWorks"
            className="font-semibold px-10 button bg-white"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
