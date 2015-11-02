import React from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import LoginForm from '../forms/LoginForm.react';
import { fetchLoginAuth } from '../../actions/login-actions';

class LoginPage extends React.Component {

  handleSubmit(data) {
    let { dispatch } = this.props;
    console.log(arguments);
    dispatch(initialize('loginForm', {})); // clear form
    dispatch(fetchLoginAuth(data));
  }

  render() {
    return (
      <div id="login-page">
        <h1>Login</h1>
        <LoginForm onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }
}
export default connect()(LoginPage);