import "./home.scss";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SliderComponent from "../../components/ui/slider/Slider";
import { BreedType } from "../../types";

function Home() {
  const [breed, setBreed] = useState<BreedType[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds?limit=10&page=0")
      .then((res) => res.json())
      .then((data) => setBreed(data))
      .catch((error) => {
        console.error("Error fetching breed information:", error);
        setErrorMessage(String(error.errorMessage));
      });
  }, [breed]);

  return (
    <div className="home container-fluid">
      <h1 className="home__title">home page</h1>
      {/* {errorMessage &&
        "Oops, something went wrong. Error message: " + errorMessage} */}
      <SliderComponent breed={breed} />
    </div>
  );
}

export default Home;
