import React from 'react';
import { reduxForm } from 'redux-form';
import loginValidation from '../../utils/validations/loginForm';

class LoginForm extends React.Component {
  render() {
    const { fields: {username, password}, onSubmit } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" {...username} />
          {username.error && username.touched && <div>{username.error}</div>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" {...password} />
          {username.error && username.touched && <div>{username.error}</div>}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: 'loginForm',
  fields: ['username', 'password'],
  validate: loginValidation,
})(LoginForm);

export default LoginForm;