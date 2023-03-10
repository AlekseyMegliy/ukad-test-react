import "./products.scss";
import React, { useState, useEffect } from "react";
import Product from "../../components/ui/productCard/ProductCard";
import Loader from "../../components/ui/loader/Loader";
import { BreedType } from "../../types";

export default function Products() {
  const [breeds, setBreeds] = useState<BreedType[]>([]);
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds?limit=25&page=0")
      .then((res) => res.json())
      .then((data) => setBreeds(data))
      .catch((error) => {
        console.error("Error fetching breed information:", error);
      });
  }, [breeds]);
  return (
    <div className="products container-fluid">
      <h1 className="products__title">product page</h1>
      {breeds.length ? (
        <div className="row products-page">
          {breeds.map((dogy, index) => (
            <div
              key={dogy.id}
              className="col-12 col-md-6 col-lg-3 products-page__card"
            >
              {dogy && <Product {...dogy} />}
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
