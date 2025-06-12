import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const item = (props) => {
  return (
    <>
    <div className="item">
       <Link to={`/Product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /> </Link>
        <h3>{props.name}</h3>
        <div className="price">
        <p className='old_price'>${props.old_price}</p>
        <p>${props.new_price}</p>
        </div>
    </div>
    </>
  )
}

export default item