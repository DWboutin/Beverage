import React from 'react';
import { Route } from 'react-router';
import App from './components/App.react';
import Dummy from './components/Dummy.react';

export default (
  <Route path="/" component={App}>
    <Route path="/dummy" component={Dummy} />
  </Route>
);