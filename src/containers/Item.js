import React, { useState, useEffect } from 'react';
import Breadcrumb from './../components/Breadcrumb';
import Axios from 'axios';
import './Item.scss';
import { formatter } from './../utils';

const Item = props => {
  let priceFormattted = 0;

  const { id } = props.match.params;
  const [item, setItem] = useState({});

  useEffect(() => {
    Axios.get(`http://localhost:3000/items/${id}`)
      .then(response => {
        setItem(response.data.item);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  priceFormattted = formatter(item.price?.decimals, item.price?.currency);

  return (
    <div className='container'>
      <Breadcrumb categories={[]} />
      <div className='Item'>
        <div className='Item__short-description'>
          <div className='Item__short-description__image'>
            <img src={item.picture} alt={item.title} />
          </div>
          <div className='Item__short-description__infos'>
            <p className='Item__short-description__infos__condition'>
              {item.condition} - {item.sold_quantity} vendidos
            </p>
            <p className='Item__short-description__infos__title'>
              {item.title}
            </p>

            <p className='Item__short-description__infos__price'>
              {priceFormattted}
            </p>
            <button className='btn btn__primary'>Comprar</button>
          </div>
        </div>
        <div className='Item__descriptions'>
          <p className='Item__descriptions__title'>Description</p>
          <div className='Item__descriptions__text'>{item.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
