import GoogleLogo from "../assets/Google.svg";
import YouTubeLogo from "../assets/YouTube.svg";
import FacebookLogo from "../assets/Facebook.svg";
import ImagePlaceholder from "../assets/placeholderImage.png";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between text-left p-6 xl:p-20">
      <div className="md:w-2/5 flex flex-col justify-between gap-5 md:max-w-md">
        <h1 className="text-black text-3xl lg:text-6xl ">
          Experience the adventure of a lifetime
        </h1>
        <p className="text-black text-base font-normal">
          Indulge in the beauty of the world and discover hidden treasures with
          our curated travel guides
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:w-80 lg:w-96">
          <button className="button bg-[#486284] text-white">
            Get started
          </button>
          <button className="button border-2 border-[##486284] text-[#486284]">
            Learn more
          </button>
        </div>
        <p className="text-[#9CB0C9] font-medium mb-5 md:mt-8 md:mb-0">
          Trusted by:
        </p>
      </div>
      <div className="flex flex-col md:flex-col-reverse items-center md:items-end lg:w-2/5">
        <div className="flex justify-between gap-6 w-full">
          <img src={GoogleLogo} alt="Google logo" className="lg:h-8" />
          <img src={YouTubeLogo} alt="YouTube logo" className="lg:h-8" />
          <img src={FacebookLogo} alt="Facebook logo" className="lg:h-8" />
        </div>
        <img
          src={ImagePlaceholder}
          alt="hero"
          className="my-8 md:mb-12 max-w-md w-full"
        />
      </div>
    </header>
  );
};

export default Header;
