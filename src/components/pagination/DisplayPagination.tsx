import { useState, createContext, useContext, ReactNode } from "react";
import { GlobalContext } from "../../context/Provider";
import usePagination from "./usePagination";
import useGetCurrentPosts from "./useGetCurrentPosts";
import useChangePage from "./useChangePage";
import useDisplayArrows from "./useDisplayArrows";
import "../../styles/pagination.css";

export const PaginationContext = createContext<any>(null);

const DisplayPagination = ({ children }: { children: ReactNode }) => {
  const {
    searchState: { tableData },
  } = useContext(GlobalContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const [currentPosts, totalPosts] = useGetCurrentPosts({
    currentPage,
    postsPerPage,
    tableData,
  });

  const [paginate, onNext, onPrevious] = useChangePage({
    setCurrentPage,
    currentPage,
  });

  const [paginationRange] = usePagination({ totalPosts, currentPage });
  const [lastPage, displayFirstArrow] = useDisplayArrows({ paginationRange });

  return (
    <PaginationContext.Provider
      value={{
        paginate,
        totalPosts,
        currentPosts,
        postsPerPage,
        paginationRange,
        lastPage,
        displayFirstArrow,
        onNext,
        onPrevious,
        currentPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default DisplayPagination;
