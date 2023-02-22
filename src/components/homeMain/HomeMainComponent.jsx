import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homeMain.css";
import arrow from "../../assets/Mask.svg";
import Product from "../productCard/ProductCardComponent";

function HomeMain() {
  const [jsonInfo, setInfo] = useState([]);
  const [shift, setShift] = useState(0);
  const [rightEdge, setEdge] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const max = 8;
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds?limit=10&page=0")
      .then((res) => res.json())
      .then((data) => setInfo(data));
    window.addEventListener("resize", updateWidth);
  }, []);
  function right() {
    if (width > 991 && Math.floor(max / 3) > shift / -100 + 1) {
      setShift(shift - 100);
    } else if (
      width > 991 &&
      Math.floor(max / 3) === shift / -100 + 1 &&
      max % 3 === 2
    ) {
      setShift(shift - 66, 6666);
      setEdge(true);
    } else if (
      width > 991 &&
      Math.floor(max / 3) === shift / -100 + 1 &&
      max % 3 === 1
    ) {
      setShift(shift - 33, 3333);
      setEdge(true);
    } else if (width <= 991 && max > shift / -100 + 1) {
      setShift(shift - 100);
      if (max === shift / -100 + 1) {
        setEdge(true);
      }
    }
  }
  function left() {
    if (width > 991 && shift % -100 === 0 && shift !== 0) {
      setShift(shift + 100);
      setEdge(false);
    } else if (width > 991 && shift % -100 !== 0 && max % 3 === 2) {
      setShift(shift + 66, 6666);
      setEdge(false);
    } else if (width > 991 && shift % -100 !== 0 && max % 3 === 1) {
      setShift(shift + 33, 3333);
      setEdge(false);
    } else if (width <= 991 && shift !== 0) {
      setShift(shift + 100);
      setEdge(false);
    }
  }
  function updateWidth() {
    setWidth(window.innerWidth);
    setShift(0);
    setEdge(false);
  }

  return (
    <div className="home-main-block">
      <div className="home-main container-fluid">
        <h1 className="head">home page</h1>
        <span
          className="slider-button-left"
          onClick={left}
          style={shift === 0 ? { display: "none" } : undefined}
        >
          <img alt="left arrow" src={arrow} />
        </span>
        <div className="row product-slider">
          {jsonInfo.map((dogy) => (
            <div
              key={dogy.id}
              className="col-12 col-lg-4 single-product"
              style={{ left: shift + "%" }}
            >
              <Product dogy={dogy} limit={max} />
            </div>
          ))}
        </div>
        <span
          className="slider-button-right"
          onClick={right}
          style={rightEdge ? { display: "none" } : undefined}
        >
          <img alt="right arrow" src={arrow} />
        </span>
      </div>
    </div>
  );
}
export default HomeMain;
