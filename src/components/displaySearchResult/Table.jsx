import React, { useContext } from "react";
import { TableContext } from "./DisplayTableData";
import "../../styles/Table.css";

const Table = () => {
  const { renderTabledata } = useContext(TableContext);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Edit Entry</th>
        </tr>
      </thead>
      <tbody>{renderTabledata()}</tbody>
    </table>
  );
};

export default Table;
