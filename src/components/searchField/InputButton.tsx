import React, { ReactNode, useContext } from "react";
import { SearchContext } from "./SearchField";

const InputButton = ({ children }: { children: ReactNode }) => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("InputButton should be called in SearchField");
  }

  const { searchForEntries } = context;

  return (
    <button className="" onClick={searchForEntries}>
      {children}
    </button>
  );
};

export default InputButton;
