import React from 'react';
import { Route } from 'react-router';
import App from './components/App.react';
import LoginPage from './components/pages/LoginPage.react';
import RecipePage from './components/pages/RecipePage.react';
import RecipeCreatePage from './components/pages/RecipeCreatePage';
import RegisterPage from './components/pages/RegisterPage.react';

export default (
  <Route path="/" component={App}>
    <Route path="login" component={LoginPage} />
    <Route path="recipes" component={RecipePage}>
      <Route path="create" component={RecipeCreatePage}/>
    </Route>
    <Route path="register" component={RegisterPage} />
  </Route>
);