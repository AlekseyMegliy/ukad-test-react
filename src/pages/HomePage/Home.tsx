import "./home.scss";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SliderComponent from "../../components/ui/slider/Slider";
import { BreedType } from "../../types";

function Home() {
  const [breed, setInfo] = useState<BreedType[]>([]);
  const [errorMessage, setError] = useState<string>("");
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds?limit=10&page=0")
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((error) => {
        console.error("Error fetching breed information:", error);
        setError(String(error.errorMessage));
      });
  }, [errorMessage]);

  return (
    <div className="home container-fluid">
      <h1 className="home__title">home page</h1>
      {errorMessage &&
        "Oops, something went wrong. Error message: " + errorMessage}
      <SliderComponent breed={breed} />
    </div>
  );
}

export default Home;
