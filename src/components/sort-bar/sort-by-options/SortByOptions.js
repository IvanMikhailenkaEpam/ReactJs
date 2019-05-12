import React from 'react';

const SortByOptions = ({onClick}) => {
  return (
    <div className="col-auto ml-auto">
      <span className="mr-3 font-weight-bold">Sort by</span>
      <span className="mr-5 font-weight-bold pointer" onClick={event => onClick(event, "release_date")}>
        release date
      </span>
      <span className="font-weight-bold pointer"
            onClick={event => onClick(event, "vote_average")}>rating</span>
    </div>
  );
};

export default SortByOptions;
