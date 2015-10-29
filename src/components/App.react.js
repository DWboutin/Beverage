import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <h1>App</h1>
        <Link to="/">Home</Link>{' '}
        <Link to="/login">Login</Link>{' '}
        <Link to="/recipes">Recipes</Link>{' '}
        {this.props.children}
      </div>
    );
  }
}

export default connect()(App);