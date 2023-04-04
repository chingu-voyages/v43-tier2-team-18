import React from "react";
import PopularAttractionsCard from "./PopularAttractionsCard";

const attractions = [
  {
    img: "https://images.unsplash.com/photo-1578764442423-c21d36076af1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Berninapass, Poschiavo, Switzerland",
    description:
      "The Bernina Pass is the high elevation point connecting the Engadin Valley to the north with the Poschiavo Valley to the south. The views at the pass itself are wonderful but so are the views approaching and departing the pass.",
  },
  {
    img: "https://images.unsplash.com/photo-1504218727796-db522606b16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    name: "Mürren, Lauterbrunnen, Switzerland",
    description:
      "The most scenic route to Murren is by traveling through Stechelberg and Gimmelwald and takes about 32 minutes in total. This area is considered one of the most beautiful valleys in the Alps as it includes 72 waterfalls, worthy of Tolkien’s landscapes.",
  },
  {
    img: "https://images.unsplash.com/photo-1605825831039-8b6b4199b04a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Interlaken, Switzerland",
    description:
      "Interlaken is a Swiss town and municipality in the Interlaken-Oberhasli administrative district in the canton of Bern. It is an important and well-known tourist destination in the Bernese Oberland region of the Swiss Alps, and the main transport gateway to the mountains and lakes of that region.",
  },
  {
    img: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Melchsee-Frutt, Kerns, Switzerland",
    description:
      "The eight kilometer long sledge run with an altitude difference of about 800 meters is the longest sledge run in the central of Switzerland. The run from Melchsee-Frutt to the Stöckalp is a great experience.",
  },
  {
    img: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80",
    name: "Zürich, Switzerland",
    description:
      "Zürich is the largest city in Switzerland and the capital of the canton of Zürich. It is located in north-central Switzerland, at the northwestern tip of Lake Zürich. As of January 2023 the municipality has 443,037 inhabitants, the urban area 1.315 million, and the Zürich metropolitan area 1.83 million.",
  },
];

function PopularAttractions() {
  return (
    <div className="bg-heroBg bg-cover xs:p-6 md:p-8 md:px-12 lg:px-24">
      <h3 className="text-center font-bold text-4xl lg:text-5xl mb-10 mt-0">
        Popular Attractions
      </h3>
      <div className="w-full flex flex-nowrap gap-8 pb-8 overflow-x-scroll  mt-8">
        {attractions.map((attraction) => (
          <PopularAttractionsCard
            key={attraction.name}
            attraction={attraction}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularAttractions;
