import { createStore } from 'redux';
import rootReducer from "./reducers";
import {install} from "redux-loop";

export default (initialState) => {
  return createStore(rootReducer, initialState, install());
};
