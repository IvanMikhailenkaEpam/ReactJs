import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import SearchResults from '../components/search-result/SearchResults';
import SelectedFilm from '../components/navbar/seleced-film/SelectedFilm';
import Navbar from '../components/navbar/Navbar';
import SortBarInfo from '../components/sort-bar/sort-bar-info/SortBarInfo';
import SortBar from '../components/sort-bar/SortBar';
import MovieSearch from './MovieSearch';
import {
  getFilmRequest,
  searchFilmRequest,
} from '../store/movie-search/actions';

class MovieSelected extends Component {
  componentDidMount() {
    const { id, searchValue, searchBy } = this.props;
    this.props.getFilmRequest(id);
    this.props.searchFilmRequest(searchValue, searchBy);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { id, searchValue, searchBy } = this.props;
    const oldId = prevProps.id;
    if (oldId !== id) {
      this.props.getFilmRequest(id);
      this.props.searchFilmRequest(searchValue, searchBy);
    }
  }


  render() {
    const { film, films } = this.props;
    if (!film || !film.genres) {
      return <MovieSearch />;
    }
    const sortBarInfo = `Films by ${film.genres[0]} genre`;

    return (
      <div>
        <Navbar>
          <SelectedFilm film={film} />
        </Navbar>
        <SortBar>
          <SortBarInfo text={sortBarInfo} />
        </SortBar>
        <SearchResults films={films} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match ? ownProps.match.params.id : '',
  searchValue: (state.movieSearch.film && state.movieSearch.film.genres) ? state.movieSearch.film.genres[0] : '',
  searchBy: 'genres',
  films: state.movieSearch.films,
  film: state.movieSearch.film,
});
const mapDispatchToProps = {
  searchFilmRequest,
  getFilmRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSelected);
