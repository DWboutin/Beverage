import React from 'react';
import { reduxForm } from 'redux-form';
import registerValidation from '../../utils/validations/registerForm';

class RegisterForm extends React.Component {
  render() {
    const { fields: {email, username, password}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="form-horizontal">

        <div className="form-group row">
          <label className="col-sm-3 control-label" htmlFor="email">Email address</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" {...email}/>
          </div>
        </div>
        {email.error && email.touched && <div>{email.error}</div>}

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

RegisterForm = reduxForm({
  form: 'registerForm',
  fields: ['email','username', 'password'],
  validate: registerValidation,
})(RegisterForm);

RegisterForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default RegisterForm;