import React from 'react';
import { connect } from 'react-redux';

class IfLoggedIn extends React.Component {

  shouldComponentUpdate(nextProps) {
    if(nextProps.user._id !== this.props.user._id){
      return true;
    }

    return false;
  }

  render() {
    let { user } = this.props;

    if (user._id !== undefined) {
      return this.props.children;
    }
    return false;
  }
}

IfLoggedIn.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default connect(state => ({user: state.login.user}))(IfLoggedIn);