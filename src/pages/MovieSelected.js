import React, { Component } from 'react';
import Footer from '../components/footer/Footer';
import SortBy from '../components/sort-by/SortBy';
import SearchResults from '../components/search-result/SearchResults';
import SelectedFilm from '../components/seleced-film/SelectedFilm';
import SortByGenre from '../components/sort-by-genre/SortByGenre';

class MovieSelected extends Component {
  render() {
    return (
      <div>
        <SelectedFilm />
        <SortByGenre />
        <SearchResults />
        <Footer />
      </div>
    );
  }
}

export default MovieSelected;
