import React, { Component } from 'react';
import './SearchArea.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSearchBy, setSearchValue } from '../../../store/movie-search/actions';

class SearchArea extends Component {
  static propTypes = {
    searchValue: PropTypes.string.isRequired,
    searchBy: PropTypes.string.isRequired,
    setSearchValueConnect: PropTypes.func.isRequired,
    setSearchByConnect: PropTypes.func.isRequired,
  };

  constructor(state) {
    super(state);
    const {
      searchValue, searchBy, setSearchValueConnect, setSearchByConnect,
    } = this.props;
    setSearchValueConnect(searchValue || '');
    setSearchByConnect(searchBy || 'title');
  }

  getSearchURL() {
    const { searchValue, searchBy } = this.props;
    if (!searchValue || searchValue === '') {
      return '/';
    }
    return `/search?searchBy=${searchBy}&searchValue=${
      searchValue}`;
  }

  setSearchValue(text) {
    const { setSearchValueConnect } = this.props;
    setSearchValueConnect(text);
  }

  searchByParamClick(event, param) {
    const { setSearchByConnect } = this.props;
    setSearchByConnect(param);
  }

  render() {
    const { searchValue, searchBy } = this.props;
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
              value={searchValue || ''}
              onChange={event => this.setSearchValue(event.target.value)}
            />
          </form>
        </div>

        <div className="col-4 mt-3 mb-4 ">
          <span className="mr-3 white font-weight-bold">SEARCH BY</span>
          <button
            id="titleBtn"
            className={`btn my-2 my-sm-0 white ${searchBy === 'title'
              ? 'button-pink' : 'button-black'}`}
            type="button"
            onClick={event => this.searchByParamClick(event, 'title')}
          >
            TITLE
          </button>
          <button
            id="genreBtn"
            className={`btn my-2 ml-2 my-sm-0 white ${searchBy === 'genres'
              ? 'button-pink' : 'button-black'}`}
            type="button"
            onClick={event => this.searchByParamClick(event, 'genres')}
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

const mapStateToProps = state => ({
  searchValue: state.movieSearch.searchValue,
  searchBy: state.movieSearch.searchBy,
});
const mapDispatchToProps = {
  setSearchValueConnect: setSearchValue,
  setSearchByConnect: setSearchBy,
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchArea);
