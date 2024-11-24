import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Ensure this file exists
import App from "./components/App.jsx"; // Corrected import path

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
