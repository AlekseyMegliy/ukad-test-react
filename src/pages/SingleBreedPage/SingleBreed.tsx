import { useState, useEffect, useMemo } from "react";
import "./singleBreed.scss";
import { useLocation } from "react-router-dom";
import { BreedType } from "../../types";
import { Link } from "react-router-dom";
import { Length } from "../../types";
import loadingImg from "../../assets/loading.gif";

function isLength(value: unknown): value is Length {
  return (
    (value as Length).metric !== undefined &&
    (value as Length).imperial !== undefined
  );
}

function SpecsItem({ value, name }: { value: unknown; name: string }) {
  if (typeof value === "string" && value) {
    return (
      <p className="details__breed-data">
        <strong className="details__breed-data_strong">
          {name.split("_").join(" ")}:
        </strong>{" "}
        {value}
      </p>
    );
  }
  if (isLength(value)) {
    return (
      <p className="details__breed-data">
        <strong className="details__breed-data_strong">
          {name.split("_").join(" ")}:
        </strong>{" "}
        {value.metric} Centimeters
      </p>
    );
  }
  return <></>;
}

export default function SingleBreed() {
  let { state } = useLocation();
  const [breed, setBreed] = useState<BreedType>();
  const [errorMessage, setErrorMessage] = useState("");
  const [image, setImage] = useState<{ url: string }>();

  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds/${state.id}`)
      .then((res) => res.json())
      .then((data) => setBreed(data))
      .catch((error) => {
        console.error("Error fetching breed information:", error);
        setErrorMessage(String(error.errorMessage));
      });
  }, [state]);

  useEffect(() => {
    if (!breed) {
      return;
    }
    fetch(`https://api.thedogapi.com/v1/images/${breed.reference_image_id}`)
      .then((res) => res.json())
      .then((data) => setImage(data))
      .catch((error) => {
        console.error("Error fetching breed information:", error);
        setErrorMessage(String(error.errorMessage));
      });
  }, [breed]);

  const breedsSpecs = useMemo(() => {
    return (
      breed &&
      Object.entries(breed).filter(
        ([name]) =>
          !["reference_image_id", "description", "id", "name"].includes(name)
      )
    );
  }, [breed]);

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
        {breed ? breed.name : "Loading data..."}
      </h1>

      {breedsSpecs && breed && (
        <div className="breed-data row">
          <div className="single-breed__image offset-md-1 col-md-5 col-lg-4">
            <img
              className=" col-12"
              src={image ? image.url : loadingImg}
              alt={breed.name}
            />
          </div>

          <div className="details offset-md-1 col-md-5">
            {breedsSpecs.map(([key, value]) => (
              <SpecsItem key={key} name={key} value={value} />
            ))}

            {breed && breed.description && (
              <p className="details__breed-data details__breed-description">
                <strong className="details__breed-description_strong">
                  Description:
                </strong>{" "}
                {breed.description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
