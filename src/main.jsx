import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { DestinationInfo, Login, Signup, Welcome, TravelGuide } from "./pages";

// store
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/v43-tier2-team-18/" element={<App />} />
            <Route
              path="/v43-tier2-team-18/destination/:id"
              element={<DestinationInfo />}
            />
            <Route
              path="/v43-tier2-team-18/destination"
              element={<TravelGuide />}
            />
            <Route path="/v43-tier2-team-18/login" element={<Login />} />
            <Route path="/v43-tier2-team-18/signup" element={<Signup />} />
            <Route path="/v43-tier2-team-18/welcome" element={<Welcome />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
