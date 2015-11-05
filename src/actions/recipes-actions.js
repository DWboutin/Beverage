import { ACTIONS } from '../utils/consts';
import config from '../../config';
import request from 'superagent';
import { initialize } from 'redux-form';

export function recipeCreated(){
  return {
    type: ACTIONS.RECIPE_CREATED
  }
}

export function recipeSubmitError(msg){
  return {
    type: ACTIONS.RECIPE_SUBMIT_ERROR,
    msg: msg
  }
}

export function submitRecipe({title, tags, code}) {
  return function (dispatch) {

    return request
      .post(config.API_URL + '/recipe')
      .set('Content-Type', 'application/json')
      .send('{"title":"'+ title +'","tags":"'+ tags +'","code":"'+ code +'"}')
      .end((err, res) => {
        // if it have a result
        if(res.body.status) {
          dispatch(recipeCreated());
          dispatch(initialize('recipeForm', {})); // clear form
        } else {
          dispatch(recipeSubmitError(res.body.message));
        }

      });

  };
}