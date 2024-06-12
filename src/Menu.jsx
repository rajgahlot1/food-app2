import Button from 'react-bootstrap/Button';
import React from 'react'

import menu1 from './images/menu1.jpeg'
import menu2 from './images/menu2.jpeg'
import menu3 from './images/menu3.jpeg'
import menu4 from './images/menu4.jpeg'
import menu5 from './images/menu5.jpeg'
import menu6 from './images/menu6.jpeg'
import menu7 from './images/menu7.jpeg'
import menu8 from './images/menu8.jpeg'
import menu9 from './images/menu9.jpeg'
const Menu = () => {
    const menu=[menu1,menu2,menu3,menu4,menu5,menu6,menu7,menu8,menu9]
  return (
   <>
   <div className='text-center'><h1>OUR MENU</h1></div>
   <div className='d-flex flex-wrap justify-content-center align-items-center'>
    {
        menu.map(val=> 
            <div style={{width:'175px',height:'220px'}} className='ms-2 mb-2 border border-white'><img src={val} style={{width:'170px',height:'90px',backgroundSize:'cover', objectFit:'fit'}} alt="" /><h5>Teasty and Healthy</h5><p className='ms-2'>$15.99</p><Button variant='danger' className='ms-2'>Add to cart</Button></div>)
    }
   </div>
   </>
  )
}

export default Menu