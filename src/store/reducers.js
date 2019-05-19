import { combineReducers } from 'redux-loop';
import { routerReducer } from 'react-router-redux';
import { movieSearchReducer } from './movie-search/reducers';

const rootReducer = combineReducers({
  routing: routerReducer,
  movieSearch: movieSearchReducer,
});

export default rootReducer;
