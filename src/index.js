import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';

import axios from 'axios';

import Routes from './routes';
import reducers from './redux/reducers';

axios.defaults.baseURL = process.env.REACT_APP_API_HOST;
console.log(axios.defaults.baseURL);

const storeWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleware(reducers)}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
