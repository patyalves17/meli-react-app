import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Items from './containers/Items.js';
import Item from './containers/Item';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/items' component={Items} />
      <Route path='/items/:id' component={Item} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
