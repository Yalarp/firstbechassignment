import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DashboardProvider } from "./contexts/DashboardContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DashboardProvider>
      <App />
    </DashboardProvider>
  </React.StrictMode>
);