import React from "react";
import { Layout, Main } from "./components";
function App() {
  return (
    <div className="relative bg-white font-Poppins dark:bg-black dark:text-gray-100">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
