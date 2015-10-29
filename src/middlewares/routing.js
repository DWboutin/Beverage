import React from 'react';
import createLocation from 'history/lib/createLocation';
import {Router, Route, match, RoutingContext } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { thunkMiddleware } from './thunkMiddleware';
import reducers from '../reducers';
import routes from '../routes';

let store = applyMiddleware(thunkMiddleware)(createStore)(reducers);

function getRootComponent(renderProps) {
  let component = (
      <Provider store={store}>
        <RoutingContext {...renderProps} />
      </Provider>
    );

  return {
    component: component,
    initialState: store.getState()
  };
}

export default function(req, res) {
  let location = createLocation(req.url);

  return new Promise((resolve, reject) => {
    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        reject(res.status(301).redirect(redirectLocation.pathname + redirectLocation.search));
      }else if (error) {
        reject(res.status(500).send(error.message));
      }else if (renderProps == null) {
        reject(res.status(404).send('Not found'));
      }

      resolve(getRootComponent(renderProps));
    });
  });
}