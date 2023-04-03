import React from "react";
import Carousal from "./Carousal";

export const heroImages = [
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

function SwiperHero() {

  return <Carousal data={heroImages} link={false} height={false} />;

}

export default SwiperHero;
