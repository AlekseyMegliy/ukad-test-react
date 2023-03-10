import "./products.scss";
import arrow from "../../assets/Mask.svg";
import { useEffect } from "react";
import Product from "../../components/ui/productCard/ProductCard";
import Loader from "../../components/ui/loader/Loader";
import { useFetchBreedsQuery } from "../../components/ui/redux-paginstion-slice/fetch-slice";
import { usePagination, useAppDispatch } from "../../shared/utils";
import { changePage } from "../../components/ui/redux-paginstion-slice/fetch-slice";

export default function Products() {
  const dispatch = useAppDispatch();
  const numberOfCards = 10;
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    numberOfCards: numberOfCards,
    listLength: 170,
  });
  const { data = [] } = useFetchBreedsQuery(page * numberOfCards);
  let breeds = data;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(changePage(page));
  }, [dispatch, page]);
  return (
    <div className="products container-fluid">
      <h1 className="products__title">product page</h1>
      {breeds.length >= page * 10 ? (
        <div className="row products-page">
          {breeds
            .slice(firstContentIndex, lastContentIndex)
            .map((dogy, index) => (
              <div
                key={dogy.id}
                className="col-12 col-md-6 col-lg-3 products-page_card"
              >
                {dogy && <Product {...dogy} />}
              </div>
            ))}
        </div>
      ) : (
        <Loader />
      )}
      <div className="products-pagination">
        <button onClick={prevPage} className="products-pagination__page-button">
          <img
            alt="slider__arrow"
            className="products-pagination__page-button-arrow"
            src={arrow}
          />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i).map((el) => (
          <button
            onClick={() => setPage(el + 1)}
            key={el}
            className={`products-pagination__page-button ${
              page === el + 1 ? "products-pagination__page-button_active" : ""
            }`}
            style={
              (el + 1 > page + 3 && el + 1 < 15) ||
              (el + 1 < page - 3 && el + 1 > 3)
                ? { display: "none" }
                : undefined
            }
          >
            {(el + 1 === page + 3 && el + 1 < 15) ||
            (el + 1 === page - 3 && el + 1 > 3)
              ? "..."
              : el + 1}
          </button>
        ))}
        <button onClick={nextPage} className="products-pagination__page-button">
          <img
            alt="slider__arrow"
            className="products-pagination__page-button-arrow"
            src={arrow}
          />
        </button>
      </div>
    </div>
  );
}
