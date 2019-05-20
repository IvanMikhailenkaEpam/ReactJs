import React from 'react';
import * as PropTypes from 'prop-types';

const SortByOptions = ({ onClick }) => (
  <div className="col-auto ml-auto">
    <span className="mr-3 font-weight-bold">Sort by</span>
    <span
      className="mr-5 font-weight-bold pointer"
      onClick={event => onClick(event, 'release_date')}
      onKeyDown={event => onClick(event, 'release_date')}
      role="button"
      tabIndex={0}
    >
        release date
    </span>
    <span
      className="font-weight-bold pointer"
      onClick={event => onClick(event, 'vote_average')}
      onKeyDown={event => onClick(event, 'vote_average')}
      role="button"
      tabIndex={0}
    >
rating
    </span>
  </div>
);

SortByOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SortByOptions;
