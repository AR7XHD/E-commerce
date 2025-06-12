import React from 'react'
import Navbar from '../components/navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const RootLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <div className='space' style={{height: '100px'}}></div>
    <Footer/>
    </>
  )
}

export default RootLayout