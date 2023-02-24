import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/UKAD_logo.svg";

export default function Header() {
  return (
    <div className="header container-fluid">
      <Link to="/">
        <img className="header__logo" alt="logo" src={logo} />
      </Link>
      <div className="header__nav">
        <NavLink
          className="header__nav-link"
          style={({ isActive }) =>
            isActive ? { textDecoration: "underline" } : undefined
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="header__nav-link"
          style={({ isActive }) =>
            isActive ? { textDecoration: "underline" } : undefined
          }
          to="/products"
        >
          Products
        </NavLink>
      </div>
    </div>
  );
}
