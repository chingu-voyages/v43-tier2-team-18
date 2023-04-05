import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import BackgroundWithText from "./BackgroundWithText";
import { travelData } from "../data";

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
      {travelData
        .filter((_, index) => index > 7)
        .map((obj) => (
          <SwiperSlide key={obj.destination.id}>
            <Link to={`/${obj.destination.id}`}>
              <BackgroundWithText
                obj={obj.destination}
                height="70vh"
                link="true"
              />
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default LandingPageCarousal;
