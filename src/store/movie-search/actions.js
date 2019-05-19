import { call, put, takeLatest } from 'redux-saga/effects';

export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';
export const CHANGE_SEARCH_PARAM = 'CHANGE_SEARCH_PARAM';
export const GET_FILMS_REQUEST = 'GET_FILMS_REQUEST';
export const GET_FILM_REQUEST = 'GET_FILM_REQUEST';
export const SEARCH_FILMS_REQUEST = 'SEARCH_FILMS_REQUEST';
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
export const GET_FILM_SUCCESS = 'GET_FILM_SUCCESS';
export const GET_FILM_ERROR = 'GET_FILM_ERROR';
export const SORT_FILM_BY_PARAM = 'SORT_FILM_BY_PARAM';

export const setSearchValue = text => ({
  type: CHANGE_SEARCH_TEXT,
  payload: text,
});

export const setSearchBy = type => ({
  type: CHANGE_SEARCH_PARAM,
  payload: type,
});

export const getFilmsRequest = () => ({
  type: GET_FILMS_REQUEST,
});

export const sortFilmByParam = (films, sortParam) => ({
  type: SORT_FILM_BY_PARAM,
  payload: {
    films,
    sortParam,
  },
});

export const searchFilmRequest = (searchValue, searchBy) => ({
  type: SEARCH_FILMS_REQUEST,
  payload: {
    search: searchValue,
    searchBy,
  },
});

export const getFilmRequest = id => ({
  type: GET_FILM_REQUEST,
  payload: id,
});

export const getFilmsSuccess = response => ({
  type: GET_FILMS_SUCCESS,
  payload: response.data,
});
export const getFilmSuccess = response => ({
  type: GET_FILM_SUCCESS,
  payload: response,
});

export const getFilmsError = () => ({
  type: GET_FILM_ERROR,
});

export function* getFilms() {
  const response = yield call(fetch, 'https://reactjs-cdp.herokuapp.com/movies/');
  const films = yield response.json();

  yield put(getFilmsSuccess(films));
}
export function* watchGetFilms() {
  yield takeLatest(GET_FILMS_REQUEST, getFilms);
}

export function* getFilm(action) {

  const response = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies/${action.payload}`);
  const film = yield response.json();

  yield put(getFilmSuccess(film));
}
export function* watchGetFilmById() {
  yield takeLatest(GET_FILM_REQUEST, getFilm);
}

export function* searchFilmByQuery(action) {
  const response = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies?search=${action.payload.search}&searchBy=${action.payload.searchBy}`);
  const films = yield response.json();

  yield put(getFilmsSuccess(films));
}
export function* watchSearchFilmByQuery() {
  yield takeLatest(SEARCH_FILMS_REQUEST, searchFilmByQuery);
}
