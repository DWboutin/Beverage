import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import IfLoggedIn from '../helpers/IfLoggedIn.react';

export default class RecipePage extends React.Component {
  render() {
    return (
      <div id="recipe-page">
        <h1>Recipes</h1>
        <IfLoggedIn>
          <Link to="/recipes/create">Create</Link>
        </IfLoggedIn>
        {this.props.children}
      </div>
    );
  }
}