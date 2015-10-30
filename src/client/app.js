import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { compose, createStore, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import { thunkMiddleware } from '../middlewares/thunkMiddleware';
import routes from '../routes';
import reducers from '../reducers';
import { APP_DOM_CONTAINER } from '../utils/consts';

const store = compose(
  // Enables your middleware:
  applyMiddleware(thunkMiddleware), // any Redux middleware, e.g. redux-thunk
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(global.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)(reducers);

//let store = applyMiddleware(thunkMiddleware)(createStore)(reducers);

ReactDOM.render((
  <div>
    <Provider store={store}>
      <Router history={createHistory()}>{routes}</Router>
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>
), document.getElementById( APP_DOM_CONTAINER ));