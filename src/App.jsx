import './App.css'
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Shop from './pages/Shop'
import ShopCatogaries from './pages/ShopCatogaries'
import Product from './pages/Product'
import LoginSignup from './pages/LoginSignup'
import Cart from './pages/Cart'
import ErrorPage from './pages/ErrorPage'
import ProductsContextProvider from './context/AllProductscontext'
import banner_men from './assets/banner_mens.png'
import banner_women from './assets/banner_women.png'
import banner_kid from './assets/banner_kids.png'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Shop />} errorElement={<ErrorPage />} />
        <Route path='mens' element={<ShopCatogaries category='men' banner={banner_men} />}  errorElement={<ErrorPage />} />
        <Route path='womens' element={<ShopCatogaries category='women' banner={banner_women}/>}  errorElement={<ErrorPage />} />
        <Route path='kids' element={<ShopCatogaries category='kid' banner={banner_kid} />}   errorElement={<ErrorPage />} />
        <Route path='Product' element={<Product />} errorElement={<ErrorPage />} >
          <Route path=':productId' element={<Product />} errorElement={<ErrorPage />} />
        </Route>
        <Route path='LoginSignup' element={<LoginSignup />} errorElement={<ErrorPage />} />
        <Route path='cart' element={<Cart />} errorElement={<ErrorPage />} />
      </Route>
    )
  )

  return (
    <>
    <ProductsContextProvider>
      <RouterProvider router={router} />
    </ProductsContextProvider>
    </>
  )
}

export default App
