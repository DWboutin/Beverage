import React from 'react';
import { Link } from 'react-router';

export default class UserProfileMenu extends React.Component {

  notLoggedIn() {
    return (
      <ul className="nav navbar-nav navbar-right navbar-icons">
        <li>
          <Link to="/login" activeClassName="active"><span>Login</span> <i className="fa fa-key"></i></Link>
        </li>
      </ul>
    );
  }

  loggedIn() {
    let { handleLogout } = this.props;

    return (
      <ul className="nav navbar-nav navbar-right navbar-icons">
        <li>
          <a href="#fakelink">
            <span className="fa-user fa"></span><span className="hidden-lg">My Account</span>
          </a>
        </li>
        <li>
          <a href="#fakelink">
            <span className="fa-bell fa"></span><span className="hidden-lg">Messages</span>
            <span className="navbar-new"></span>
          </a>
        </li>
        <li className="dropdown">
          <a href="#fakelink" className="dropdown-toggle" data-toggle="dropdown">
            <span className="fa-cog fa"></span><span className="hidden-lg">Settings</span>
          </a>
          <ul className="dropdown-menu">
            <div className="arrow top"></div>
            <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
          </ul>
        </li>
      </ul>
    );
  }

  render() {
    let { user } = this.props;

    if (user._id === undefined) {
      return this.notLoggedIn();
    }else{
      return this.loggedIn();
    }
  }
}