//entry point for react
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css"; // Ensure styles are applied

// Render the App component into the root element
createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
