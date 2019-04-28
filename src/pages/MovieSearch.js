import React, {Component} from 'react';
import Navbar from '../components/navbar/Navbar';
import SortBarInfo from '../components/sort-bar/sort-bar-info/SortBarInfo';
import SearchResults from '../components/search-result/SearchResults';
import SearchArea from "../components/navbar/search-area/SearchArea";
import SortBar from "../components/sort-bar/SortBar";
import SortByOptions from "../components/sort-bar/sort-by-options/SortByOptions";
import {MovieSearchService} from "../serveses/move-search/MovieSearchService";

const queryString = require("query-string");

class MovieSearch extends Component {

  state = {
    sortParam: ""
  };

  handleSortByParamClicked = (event, sortParam) => {
    this.setState({
      sortParam: sortParam
    });
  };


  render() {
    const query = queryString.parse(this.props.location ? this.props.location.search : "");
    let films = MovieSearchService.filterFilms(query.searchBy, query.searchValue);
    films = MovieSearchService.sortFilmsByParam(films, this.state.sortParam);
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

export default MovieSearch;
