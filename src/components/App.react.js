import React from 'react';
import { connect } from 'react-redux';
import { fetchLoginAuth, logout } from '../actions/login-actions';

import Header from './parts/Header.react';

class App extends React.Component {
  
  componentWillMount() {
    if(global.sessionStorage !== undefined && global.sessionStorage.getItem('user') !== undefined){
      this.sessionManagement();
    }
  }

  sessionManagement() {
    let { dispatch } = this.props;
    let session = global.sessionStorage;

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

export default connect(state => ({user: state.login.user}))(App);