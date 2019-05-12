import {combineReducers} from "redux-loop";
import {movieSearchReducer} from "./movie-search/reducers";


export default combineReducers({
  movieSearch: movieSearchReducer
});
