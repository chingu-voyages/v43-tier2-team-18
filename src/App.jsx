import React from "react";
import { Routes, Route } from "react-router-dom";
import { LayoutRoute } from "./components";
import { Main, DestinationInfo } from "./pages";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LayoutRoute />}>
          <Route index element={<Main />} />
          <Route path="destination" element={<DestinationInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
