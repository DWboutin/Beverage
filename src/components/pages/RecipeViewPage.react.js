import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchRecipeById } from '../../actions/recipes-actions';
import ace from '../../wrappers/brace.pkg';

import UserToolbarActions from '../parts/UserToolbarActions.react';

class RecipeViewPage extends React.Component {

  componentWillMount() {
    let { dispatch, params, currentRecipe } = this.props;

    // don't query if the item is already in the store
    if(currentRecipe._id !== params.recipeId){
      dispatch( fetchRecipeById(params.recipeId) );
    }
  }

  componentDidMount() {
    let { currentRecipe } = this.props;
    this.editor = ace.edit('javascript-editor');

    this.editor.getSession().setMode('ace/mode/javascript');
    this.editor.setTheme('ace/theme/monokai');
    this.editor.setShowPrintMargin(false);
    this.editor.renderer.setHScrollBarAlwaysVisible(false);

    this.editor.setOptions({
      readOnly: true,
      highlightActiveLine: false,
      highlightGutterLine: false,
      maxLines: 35
    });

    this.editor.$blockScrolling = Infinity;

    if(currentRecipe.code !== undefined){
      this.editor.setValue(currentRecipe.code, 1);
    }
  }

  componentDidUpdate() {
    let { currentRecipe } = this.props;

    this.editor.setValue(currentRecipe.code, 1);
  }

  shouldComponentUpdate(nextProps) {
    if(this.props.currentRecipe._id !== nextProps.currentRecipe._id){
      return true;
    }
    return false;
  }

  render() {
    let { currentRecipe } = this.props;

    return (
      <div id="recipe-view-page">
        <div className="container">
          <div className="row">
            <div className="col-md-1">
              <UserToolbarActions authorId={ currentRecipe.author }/>
            </div>
            <div className="col-md-9">
              <h2>{ currentRecipe.title }</h2>
              <div><strong>Packages: </strong> { currentRecipe.packages }</div>
              <p>{ currentRecipe.description }</p>
              <div id="javascript-editor" style={{height: '400px'}}></div>
            </div>
            <div className="col-md-2">
              <div className="date">{ moment(currentRecipe.created_at).fromNow() }</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({currentRecipe: state.recipes.currentItem}))(RecipeViewPage);