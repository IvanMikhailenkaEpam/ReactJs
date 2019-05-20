import 'isomorphic-fetch';
import 'regenerator-runtime/runtime';
import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import Footer from './components/footer/Footer';
import PageNotFoundComponent from './pages/PageNotFoundComponent';
import ErrorBoundary from './components/error-boundary/ErrorBoundaty';
import MovieSearch from './pages/MovieSearch';
import MovieSelected from './pages/MovieSelected';


const App = ({
  Router, location, context, store,
}) => (
  <Provider store={store}>
    <ErrorBoundary>
      <Router location={location} context={context}>
        <Switch>
          <Route exact path="/" component={MovieSearch} />
          <Route path="/search" component={MovieSearch} />
          <Route path="/movie/:id" component={MovieSelected} />
          <Route component={PageNotFoundComponent} />
        </Switch>
        <Footer />

      </Router>
    </ErrorBoundary>
  </Provider>
);

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};
App.defaultProps = {
  location: null,
  context: null,
};

export default hot(module)(App);
