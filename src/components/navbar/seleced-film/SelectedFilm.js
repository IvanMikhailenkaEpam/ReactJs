import React from 'react';
import './SelectedFilm.css';
import {Link} from 'react-router-dom';
import * as PropTypes from "prop-types";

const SelectedFilm = props => {
  const {film} = props;
  return (
    <div>
      <div className="row mt-1 w-100">
        <div className="col-4">
          <span className="pink font-weight-bold">netflixroulette</span>
        </div>
        <div className="col-auto ml-auto">
          <Link to="/">
            <button className="btn my-2 my-sm-0 white button-pink" type="button">
              SEARCH
            </button>
          </Link>
        </div>
      </div>
      <div className="row mt-4 mb-4">
        <div className="col-auto">
          <img
            src={film.poster_path}
            alt="text"
          />
        </div>
        <div className="col-7 ml-5">
          <div className="row mt-4">
            <div className="col-12 flex">
              <h1 className="pink font-weight-bold">{film.title}</h1>
              <span className="ml-5 white font-weight-bold">{film.vote_average}</span>
            </div>
            <div className="col-12">
              <span className="white">{film.tagline}</span>
            </div>
            <div className="col-12 mt-3">
              <span className="white mr-5">{film.release_date}</span><span
              className="ml-5 white">{film.runtime}</span>
            </div>
            <div className="col-12 mt-3">
                  <span className="white">
                    {film.overview}
                  </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SelectedFilm.prototype = {
  film: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    tagline: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired
  }).isRequired
};

export default SelectedFilm;
