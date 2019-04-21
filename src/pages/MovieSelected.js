import React, { Component } from 'react';
import Footer from '../components/footer/Footer';
import SearchResults from '../components/search-result/SearchResults';
import SelectedFilm from '../components/navbar/seleced-film/SelectedFilm';
import Navbar from "../components/navbar/Navbar";
import SortBarInfo from "../components/sort-bar/sort-bar-info/SortBarInfo";
import SortBar from "../components/sort-bar/SortBar";
import {MovieSearchService} from "../serveses/move-search/MovieSearchService";

class MovieSelected extends Component {
  render() {
    const film = MovieSearchService.getFilmById(this.props.match.params.id);
    let films = MovieSearchService.filterFilms('genre', film.genre).filter(value => value.id !== film.id );
    let sortBarInfo = "Films by " + film.genre + " genre";

    return (
      <div>
        <Navbar children={<SelectedFilm film={film}/>} />
        <SortBar info={<SortBarInfo text={sortBarInfo}/>} />
        <SearchResults films={films}/>
        <Footer />
      </div>
    );
  }
}

export default MovieSelected;
