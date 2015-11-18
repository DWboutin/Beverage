import React from 'react';
import { reduxForm } from 'redux-form';
import loginValidation from '../../utils/validations/loginForm';

class LoginForm extends React.Component {
  render() {
    const { fields: {username, password}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="form-horizontal">

        <div className="form-group row">
          <label className="col-sm-3 control-label" htmlFor="username">Username</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" {...username}/>
          </div>
        </div>
        {username.error && username.touched && <div>{username.error}</div>}

        <div className="form-group row">
          <label className="col-sm-3 control-label" htmlFor="password">Password</label>
          <div className="col-sm-9">
            <input type="password" className="form-control" {...password}/>
          </div>
        </div>
        {password.error && password.touched && <div>{password.error}</div>}
        
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <button className="btn btn-block btn-success btn-embossed" type="submit">Submit</button>
          </div>
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

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default LoginForm;