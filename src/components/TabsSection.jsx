import Weather from "./Weather";

const TabsSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row xs:grid-cols-1 md:grid-cols-6 gap-8 px-6 py-10 mx-auto max-w-6xl text-gray-800">
      <div className="col-span-3 text-left  md:text-lg">
        <h3 className="py-2 font-semibold text-2xl lg:text-3xl">
          Culture and History
        </h3>
        <p>
          Switzerland has a rich and fascinating history that goes back
          thousands of years. The region was first inhabited by Celtic tribes,
          and then later by the Romans, who established the city of Aventicum in
          15 BC.
        </p>
        <br />
        <p>
          Switzerland remained a neutral country during the World Wars, but its
          history during this period is marked by its humanitarian efforts to
          help those affected by the conflicts. Switzerland is also known for
          its tradition of direct democracy, where citizens have a say in the
          laws and policies of the country through regular referendums.
        </p>
        <br />
        <p>
          The country is also known for its contributions to science, art, and
          literature. Some of the most famous Swiss personalities include the
          scientist Albert Einstein, the author Johann Wolfgang von Goethe, and
          the artist Paul Klee.
        </p>
        <br />
        <p>
          Switzerland is also famous for its cheese and chocolate, which are
          exported all over the world. The country's cuisine is influenced by
          its neighbors, with traditional dishes including fondue, raclette, and
          rosti. Switzerland is also known for its luxury watches, and some of
          the most prestigious brands such as Rolex and Omega are based in the
          country.
        </p>
        <br />
        <p>
          The Swiss people are known for their love of nature and outdoor
          activities, with skiing, hiking, and mountain biking being popular
          pastimes. The country also has a strong tradition of precision
          engineering and innovation.
        </p>
      </div>
      <div className="min-w-[250px] md:min-w-[300px] p-8 w-full bg-blue-50 rounded-lg text-xl">
        <p>
          Switzerland is a beautiful country in Europe that is famous for its
          breathtaking Alpine scenery, charming cities, and rich culture.
        </p>
        <p className="mt-4">
          The country is known for its beautiful landscapes, stunning mountain
          ranges, pristine lakes, and world-class skiing resorts. Switzerland
          has four official languages: German, French, Italian, and Romansh,
          which reflect the cultural diversity of the country.
        </p>
        <Weather />
      </div>
    </section>
  );
};

export default TabsSection;
