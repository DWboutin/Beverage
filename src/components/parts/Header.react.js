import React from 'react';
import { Link } from 'react-router';
import { BASE_URL } from '../../../config';

export default class Header extends React.Component {
  render() {
    return (
      <header id="mainHeader" className="navbar navbar-inverse" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-2"><span className="fa fa-bars"></span></button>
            <img className="navbar-brand-img" src={BASE_URL + "/assets/images/logo-dark@2x.png"} alt="" width="101" />
          </div>
          <nav className="collapse navbar-collapse" id="navbar-collapse-2">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Recipes <span className="fa-chevron-down fa"></span></a>
                <ul className="dropdown-menu">
                  <div className="arrow top"></div>
                  <li><Link to="/recipes">List</Link></li>
                  <li><Link to="/recipes/create">Create</Link></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right navbar-icons">
              <li>
                <Link to="/login"><span className="fa-user fa"></span><span className="hidden-lg">Login</span></Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}