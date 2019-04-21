import React, {Component} from 'react';
import Film from './film/Film';
import * as PropTypes from "prop-types";

class SearchResults extends Component {
  static propTypes = {
    films: PropTypes.array.isRequired,
  };

  render() {
    const {films} = this.props;
    return (
      <div className="container">
        <div className="row">
          {
            films.map(film => <Film key={film.id} value={film}/>)
          }
        </div>
      </div>
    );
  }
}

export default SearchResults;
