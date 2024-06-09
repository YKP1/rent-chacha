import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/logo/MoveMountains.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img
          src={Logo}
          alt="Logo of the man pushing a mountain"
          className="header__logo"
        />
      </div>
      <Link to="/home">
        <h1 className="header__title">MoveMountains</h1>
      </Link>
      <nav className="header__nav-links">
        <Link to="/home" className="header__nav-link">
          Home
        </Link>
        <Link to="/about" className="header__nav-link">
          About
        </Link>
        <Link to="/login" className="header__nav-link">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
