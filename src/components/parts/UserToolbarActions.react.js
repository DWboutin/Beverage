import React from 'react';
import { connect } from 'react-redux';

import IfLoggedIn from '../helpers/IfLoggedIn.react';

class UserToolbarActions extends React.Component {
  componentDidMount() {
    $('#view-toolbar').toolbar({
      content: '#user-toolbar-options',
      position: 'vertical-bottom'
    });
  }

  render() {
    let { authorId, user } = this.props;
    let isCurrentUser = (authorId === user._id && user._id !== undefined);

    return (
      <div>
        <a id="view-toolbar" className="icon-button">
          <i className="fa fa-cog"></i>
        </a>
        <div id="user-toolbar-options" className="toolbar-menu">
          <a href="#fakeLink"><i className="fa fa-star"></i></a>
          <a href="#fakeLink"><i className="fa fa-flag"></i></a>
          {isCurrentUser && <a href="#fakeLink"><i className="fa fa-edit"></i></a>}
          {isCurrentUser && <a href="#fakeLink"><i className="fa fa-trash-o"></i></a>}
        </div>
      </div>
    );
  }
}

export default connect(state => ({user: state.login.user}))(UserToolbarActions);