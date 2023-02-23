import "./home.scss";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SliderComponent from "../../components/ui/slider/SliderComponent";
import { BreedType } from "../../modules";

function Home() {
  const [breed, setInfo] = useState<BreedType[]>([]);
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds?limit=10&page=0")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <div className="home container-fluid">
      <h1 className="home__title">home page</h1>
      <SliderComponent breed={breed} />
    </div>
  );
}

export default Home;
