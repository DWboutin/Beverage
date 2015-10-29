import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunkMiddleware } from '../middlewares/thunkMiddleware';
import routes from '../routes';
import reducers from '../reducers';
import { APP_DOM_CONTAINER } from '../utils/consts';

let store = applyMiddleware(thunkMiddleware)(createStore)(reducers);

ReactDOM.render((
  <Provider store={store}>
    <Router history={createHistory()}>{routes}</Router>
  </Provider>
), document.getElementById( APP_DOM_CONTAINER ));