import React, { useState } from "react";
import logo from "./images/logo.jpeg";
import cart1 from './images/cart1.jpeg'
import cart2 from './images/cart2.jpeg'
import cart3 from './images/cart3.jpeg'
import cart4 from './images/cart4.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const cart= [cart1,cart2,cart3,cart4];
  const [show,setShow]= useState(null);
  const toogleSection=(data)=>{
    setShow(show===data ? null:data)
    
  }
  return (
    <>
      <nav
        className="d-flex align-items-center justify-content-around position-fixed w-100"
        style={{ backgroundColor: "#2e353b" }}
      >
        <div>
          <img
            src={logo}
            className="img-fluid"
            style={{ height: "50px" }}
            alt="logo"
          />
        </div>
        <div>
          <ul
            className={`${show==='menu'?'show':''} mt-2 d-sm-flex list-unstyled gap-3 list collapse absolute-sm end-0`}
            style={{ backgroundColor: "#2e353b" }}
          >
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Products</li>
            <li>Review</li>
            <li>Contact</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="d-flex">
         
          <FontAwesomeIcon icon={faSearch} className="p-2" onClick={()=>toogleSection('search')} />
          <FontAwesomeIcon icon={faShoppingCart} className="p-2" onClick={()=>toogleSection('cart')} />
          <FontAwesomeIcon
            icon={faBars}
            className="d-block d-sm-none p-2"
            onClick={()=>toogleSection('menu')}/>
          <input type="text" style={{top:'50px', right:'20px'}} className={` ${show==='search'?'show':''} text-center position-absolute srchInput collapse`} placeholder="Search Here" /></div>
          <div className={`${show==='cart'? 'show':''} position-absolute bg-dark collapse cart`} style={{top:'50px',right:'0px'}}>
{
  cart.map(val=> 
    <div className="d-flex flex-row p-2"><div><img style={{width:'50px', height:'40px'}} src={val} alt="ghh" /></div><div className="ms-2"><h6>Cart Item 1</h6></div><div className="ms-2 ps-3">X</div></div>
  )
}
</div>        
      </nav>
    </>
  );
};

export default Navbar;
