import React, {Component} from 'react';
import './SelectedFilm.css';
import {Link} from 'react-router-dom';
import * as PropTypes from "prop-types";

class SelectedFilm extends Component {
  static propTypes = {
    film: PropTypes.object.isRequired
  };

  render() {
    const { film } = this.props;
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
              src={film.img}
              alt="text"
            />
          </div>
          <div className="col-7 ml-5">
            <div className="row mt-4">
              <div className="col-12 flex">
                <h1 className="pink font-weight-bold">{film.name}</h1>
                <span className="ml-5 white font-weight-bold">{film.rating}</span>
              </div>
              <div className="col-12">
                <span className="white">{film.regards}</span>
              </div>
              <div className="col-12 mt-3">
                <span className="white mr-5">{film.age}</span><span className="ml-5 white">{film.duration}</span>
              </div>
              <div className="col-12 mt-3">
                  <span className="white">
                    {film.description}
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectedFilm;
