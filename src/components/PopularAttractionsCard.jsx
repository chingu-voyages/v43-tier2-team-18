import React from "react";

function PopularAttractionsCard() {
  return (
    <div className="w-[250px] text-black text-left border-2 rounded-xl">
      <img
        className="w-full border-t border-transparent rounded-t-xl"
        src="https://images.unsplash.com/photo-1578764442423-c21d36076af1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <h4 className="m-2 font-semibold">Berninapass, Poschiavo, Switzerland</h4>
      <p className="font-light text-sm m-2">
        The Bernina Pass is the high elevation point connecting the Engadin
        Valley to the north with the Poschiavo Valley to the south. The views at
        the pass itself are wonderful but so are the views approaching and
        departing the pass.
      </p>
    </div>
  );
}

export default PopularAttractionsCard;
