import React from "react";
import { Link } from "react-router-dom";
import "./productCard.scss";
import { BreedType } from "../../../types";

export default function ProductCard({
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
          <img className="product-сard__image" alt={name} src={image.url} />
        ) : (
          <div className="product-сard__image">No image</div>
        )}

        <p className="product-сard__type">{life_span}</p>
        <p className="product-сard__name">{name}</p>
      </Link>
    </div>
  );
}
