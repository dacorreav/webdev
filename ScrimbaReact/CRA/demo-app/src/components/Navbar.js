import React from "react";
import logo from "../images/logo192.png";
const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" className="nav--logo" />
      <h3 className="nav--name">
        <a className="nav--link" href="/">
          ReactFacts
        </a>
      </h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
};

export default Navbar;
