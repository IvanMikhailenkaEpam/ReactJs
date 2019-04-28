import React from 'react';
import './SortBar.css';

const SortBar = props => {
  return (
    <div className="pt-3 pb-3 gray-back">
      <div className="container">
        <div className="row mr-3 pr-3">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default SortBar;
