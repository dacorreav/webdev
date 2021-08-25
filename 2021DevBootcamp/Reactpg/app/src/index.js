import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
//import reportWebVitals from './reportWebVitals';

let date = new Date();
let currentTime;
let customStyle = {
  color: "",
};
if (date.getHours() < 12) {
  currentTime = "Morning";
  customStyle.color = "green";
} else if (date.getHours() < 18) {
  currentTime = "Afternoon";
  customStyle.color = "blue";
} else {
  currentTime = "Evening";
  customStyle.color = "black";
}

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <h1 className="header" style={customStyle}>
        Good {currentTime}
      </h1>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
