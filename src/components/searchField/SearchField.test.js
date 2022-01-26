import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import InputField from "./InputField";
import { SearchContext } from "./SearchField";

describe("Check if navbar is renderd", () => {
  it("input field for search should be present on page", () => {
    render(
      <SearchContext.Provider value={{}}>
        <InputField />
      </SearchContext.Provider>
    );
    const input = screen.queryByPlaceholderText(/Search for entry/i);
    expect(input).toBeInTheDocument();
  });
});
