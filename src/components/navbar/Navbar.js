import React from 'react';
import './Navbar.css';
import * as PropTypes from 'prop-types';

const Navbar = ({ children }) => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark header">
    <div className="container">
      {children}
    </div>
  </nav>
);

Navbar.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Navbar;
