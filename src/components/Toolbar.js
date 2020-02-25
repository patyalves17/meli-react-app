import React from 'react';
import './Toolbar.scss';

const Toolbar = props => {
  return (
    <nav className='Toolbar '>
      <div className='container'>
        <img
          className='Toolbar__logo'
          src={require('./../assets/Logo_ML.png')}
        />
        <div className='Toolbar__search'>
          <input
            type='text'
            className='Toolbar__search__input'
            placeholder='Nunca dejes de buscar'
          />
          <button className='Toolbar__search__button' type='button'>
            <img src={require('./../assets/ic_Search.png')} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
