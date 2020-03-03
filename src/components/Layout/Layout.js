import React from 'react';
import Toolbar from '../Toolbar/Toolbar';

const Layout = props => {
  return (
    <div className='App'>
      <Toolbar />
      <main className='container'>{props.children}</main>
    </div>
  );
};

export default Layout;
