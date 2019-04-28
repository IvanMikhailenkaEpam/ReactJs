import React from 'react';
import './SearchResults.css';
import Film from './film/Film';
import * as PropTypes from "prop-types";

const SearchResults = props => {
  const {films} = props;
  return (
    <div className="container">
      <div className="row">
        {
          films.map(film => <Film key={film.id} value={film}/>)
        }
      </div>
    </div>
  );
};

SearchResults.prototype = {
  films: PropTypes.array.isRequired
};

export default SearchResults;
