import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LayoutRoute } from "./components";
import { DestinationInfo, Login, Signup, Welcome, TravelGuide } from "./pages";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoute />,
  },
  {
    path: "/destinationInfo",
    element: <DestinationInfo />,
  },
  {
    path: "/destination",
    // element: <DestinationInfo />,
    element: <TravelGuide />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
