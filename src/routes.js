import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Items from './containers/Items.js';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/items' component={Items} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
