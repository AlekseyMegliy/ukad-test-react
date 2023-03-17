import { LinkProps } from "../types";
import { useState } from "react";
import { UsePagination } from "../types";

//Redux page changer
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//NavLink function
export const highlightedLinkStyleIfActive = ({ isActive }: LinkProps) => {
  return isActive ? { textDecoration: "underline" } : undefined;
};

//Pagination custom hook
export const usePagination: UsePagination = ({ numberOfCards, listLength }) => {
  const storePage = useAppSelector((state) => state.page.page);
  const [page, setPage] = useState<number>(storePage);
  const pageCount = Math.ceil(listLength / numberOfCards);
  const lastContentIndex = page * numberOfCards;
  const firstContentIndex = lastContentIndex - numberOfCards;
  const changePage = (direction: boolean) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      } else if (state === 1) {
        return state;
      }
      return state - 1;
    });
  };
  const setPageCheck = (num: number) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };
  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageCheck,
    firstContentIndex,
    lastContentIndex,
    page,
  };
};
