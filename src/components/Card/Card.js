import React from 'react';
import './card.scss';
import { formatter } from './../../utils';

const Card = props => {
  let freeShipping = <img src={require('./../../assets/ic_shipping.png')} />;
  let priceFormattted = 0;

  priceFormattted = formatter(
    props.item.price?.decimals,
    props.item.price?.currency
  );

  return (
    <div className='Card' onClick={() => props.onClickHandler()}>
      <div className='Card__product'>
        <div className='Card__product__image'>
          <img src={props.item.picture} />
        </div>
        <div className='Card__product__infos'>
          <p className='Card__product__infos__price'>
            {priceFormattted}
            {props.item.free_shipping ? freeShipping : ''}
          </p>
          <p>{props.item.title}</p>
        </div>
        <div className='Card__product__address'>
          {props.item.address.state_name}
        </div>
      </div>
      <div className='Card__divider'></div>
    </div>
  );
};

export default Card;
