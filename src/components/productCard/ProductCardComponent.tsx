import React from "react";
import "./productCard.scss";
import { ProductCardProps } from "../../modules";

export default function ProductCard(props: ProductCardProps) {
  return (
    <div
      style={props.limit < props.dogy.id ? { display: "none" } : undefined}
      className="productCard container-fluid"
    >
      <div className="productCard__img-cuter">
        <img alt={`>>>>>>>>> ${props.dogy.name}`} src={props.dogy.image.url} />
      </div>

      <p className="productCard__type">{props.dogy.life_span}</p>
      <p className="productCard__name">{props.dogy.name}</p>
    </div>
  );
}
