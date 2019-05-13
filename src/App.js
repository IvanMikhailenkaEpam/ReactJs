import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import './App.css';
import MovieSearch from './pages/MovieSearch';
import ErrorBoundary from './components/error-boundary/ErrorBoundaty';
import MovieSelected from './pages/MovieSelected';
import Footer from "./components/footer/Footer";
import {createStore} from "redux";
import rootReducer from './store/reducers'
import {Provider} from "react-redux";
import {install} from "redux-loop";
import {syncHistoryWithStore} from "react-router-redux";
import { createBrowserHistory } from 'history';

const store = createStore(rootReducer, install());
const history = syncHistoryWithStore(createBrowserHistory(), store);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Router  history={history}>
            <ErrorBoundary>
              <Route exact path="/" component={MovieSearch}/>
              <Route path="/search" component={MovieSearch}/>
              <Route path="/movie/:id" component={MovieSelected}/>
            </ErrorBoundary>
          </Router>
        </Provider>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
