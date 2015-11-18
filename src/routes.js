import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.react';
import LoginPage from './components/pages/LoginPage.react';
import RecipePage from './components/pages/RecipePage.react';
import RecipeCreatePage from './components/pages/RecipeCreatePage';
import RegisterPage from './components/pages/RegisterPage.react';
import RecipeListingPage from './components/pages/RecipeListingPage.react';
import RecipeViewPage from './components/pages/RecipeViewPage.react';

export default (
  <Route path="/" component={App}>
    <Route path="login" component={LoginPage} />
    <Route path="recipes" component={RecipePage}>
      <IndexRoute component={RecipeListingPage}/>
      <Route path="create" component={RecipeCreatePage}/>
      <Route path="view/:recipeId/:title" component={RecipeViewPage}/>
    </Route>
    <Route path="register" component={RegisterPage} />
  </Route>
);