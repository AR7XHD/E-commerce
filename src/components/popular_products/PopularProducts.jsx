import React from 'react'
import data_product from '../../assets/data'
import Item from '../item/item'
import './PopularProducts.css'

const PopularProducts = () => {
  return (
    <>
    <h2>Popular Products</h2>
    <div className="popularproducts">
        
    {data_product.map((item,index)=>{
        return(
            
            <Item key={index} id={item.id} new_price={item.new_price} old_price={item.old_price} name={item.name} image={item.image} />
        )
    })}

    </div>
    </>
  )
}

export default PopularProducts