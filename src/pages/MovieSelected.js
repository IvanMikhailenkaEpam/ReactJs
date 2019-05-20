import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
  static propTypes = {
    id: PropTypes.string.isRequired,
    film: PropTypes.shape,
    searchValue: PropTypes.string,
    searchBy: PropTypes.string,
    searchFilmRequestConnect: PropTypes.func.isRequired,
    getFilmRequestConnect: PropTypes.func.isRequired,
    films: PropTypes.arrayOf(PropTypes.shape).isRequired,
  };

  static defaultProps = {
    searchValue: '',
    searchBy: 'title',
    film: {},
  };

  componentWillMount() {
    const {
      id, searchValue, searchBy, getFilmRequestConnect, searchFilmRequestConnect,
    } = this.props;
    getFilmRequestConnect(id);
    searchFilmRequestConnect(searchValue, searchBy);
  }

  componentDidUpdate(prevProps) {
    const {
      id, searchValue, searchBy, getFilmRequestConnect, searchFilmRequestConnect,
    } = this.props;
    const oldId = prevProps.id;
    if (oldId !== id) {
      getFilmRequestConnect(id);
      searchFilmRequestConnect(searchValue, searchBy);
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
  searchFilmRequestConnect: searchFilmRequest,
  getFilmRequestConnect: getFilmRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSelected);
