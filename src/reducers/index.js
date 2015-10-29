import { combineReducers } from 'redux';
import { dummy } from './dummy-reducers';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  dummy, form: formReducer
});

export default reducers;