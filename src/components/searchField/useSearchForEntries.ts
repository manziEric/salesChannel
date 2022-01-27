import React, {  useContext } from "react";
import { GET_SEARCH_RESULT_FOR_TABLE } from "../../context/constants";
import { GlobalContext } from "../../context/Provider";

interface Data {
  key: string;
  label: string;
  country: string;
}

const useSearchForEntries = () => {
  const {
    dispatch,
    searchState: { data },
  } = useContext(GlobalContext);

  const searchForEntries = (e: string ) => {
    
    const filterdData: Data[] = data?.filter((res: Data) => {
     const {key, label, country} = res

      const search =
      key.includes(e) ||
      label.includes(e) ||
      country.includes(e);

      if (search && e !== "") {
        return res;
      }
    });
   
    dispatch({
      type: GET_SEARCH_RESULT_FOR_TABLE,
      payload: { tableData: filterdData },
    });
  };
  return [searchForEntries];
};

export default useSearchForEntries;
