import { useContext, FC } from "react";
import { SearchContext } from "./SearchField";

const InputField: FC = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("InputField should be called in SearchField");
  }

  const { searchForEntries } = context;

  return (
    <input
      style={styles.input}
      type="text"
      name="search"
      required
      placeholder="Search for entry"
      onChange={(e) => searchForEntries(e.target.value)}
    />
  );
};

export default InputField;

const styles = {
  input: {
    borderRadius: "10px",
    borderColor: "rgb(168, 168, 168)",
    marginTop: " 0.5rem",
  },
};
