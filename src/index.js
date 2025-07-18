import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Game from "./App"; // You are exporting `Game` as default from App.js

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
