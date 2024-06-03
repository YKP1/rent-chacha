import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import Logo from "../../assets/logo/MoveMountains.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-img">
        <img src={Logo} alt="Logo of the man pushing a mountain" className="header-img__logo" />
      </div>
      <nav className="nav-links">
        <NavLink exact to="/" className="active-link">
          Home
        </NavLink>
        <NavLink to="/about" className="active-link">
          About
        </NavLink>
        <NavLink to="/login" className="active-link">
          Login
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;