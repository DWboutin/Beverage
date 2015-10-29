import React from 'react';
import { Link } from 'react-router';
import { initialize } from 'redux-form';
import { connect } from 'react-redux';
import RecipeForm from '../forms/RecipeForm.react';

class RecipeCreatePage extends React.Component {

  handleSubmit(data) {
    console.log(arguments);
    let { dispatch } = this.props;

    dispatch(initialize('recipe', {})); // clear form
    return false;
  }

  render() {
    return (
      <div id="recipe-create-page">
        <h2>Create</h2>
        <RecipeForm handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

export default connect()(RecipeCreatePage);