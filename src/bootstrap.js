import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "bootstrap/scss/bootstrap.scss";

const mount = (el) => {
  if (
    process.env.NODE_ENV !== "development" &&
    process.env.NODE_ENV !== "local"
  ) {
    console.log = function () {};
  }
  const root = createRoot(el);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const rootNode = document.querySelector("#root");
if (rootNode) {
  mount(rootNode);
}

export { mount };
