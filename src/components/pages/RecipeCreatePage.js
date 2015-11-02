import React from 'react';
import { Link } from 'react-router';
import { initialize } from 'redux-form';
import { connect } from 'react-redux';
import RecipeForm from '../forms/RecipeForm.react';

class RecipeCreatePage extends React.Component {

  handleSubmit(data,t ,e) {
    let { dispatch } = this.props;
    console.log(arguments);
    dispatch(initialize('recipeForm', {})); // clear form
  }

  render() {
    return (
      <div id="recipe-create-page">
        <h2>Create</h2>
        <RecipeForm onSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

export default connect()(RecipeCreatePage);
