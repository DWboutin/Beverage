import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as DummyActions from '../actions/dummy-actions';

class App extends React.Component {
  render() {
    let { dummy } = this.props;

    return (
      <div id="app">
        <h1>App</h1>
        <Link to="/">Home</Link>{' '}
        <Link to="/dummy">Dummy</Link>
        {this.props.children}
      </div>
    );
  }
}

export default connect(state => ({ dummy: state.dummy }))(App);