import { ACTIONS, MESSAGES } from '../utils/consts';
import config from '../../config';
import request from 'superagent';
import { initialize } from 'redux-form';

let session = global.localStorage;

export function recipeCreated() {
  return {
    type: ACTIONS.RECIPE_CREATED
  }
}

export function recipeSubmitError(message) {
  return {
    type: ACTIONS.RECIPE_SUBMIT_ERROR,
    message: message
  }
}

export function submitRecipe(data) {
  return function (dispatch) {

    let userID = session.getItem('user');

    if(userID !== null){

      data.author = userID;
      data.code += '\n';

      let jsonData = JSON.stringify(data);

      return request
        .post(config.API_URL + '/recipe')
        .set('Content-Type', 'application/json')
        .send(jsonData)
        .end((err, res) => {
          // if it have a result
          if(res.body.status) {
            dispatch(recipeCreated());
            dispatch(initialize('recipeForm', {})); // clear form
          } else {
            dispatch(recipeSubmitError(res.body.message));
          }

        });

    }else{
      dispatch(recipeSubmitError(MESSAGES.mustBeConnected));
    }
  };
}

export function requestRecipes() {
  return {
    type: ACTIONS.REQUEST_RECIPES
  }
}

export function receiveRecipes(data) {
  return {
    type: ACTIONS.RECEIVE_RECIPES,
    data: data
  }
}

export function receiveRecipe(data) {
  return {
    type: ACTIONS.RECEIVE_RECIPE,
    data: data
  }
}

export function receiveRecipesErrors(message) {
  return {
    type: ACTIONS.RECEIVE_RECIPES_ERRORS,
    message: message
  }
}


export function fetchRecipes() {
  return function (dispatch) {
    dispatch(requestRecipes());

    return request
      .get(config.API_URL + '/recipes')
      .end((err, res) => {

        // if it have a result status = 1
        if(res.body.status) {
          dispatch(receiveRecipes(res.body.data));
        } else {
          dispatch(receiveRecipesErrors(res.body.message));
        }
      });

  };
}

export function fetchRecipeById(id) {
  return function (dispatch) {
    dispatch(requestRecipes());

    return request
      .get(config.API_URL + '/recipe/' + id)
      .end((err, res) => {

        // if it have a result status = 1
        if(res.body.status) {
          dispatch(receiveRecipe(res.body.data));
        } else {
          dispatch(receiveRecipesErrors(res.body.message));
        }
      });

  };
}