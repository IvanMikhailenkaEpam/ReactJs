import React from 'react';
import './Navbar.css';

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark header">
      <div className="container">
        {props.children}
      </div>
    </nav>
  );
};

export default Navbar;
