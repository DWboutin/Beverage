import { ACTIONS } from '../utils/consts';

const initialState = {};

export function dummy(state = initialState, action = {}) {

  switch(action.type) {

    case ACTIONS.DUMMY_ACTION:
      return {
        ...state
      };

    default:
      return state;

  }

}