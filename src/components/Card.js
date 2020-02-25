import React from 'react';
import './card.scss';

const Card = props => {
  return <div className='card'>{props.item.title}</div>;
};

export default Card;
