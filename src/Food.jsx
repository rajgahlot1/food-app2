import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from "./Navbar.jsx";
import Header from './Header.jsx';
import About from './About.jsx'
import Products from './Products.jsx';
import Menu from './Menu.jsx';
const App=()=>{
    return(<>
    <Navbar/>
<Header/>
<About/>
<Menu/>
<Products/>
</>)
}
export default App;