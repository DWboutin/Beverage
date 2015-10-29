import React from 'react';
import { Link } from 'react-router';

export default class RecipePage extends React.Component {
  render() {
    return (
      <div id="recipe-page">
        <h1>Recipes</h1>
        <Link to="/recipes/create">Create</Link>
        {this.props.children}
      </div>
    );
  }
}