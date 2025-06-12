import { createContext } from "react";
import all_product from "../assets/all_product";

export const ProductsContext = createContext(null)

const ProductsContextProvider = (props) => {

    const ContextValue = {all_product}

    return (
        <ProductsContext.Provider value={ContextValue}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider