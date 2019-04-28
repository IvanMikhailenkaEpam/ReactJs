import React, {Component} from 'react';
import './SearchArea.css';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class SearchArea extends Component {

  static propTypes = {
    searchValue: PropTypes.string
  };

  state = {
    selectedSearchParam: 'title',
    searchText:  this.props.searchValue ? this.props.searchValue: ""
  };

  searchByParamClick(event, param) {
    this.setState({
      selectedSearchParam: param
    });
  }

  getSearchURL() {
    if (!this.state.searchText || this.state.searchText === "") {
      return "/";
    }
    return "/search?searchBy=" + this.state.selectedSearchParam + "&searchValue="
      + this.state.searchText;
  }

  setSearchText(event) {
    this.setState({
      searchText: event.target.value
    });
  }

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
              onChange={event => this.setSearchText(event)}
            />
          </form>
        </div>

        <div className="col-4 mt-3 mb-4 ">
          <span className="mr-3 white font-weight-bold">SEARCH BY</span>
          <button id="titleBtn"
                  className={"btn my-2 my-sm-0 white " + (this.state.selectedSearchParam === 'title' ?
                    "button-pink" : "button-black")}
                  type="button" onClick={event => this.searchByParamClick(event, 'title')}
          >
            TITLE
          </button>
          <button id="genreBtn"
                  className={"btn my-2 ml-2 my-sm-0 white " + (this.state.selectedSearchParam === 'genre'
                    ? "button-pink" : "button-black")}
                  type="button" onClick={event => this.searchByParamClick(event, 'genre')}
          >
            GENRE
          </button>
        </div>
        <div className="col-2 mt-3 mb-4 ml-auto search-button">
          <Link to={this.getSearchURL()}>
            <button
              className="btn my-2 my-sm-0 white button-pink"
              type="button"
            >
              SEARCH
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SearchArea;
