import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions. E-commerce websites have become increasingly popular due to their convenience, accessibility, and global reach. They typically feature product catalogs, shopping carts, secure payment gateways, and order management systems to provide a seamless shopping experience for users.</p>
        <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information. The website also includes functionalities for users to add items to a shopping cart, proceed to checkout, and make secure payments through various methods like credit cards, PayPal, or other digital payment options.</p>
      </div>
    </div>
  )
}

export default DescriptionBox