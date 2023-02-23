import React, { useState, useEffect } from "react";
import arrow from "../../../assets/Mask.svg";
import Product from "../../productCard/ProductCardComponent";
import "./slider.scss";

export default function SliderComponent(props) {
  const [shift, setShift] = useState(0);
  const [rightEdge, setEdge] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const max = 8;

  useEffect(() => {
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
    <div className="slider">
      <span
        className="slider__left-button"
        onClick={left}
        style={shift === 0 ? { display: "none" } : undefined}
      >
        <img alt="slider__arrow" className="slider__arrow" src={arrow} />
      </span>

      <div className="row products-row">
        {props.jsonInfo.map((dogy) => (
          <div
            key={dogy.id}
            className="col-12 col-lg-4 products-row__card"
            style={{ left: shift + "%" }}
          >
            <Product dogy={dogy} limit={max} />
          </div>
        ))}
      </div>

      <span
        className="slider__right-button"
        onClick={right}
        style={rightEdge ? { display: "none" } : undefined}
      >
        <img alt="slider__arrow" className="slider__arrow" src={arrow} />
      </span>
    </div>
  );
}