
const useDisplayArrows = ({paginationRange}:{paginationRange: (string | number)[] | undefined}) => {
    //Get last number from the paginationRange array if it exist
    const lastPage = paginationRange?.at(-1) ? paginationRange.at(-1) : 1;
    //If there are 3 dots in the paginationRange on the 1st index get it
    const displayFirstArrow = paginationRange?.[1] ? paginationRange[1] : null;
  
  return [lastPage,displayFirstArrow];
};

export default useDisplayArrows;
