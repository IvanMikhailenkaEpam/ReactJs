import React from 'react';
import './Film.css';
import {Link} from 'react-router-dom';
import * as PropTypes from 'prop-types';

const Film = props => {
  const {value} = props;
  return (
    <div className="col-md-4 mt-5">
      <Link to={`/movie/${value.id}`}>
        <img
          src={value.img}
          alt="text"
        />
      </Link>
      <div className="row mt-3">
        <div className="col-6"><span>{value.name}</span></div>
        <div className="col-2 ml-auto mr-3"><span className="age">{value.age}</span></div>
      </div>
      <div><span>{value.genre}</span></div>
    </div>
  );

};

Film.prototype = {
  value: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
  }).isRequired
};

export default Film;
