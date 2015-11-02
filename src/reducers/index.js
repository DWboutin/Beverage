import { combineReducers } from 'redux';
import { login } from './login-reducers';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  login, loginForm: formReducer, recipeForm: formReducer
});

export default reducers;