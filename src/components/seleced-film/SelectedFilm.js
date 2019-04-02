import React, { Component } from 'react';
import './SelectedFilm.css';
import { Link } from 'react-router-dom';

class SelectedFilm extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark header">
        <div className="container">
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
                src="https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg"
                alt="text"
              />
            </div>
            <div className="col-7 ml-5">
              <div className="row mt-4">
                <div className="col-12">
                  <h1 className="pink font-weight-bold">Pulp Fiction </h1>
                </div>
                <div className="col-12">
                  <span className="white">Oscar-winning Movies</span>
                </div>
                <div className="col-12 mt-3">
                  <span className="white">1994        154 min</span>
                </div>
                <div className="col-12 mt-3">
                  <span className="white">
                    Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are
                    two hit men who are out to retrieve a suitcase stolen from their employer, mob
                    boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his
                    wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of
                    town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to
                    lose his fight. The lives of these seemingly unrelated people are woven together
                    comprising of a series of funny, bizarre and uncalled-for incidents.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default SelectedFilm;
