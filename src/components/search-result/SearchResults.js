import React, { Component } from 'react';
import './SearchResults.css';
import Film from './film/Film';

class SearchResults extends Component {
  numbers = [1, 3, 4, 5];

  render() {
    return (
      <div className="container">
        <div className="row">
          {
            this.numbers.map(value => <Film key={value} id={value} />)
          }
        </div>
      </div>
    );
  }
}

export default SearchResults;
