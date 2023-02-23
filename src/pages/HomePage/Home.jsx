import "./home.scss";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import arrow from "../../assets/Mask.svg";
// import Product from "../../components/productCard/ProductCardComponent";
import SliderComponent from "../../components/ui/slider/SliderComponent";

function Home() {
  const [jsonInfo, setInfo] = useState([]);
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds?limit=10&page=0")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <div className="home container-fluid">
      <h1 className="home__title">home page</h1>
      <SliderComponent jsonInfo={jsonInfo} />
    </div>
  );
}

export default Home;
