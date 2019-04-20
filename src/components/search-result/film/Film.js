import React, { Component } from 'react';
import './Film.css';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';

class Film extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
  };

  render() {
    const { id } = this.props;
    return (
      <div className="col-md-4 mt-5">
        <Link to={`/movie/${id}`}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/783e3b0f-b68e-440e-a980-0e1c19cbe76c/e762d259-b33a-4e43-bcd6-e961c2072ec2/BY-en-20190318-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="text"
          />
        </Link>
        <div className="row mt-3">
          <div className="col-6"><span>name name</span></div>
          <div className="col-2 ml-auto mr-3"><span className="age">1999</span></div>
        </div>
        <div><span>genre genre</span></div>
      </div>
    );
  }
}

export default Film;
