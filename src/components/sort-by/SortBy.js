import React, { Component } from 'react';
import './SortBy.css';

class SortBy extends Component {
  render() {
    return (
      <div className="pt-3 pb-3 gray-back">
        <div className="container">
          <div className="row mr-3 pr-3">
            <div className="col-3 font-weight-bold"><span>7 movies found</span></div>
            <div className="col-auto ml-auto">
              <span className="mr-3 font-weight-bold">Sort by</span>
              <span className="mr-5 font-weight-bold">release date</span>
              <span className="font-weight-bold">rating</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SortBy;
