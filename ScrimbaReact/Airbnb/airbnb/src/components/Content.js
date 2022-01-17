import React from "react";
import hero from "../images/photo-grid.png";
const Content = () => {
  return (
    <div className="content--hero">
      <img src={hero} alt="Hero grid" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one of a kind hosts -- all
        without leaving home.
      </p>
    </div>
  );
};

export default Content;
