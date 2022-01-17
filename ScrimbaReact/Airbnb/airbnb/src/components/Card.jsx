import React from "react";
import star from "../images/star.png";
const Card = ({ img, rating, reviewCount, country, title, price }) => {
    import profile from `../images/${img}`;
  return (
    <div className="card">
      <img src={profile} alt="" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="" className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136 </span>/ person
      </p>
    </div>
  );
};

export default Card;
