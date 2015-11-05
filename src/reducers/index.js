import { combineReducers } from 'redux';
import { login } from './login-reducers';
import { recipes } from './recipes-reducers';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  login, recipes, form: formReducer
});

export default reducers;