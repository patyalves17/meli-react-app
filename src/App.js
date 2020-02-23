import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './containers/Home';

const app = props => {
  return (
    <div className='App'>
      <Home></Home>
    </div>
  );
  //  return <Router>toolbar</Router>;
};

export default app;
