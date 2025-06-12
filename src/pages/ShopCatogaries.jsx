import React from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../context/AllProductscontext'
import Item from '../components/item/item'
import './css/ShopCatogaries.css'


const ShopCatogaries = (props) => {
  const {all_product} = useContext(ProductsContext)

  return (
  <>

<div className="banner">
  <img src={props.banner} alt="" />
</div>
<div className="catogarie-sort">
  <p> Showing 1-12 out of 36 products</p>
  <span>Sort By</span>
</div>
<div className='productss' >
  {all_product && all_product.map((item, index) => {
    if(item.category === props.category) {
      return <Item key={index} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price}  image={item.image} />
    }
    // else {
    //   return null
    // }
  })}
</div>

  </>
  )
}

export default ShopCatogaries