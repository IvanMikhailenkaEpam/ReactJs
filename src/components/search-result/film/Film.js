import React, { Component } from 'react';
import './Film.css';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';

class Film extends Component {
  static propTypes = {
    value: PropTypes.object.isRequired
  };

  render() {
    const { value } = this.props;
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
  }
}

export default Film;
