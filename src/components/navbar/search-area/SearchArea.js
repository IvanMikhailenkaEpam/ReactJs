import React, {Component} from 'react';
import './SearchArea.css';
import {Link} from "react-router-dom";

class SearchArea extends Component {

  state = {
    isGenreSelected: false,
    isTitleSelected: true,
    searchText: ""
  };

  render() {
    return (
      <div className="row mt-1 w-100">
        <div className="col">
          <span className="pink font-weight-bold">netflixroulette</span>
        </div>
        <div className="col-12 mt-5 white font-weight-bold"><span>FIND YOUR MOVIE</span></div>
        <div className="col-12">
          <form className="col-12 form-inline my-2 my-lg-0 pl-0">
            <input
              className="form-control mr-sm-2 white search-aria"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={this.state.searchText}
              onChange={event => this.setState({searchText: event.target.value})}
            />
          </form>
        </div>

        <div className="col-4 mt-3 mb-4 ">
          <span className="mr-3 white font-weight-bold">SEARCH BY</span>
          <button
            className={"btn my-2 my-sm-0 white " + (this.state.isTitleSelected ? "button-pink" : "button-black")}
            type="button" onClick={event => this.searchByTitleClick(event)}
          >
            TITLE
          </button>
          <button
            className={"btn my-2 ml-2 my-sm-0 white " + (this.state.isGenreSelected ? "button-pink" : "button-black")}
            type="button" onClick={event => this.searchByGenreClick(event)}
          >
            GENRE
          </button>
        </div>
        <div className="col-2 mt-3 mb-4 ml-auto search-button">
          <Link to={this.getSearchURL()}>
            <button
              className="btn my-2 my-sm-0 white button-pink"
              type="button" onClick={event => this.onSearchClick(event)}
            >
              SEARCH
            </button>
          </Link>
        </div>
      </div>
    );
  }

  searchByTitleClick(event) {
    if (!this.state.isTitleSelected) {
      this.setState({
        isTitleSelected: true,
        isGenreSelected: false
      });
    }
  }

  searchByGenreClick(event) {
    if (!this.state.isGenreSelected) {
      this.setState({
        isTitleSelected: false,
        isGenreSelected: true
      });
    }
  }

  onSearchClick(event) {
    console.log(this.state.searchText)
  }

  getSearchURL() {
    if (this.state.isGenreSelected && this.state.searchText !== "") {
      return "/search?searchBy=genre&searchValue=" + this.state.searchText;
    }
    if (this.state.isTitleSelected && this.state.searchText !== "") {
      return "/search?searchBy=title&searchValue=" + this.state.searchText;
    }
    return "/"
  }
}

export default SearchArea;
