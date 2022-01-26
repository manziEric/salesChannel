import React, { useContext, FC } from "react";
import { SearchContext } from "./SearchField";

const InputField: FC = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("InputField should be called in SearchField");
  }

  const { searchForEntries } = context;

  return (
    <input
      type="text"
      name="search"
      required
      placeholder="Search for entry"
      onChange={(e) => searchForEntries(e.target.value)}
    />
  );
};

export default InputField;
