import { initializeIcons } from "@uifabric/icons";
import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("FluentApp");
initializeIcons();

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <Router basename="/">
      <App />
    </Router>,
    rootElement
  );
} else {
  ReactDOM.render(
    <Router basename="/">
      <App />
    </Router>,
    rootElement
  );
}
