import React from 'react'

import logo from '../images/logo.png'
import {BrowserRouter as Route, Router, Routes} from "react-router-dom"
import HomePage from '../pages/HomePage'
import '../style/navbar.css'

function Navbar() {
    return (
        <div className="App">
      <div className='navbar'>
            <div className='box3'>
            <img src={logo} alt='logo'/>

            </div>
            <div className='box2'>
               
            <ul>
                {/* <Routes> */}
                {/* <Route path="/"><li>Home</li></Route>
                <Route path="/"><li>Shop</li></Route>
                <Route path="/"><li>Pages</li></Route>
                <Route path="/"><li>Blog</li></Route>
                <Route path="/"><li>Our Menus</li></Route> */}
                {/* <Link to = "/"><li>Home</li></Link>
                <Link to = "/shop"><li>Shop</li></Link>
                <Link to = "/pages"><li>Pages</li></Link>
                <Link to = "/blog"><li>Blog</li></Link>
                <Link to = "/menu"><li>Our Menus</li></Link> */}
                {/* </Routes> */}
                
                <li>Home</li>
                <li>Shop</li>
                <li>Blogs</li>
                <li>Page</li>
                <li></li>
            </ul>
            </div>
            <div className='box1'>
              {/* <Router>
                <p>Log In</p>
                <p>Sign Up </p>
              </Router> */}
            </div>
           
            </div>
      
            
    </div>
    )
}

export default Navbar
