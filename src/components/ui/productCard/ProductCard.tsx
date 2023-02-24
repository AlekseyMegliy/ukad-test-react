import React from "react";
import "./productCard.scss";
import { ProductCardProps } from "../../../types";

export default function ProductCard(props: ProductCardProps) {
  return (
    <div
      style={props.limit < props.dogy.id ? { display: "none" } : undefined}
      className="product-сard container-fluid"
    >
      <div className="product-сard__img-cuter">
        <img alt={`>>>>>>>>> ${props.dogy.name}`} src={props.dogy.image.url} />
      </div>

      <p className="product-сard__type">{props.dogy.life_span}</p>
      <p className="product-сard__name">{props.dogy.name}</p>
    </div>
  );
}
