import {filmModels} from "../../models/FilmModel";

export class MovieSearchService {
  static filterFilms(searchBy, searchValue) {
    if (searchBy === 'genre') {
      return filmModels.filter(film => film.genre === searchValue);
    }
    if (searchBy === 'title') {
      return filmModels.filter(film => film.title === searchValue);
    }
    return filmModels;
  }

  static getFilmById(id) {
    return filmModels.find(film => film.id.toString() === id.toString());
  }
}
