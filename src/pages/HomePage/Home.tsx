import "./home.scss";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SliderComponent from "../../components/ui/slider/Slider";
import Loader from "../../components/ui/loader/Loader";
import { BreedType } from "../../types";
import { useAppDispatch } from "../../shared/utils";
import { changePage } from "../../components/ui/redux-paginstion-slice/fetch-slice";

function Home() {
  const dispatch = useAppDispatch();
  const [breed, setBreed] = useState<BreedType[]>([]);
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds?limit=10&page=0")
      .then((res) => res.json())
      .then((data) => setBreed(data))
      .catch((error) => {
        console.error("Error fetching breed information:", error);
      });
    return () => {
      dispatch(changePage(1));
    };
  }, [breed, dispatch]);

  return (
    <div className="home">
      <h1 className="home__title">home page</h1>
      {breed.length ? <SliderComponent breed={breed} /> : <Loader />}
    </div>
  );
}

export default Home;
