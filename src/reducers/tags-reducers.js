import { ACTIONS } from '../utils/consts';

const initialState = {
  items: [],
  isFetching: false,
  error: false,
  message: ''
};

export function tags(state = initialState, action = {}) {

  switch(action.type) {

    case ACTIONS.REQUEST_TAGS:
      return {
        ...state,
        isFetching: true
      };

    case ACTIONS.RECEIVE_TAGS:
      return {
        ...state,
        isFetching: false,
        items: action.items
      };

    case ACTIONS.ERROR_TAGS:
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