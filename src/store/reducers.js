import { combineReducers } from 'redux-loop';
import { routerReducer } from 'react-router-redux';
import { movieSearchReducer } from './movie-search/reducers';


export default combineReducers({
  routing: routerReducer,
  movieSearch: movieSearchReducer,
});
