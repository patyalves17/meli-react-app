import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './../components/Card';
import Breadcrumb from './../components/Breadcrumb';
import './Items.scss';
import { useLocation } from 'react-router-dom';

const Items = props => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  let search = query.get('search');

  const redirectHandler = id => {
    props.history.push({
      pathname: `/items/${id}`
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/items?q=${search}`)
      .then(response => {
        console.log(response);
        setItems(response.data.items);
        setCategories(response.data.categories);
      })
      .catch(err => {
        console.log(err);
      });
  }, [search]);

  return (
    <div>
      <div className='container'>
        <Breadcrumb categories={categories} />
        <div className='Items'>
          {items.map(item => {
            return (
              <Card
                item={item}
                key={item.id}
                onClickHandler={() => redirectHandler(item.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Items;
