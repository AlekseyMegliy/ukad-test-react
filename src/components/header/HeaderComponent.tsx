import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/UKAD_logo.svg";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <div className="header container-fluid">
      <Link to="/">
        <img className="header__logo" alt="logo" src={logo} />
      </Link>
      <div className="nav">
        <Link
          className="nav__link"
          style={
            location.pathname === "/"
              ? { textDecoration: "underline" }
              : undefined
          }
          to="/"
        >
          Home
        </Link>
        <Link
          className="nav__link"
          style={
            location.pathname === "/products"
              ? { textDecoration: "underline" }
              : undefined
          }
          to="/products"
        >
          Products
        </Link>
      </div>
    </div>
  );
}

