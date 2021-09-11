import React from "react";

function Heading() {
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

  return (
    <h1 className="header" style={customStyle}>
      Good {currentTime}{" "}
    </h1>
  );
}

export default Heading;
