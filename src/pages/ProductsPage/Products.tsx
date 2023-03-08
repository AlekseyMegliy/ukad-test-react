import "./products.scss";
import React, { useState, useEffect } from "react";
import Product from "../../components/ui/productCard/ProductCard";
import Loader from "../../components/ui/loader/Loader";
import { BreedType } from "../../types";
import { useFetchBreedsQuery } from "../../components/ui/redux-paginstion-slice/fetch-slice";
import { usePagination } from "../../shared/utils";

export default function Products() {
  // const [breed, setBreed] = useState<BreedType[]>([]);

  const numberOfCards = 21;

  const { data = [], isFetching } = useFetchBreedsQuery(20);

  let breeds = data;

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    numberOfCards: 10,
    listLength: breeds.length,
  });
  // useEffect(() => {
  //   fetch("https://api.thedogapi.com/v1/breeds?limit=25&page=0")
  //     .then((res) => res.json())
  //     .then((data) => setBreed(data))
  //     .catch((error) => {
  //       console.error("Error fetching breed information:", error);
  //     });
  // }, [breed]);
  return (
    <div className="products container-fluid">
      <h1 className="products__title">product page</h1>
      {breeds.length ? (
        <div className="row products-page">
          {breeds
            .slice(firstContentIndex, lastContentIndex)
            .map((dogy, index) => (
              <div
                key={dogy.id}
                className="col-12 col-md-6 col-lg-3 products-page_card"
                style={
                  index >= numberOfCards - 1 ? { display: "none" } : undefined
                }
              >
                <Product dogy={dogy} />
              </div>
            ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
