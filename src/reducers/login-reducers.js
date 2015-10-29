import { ACTIONS } from '../utils/consts';

const initialState = {
  logedInAt: '',
  user: {},
  isFetching: false,
  error: false,
  message: ''
};

export function login(state = initialState, action = {}) {

  switch(action.type) {

    case ACTIONS.REQUEST_LOGIN_AUTH:
      return {
        ...state,
        isFetching: true
      };

    case ACTIONS.RECEIVE_LOGIN_AUTH:
      return {
        ...state,
        isFetching: false,
        user: action.user,
        logedInAt: action.logedInAt
      };

    case ACTIONS.ERROR_LOGIN_AUTH:
      return {
        ...state,
        isFetching: false,
        error: true
      };

    default:
      return state;

  }

}