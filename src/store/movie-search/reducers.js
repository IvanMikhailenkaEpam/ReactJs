import {CHANGE_SEARCH_PARAM, CHANGE_SEARCH_TEXT} from "./actions";

const defaultState = {
  searchText: "",
  searchParam: "title"
};

export const movieSearchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload
      };
    case CHANGE_SEARCH_PARAM:
      return {
        ...state,
        searchParam: action.payload
      };
    default:
      return {...state}
  }
};
