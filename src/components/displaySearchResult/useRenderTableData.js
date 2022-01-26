import React, { useContext } from "react";
import { GlobalContext } from "../../context/Provider";

const useRenderTableData = ({ handleEditEntryClick }) => {
  const {
    searchState: { tableData = [] },
  } = useContext(GlobalContext);

  const renderTabledata = () => {
    return tableData.map(({ _id, firstName, lastName, phoneNumber }) => (
      <tr key={_id}>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{phoneNumber}</td>
        <td>
          <button
            className="table_button"
            onClick={() =>
              handleEditEntryClick(_id, firstName, lastName, phoneNumber)
            }
          >
            Edit Entry
          </button>
        </td>
      </tr>
    ));
  };
  return [renderTabledata];
};

export default useRenderTableData;
