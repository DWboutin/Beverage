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

    case ACTIONS.LOGOUT:
      if(global.sessionStorage !== undefined){
        let session = global.sessionStorage;

        session.removeItem('user');
        session.removeItem('user_expiration');
        session.removeItem('username');
        session.removeItem('userkey');
      }

      return {
        ...state,
        user: {},
        logedInAt: ''
      };

    default:
      return state;

  }

}