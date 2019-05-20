import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../components/navbar/Navbar';
import SortBarInfo from '../components/sort-bar/sort-bar-info/SortBarInfo';
import SearchResults from '../components/search-result/SearchResults';
import SearchArea from '../components/navbar/search-area/SearchArea';
import SortBar from '../components/sort-bar/SortBar';
import SortByOptions from '../components/sort-bar/sort-by-options/SortByOptions';
import {
  getFilmsRequest,
  searchFilmRequest, setFilms,
  sortFilmByParam,
} from '../store/movie-search/actions';
import {sortFilmsByParam} from "../selectors";

const queryString = require('query-string');

class MovieSearch extends Component {
  static propTypes = {
    searchValue: PropTypes.string,
    searchBy: PropTypes.string,
    searchFilmRequestConnect: PropTypes.func.isRequired,
    getFilmsRequestConnect: PropTypes.func.isRequired,
    sortFilmByParamConnect: PropTypes.func.isRequired,
    setFilmsConnect: PropTypes.func.isRequired,
    films: PropTypes.arrayOf(PropTypes.shape).isRequired,
  };

  static defaultProps = {
    searchValue: '',
    searchBy: 'title',
  };

  componentWillMount() {
    const {
      searchValue, searchBy, searchFilmRequestConnect, getFilmsRequestConnect,
    } = this.props;
    if (searchValue && searchValue.length > 0) {
      searchFilmRequestConnect(searchValue, searchBy);
    } else {
      getFilmsRequestConnect();
    }
  }

  componentDidUpdate(prevProps) {
    const { searchValue, searchBy, searchFilmRequestConnect } = this.props;
    const oldSearchValue = prevProps.searchValue;
    const oldSearchBy = prevProps.searchBy;
    if (searchValue !== oldSearchValue || searchBy !== oldSearchBy) {
      searchFilmRequestConnect(searchValue, searchBy);
    }
  }

  handleSortByParamClicked = (event, sortParam) => {
    const { films, setFilmsConnect } = this.props;
    setFilmsConnect(sortFilmsByParam({sortParam: sortParam, films: films}));
  };


  render() {
    const { films, searchValue, searchBy } = this.props;
    const sortBarInfo = `${films.length} films found`;

    return (
      <React.Fragment>
        <Navbar>
          <SearchArea searchValue={searchValue} searchBy={searchBy} />
        </Navbar>
        <SortBar>
          <SortBarInfo text={sortBarInfo} />
          <SortByOptions onClick={this.handleSortByParamClicked} />
        </SortBar>
        <SearchResults films={films} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const query = queryString.parse(ownProps.location ? ownProps.location.search : '');
  return {
    searchValue: query.searchValue,
    searchBy: query.searchBy,
    films: state.movieSearch.films,
    film: state.movieSearch.film,
  };
};
const mapDispatchToProps = {
  getFilmsRequestConnect: getFilmsRequest,
  searchFilmRequestConnect: searchFilmRequest,
  sortFilmByParamConnect: sortFilmByParam,
  setFilmsConnect: setFilms,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
