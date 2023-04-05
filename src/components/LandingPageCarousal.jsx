import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import BackgroundWithText from "./BackgroundWithText";
import { carousalData } from "../data";

function LandingPageCarousal() {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Navigation, Pagination]}
    >
      {carousalData.map((obj) => (
        <SwiperSlide key={obj.text}>
          <Link to="/destinationInfo">
            <BackgroundWithText obj={obj} height="70vh" link="true" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default LandingPageCarousal;
