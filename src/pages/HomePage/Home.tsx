import "./home.scss";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SliderComponent from "../../components/ui/slider/Slider";
import Loader from "../../components/ui/loader/Loader";
import { BreedType } from "../../types";

function Home() {
  const [breeds, setBreeds] = useState<BreedType[]>([]);
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds?limit=10&page=0")
      .then((res) => res.json())
      .then((data) => setBreeds(data))
      .catch((error) => {
        console.error("Error fetching breed information:", error);
      });
  }, [breeds]);

  return (
    <div className="home">
      <h1 className="home__title">home page</h1>
      {breeds.length ? <SliderComponent items={breeds} /> : <Loader />}
    </div>
  );
}

export default Home;
