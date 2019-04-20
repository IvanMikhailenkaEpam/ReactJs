import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import SortBarInfo from '../components/sort-bar/sort-bar-info/SortBarInfo';
import SearchResults from '../components/search-result/SearchResults';
import SearchArea from "../components/navbar/search-area/SearchArea";
import SortBar from "../components/sort-bar/SortBar";
import SortByOptions from "../components/sort-bar/sort-by-options/SortByOptions";

class MovieSearch extends Component {
  render() {
    return (
      <div>
        <Navbar children={<SearchArea />}/>
          <SortBar info={<SortBarInfo text="7 fff fffdd"/>} options={<SortByOptions/>} />
        <SearchResults />
        <Footer />
      </div>
    );
  }
}

export default MovieSearch;
