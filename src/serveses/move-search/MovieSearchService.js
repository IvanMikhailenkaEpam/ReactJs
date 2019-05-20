/* eslint-disable import/prefer-default-export */
export class MovieSearchService {
  static sortFilmsByParam(films, param) {
    if (!films || !param || param.length < 1) {
      return films;
    }
    return films.sort((a, b) => {
      if (a[param] > b[param]) {
        return 1;
      }
      return -1;
    });
  }
}
