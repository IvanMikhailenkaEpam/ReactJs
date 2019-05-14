import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { install } from 'redux-loop';
import MovieSearch from './pages/MovieSearch';
import ErrorBoundary from './components/error-boundary/ErrorBoundaty';
import MovieSelected from './pages/MovieSelected';
import Footer from './components/footer/Footer';
import rootReducer from './store/reducers';
import PageNotFoundComponent from './pages/PageNotFoundComponent';

const store = createStore(rootReducer, install());

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Router>
            <ErrorBoundary>
              <Switch>
                <Route exact path="/" component={MovieSearch} />
                <Route path="/search" component={MovieSearch} />
                <Route path="/movie/:id" component={MovieSelected} />
                <Route component={PageNotFoundComponent} />
              </Switch>
            </ErrorBoundary>
          </Router>
        </Provider>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
