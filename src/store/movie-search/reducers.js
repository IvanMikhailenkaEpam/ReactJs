import { all } from 'redux-saga/effects';
import {
  CHANGE_SEARCH_PARAM,
  CHANGE_SEARCH_TEXT,
  GET_FILM_ERROR,
  GET_FILM_REQUEST,
  GET_FILMS_SUCCESS,
  GET_FILMS_REQUEST,
  SEARCH_FILMS_REQUEST,
  GET_FILM_SUCCESS,
  SORT_FILM_BY_PARAM, watchGetFilms, watchGetFilmById, watchSearchFilmByQuery,
} from './actions';
import { MovieSearchService } from '../../serveses/move-search/MovieSearchService';


export function* filmsSaga() {
  yield all([
    watchGetFilms(),
    watchGetFilmById(),
    watchSearchFilmByQuery(),
  ]);
}

const defaultState = {
  searchValue: '',
  searchBy: 'title',
  films: [],
  selectedFilm: {},
  loading: false,
};

export const movieSearchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_FILM_REQUEST:
    case GET_FILMS_REQUEST:
    case SEARCH_FILMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_SEARCH_TEXT:
      return {
        ...state,
        searchValue: action.payload,
      };
    case CHANGE_SEARCH_PARAM:
      return {
        ...state,
        searchBy: action.payload,
      };
    case GET_FILMS_SUCCESS:
      return {
        ...state,
        films: action.payload,
        loading: false,
      };
    case GET_FILM_SUCCESS:
      return {
        ...state,
        film: action.payload,
        loading: false,
      };
    case GET_FILM_ERROR:
      return {
        ...state,
        loading: false,
      };
    case SORT_FILM_BY_PARAM:
      return {
        ...state,
        films: MovieSearchService.sortFilmsByParam(action.payload.films, action.payload.sortParam),
      };
    default:
      return { ...state };
  }
};
