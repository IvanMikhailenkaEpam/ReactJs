import {combineReducers} from "redux-loop";
import {movieSearchReducer} from "./movie-search/reducers";
import {routerReducer} from "react-router-redux";


export default combineReducers({
  routing: routerReducer,
  movieSearch: movieSearchReducer
});
