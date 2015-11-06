import React from 'react';
import { connect } from 'react-redux';

import Header from './parts/Header.react';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header></Header>
        {this.props.children}
      </div>
    );
  }
}

export default connect()(App);