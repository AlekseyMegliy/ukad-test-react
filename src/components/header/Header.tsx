import React, { useState, FormEvent } from "react";
import { useNavigate, Link, NavLink, useLocation } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/UKAD_logo.svg";
import {
  highlightedLinkStyleIfActive,
  useAppSelector,
} from "../../shared/utils";
import Icon from "../ui/icons/icon";

export default function Header() {
  const history = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const { pathname } = useLocation();
  function submit(event: FormEvent<HTMLFormElement>) {
    const target = event.target as HTMLFormElement;
    const searchValue = (target[0] as HTMLInputElement).value;
    history(`/products?search=${searchValue}`);
    event.preventDefault();
    setSearchValue("");
  }

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
      {pathname !== "/products" && (
        <div className="header__search">
          <Icon icon="search" size={20} color="white" />
          <form onSubmit={submit}>
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              className="header__search-input"
              value={searchValue}
              type="text"
              placeholder="Search for products"
            />
          </form>
        </div>
      )}
    </div>
  );
}
