import React from 'react'
import arrow_icon from '../../assets/breadcrum_arrow.png';
import './breadcrums.css';

const breadcrums = (props) => {
    const product = props.product;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default breadcrums