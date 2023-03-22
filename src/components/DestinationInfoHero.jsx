import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroImages = [
  {
    img: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    text: "Destination Switzerland",
  },
  {
    img: "https://images.unsplash.com/photo-1594069758873-e79e9075eb7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3dpdHplcmxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    text: "Find excitement wherever you go!",
  },
  {
    img: "https://images.unsplash.com/photo-1622307053412-5404f0c427c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxzd2l0emVybGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    text: "Find your perfect vacation",
  },
];

function DestinationInfoHero() {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Navigation, Pagination]}
    >
      {heroImages.map((obj) => (
        <SwiperSlide key={obj.text}>
          <div className="relative w-full h-screen">
            <img className="h-screen w-full object-cover" src={obj.img} />
            <div className="absolute inset-0 text-white flex justify-center items-center bg-gray-500 bg-opacity-30 font-bold z-index-10 text-6xl md:text-7xl xl:text-9xl">
              <h1 className="p-8 animate-ping">{obj.text}</h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default DestinationInfoHero;
