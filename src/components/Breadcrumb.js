import React from 'react';
import './breadcrumb.scss';

const BreadCrumb = props => {
  return (
    <div className='Breadcrumb'>
      {props.categories.map((category, index) => {
        return (
          <span className='Breadcrumb__item' key={index}>
            {category} {index === props.categories.length - 1 ? ' ' : '> '}
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
