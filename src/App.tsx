import React from "react";
import InputButton from "./components/searchField/InputButton";
import InputField from "./components/searchField/InputField";
import SearchField from "./components/searchField/SearchField";
import "./App.css";

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
