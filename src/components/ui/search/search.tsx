// Напрацювання на наступне завдання

import React from "react";
// import { usePagination, useAppDispatch } from "../../../shared/utils";

export default function Search() {
  //   const {
  //     firstContentIndex,
  //     lastContentIndex,
  //     nextPage,
  //     prevPage,
  //     page,
  //     setPage,
  //     totalPages,
  //   } = usePagination({
  //     numberOfCards: 10,
  //     listLength: 170,
  //   });
  return (
    <div>
      {/* <div className="products-pagination">
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
</div> */}
    </div>
  );
}
