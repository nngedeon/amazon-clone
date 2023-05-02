import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import { StateProvider } from "./components/StateProvider";
import reducer, { initialState } from "./components/Reducer";
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);
