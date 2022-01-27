import { FC, useContext } from "react";
import "../../styles/pagination.css";
import { PaginationContext } from "./DisplayPagination";
import { DOTS } from "./usePagination";

const Pagination: FC = () => {
  const {
    paginate,
    onPrevious,
    onNext,
    paginationRange,
    currentPage,
    lastPage,
    displayFirstArrow,
  } = useContext(PaginationContext);

  return (
    <div style={styles.container}>
      <ul style={styles.pagination}>
        {/* Left navigation arrow */}
        <li onClick={onPrevious}>
          {displayFirstArrow === DOTS ? <div className="arrow left" /> : null}
        </li>
        {paginationRange.map((item: number | string, index: number) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (item === DOTS) {
            return <li key={index}>&#8230;</li>;
          }
          return (
            <li key={index}>
              <button style={styles.button} onClick={() => paginate(item)}>
                {item}
              </button>
            </li>
          );
        })}
        {/*  Right Navigation arrow */}
        <li onClick={onNext}>
          {currentPage < lastPage ? <div className="arrow right" /> : null}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

const styles = {
  container: {},
  pagination: {
    display: "inline-flex",
    listStyle: "none",
  },
  button: {
    borderRadius: "2px",
    margin: "0.1rem",
    border: "black",
    cursor: "pointer",
    color: "blue",
  },
};
