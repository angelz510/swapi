import React from "react";
import logo from "../img/star-wars-logo.png";

const Header = () => {
  return (
    <header className="header-container">
      <img src={logo} alt="star wars logo" />
    </header>
  );
};

export default Header;
