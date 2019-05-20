import React from 'react';
import * as PropTypes from 'prop-types';

const SortBar = ({ children }) => (
  <div className="pt-3 pb-3 gray-back">
    <div className="container">
      <div className="row mr-3 pr-3">
        {children}
      </div>
    </div>
  </div>
);

SortBar.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SortBar;
