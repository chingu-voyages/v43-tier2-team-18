import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LayoutRoute } from "./components";
import { DestinationInfo, Login, Signup } from "./pages";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoute />,
  },
  {
    path: "/destination",
    element: <DestinationInfo />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
