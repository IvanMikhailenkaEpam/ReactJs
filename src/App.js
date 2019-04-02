import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieSearch from './pages/MovieSearch';
import ErrorBoundary from './components/error-boundary/ErrorBoundaty';
import MovieSelected from './pages/MovieSelected';

class App extends Component {
  render() {
    return (
      <Router>
        <ErrorBoundary>
          <Route exact path="/" component={MovieSearch} />
          <Route path="/movie/:id" component={MovieSelected} />
        </ErrorBoundary>
      </Router>
    );
  }
}

export default App;
