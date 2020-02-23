import React from 'react';
import './Toolbar.scss';

const Toolbar = props => {
  return (
    <nav className='Toolbar'>
      <input type='text' className='Toolbar__input' />
      <button className='Toolbar__button' type='button'>
        <img src={require('./../assets/ic_Search.png')} />
      </button>
    </nav>
  );
};

export default Toolbar;
