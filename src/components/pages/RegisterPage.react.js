import React from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import RegisterForm from '../forms/RegisterForm.react';
import { sendRegistration } from '../../actions/register-actions';

class RegisterPage extends React.Component {

  handleSubmit(data) {
    let { dispatch } = this.props;

    dispatch( initialize('registerForm', {}) ); // clear form
    dispatch( sendRegistration(data) );
  }

  render() {
    return (
      <div id="login-page">
        <h1>Register</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <RegisterForm onSubmit={this.handleSubmit.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(RegisterPage);