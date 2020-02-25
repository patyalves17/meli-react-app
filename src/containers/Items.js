import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './../components/Card';

const Items = props => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/items?q=iphone')
      .then(response => {
        console.log(response);
        setItems(response.data.items);
        setCategories(response.data.categories);
      })
      .catch(err => {
        console.log(err);
      });
  }, [1]);

  return (
    <div className='container'>
      <p>Lista de items</p>
      {items.map(item => {
        return <Card item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Items;
