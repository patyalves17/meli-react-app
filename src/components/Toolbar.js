import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Toolbar.scss';

const Toolbar = props => {
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const handleChange = event => {
    setInput(event.target.value);
  };

  let redirectTo = null;
  if (redirect) {
    redirectTo = <Redirect to={`/items?search=${search}`} />;
  }

  const handleSubmit = event => {
    event.preventDefault();
    setSearch(input);
    setRedirect(true);
  };

  return (
    <nav className='Toolbar '>
      {redirectTo}
      <div className='container'>
        <img
          className='Toolbar__logo'
          src={require('./../assets/Logo_ML.png')}
        />
        <div className='Toolbar__search'>
          <form onSubmit={handleSubmit} className='Toolbar__search'>
            <input
              type='text'
              className='Toolbar__search__input'
              placeholder='Nunca dejes de buscar'
              value={search.value}
              onChange={handleChange}
            />
            <button className='Toolbar__search__button' type='submit'>
              <img src={require('./../assets/ic_Search.png')} />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
