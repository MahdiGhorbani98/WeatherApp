import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import "../src/index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

reportWebVitals();
