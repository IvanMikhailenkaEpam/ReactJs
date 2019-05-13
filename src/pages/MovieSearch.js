import React, {Component} from 'react';
import Navbar from '../components/navbar/Navbar';
import SortBarInfo from '../components/sort-bar/sort-bar-info/SortBarInfo';
import SearchResults from '../components/search-result/SearchResults';
import SearchArea from "../components/navbar/search-area/SearchArea";
import SortBar from "../components/sort-bar/SortBar";
import SortByOptions from "../components/sort-bar/sort-by-options/SortByOptions";
import {MovieSearchService} from "../serveses/move-search/MovieSearchService";
import {
  setSearchBy,
  setSearchValue,
  getFilmRequest,
  getFilmsRequest,
  searchFilmRequest,
  sortFilmByParam
} from "../store/movie-search/actions";
import connect from "react-redux/es/connect/connect";

const queryString = require("query-string");

class MovieSearch extends Component {

  componentDidMount() {
    const {searchValue, searchBy} = this.props;
    if (searchValue && searchValue.length > 0) {
      console.log("if");
      this.props.searchFilmRequest(searchValue, searchBy);
    } else {
      console.log("else");
      this.props.getFilmsRequest();
    }
  }

  handleSortByParamClicked = (event, sortParam) => {
    let {films} = this.props;
    this.props.sortFilmByParam(films, sortParam);
    this.forceUpdate()
  };


  render() {
    console.log("1")
    let {films, searchValue, searchBy} = this.props;
    let sortBarInfo = films.length + " films found";

    return (
      <React.Fragment>
        <Navbar>
          <SearchArea searchValue={searchValue} searchBy={searchBy}/>
        </Navbar>
        <SortBar>
          <SortBarInfo text={sortBarInfo}/>
          <SortByOptions onClick={this.handleSortByParamClicked}/>
        </SortBar>
        <SearchResults films={films}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const query = queryString.parse(ownProps.location ? ownProps.location.search : "");
  return {
    searchValue: query.searchValue,
    searchBy: query.searchBy,
    films: state.movieSearch.films,
    film: state.movieSearch.film,
  }
};
const mapDispatchToProps = {
  setSearchValue: setSearchValue,
  getFilmsRequest: getFilmsRequest,
  searchFilmRequest: searchFilmRequest,
  getFilmRequest: getFilmRequest,
  sortFilmByParam: sortFilmByParam,
  setSearchBy: setSearchBy
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
