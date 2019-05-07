import {Cmd} from 'redux-loop';

function fetchPostsSuccess(response) {
  return {
    type: "FETCH_SUCCESS",
    payload: response.data
  }
}

function fetchPostsError() {
  return {
    type: "FETCH_ERROR"
  }
}

export const getAllFilms = Cmd.run(() => fetch("https://reactjs-cdp.herokuapp.com/movies/")
    .then((response) => response.json()),
  {successActionCreator: fetchPostsSuccess, failActionCreator: fetchPostsError}
);

export function searchFilm(query) {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?${query}`).then((response) => response.json());
}

export function getFilm(id) {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`).then((response) => response.json());
}
