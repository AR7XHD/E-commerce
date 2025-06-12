import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../context/AllProductscontext'
import { useContext } from 'react'
import Breadcrums from '../components/breadcrums/breadcrums'
import ProductDisplay from '../components/productdisplay/productdisplay'
import DescriptionBox from '../components/descriptionbox/DescriptionBox'
import RelatedProduct from '../components/RelatedProduct/RelatedProduct'

const Product = () => {
  const {productId} = useParams()
  const {all_product} = useContext(ProductsContext)
  const product = all_product.find((e)=> e.id === Number(productId))

  return (
    <>
    
    <Breadcrums product={product} />
    <ProductDisplay product={product} />
    <DescriptionBox />
    <RelatedProduct />

    
    

    </>
  )
}

export default Product