import "./products.scss";
import React, { useState, useEffect } from "react";
import Product from "../../components/productCard/ProductCardComponent";
import { BreedType } from "../../modules";

export default function Products() {
  const [jsonInfo, setInfo] = useState<BreedType[]>([]);
  const max = 20;
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds?limit=10&page=0")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div className="products container-fluid">
      <h1 className="products__title">product page</h1>
      <div className="row products-page">
        {jsonInfo.map((dogy) => (
          <div
            key={dogy.id}
            className="col-12 col-md-6 col-lg-3 products-page_card"
          >
            <Product dogy={dogy} limit={max} />
          </div>
        ))}
      </div>
    </div>
  );
}
