import React, { createContext, ReactNode, useReducer } from "react";
import searchReducer, { Action } from "./reducers/searchReducer";

const initialState = {
  searchResult: [],
  displayTable: false,
  data: [],
};

export type State = typeof initialState;
export type Dispatch = (action: Action) => void;
export const GlobalContext = createContext<{
  searchState: State;
  dispatch: Dispatch;
}>({ searchState: initialState, dispatch: () => {} });

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [searchState, dispatch] = useReducer(searchReducer, initialState);

  return (
    <GlobalContext.Provider value={{ searchState, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
