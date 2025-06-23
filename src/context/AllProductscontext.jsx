import { createContext } from "react";
import all_product from "../assets/all_product";
import { useState } from "react";

export const ProductsContext = createContext(null)

const getDefaultCart = () => {

    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ProductsContextProvider = (props) => {

    const [cart, setCart] = useState(getDefaultCart());

    const addToCart = (productId) => { 
        setCart((prev) => ({...prev, [productId]: prev[productId] +  1}));
        console.log(cart);
    }

    const removeFromCart = (productId) => {
        setCart((prev) => ({...prev, [productId]: prev[productId] -  1}));
    }

    const getTotalCartPrice = () => {
        let total = 0;
        for (const item_id in cart) {
            if(cart[item_id] > 0){
                let iteminfo = all_product.find((e)=> e.id === Number(item_id));
                total += iteminfo.new_price * cart[item_id];
            }
        }
        return total;
    }

    const getCartCount = ()=> {
        let count = 0;
        for (const item_id in cart) {
            count += cart[item_id];
        }
        return count;
    }


    const ContextValue = {all_product, cart, addToCart, removeFromCart, getTotalCartPrice, getCartCount}

    return (
        <ProductsContext.Provider value={ContextValue}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider

