import DisplayPagination from "./components/pagination/DisplayPagination";
import Pagination from "./components/pagination/Pagination";
import Posts from "./components/pagination/Posts";
import InputField from "./components/searchField/InputField";
import SearchField from "./components/searchField/SearchField";

function App() {
  return (
    <div style={styles.container}>
      <div>Channel:</div>
      <SearchField>
        <InputField />
      </SearchField>
      <div style={styles.pagination}>
        <DisplayPagination>
          <Posts />
          <Pagination />
        </DisplayPagination>
      </div>
    </div>
  );
}

export default App;

const styles = {
  container: {
    marginTop: "5rem",
    textAlign: "center" as const,
  },
  pagination: {
    marginTop: "1rem",
  },
};
