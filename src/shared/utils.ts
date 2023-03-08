import { LinkProps } from "../types";
import { useState } from "react";
import { UsePagination } from "../types";

export const highlightedLinkStyleIfActive = ({ isActive }: LinkProps) => {
  return isActive ? { textDecoration: "underline" } : undefined;
};

export const usePagination: UsePagination = ({ numberOfCards, listLength }) => {
  const [page, setPage] = useState(1);
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
