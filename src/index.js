//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const d = new Date();
const n = d.getHours();

const customstyle = {
  color: ""
};

let string;
if (n < 12) {
  string = "Good Morning";
  customstyle.color = "red";
}
if (n < 18 && n > 12) {
  string = "Good Evening";
  customstyle.color = "green";
}
if (n < 24 && n > 18) {
  string = "Good Night";
  customstyle.color = "blue";
}

ReactDom.render(
  <h1 className="heading" style={customstyle}>
    {string}
  </h1>,
  document.getElementById("root")
);
