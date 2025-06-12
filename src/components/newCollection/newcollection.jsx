import React from 'react'
import new_collections from '../../assets/new_collections'
import Item from '../item/item'
import './newcollection.css'

const newcollection = () => {
  return (
    <>
    <h1 className="newcollection-heading">New Collections</h1>
    <div className="newcollection">
        {new_collections.map((item,index)=> {
            return(
              <Item key={index} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price}  image={item.image}  />
            )
        })}
    </div>
    </>
  )
}

export default newcollection