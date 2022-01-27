
const useChangePage = ({setCurrentPage, currentPage}:{setCurrentPage:(a:number) => void, currentPage:number}) => {
    //useChangePage
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const onNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const onPrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  return [paginate,onNext,onPrevious];
};

export default useChangePage;
