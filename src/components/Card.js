import React from 'react';
import './card.scss';

const Card = props => {
  return (
    <div className='Card' onClick={() => props.onClickHandler()}>
      <div className='Card__product'>
        <div className='Card__product__image'>
          <img src={props.item.picture} />
        </div>
        <div className='Card__product__infos'>
          <p className='Card__product__infos__price'>
            $: {props.item.price.decimals}
          </p>
          <p>{props.item.title}</p>
        </div>
      </div>
      <div className='Card__divider'></div>
    </div>
  );
};

export default Card;
