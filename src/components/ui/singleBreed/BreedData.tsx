import React from "react";
import "./breedData.scss";
import { Length } from "../../../types";
import { SingleBreedSpecsProps } from "../../../types";

function isLength(value: unknown): value is Length {
  return (
    (value as Length).metric !== undefined &&
    (value as Length).imperial !== undefined
  );
}

function SpecsItem({ value, name }: { value: unknown; name: string }) {
  if (typeof value === "string" && value) {
    return (
      <p className="breed-data__details__characteristic">
        <strong>{name.split("_").join(" ")}:</strong> {value}
      </p>
    );
  }
  if (isLength(value)) {
    return (
      <p className="breed-data__details__characteristic">
        <strong>{name.split("_").join(" ")}:</strong> {value.metric} Centimeters
      </p>
    );
  }
  return <></>;
}

export default function BreedData({
  breed,
  breedsSpecs,
  image,
}: SingleBreedSpecsProps) {
  return (
    <div className="breed-data row">
      <h1 className="breed-data__title offset-md-1 ">{breed.name}</h1>
      <div className="offset-md-1 col-md-5 col-lg-4">
        <img className="col-12" src={image.url} alt={breed.name} />
      </div>
      <div className="breed-data__details offset-md-1 col-md-5">
        {breedsSpecs.map(([key, value]) => (
          <SpecsItem key={key} name={key} value={value} />
        ))}

        {breed && breed.description && (
          <p className="breed-data__details__characteristic breed-data__details__description">
            <strong>Description:</strong> {breed.description}
          </p>
        )}
      </div>
    </div>
  );
}
