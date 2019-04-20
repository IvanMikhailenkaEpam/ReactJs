import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark header">
        <div className="container">
          {this.props.children}
        </div>
      </nav>
    );
  }
}

export default Navbar;
