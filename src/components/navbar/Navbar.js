import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark header">
        <div className="container">
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
                />
              </form>
            </div>

            <div className="col-4 mt-3 mb-4 ">
              <span className="mr-3 white font-weight-bold">SEARCH BY</span>
              <button
                className="btn my-2 my-sm-0 white button-pink"
                type="button"
              >
                TITLE
              </button>
              <button
                className="btn my-2 ml-2  my-sm-0 white button-black"
                type="button"
              >
                GENRE
              </button>
            </div>
            <div className="col-2 mt-3 mb-4 ml-auto search-button">
              <button
                className="btn my-2 my-sm-0 white"
                type="button"
              >
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
