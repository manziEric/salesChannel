import React, { useEffect, createContext, useContext, ReactNode } from "react";
import { GlobalContext } from "../../context/Provider";
import { GET_SEARCH_RESULT_FROM_SERVER } from "../../context/constants";
import useSearchForEntries from "./useSearchForEntries";
import channelList from "../../channel-list";

export const SearchContext = createContext<any>(null);

interface ServerData {
  key: string;
  label: string;
  country: string;
}

const SearchField = ({ children }: { children: ReactNode }) => {
  const { dispatch } = useContext(GlobalContext);
  const [searchForEntries] = useSearchForEntries();

  useEffect(() => {
    const fetchDataFromServer = () => {
      const serverData: ServerData[] = channelList;
      console.log(serverData);
      if (serverData) {
        dispatch({
          type: GET_SEARCH_RESULT_FROM_SERVER,
          payload: { data: serverData },
        });
      }
    };

    fetchDataFromServer();
  }, [dispatch]);

  return (
    <SearchContext.Provider
      value={{
        searchForEntries,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchField;
