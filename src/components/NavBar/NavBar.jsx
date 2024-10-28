import React, { useContext, useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const NavBar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("contact-us");
    const {getTotalCartAmount}=useContext(StoreContext)
    return (
    <div>
        <div className="navbar">
        <Link to='/'><img className='logo'src={assets.logo} alt="" /></Link>
        <ul className="nav-menu">
           <Link to='/'><li onClick={()=>setMenu("home")}className={menu==="home"?"active":""}>Home</li></Link> 
            <a href="#explore-menu"><li onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>Menu</li></a>
            <a href="#app-download"><li onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>Mobile-app</li></a>
            <a href="#footer"><li onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>contact us</li></a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="nav-bar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign In</button>
        </div>
        </div>
    </div>
  )
}

export default NavBar