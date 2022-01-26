import {
  GET_SEARCH_RESULT_FOR_TABLE,
  GET_SEARCH_RESULT_FROM_SERVER,
} from "../constants";
import { State } from "../Provider";



type ChannelList = any
export type Action = 
| {type: typeof GET_SEARCH_RESULT_FROM_SERVER, payload: ChannelList} 
| {type:  typeof GET_SEARCH_RESULT_FOR_TABLE, payload: {tableData: any}}

const searchReducer = (state: State, action:Action) => {
  const { data, tableData, editEntryResult } = action.payload;
  switch (action.type) {
    case GET_SEARCH_RESULT_FROM_SERVER:
      return { ...state, data};
    case GET_SEARCH_RESULT_FOR_TABLE:
      return { ...state, tableData };
    default:
      return state;
  }
};

export default searchReducer;
