import { ACTIONS } from '../utils/consts';

const initialState = {
  items: [],
  isFetching: false,
  error: false,
  message: ''
};

export function packages(state = initialState, action = {}) {

  switch(action.type) {

    case ACTIONS.REQUEST_PACKAGES:
      return {
        ...state,
        isFetching: true
      };

    case ACTIONS.RECEIVE_PACKAGES:
      return {
        ...state,
        isFetching: false,
        items: action.items
      };

    case ACTIONS.ERROR_PACKAGES:
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