import React from 'react';
import * as PropTypes from 'prop-types';

const SortBarInfo = (props) => {
  const { text } = props;
  return (
    <div>
      <div className="col-auto ml-4 font-weight-bold"><span>{text}</span></div>
    </div>
  );
};
SortBarInfo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SortBarInfo;
