import { ACTIONS, MESSAGES } from '../utils/consts';

const initialState = {
  items: [],
  isFetching: false,
  error: false,
  message: ''
};

export function recipes(state = initialState, action = {}) {

  switch(action.type) {

    case ACTIONS.RECIPE_CREATED:
      return {
        ...state,
        error: false,
        message: MESSAGES.recipeCreated
      };

    case ACTIONS.RECIPE_SUBMIT_ERROR:
      return {
        ...state,
        error: true,
        message: action.message
      };

    case ACTIONS.REQUEST_RECIPES:
      return {
        ...state,
        isFetching: true
      };

    case ACTIONS.RECEIVE_RECIPES:
      return {
        ...state,
        isFetching: false,
        items: action.data
      };

    case ACTIONS.RECEIVE_RECIPES_ERRORS:
      return {
        ...state,
        isFetching: false,
        error: true,
        message: action.message
      };

    default:
      return state;

  }

}