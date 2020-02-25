import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './containers/Home';
import Items from './containers/Items';

const app = props => {
  return (
    <div className='App'>
      <Home></Home>
      <Items></Items>
    </div>
  );
  //  return <Router>toolbar</Router>;
};

export default app;
