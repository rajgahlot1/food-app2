import cart1 from './images/cart1.jpeg'
import cart2 from './images/cart2.jpeg'
import cart3 from './images/cart3.jpeg'
import {
  faEye,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products = () => {
  return (
    <div className="mb-4">
      <h1 className="text-center">OUR PRODUCTS</h1>
      <div className="row">
        <div className="col border border-white"><div>
            <div className='d-flex'><FontAwesomeIcon  icon={faShoppingCart} />
            <FontAwesomeIcon  icon={faEye} />
            <FontAwesomeIcon  icon={faHeart} /></div> <div className='text-center mt-2 mb-1'><img src={cart1} style={{height:'150px',width:'200px'}} alt="" /></div></div></div>
        <div className="col border border-white"><div className='d-flex'><FontAwesomeIcon className="col" icon={faShoppingCart} />
   <FontAwesomeIcon  icon={faEye} />
            <FontAwesomeIcon  icon={faHeart} /> </div><div className='text-center mt-2 mb-1'><img src={cart2} style={{height:'150px',width:'200px'}} alt="" /></div></div></div>
        <div className="col border border-white"><div><FontAwesomeIcon className="col" icon={faShoppingCart} />
   <div>         <FontAwesomeIcon  icon={faEye} />
            <FontAwesomeIcon  icon={faHeart} /> </div><div className='text-center mt-2 mb-1'><img src={cart3} style={{height:'150px',width:'200px'}} alt="" /></div></div></div>
      </div>
  );
};

export default Products;
