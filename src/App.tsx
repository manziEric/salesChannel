import React from "react";
import "./App.css";
import InputButton from "./components/searchField/InputButton";
import InputField from "./components/searchField/InputField";
import SearchField from "./components/searchField/SearchField";

function App() {
  return (
    <div className="App">
      <div>Channel:</div>
      <SearchField>
        <InputField />
        <InputButton>Search</InputButton>
      </SearchField>
    </div>
  );
}

export default App;
