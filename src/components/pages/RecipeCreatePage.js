import React from 'react';
import { Link } from 'react-router';
import { initialize } from 'redux-form';
import { connect } from 'react-redux';
import { submitRecipe } from '../../actions/recipes-actions';
import RecipeForm from '../forms/RecipeForm.react';
import { fetchPackages } from '../../actions/packages-actions';
import { fetchTags } from '../../actions/tags-actions';

import { redirectIfNotLoggedIn } from '../../utils/helpers';

class RecipeCreatePage extends React.Component {

  componentWillMount() {
    let { dispatch } = this.props;

    dispatch( fetchPackages() );
    dispatch( fetchTags() );
  }

  componentDidUpdate() {
    redirectIfNotLoggedIn(this.props, '/recipes');
  }

  handleSubmit(data) {
    let { dispatch } = this.props;

    dispatch( submitRecipe(data) );
  }

  handleEditorChange(data) {
    let { dispatch } = this.props;

    dispatch( initialize('recipeForm', data) );
  }

  handleFieldChange(data) {
    let { dispatch } = this.props;

    dispatch( initialize('recipeForm', data) );
  }

  render() {
    let { packages, tags } = this.props;

    return (
      <div id="recipe-create-page">
        <h2>Create</h2>
        <div className="container">
          <RecipeForm onSubmit={this.handleSubmit.bind(this)} onEditorChange={this.handleEditorChange.bind(this)} onFieldChange={this.handleFieldChange.bind(this)} packagesItems={packages.items} tagsItems={tags.items} />
        </div>
      </div>
    );
  }
}

export default connect(state => ({user: state.login.user, packages: state.packages, tags: state.tags}))(RecipeCreatePage);