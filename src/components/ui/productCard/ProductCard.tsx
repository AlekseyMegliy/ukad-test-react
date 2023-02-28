import React from "react";
import { Link } from "react-router-dom";
import "./productCard.scss";
import { ProductCardProps } from "../../../types";

export default function ProductCard(props: ProductCardProps) {
  return (
    <div
      style={props.limit < props.dogy.id ? { display: "none" } : undefined}
      className="product-сard"
    >
      <div className="product-сard__img-cuter">
        <img alt={`>>>>>>>>> ${props.dogy.name}`} src={props.dogy.image.url} />
      </div>

      <p className="product-сard__type">{props.dogy.life_span}</p>
      <p className="product-сard__name">{props.dogy.name}</p>
      <Link
        to={{ pathname: `/products/${props.dogy.id}` }}
        state={{ id: props.dogy.id }}
        className="product-сard__link"
      >
        Details
      </Link>
    </div>
  );
}
