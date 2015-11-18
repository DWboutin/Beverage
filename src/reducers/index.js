import { combineReducers } from 'redux';
import { login } from './login-reducers';
import { recipes } from './recipes-reducers';
import { registration } from './registration-reducers';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  login, recipes, registration, form: formReducer
});

export default reducers;