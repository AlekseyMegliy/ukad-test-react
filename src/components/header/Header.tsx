import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/UKAD_logo.svg";
import {
  highlightedLinkStyleIfActive,
  useAppSelector,
} from "../../shared/utils";

export default function Header() {
  return (
    <div className="header container-fluid">
      <Link to="/">
        <img className="header__logo" alt="logo" src={logo} />
      </Link>
      <div className="header__nav">
        <NavLink
          className="header__nav-link"
          style={highlightedLinkStyleIfActive}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="header__nav-link"
          style={highlightedLinkStyleIfActive}
          to={{
            pathname: "/products",
            search: `?page=${useAppSelector((state) => state.page.page)}`,
          }}
        >
          Products
        </NavLink>
      </div>
    </div>
  );
}
