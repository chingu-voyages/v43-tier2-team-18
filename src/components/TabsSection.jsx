import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  highlights,
  priceIncludes,
  priceExcludes,
  complimentaries,
} from "../data";

const TabsSection = () => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 px-6 md:px-12 lg:px-24 py-10">
      <div className="lg:col-span-2 text-left text-gray-800">
        <Tabs selectedTabClassName="bg-gray-200 rounded-t">
          <TabList>
            <Tab>Detail</Tab>
            <Tab>Culture/history</Tab>
            <Tab disabled>Weather</Tab>
          </TabList>

          <TabPanel className="font-normal text-lg">
            <h5 className="py-2 font-semibold text-2xl">Tour Detail:</h5>
            <p>
              Switzerland is a beautiful country in Europe that is famous for
              its breathtaking Alpine scenery, charming cities, and rich
              culture. Our tour will take you to some of the most iconic and
              picturesque locations in Switzerland, giving you a chance to
              explore its beauty and history in depth.
            </p>

            <h5 className="py-2 mt-6 font-semibold text-2xl">
              Highlights of Switerland tour:
            </h5>
            <ul className="list-disc">
              {highlights.map((item, index) => (
                <li className="py-2" key={index}>
                  {item}
                </li>
              ))}
            </ul>

            {/* <h5 className="py-2 mt-6 font-semibold text-2xl">Price Includes:</h5>
            <ul className="list-disc">
              {priceIncludes.map((item, index) => (
                <li className='py-2' key={index}>{item}</li>
              ))}
            </ul>

            <h5 className="py-2 mt-6 font-semibold text-2xl">Price Excludes:</h5>
            <ul className="list-disc">
              {priceExcludes.map((item, index) => (
                <li className='py-2' key={index}>{item}</li>
              ))}
            </ul>

            <h5 className="py-2 mt-6 font-semibold text-2xl">Complimentaries</h5>
            <ul className="list-disc">
              {complimentaries.map((item, index) => (
                <li className='py-2' key={index}>{item}</li>
              ))}
            </ul> */}
          </TabPanel>
          <TabPanel className="font-normal text-lg pb-5">
            <p>
              Switzerland is a landlocked country in Central Europe with a
              diverse culture and history. The country is known for its
              beautiful landscapes, stunning mountain ranges, pristine lakes,
              and world-class skiing resorts. Switzerland has four official
              languages: German, French, Italian, and Romansh, which reflect the
              cultural diversity of the country.
            </p>
            <br />
            <p>
              Switzerland has a rich and fascinating history that goes back
              thousands of years. The region was first inhabited by Celtic
              tribes, and then later by the Romans, who established the city of
              Aventicum in 15 BC. During the Middle Ages, Switzerland was a
              collection of independent city-states and principalities. In the
              13th century, the Swiss formed a confederation known as the Old
              Swiss Confederacy, which united the different regions under a
              federal system of government.
            </p>
            <br />
            <p>
              Switzerland remained a neutral country during the World Wars, but
              its history during this period is marked by its humanitarian
              efforts to help those affected by the conflicts. Switzerland is
              also known for its tradition of direct democracy, where citizens
              have a say in the laws and policies of the country through regular
              referendums.
            </p>
            <br />
            <p>
              Switzerland is home to many famous cultural landmarks, including
              the Matterhorn, the Jungfrau region, and Lake Geneva. The country
              is also known for its contributions to science, art, and
              literature. Some of the most famous Swiss personalities include
              the scientist Albert Einstein, the author Johann Wolfgang von
              Goethe, and the artist Paul Klee.
            </p>
            <br />
            <p>
              Switzerland is also famous for its cheese and chocolate, which are
              exported all over the world. The country's cuisine is influenced
              by its neighbors, with traditional dishes including fondue,
              raclette, and rosti. Switzerland is also known for its luxury
              watches, and some of the most prestigious brands such as Rolex and
              Omega are based in the country.
            </p>
            <br />
            <p>
              The Swiss people are known for their love of nature and outdoor
              activities, with skiing, hiking, and mountain biking being popular
              pastimes. The country also has a strong tradition of precision
              engineering and innovation, which is reflected in its numerous
              high-tech industries. Swiss people are generally known for their
              punctuality, efficiency, and attention to detail.
            </p>
            <br />
            <p>
              In conclusion, Switzerland is a country with a rich culture and
              history that has been shaped by its geographic location and the
              influence of its neighbors. The country's contributions to
              science, art, literature, and cuisine are recognized worldwide,
              and its people are known for their love of nature, precision, and
              innovation.
            </p>
          </TabPanel>
          <TabPanel>
            <p>This is the Weather page</p>
          </TabPanel>
        </Tabs>
      </div>
      <div className="col-span-1 bg-gray-100 rounded-lg"></div>
    </section>
  );
};

export default TabsSection;
