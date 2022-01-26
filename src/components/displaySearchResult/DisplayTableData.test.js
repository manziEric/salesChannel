import React from "react";
import { render, screen } from "@testing-library/react";
import { TableContext } from "./DisplayTableData";
import Table from "./Table";

describe("Check if Table renders", () => {
  it("should be visible when renderd", () => {
    const renderTabledata = () => {
      return null;
    };
    render(
      <TableContext.Provider value={{ renderTabledata }}>
        <Table />
      </TableContext.Provider>
    );
    const nullPopover = screen.queryByText(/First Name/i);
    expect(nullPopover).toBeVisible();
  });
});
