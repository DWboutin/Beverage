import React from 'react';
import { connect } from 'react-redux';
import { fetchLoginAuth, logout } from '../actions/login-actions';

import Header from './parts/Header.react';

class App extends React.Component {
  
  componentWillMount() {
    if(global.localStorage !== undefined && global.localStorage.getItem('user') !== undefined){
      this.sessionManagement();
    }
  }

  sessionManagement() {
    let { dispatch } = this.props;
    let session = global.localStorage;

    if(session.user_expiration < Date.now()){
      dispatch(logout());
    }else{
      dispatch(fetchLoginAuth({username: session.getItem('username'), password: session.getItem('userkey'), encrypted: true}));
    }
  }

  handleLogout() {
    let { dispatch } = this.props;

    dispatch(logout());
  }

  render() {
    let { user } = this.props;

    return (
      <div id="app">
        <Header user={user} handleLogout={this.handleLogout.bind(this)} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default connect(state => ({user: state.login.user}))(App);