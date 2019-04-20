import React, { Component } from 'react';
import Footer from '../components/footer/Footer';
import SearchResults from '../components/search-result/SearchResults';
import SelectedFilm from '../components/navbar/seleced-film/SelectedFilm';
import SortByOptions from '../components/sort-bar/sort-by-options/SortByOptions';
import Navbar from "../components/navbar/Navbar";
import SortBarInfo from "../components/sort-bar/sort-bar-info/SortBarInfo";
import SortBar from "../components/sort-bar/SortBar";

class MovieSelected extends Component {
  render() {
    return (
      <div>
        <Navbar children={<SelectedFilm/>} />
        <SortBar info={<SortBarInfo text={"Films by Drama genre"}/>} />
        <SearchResults />
        <Footer />
      </div>
    );
  }
}

export default MovieSelected;
