import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import SortBy from '../components/sort-by/SortBy';
import SearchResults from '../components/search-result/SearchResults';

class MovieSearch extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SortBy />
        <SearchResults />
        <Footer />
      </div>
    );
  }
}

export default MovieSearch;
