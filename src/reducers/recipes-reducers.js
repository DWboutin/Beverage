import { ACTIONS, MESSAGES } from '../utils/consts';

const initialState = {
  recipes: [],
  isFetching: false,
  error: false,
  status: '',
  message: ''
};

export function recipes(state = initialState, action = {}) {

  switch(action.type) {

    case ACTIONS.RECIPE_CREATED:
      return {
        ...state,
        status: 'success',
        error: false,
        message: MESSAGES.recipeCreated
      };

    case ACTIONS.RECIPE_SUBMIT_ERROR:
      return {
        ...state,
        status: 'error',
        error: true,
        message: action.msg
      };

    default:
      return state;

  }

}