import React from 'react';
import { connect } from 'react-redux';
import { initialize } from 'redux-form';
import LoginForm from './LoginForm.react';
import { fetchLoginAuth } from '../actions/login-actions';

class Dummy extends React.Component {

  handleSubmit(data) {
    let { dispatch } = this.props;

    dispatch(initialize('login', {})); // clear form
    dispatch(fetchLoginAuth(data));
  }

  render() {
    return (
      <div id="dummy">
        <h1>I'm so dumb for a dummy component</h1>
        <LoginForm onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }

}

export default connect()(Dummy);