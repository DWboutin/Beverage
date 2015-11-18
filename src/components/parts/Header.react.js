import React from 'react';
import { Link } from 'react-router';
import { BASE_URL } from '../../../config';

import UserProfileMenu from './UserProfileMenu.react';
import IfLoggedIn from '../helpers/IfLoggedIn.react';

class Header extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {

    // Si un ID est reçu et n'est pas égal au id déjà reçu (défault undefined)
    if(nextProps.user._id !== this.props.user._id){
      return true;
    }

    return false;
  }

  renderUserName() {
    let { user } = this.props;

    if (user._id !== undefined) {
      return (
        <p className="navbar-text navbar-right">Want a drink, <a href="#fakeLink" className="navbar-link">{user.username}</a></p>
      );
    }
  }

  render() {
    let { user, handleLogout } = this.props;

    return (
      <header id="mainHeader" className="navbar navbar-inverse" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-2"><span className="fa fa-bars"></span></button>
            <Link className="navbar-brand" to="/">Beverages</Link>
          </div>
          <nav className="collapse navbar-collapse" id="navbar-collapse-2">
            <ul className="nav navbar-nav">
              <li><Link to="/" activeClassName="active">Home</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Recipes <span className="fa-chevron-down fa"></span></a>
                <ul className="dropdown-menu">
                  <div className="arrow top"></div>
                  <li><Link to="/recipes" activeClassName="active">List</Link></li>
                  <IfLoggedIn>
                    <li><Link to="/recipes/create" activeClassName="active">Create</Link></li>
                  </IfLoggedIn>
                </ul>
              </li>
            </ul>
            <UserProfileMenu user={user} handleLogout={handleLogout} />
            { this.renderUserName() }
          </nav>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  user: React.PropTypes.object.isRequired,
  handleLogout: React.PropTypes.func.isRequired
};

export default Header;