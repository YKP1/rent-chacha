import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import Logo from "../../assets/logo/MoveMountains.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img src={Logo} alt="Logo of the man pushing a mountain" className="header__logo" />
      </div>
      <h1 className="header__title">MoveMountains</h1>
      <nav className="header__nav-links">
        <NavLink exact to="/home" className="header__nav-link" activeClassName="header__nav-link--active">
          Home
        </NavLink>
        <NavLink to="/about" className="header__nav-link" activeClassName="header__nav-link--active">
          About
        </NavLink>
        <NavLink to="/login" className="header__nav-link" activeClassName="header__nav-link--active">
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;