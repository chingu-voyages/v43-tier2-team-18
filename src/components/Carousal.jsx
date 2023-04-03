import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function Carousal({ data, link, height }) {
  const content = (obj) => (
    <div className={`w-full ${height ? "h-[70vh]" : "h-screen"} lg:h-screen `}>
      <img className="min-h-screen w-full object-cover z-0" src={obj.img} />
      <div
        className={`absolute inset-0 text-white flex justify-center items-center bg-gray-400 bg-opacity-30 ${
          link ? "hover:opacity-60 transition-opacity" : "cursor-default"
        } bg-opacity-30 font-bold z-10 xs:text-5xl sm:text-7xl md:text-9xl h-screen`}
      >
        <h1 className="p-8 z-100">{obj.text}</h1>
      </div>
    </div>
  );

  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: `${link ? true : false}`,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Navigation, Pagination]}
    >
      {data.map((obj) => (
        <SwiperSlide key={obj.text}>
          {link ? (
            <Link to="/destination">{content(obj)}</Link>
          ) : (
            <>{content(obj)}</>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousal;
