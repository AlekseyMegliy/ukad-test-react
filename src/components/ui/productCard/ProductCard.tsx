import React from "react";
import { Link } from "react-router-dom";
import "./productCard.scss";
import { ProductCardProps } from "../../../types";

export default function ProductCard({ dogy, limit }: ProductCardProps) {
  return (
    <div
      style={limit < dogy.id ? { display: "none" } : undefined}
      className="product-сard"
    >
      {dogy.image ? (
        <img
          className="product-сard__image"
          alt={dogy.name}
          src={dogy.image.url}
        />
      ) : (
        <div className="product-сard__image">No image</div>
      )}

      <p className="product-сard__type">{dogy.life_span}</p>
      <p className="product-сard__name">{dogy.name}</p>
      <Link
        to={{ pathname: `/products/${dogy.id}` }}
        state={{ id: dogy.id }}
        className="product-сard__link"
      >
        Details
      </Link>
    </div>
  );
}
