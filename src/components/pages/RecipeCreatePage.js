import React from 'react';
import { Link } from 'react-router';
import { initialize } from 'redux-form';
import { connect } from 'react-redux';
import { submitRecipe } from '../../actions/recipes-actions';
import RecipeForm from '../forms/RecipeForm.react';

import { redirectIfNotLoggedIn } from '../../utils/helpers';

class RecipeCreatePage extends React.Component {

  componentWillMount() {
    redirectIfNotLoggedIn(this.props, '/recipes');
  }

  handleSubmit(data) {
    let { dispatch } = this.props;

    dispatch(submitRecipe(data));
  }

  handleEditorChange(data) {
    let { dispatch } = this.props;

    dispatch(initialize('recipeForm', data));
  }

  onDrop(files) {
    console.log('Received files: ', files);
  }

  render() {
    return (
      <div id="recipe-create-page">
        <h2>Create</h2>
        <RecipeForm onSubmit={this.handleSubmit.bind(this)} onEditorChange={this.handleEditorChange.bind(this)} />
      </div>
    );
  }
}

export default connect(state => ({user: state.login.user}))(RecipeCreatePage);