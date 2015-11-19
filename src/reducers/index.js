import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { login } from './login-reducers';
import { recipes } from './recipes-reducers';
import { registration } from './registration-reducers';
import { packages } from './packages-reducers';
import { tags } from './tags-reducers';

let reducers = combineReducers({
  login, recipes, registration, packages, tags, form: formReducer
});

export default reducers;