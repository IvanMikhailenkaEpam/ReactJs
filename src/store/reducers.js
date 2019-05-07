import {combineReducers} from "redux";
import {movieSearchReducer} from "./movie-search/reducers";


export default combineReducers({
  movieSearch: movieSearchReducer
});
