export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';
export const CHANGE_SEARCH_PARAM = 'CHANGE_SEARCH_PARAM';
export const GET_FILMS_REQUEST = 'GET_FILMS_REQUEST';
export const GET_FILM_REQUEST = 'GET_FILM_REQUEST';
export const SEARCH_FILMS_REQUEST = 'SEARCH_FILMS_REQUEST';
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
export const GET_FILM_SUCCESS = 'GET_FILM_SUCCESS';
export const GET_FILM_ERROR = 'GET_FILM_ERROR';
export const SORT_FILM_BY_PARAM = 'SORT_FILM_BY_PARAM';

export const changeSearchText = text => ({
  type: CHANGE_SEARCH_TEXT,
  payload: text
});

export const changeSearchParam = type => ({
  type: CHANGE_SEARCH_PARAM,
  payload: type
});

export const getFilmsRequest = () => ({
  type: GET_FILMS_REQUEST
});

export const sortFilmByParam = (films, sortParam) => ({
  type: SORT_FILM_BY_PARAM,
  payload: {
    films: films,
    sortParam: sortParam
  }
});

export const searchFilmRequest = (searchValue, searchBy) => ({
  type: SEARCH_FILMS_REQUEST,
  payload: {
    search: searchValue,
    searchBy: searchBy
  }
});

export const getFilmRequest = (id) => ({
  type: GET_FILM_REQUEST,
  payload: id
});

export const getFilmsSuccess = response => ({
  type: GET_FILMS_SUCCESS,
  payload: response.data
});
export const getFilmSuccess = response => ({
  type: GET_FILM_SUCCESS,
  payload: response
});

export const getFilmsError = () => ({
  type: GET_FILM_ERROR,
});

export const getFilms = () => fetch("https://reactjs-cdp.herokuapp.com/movies/").then((response) => response.json());

export const searchFilmByQuery = (query) => {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${query.search}&searchBy=${query.searchBy}`)
    .then((response) => response.json())
};

export const getFilm = (id) => fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`).then((response) => response.json());

