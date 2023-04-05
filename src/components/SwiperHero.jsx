import React from "react";
import BackgroundWithText from "./BackgroundWithText";

const obj = {
  img: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
  text: "Destination Switzerland",
};

function SwiperHero() {
  return <BackgroundWithText obj={obj} link={false} height={false} />;
}

export default SwiperHero;
