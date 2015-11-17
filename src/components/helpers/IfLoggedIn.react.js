import React from 'react';
import { connect } from 'react-redux';

export default class IfLoggedIn extends React.Component {
  render() {
    let { user } = this.props;
    if (user._id !== undefined) {
      return this.props.children;
    }
    return false;
  }
}

export default connect(state => ({user: state.login.user}))(IfLoggedIn);