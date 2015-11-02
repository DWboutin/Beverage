import { combineReducers } from 'redux';
import { login } from './login-reducers';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  login, form: formReducer
});

export default reducers;