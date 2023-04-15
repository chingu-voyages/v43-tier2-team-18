import {
  Footer,
  Navbar,
  SwiperHero,
  TabsSection,
  PopularAttractions,
} from "../components";
import { useParams } from "react-router-dom";
import { travelData } from "../data";

const DestinationInfo = () => {
  const { id } = useParams();
  const { destination } = travelData.find((item) => item.destination.id === id);

  return (
    <div className="dark:bg-zinc-800 dark:text-white">
      <Navbar />
      <SwiperHero destination={destination} />
      <TabsSection destination={destination} />
      <PopularAttractions destination={destination} />
      <Footer />
    </div>
  );
};

export default DestinationInfo;
