export const CHANGE_SEARCH_TEXT =  'CHANGE_SEARCH_TEXT';
export const CHANGE_SEARCH_PARAM =  'CHANGE_SEARCH_PARAM';


export const changeSearchText = text => ({
  type: CHANGE_SEARCH_TEXT,
  payload: text
});

export const changeSearchParam = type => ({
  type: CHANGE_SEARCH_PARAM,
  payload: type
});

