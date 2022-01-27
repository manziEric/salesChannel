import React, { useContext } from "react";
import "../../styles/pagination.css";
import { PaginationContext } from "./DisplayPagination";
import { DOTS } from "./usePagination";

const Pagination = () => {
  const {
    postsPerPage,
    totalPosts,
    paginate,
    onPrevious,
    onNext,
    paginationRange,
  } = useContext(PaginationContext);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {/* Left navigation arrow */}
        <li className={"pagination-item"} onClick={onPrevious}>
          <div className="arrow left" />
        </li>
        {paginationRange.map((number, index) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (number === DOTS) {
            return (
              <li key={index} className="pagination-item dots">
                &#8230;
              </li>
            );
          }
          return (
            <li key={index} className="page-item">
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          );
        })}
        {/*  Right Navigation arrow */}
        <li className={"pagination-item"} onClick={onNext}>
          <div className="arrow right" />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
