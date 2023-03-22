import React from "react";
import { Layout, Main } from "./components";
import DestinationInfoHero from "./components/DestinationInfoHero";

function App() {
  return (
    <div className="">
      <div className="text-blue-600 text-center font-bold text-xl">
        <Layout>
          {/* <Main /> */}
          <DestinationInfoHero />
        </Layout>
      </div>
    </div>
  );
}

export default App;
