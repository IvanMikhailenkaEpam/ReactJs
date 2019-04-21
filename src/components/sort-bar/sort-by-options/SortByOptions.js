import React, { Component } from 'react';

class SortByOptions extends Component {
  render() {
    return (
        <div className="col-auto ml-auto">
            <span className="mr-3 font-weight-bold">Sort by</span>
            <span className="mr-5 font-weight-bold">release date</span>
            <span className="font-weight-bold">rating</span>
        </div>
    );
  }
}

export default SortByOptions;
