import "./products.scss";
import React, { useState, useEffect } from "react";
import Product from "../../components/ui/productCard/ProductCard";
import { BreedType } from "../../types";

export default function Products() {
  const [breed, setBreed] = useState<BreedType[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const numberOfCards = 21;
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds?limit=25&page=0")
      .then((res) => res.json())
      .then((data) => setBreed(data))
      .catch((error) => {
        console.error("Error fetching breed information:", error);
        setErrorMessage(String(error.errorMessage));
      });
  }, [breed]);
  return (
    <div className="products container-fluid">
      <h1 className="products__title">product page</h1>
      {errorMessage &&
        "Oops, something went wrong. Error message: " + errorMessage}
      <div className="row products-page">
        {breed.map((dogy, index) => (
          <div
            key={dogy.id}
            className="col-12 col-md-6 col-lg-3 products-page_card"
            style={index >= numberOfCards - 1 ? { display: "none" } : undefined}
          >
            <Product dogy={dogy} limit={numberOfCards} />
          </div>
        ))}
      </div>
    </div>
  );
}
