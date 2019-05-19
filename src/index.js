import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import configureStore from "./store/configureStore";

const store = configureStore(window.PRELOADED_STATE);

ReactDOM.hydrate(<App Router={BrowserRouter} store={store}/>, document.getElementById('root'));
