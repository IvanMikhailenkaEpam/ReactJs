import {createSelector} from 'reselect'
import {MovieSearchService} from "../serveses/move-search/MovieSearchService";

const getSortParam = (state) => state;

export const sortFilmsByParam = createSelector(
  [getSortParam],
  (state) => {
    return MovieSearchService.sortFilmsByParam(state.films, state.sortParam);
  }
);
