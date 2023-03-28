import "./products.scss";
import { useEffect, useState, useCallback } from "react";
import arrow from "../../assets/Mask.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Product from "../../components/ui/productCard/ProductCard";
import Loader from "../../components/ui/loader/Loader";
import { useFetchBreedsQuery } from "../../store/redux-paginstion-slice/fetch-slice";
import { useAppDispatch, usePagination } from "../../shared/utils";
import { changePage } from "../../store/redux-paginstion-slice/fetch-slice";
import Icon from "../../components/ui/icons/icon";
import { BreedType } from "../../types";
import debounce from "lodash.debounce";

export default function Products() {
  const [search] = useSearchParams();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [pageNum, setPageNum] = useState(Number(search.get("page")));
  const { data = [] } = useFetchBreedsQuery(pageNum && pageNum - 1);
  const [searchBreeds, setSearchBreeds] = useState<BreedType[]>([]);
  let breeds = data;
  const pageCount = 17;
  const history = useNavigate();
  const [searchTerm, setSearchTerm] = useState(search.get("search"));
  const { firstContentIndex, page, lastContentIndex, setPage, totalPages } =
    usePagination({
      numberOfCards: 10,
      listLength: searchBreeds.length,
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchSearch = useCallback(
    debounce((searchTerm: string) => {
      setIsLoading(true);
      fetch(`https://api.thedogapi.com/v1/breeds/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => setSearchBreeds(data))
        .catch((error) => {
          console.error("Error fetching breed information:", error);
        });
      setTimeout(() => setIsLoading(false), 1000);
    }, 1000),
    []
  );

  useEffect(() => {
    history(
      searchTerm
        ? `/products?search=${searchTerm}`
        : `/products?page=${pageNum}`
    );
    dispatch(changePage(pageNum));

    if (searchTerm) {
      fetchSearch(searchTerm);
      setPageNum(1);
    } else {
      setPage(0);
      setSearchBreeds([]);
    }
    setIsLoading(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, history, pageNum, searchTerm, search]);

  const handlePageClick = (event: { selected: number }) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const newOffset = event.selected;
    searchTerm ? setPage(newOffset + 1) : setPageNum(newOffset + 1);
  };
  return (
    <div className="products container-fluid">
      <div className="products__header">
        <h1 className="products__header-title">product page</h1>
        <div className="products__header-search">
          <Icon icon="search" size={20} color="gray" />
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm !== null ? searchTerm : ""}
            className="products__header-search__input"
            type="text"
            placeholder="Search for products"
          />
        </div>
      </div>
      {searchTerm && !!searchBreeds.length && (
        <div className="row products-page">
          {searchBreeds
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
      )}
      {searchTerm &&
        !searchBreeds.length &&
        (isLoading ? (
          <Loader />
        ) : (
          <strong>Sorry, we didn't find anything ¯\_(ツ)_/¯</strong>
        ))}
      {!searchTerm && breeds.length ? (
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
        !searchTerm && <Loader />
      )}
      {totalPages || !searchTerm ? (
        <ReactPaginate
          nextLabel={<img alt="slider__arrow" src={arrow} />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          pageCount={searchTerm ? totalPages : pageCount}
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
          forcePage={searchTerm ? page - 1 : pageNum - 1}
        />
      ) : null}
    </div>
  );
}
