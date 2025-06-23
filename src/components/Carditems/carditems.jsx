import React from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../../context/AllProductscontext'
import './carditems.css'
import cart_cross_icon from '../../assets/cart_cross_icon.png'
const carditems = () => {
    const {all_product,cart,addToCart,removeFromCart,getTotalCartPrice} = useContext(ProductsContext);
  return (
    <>
    <div className='carditems-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
    </div>
    <div className='carditems-format carditems-format-main'>
        {all_product.map((item,index)=> {
            if(cart[item.id] >0){
                return (
                    <div className="carditems-format main-cart-format">
                        <img src={item.image} alt="" className="carticon-product-icon"/>
                        <p>{item.name}</p>
                        <p>${item.new_price}</p>
                        <button className='carditems-quantity-input'>{cart[item.id]}</button>
                        <p>${item.new_price * cart[item.id]}</p>
                        <img className='carditems-remove-icon' src={cart_cross_icon} onClick={() => removeFromCart(item.id)} alt="" />
                    </div>
                )
            }
        })}
        
    </div>
    <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartPrice()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartPrice()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default carditems