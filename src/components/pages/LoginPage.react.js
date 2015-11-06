import React from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import LoginForm from '../forms/LoginForm.react';
import { fetchLoginAuth } from '../../actions/login-actions';

class LoginPage extends React.Component {

  handleSubmit(data) {
    let { dispatch } = this.props;

    dispatch(initialize('loginForm', {})); // clear form
    dispatch(fetchLoginAuth(data));
  }

  render() {
    return (
      <div id="login-page">
        <h1>Login</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <LoginForm onSubmit={this.handleSubmit.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(LoginPage);