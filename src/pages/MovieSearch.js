import React, {Component} from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import SortBarInfo from '../components/sort-bar/sort-bar-info/SortBarInfo';
import SearchResults from '../components/search-result/SearchResults';
import SearchArea from "../components/navbar/search-area/SearchArea";
import SortBar from "../components/sort-bar/SortBar";
import SortByOptions from "../components/sort-bar/sort-by-options/SortByOptions";
import {MovieSearchService} from "../serveses/move-search/MovieSearchService";

const queryString = require("query-string");

class MovieSearch extends Component {
  render() {
    const query = queryString.parse(this.props.location.search);
    let films = MovieSearchService.filterFilms(query.searchBy, query.searchValue);
    let sortBarInfo = films.length + " films found";

    return (
      <div>
        <Navbar children={<SearchArea/>}/>
        <SortBar info={<SortBarInfo text={sortBarInfo}/>} options={<SortByOptions/>}/>
        <SearchResults films={films}/>
        <Footer/>
      </div>
    );
  }
}

export default MovieSearch;
