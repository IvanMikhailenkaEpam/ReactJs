import React, { Component } from 'react';

class SortBar extends Component {
  render() {
    return (
      <div className="pt-3 pb-3 gray-back">
        <div className="container">
          <div className="row mr-3 pr-3">
            {this.props.info}
            {this.props.options}
          </div>
        </div>
      </div>
    );
  }
}

export default SortBar;
