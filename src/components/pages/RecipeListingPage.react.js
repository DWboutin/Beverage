import React from 'react';
import { connect } from 'react-redux';
import RecipeListing from '../sections/RecipeListing.react';
import { fetchRecipes } from '../../actions/recipes-actions';

class RecipeListingPage extends React.Component {

  componentWillMount() {
    let { dispatch } = this.props;

    dispatch( fetchRecipes() );
  }

  shouldComponentUpdate(nextProps) {
    if(this.props.recipes.items != nextProps.recipes.items){
      return true;
    }

    return false;
  }

  render() {
    let { recipes } = this.props;
    return (
      <div id="recipe-listing-page">
        <div className="container">
          <RecipeListing items={ recipes.items } />
        </div>
      </div>
    );
  }
}

export default connect(state => ({recipes: state.recipes}))(RecipeListingPage);