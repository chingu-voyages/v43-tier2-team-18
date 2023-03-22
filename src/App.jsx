import React from "react";
import { Layout, Main } from "./components";
import DestinationInfo from "./components/DestinationInfo";

function App() {
  return (
    <div className="">
      <div className="text-blue-600 text-center font-bold text-xl">
        <Layout>
          {/* <Main /> */}
          <DestinationInfo />
        </Layout>
      </div>
    </div>
  );
}

export default App;
