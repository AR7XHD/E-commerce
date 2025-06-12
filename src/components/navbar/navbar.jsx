import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [menu, setmenu] = useState(() => {
    const saved = localStorage.getItem("menu");
    return saved !== null ? JSON.parse(saved) : "shop"; // ← your initial value is 5
  });

  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(menu));
  }, [menu]);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setmenu("shop") }}> <NavLink to='/' style={{ textDecoration: "none", color:"black"}}>Shop</NavLink> {menu === "shop" && <hr />}</li>
        <li onClick={() => { setmenu("mens") }}><NavLink to='/mens' style={{ textDecoration: "none", color:"black" }} >Mens</NavLink> {menu === "mens" && <hr />}</li>
        <li onClick={() => { setmenu("womens") }} ><NavLink to='/womens' style={{ textDecoration: "none", color:"black" }}>Womens</NavLink> {menu === "womens" && <hr />}</li>
        <li onClick={() => { setmenu("kids") }}><NavLink to='/kids' style={{ textDecoration: "none", color:"black" }}>Kids</NavLink> {menu === "kids" && <hr />}</li>
      </ul>
      <div className='nav-login-cart'>
        <NavLink to='/LoginSignup' style={{ textDecoration: "none" }}>
          <button>Login</button>
        </NavLink>
        <div className='nav-cart-count'>
          <NavLink to='/cart'>
            <img src={cart_icon} alt="Cart" />
          </NavLink>
          <div className='nav-cart-count-number'>0</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar