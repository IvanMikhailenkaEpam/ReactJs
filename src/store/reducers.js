import { routerReducer } from 'react-router-redux';
import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import { filmsSaga, movieSearchReducer } from './movie-search/reducers';

function* rootSaga() {
  yield all([
    filmsSaga(),
  ]);
}


const rootReducer = combineReducers({
  routing: routerReducer,
  movieSearch: movieSearchReducer,
});

export {
  rootReducer,
  rootSaga,
};
