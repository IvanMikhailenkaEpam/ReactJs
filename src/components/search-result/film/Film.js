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
          src={value.poster_path}
          alt="text"
        />
      </Link>
      <div className="row mt-3">
        <div className="col-6"><span>{value.title}</span></div>
        <div className="col-2 ml-auto mr-3"><span className="age">{value.release_date}</span></div>
      </div>
      <div>
        {
          value.genres.map(genre => <span key={genre}>{genre} </span>)
        }
      </div>
    </div>
  );

};

Film.prototype = {
  value: PropTypes.shape({
    id: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array
  }).isRequired
};

export default Film;
