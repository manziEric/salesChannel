import React, { createContext } from "react";
import useHandleEditEntryClick from "./useHandleEditEntryClick";
import useRenderTableData from "./useRenderTableData";

export const TableContext = createContext();

const DisplayTableData = ({ children }) => {
  const [handleEditEntryClick] = useHandleEditEntryClick();
  const [renderTabledata] = useRenderTableData({ handleEditEntryClick });

  return (
    <TableContext.Provider value={{ renderTabledata }}>
      {children}
    </TableContext.Provider>
  );
};

export default DisplayTableData;
