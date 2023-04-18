import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./productCard.scss";
import { BreedType } from "../../../types";
import noImage from "../../../assets/noimg.jpg";

export default function ProductCard({
  imgStyle,
  weight,
  height,
  id,
  name,
  bred_for,
  breed_group,
  life_span,
  temperament,
  origin,
  description,
  image,
}: BreedType) {
  return (
    <div className="product-сard">
      <Link to={{ pathname: `/products/${id}` }} className="product-сard__link">
        {image ? (
          <img
            className={classNames(
              "product-сard__image",
              {
                "product-сard__image__square": imgStyle === "square",
              },
              {
                "product-сard__image__fit-contain": imgStyle === "contain",
              }
            )}
            alt={name}
            src={image.url}
          />
        ) : (
          <img className="product-сard__image" alt={name} src={noImage} />
        )}

        <p className="product-сard__type">{life_span}</p>
        <p className="product-сard__name">{name}</p>
      </Link>
    </div>
  );
}
