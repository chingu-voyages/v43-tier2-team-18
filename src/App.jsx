import React from "react";
import { Navbar, Footer } from "./components";
function App() {
  return (
    <div className="relative bg-white font-Poppins dark:bg-black dark:text-gray-100">
      <div>
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
