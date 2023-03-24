import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { DestinationInfo, LayoutRoute, Main } from "./components";


const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutRoute />
  },
  {
    path: '/destination',
    element: <DestinationInfo />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);
