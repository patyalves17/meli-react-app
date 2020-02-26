import React from 'react';
import './App.scss';
import Routes from './routes';
import Toolbar from './components/Toolbar';

const app = props => {
  return (
    <div className='App'>
      <Toolbar></Toolbar>
      <Routes></Routes>
    </div>
  );
  //  return <Router>toolbar</Router>;
};

export default app;
