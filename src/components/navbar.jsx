import React, { useEffect, useState } from 'react';
import './navbar.css';
import logo from './asssets/logo.png' ;
import menu_icon from './asssets/menu-icon.png'

const Navbar =() => {
 const [sticky, setSticky]=useState(false); 

 useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY> 50? setSticky(true): setSticky(false); 
    })
 },[]); 

 const [Mobilemenu, setMobilemenu]=useState(false); 
 const togglemenu = ()=>{
  Mobilemenu? setMobilemenu(false): setMobilemenu(true); 
 }


    return (
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <h2 className="logo">UOS.com</h2>
        <ul className={Mobilemenu ?'':'hide-mobile-menu'}>
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li><button className="btn">Contact us</button></li>
        </ul>
        <img className='menu_icon' src={menu_icon} alt=""  onClick={togglemenu}/>
      </nav>
    );
  }

export default Navbar;
