import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EDIT_ENTRY_RESULT } from "../../context/constants";
import { GlobalContext } from "../../context/Provider";

const useHandleEditEntryClick = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(GlobalContext);

  const handleEditEntryClick = (_id, firstName, lastName, phoneNumber) => {
    dispatch({
      type: EDIT_ENTRY_RESULT,
      payload: { editEntryResult: { _id, firstName, lastName, phoneNumber } },
    });
    navigate("/editentry");
  };

  return [handleEditEntryClick];
};

export default useHandleEditEntryClick;
