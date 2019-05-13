
export class MovieSearchService {

  static getFilmById(id) {
    return filmModels.find(film => film.id.toString() === id.toString());
  }

  static sortFilmsByParam(films, param) {
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
