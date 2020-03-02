import React from 'react';
import './App.scss';
import Routes from './routes';
import Layout from './components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

const app = props => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes></Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default app;
