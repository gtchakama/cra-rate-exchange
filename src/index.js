import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MyComponent from "../src/components/dropdown/dates";
import reportWebVitals from "./reportWebVitals";
import ShowAndHidePassword from "./components/input/index";
ReactDOM.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
