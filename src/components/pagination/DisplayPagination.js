import React, { useState, useEffect, createContext, useContext } from "react";
import "../../styles/pagination.css";
import { GlobalContext } from "../../context/Provider";
import usePagination from "./usePagination";

export const PaginationContext = createContext();

const DisplayPagination = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const {
    searchState: { tableData = [] },
  } = useContext(GlobalContext);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tableData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = tableData.length;
  console.log(currentPosts);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const paginationRange = usePagination({
    totalPosts,
    currentPosts,
  });

  // if (currentPage === 0 || paginationRange?.length < 2) {
  //   return null;
  // }

  const onNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const onPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange?.length - 1];

  return (
    <PaginationContext.Provider
      value={{
        paginate,
        totalPosts,
        currentPosts,
        postsPerPage,
        paginationRange,
        lastPage,
        onNext,
        onPrevious,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default DisplayPagination;
