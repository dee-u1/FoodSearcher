import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router';

import { HomePage } from './component/HomePage/HomePage';

import authenticated from './HOC/authenticated';
import Login from './component/Login/Login';

const App = (props) => {


  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <h1>Food Searcher</h1>
          <Login />
        </Route>
        <Route path="/">
          <h1>Food Searcher</h1>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );

  
}

export default authenticated(App);
