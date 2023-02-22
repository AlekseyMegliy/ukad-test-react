import React, { useState, useEffect } from "react";
import Product from "../productCard/ProductCardComponent";
import "./productsMain.css";

export default function ProductsMainComponent() {
  const [jsonInfo, setInfo] = useState([]);
  const max = 20;
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds?limit=10&page=0")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div className="products-main container-fluid">
      <h1 className="head">product page</h1>

      <div className="row product-page">
        {jsonInfo.map((dogy) => (
          <div
            key={dogy.id}
            className="col-12 col-md-6 col-lg-3 single-product"
          >
            <Product dogy={dogy} limit={max} />
          </div>
        ))}
      </div>
    </div>
  );
}
