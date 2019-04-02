import React, { Component } from 'react';
import './SortByGenre.css';

class SortByGenre extends Component {
  render() {
    return (
      <div className="pt-3 pb-3 gray-back">
        <div className="container">
          <div className="row mr-3 pr-3">
            <div className="col-3 font-weight-bold"><span>Films by Drama genre</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SortByGenre;
