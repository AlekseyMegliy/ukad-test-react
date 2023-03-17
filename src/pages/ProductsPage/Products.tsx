import "./products.scss";
import { useEffect, useState } from "react";
import arrow from "../../assets/Mask.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Product from "../../components/ui/productCard/ProductCard";
import Loader from "../../components/ui/loader/Loader";
import { useFetchBreedsQuery } from "../../store/redux-paginstion-slice/fetch-slice";
import { useAppDispatch } from "../../shared/utils";
import { changePage } from "../../store/redux-paginstion-slice/fetch-slice";

export default function Products() {
  const [search] = useSearchParams();
  const currentPage = Number(search.get("page"));
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(currentPage);
  const { data = [] } = useFetchBreedsQuery(page - 1);
  let breeds = data;
  const pageCount = 17;
  const history = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    history(`/products?page=${page}`);
    dispatch(changePage(page));
  }, [dispatch, history, page]);

  const handlePageClick = (event: { selected: any }) => {
    const newOffset = event.selected;

    setPage(newOffset + 1);
  };
  return (
    <div className="products container-fluid">
      <h1 className="products__title">product page</h1>
      {breeds.length ? (
        <div className="row products-page">
          {breeds.slice(0, 10).map((dogy, index) => (
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

      <ReactPaginate
        nextLabel={<img alt="slider__arrow" src={arrow} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        pageCount={pageCount}
        previousLabel={<img alt="slider__arrow" src={arrow} />}
        containerClassName="products-pagination"
        pageClassName="products-pagination__page-button"
        previousClassName="products-pagination__page-button"
        nextClassName="products-pagination__page-button"
        breakClassName="products-pagination__page-button"
        pageLinkClassName="products-pagination__page-button__link"
        previousLinkClassName="products-pagination__page-button__link products-pagination__page-button__link_previous"
        nextLinkClassName="products-pagination__page-button__link products-pagination__page-button__link_next"
        breakLinkClassName="products-pagination__page-button__link"
        activeClassName="products-pagination__page-button_active"
        breakLabel="..."
        forcePage={page - 1}
      />
    </div>
  );
}
