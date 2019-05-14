import { Cmd, loop } from 'redux-loop';
import {
  CHANGE_SEARCH_PARAM,
  CHANGE_SEARCH_TEXT,
  GET_FILM_ERROR,
  GET_FILM_REQUEST,
  GET_FILMS_SUCCESS,
  GET_FILMS_REQUEST,
  getFilm,
  getFilms,
  getFilmsError,
  getFilmsSuccess,
  SEARCH_FILMS_REQUEST,
  searchFilmByQuery,
  getFilmSuccess,
  GET_FILM_SUCCESS,
  SORT_FILM_BY_PARAM,
} from './actions';
import MovieSearch from '../../pages/MovieSearch';
import { MovieSearchService } from '../../serveses/move-search/MovieSearchService';

const defaultState = {
  searchValue: '',
  searchBy: 'title',
  films: [],
  selectedFilm: {},
};

export const movieSearchReducer = (state = defaultState, action) => {
  switch (action.type) {
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
    case GET_FILMS_REQUEST:
      return loop(state,
        Cmd.run(getFilms, {
          successActionCreator: getFilmsSuccess,
          failActionCreator: getFilmsError,
          args: [action.payload],
        }));
    case GET_FILM_REQUEST:
      return loop(state,
        Cmd.run(getFilm, {
          successActionCreator: getFilmSuccess,
          failActionCreator: getFilmsError,
          args: [action.payload],
        }));
    case SEARCH_FILMS_REQUEST:
      return loop(state,
        Cmd.run(searchFilmByQuery, {
          successActionCreator: getFilmsSuccess,
          failActionCreator: getFilmsError,
          args: [action.payload],
        }));
    case GET_FILMS_SUCCESS:
      return {
        ...state,
        films: action.payload,
      };
    case GET_FILM_SUCCESS:
      return {
        ...state,
        film: action.payload,
      };
    case GET_FILM_ERROR:
      return {
        ...state,
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
