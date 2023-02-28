import React, { useState, useEffect } from "react";
import "./singleBreed.scss";
import { useLocation } from "react-router-dom";
import { BreedType } from "../../types";
import { Link } from "react-router-dom";
import loadingImg from "../../assets/loading.gif";

export default function SingleBreed() {
  let { state } = useLocation();
  const [breed, setInfo] = useState<BreedType[]>([]);
  const [errorMessage, setError] = useState<string>("");
  let dog = breed.find((item) => item.id === state.id) as BreedType;
  let dogDetails = breed.length > 0 ? Object.keys(dog).slice(3, -2) : [];

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds?limit=20&page=0")
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((error) => {
        console.error("Error fetching breed information:", error);
        setError(String(error.errorMessage));
      });
  }, []);

  return (
    <div className="single-breed container-fluid ">
      {errorMessage &&
        "Oops, something went wrong. Error message: " + errorMessage}
      <Link
        to="/products"
        className="single-breed__link  offset-md-1 col-md-7 col-lg-4"
      >
        &lt;-Go to product list
      </Link>
      <h1 className="single-breed__title offset-md-1 ">
        {breed.length > 0 ? dog.name : "Loading data..."}
      </h1>
      <div className="breed-data row">
        <div className="single-breed__image offset-md-1 col-md-5 col-lg-4">
          <img
            className=" col-12"
            src={breed.length > 0 ? dog.image.url : loadingImg}
            alt={breed.length > 0 ? dog.name : "Loading data..."}
          />
        </div>

        <div className="details offset-md-1 col-md-5">
          {dogDetails.map((key: string, index) => (
            <>
              {dog[key] && dog[key].split("").length < 100 ? (
                <p key={key} className="details__breed-data">
                  <strong>{key.split("_").join(" ")}:</strong> {dog[key]}
                </p>
              ) : undefined}
            </>
          ))}
          {breed.length > 0 ? (
            dog.description ? (
              <p className="details__breed-data details__breed-description">
                <strong>Description:</strong> {dog.description}
              </p>
            ) : undefined
          ) : undefined}
        </div>
      </div>
    </div>
  );
}
