import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import Navbar from '../components/navbar/Navbar';
import SortBarInfo from '../components/sort-bar/sort-bar-info/SortBarInfo';
import SearchResults from '../components/search-result/SearchResults';
import SearchArea from '../components/navbar/search-area/SearchArea';
import SortBar from '../components/sort-bar/SortBar';
import SortByOptions from '../components/sort-bar/sort-by-options/SortByOptions';
import {
  setSearchBy,
  setSearchValue,
  getFilmRequest,
  getFilmsRequest,
  searchFilmRequest,
  sortFilmByParam,
} from '../store/movie-search/actions';

const queryString = require('query-string');

class MovieSearch extends Component {
  componentDidMount() {
    const { searchValue, searchBy } = this.props;
    if (searchValue && searchValue.length > 0) {
      this.props.searchFilmRequest(searchValue, searchBy);
    } else {
      this.props.getFilmsRequest();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { searchValue, searchBy } = this.props;
    const oldSearchValue = prevProps.searchValue;
    const oldSearchBy = prevProps.searchBy;
    if (searchValue !== oldSearchValue || searchBy !== oldSearchBy) {
      this.props.searchFilmRequest(searchValue, searchBy);
    }
  }

  handleSortByParamClicked = (event, sortParam) => {
    const { films } = this.props;
    this.props.sortFilmByParam(films, sortParam);
    this.forceUpdate();
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
  setSearchValue,
  getFilmsRequest,
  searchFilmRequest,
  getFilmRequest,
  sortFilmByParam,
  setSearchBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
