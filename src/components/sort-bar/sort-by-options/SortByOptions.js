import React from 'react';
import './SortByOptions.css';

const SortByOptions = ({onClick}) => {
  return (
    <div className="col-auto ml-auto">
      <span className="mr-3 font-weight-bold">Sort by</span>
      <span className="mr-5 font-weight-bold pointer" onClick={event => onClick(event, "date")}>
        release date
      </span>
      <span className="font-weight-bold pointer"
            onClick={event => onClick(event, "rating")}>rating</span>
    </div>
  );
};

export default SortByOptions;
