import {filmModels} from "../../models/FilmModel";

export class MovieSearchService {
  static filterFilms(searchBy, searchValue) {
    if (searchBy && searchBy.length > 0) {
      return filmModels.filter(film => film[searchBy] === searchValue);
    }
    return filmModels;
  }

  static getFilmById(id) {
    return filmModels.find(film => film.id.toString() === id.toString());
  }

  static sortFilmsByParam(films, param) {
    console.log(param)
    if(!films || !param || param.length < 1){
      return films;
    }
    return films.sort((a, b) => {
      if (a[param] > b[param]) {
        return 1;
      } else {
        return -1;
      }
    })
  }
}
