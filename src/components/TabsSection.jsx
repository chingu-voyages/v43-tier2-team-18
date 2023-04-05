import Weather from "./Weather";

const TabsSection = ({ destination }) => {
  return (
    <section className="flex flex-col-reverse md:px-12 lg:px-24 md:flex-row xs:grid-cols-1 md:grid-cols-6 gap-8 px-6 py-10 mx-auto max-w-6xl text-gray-800 dark:bg-black dark:text-gray-100">
      <div className="col-span-3 text-left  md:text-lg">
        <h3 className="py-2 font-semibold text-2xl lg:text-3xl">
          Culture and History
        </h3>
        <p className="leading-6">{destination.culture}</p>

        <div>
          <h4 className="text-2xl font-semibold mt-8">Popular cities</h4>
          {destination.popularCities.map((city) => (
            <span key={city} className="text-xl">
              {city}&nbsp;
            </span>
          ))}
        </div>
      </div>
      <div className="min-w-[250px] md:min-w-[300px] p-8 w-full bg-blue-50 dark:bg-blue-900 rounded-lg text-xl">
        {destination.description}
        <Weather destination={destination} />
      </div>
    </section>
  );
};

export default TabsSection;
