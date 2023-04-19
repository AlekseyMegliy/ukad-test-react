import React from "react";
import "./breedData.scss";
import classNames from "classnames";
import { Length } from "../../../types";
import { BreedDataProps } from "../../../types";
import loading from "../../../assets/loading.gif";

function isLength(value: unknown): value is Length {
  return (
    (value as Length).metric !== undefined ||
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
        <strong>{name.split("_").join(" ")}:</strong>{" "}
        {value.metric ? value.metric + " Cm" : null}{" "}
        {value.metric && value.imperial ? " / " : null}
        {value.imperial ? value.imperial + " in" : null}{" "}
      </p>
    );
  }
  return null;
}

export default function BreedData({
  fontSize,
  imgStyle,
  breed,
  breedsSpecs,
  image,
}: BreedDataProps) {
  return (
    <div className="container-fluid">
      <div className="breed-data row">
        <h1 className="breed-data__title offset-md-1 ">{breed.name}</h1>
        <div className="offset-md-1 col-md-5 col-lg-4 ">
          <img
            className={classNames(
              { default: imgStyle === "default" },
              { square: imgStyle === "square" },
              { threefour: imgStyle === "3/4" }
            )}
            src={image ? image.url : loading}
            alt={breed.name}
          />
        </div>
        <div
          className={classNames(
            "breed-data__details offset-md-1 col-md-5 ",
            { smFont: fontSize === "sm" },
            { mdFont: fontSize === "md" },
            { lgFont: fontSize === "lg" }
          )}
        >
          {breedsSpecs.map(([key, value]) => (
            <SpecsItem key={key} name={key} value={value} />
          ))}

          {breed?.description && (
            <p className="breed-data__details__characteristic_lg breed-data__details__description">
              <strong className="breed-data__details__description_strong">
                Description:
              </strong>{" "}
              {breed.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
