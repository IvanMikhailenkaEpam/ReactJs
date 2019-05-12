import React, {Component} from 'react';
import Navbar from '../components/navbar/Navbar';
import SortBarInfo from '../components/sort-bar/sort-bar-info/SortBarInfo';
import SearchResults from '../components/search-result/SearchResults';
import SearchArea from "../components/navbar/search-area/SearchArea";
import SortBar from "../components/sort-bar/SortBar";
import SortByOptions from "../components/sort-bar/sort-by-options/SortByOptions";
import {MovieSearchService} from "../serveses/move-search/MovieSearchService";
import {
  changeSearchText,
  getFilmRequest,
  getFilmsRequest,
  searchFilmRequest,
  sortFilmByParam
} from "../store/movie-search/actions";
import connect from "react-redux/es/connect/connect";

const queryString = require("query-string");

class MovieSearch extends Component {

  componentDidMount(){
    this.props.getFilmsRequest();
   // this.props.searchFilmRequest("The Dark Knight", "title");
   // this.props.getFilmRequest(155);
  }

  handleSortByParamClicked = (event, sortParam) => {
    let {films} = this.props;
    this.props.sortFilmByParam(films, sortParam);
    this.forceUpdate()
  };


  render() {
    let {films} = this.props;
    const query = queryString.parse(this.props.location ? this.props.location.search : "");
    let sortBarInfo = films.length + " films found";

    return (
      <React.Fragment>
        <Navbar>
          <SearchArea searchValue={query.searchValue}/>
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

const mapStateToProps = state => {
  return {
    searchText: state.movieSearch.searchText,
    films: state.movieSearch.films,
    film: state.movieSearch.film
  }
};
const mapDispatchToProps = {
  setSearchText: changeSearchText,
  getFilmsRequest: getFilmsRequest,
  searchFilmRequest: searchFilmRequest,
  getFilmRequest: getFilmRequest,
  sortFilmByParam: sortFilmByParam
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
