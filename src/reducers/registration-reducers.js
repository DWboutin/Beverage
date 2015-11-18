import { ACTIONS } from '../utils/consts';

const initialState = {
  isSending: false,
  error: false,
  message: ''
};

export function login(state = initialState, action = {}) {

  switch(action.type) {

    case ACTIONS.REGISTRATION_SENT:
      return {
        ...state,
        isSending: true
      };

    case ACTIONS.REGISTRATION_COMPLETED:
      return {
        ...state,
        isSending: false
      };

    case ACTIONS.REGISTRATION_ERRORS:
      return {
        ...state,
        isFetching: false,
        error: true,
        message: data.message
      };

    default:
      return state;

  }

}