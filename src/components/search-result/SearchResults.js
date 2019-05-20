import React from 'react';
import * as PropTypes from 'prop-types';
import Film from './film/Film';

const SearchResults = (props) => {
  const { films } = props;
  return (
    <div className="container">
      <div className="row">
        {
          films.map(film => <Film key={film.id} value={film} />)
        }
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default SearchResults;
