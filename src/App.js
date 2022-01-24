

import HomePage from "./pages/HomePage";
import './style/navbar.css'
import logo from './images/logo.png'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import MenuPage from "./pages/MenuPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { motion } from "framer-motion";
import useIntro from "./components/useIntro";



const navbarVariants = {
  initial:{
    opacity: 0,
    y:"-300px"
  },
  final:{
    opacity: 1,
    transition:{
      duration:0.9,
      y:0
    }
  }
}


function App() {
  const showAnimation  = useIntro()
  return (
    <div className="App">
      <div className='navbar'>
            <motion.div className='box3'
             initial={{y:-70}}
             animate={{y: 0}}
             transition = {{ type: 'spring' , stiffness: 120 }}
            
            >
            <img src={logo} alt='logo'/>
            </motion.div>
            <motion.div className='box2'
            initial={{y:-70}}
            animate={{y: 0}}
            transition = {{ type: 'spring' , stiffness: 120 }}>
            
               
            <ul>
                
                <>
                
                <a className="hello" href = "/"><li>Home</li></a>
                <a className="hello" href = "/shop"><li>Shop</li></a>
                {/* <a href = "/blog"><li>Blog</li></a> */}
                <a className="hello" href = "/menu"><li>Our Menus</li></a>
                </>
            </ul>
            </motion.div>
            <motion.div className='box1'
            initial={{y:-140}}
            animate={{y: 0}}
            transition = {{ type: 'tween'  }}>
              <>
                <a className="hello" href = "/login"><p>Log In</p></a>
                <a className="hello" href="/signup"><p>Sign Up </p></a>

              </>
            </motion.div>
           
            </div>
            <Router>
              <Routes>
                <Route path = "/*" element = {<HomePage/>}/>
                <Route path = "/shop" exact element = {<ShopPage/>}/>
                <Route path = "/blog"exact element = {<BlogPage/>}/>
                <Route path = "/menu" exact element = {<MenuPage/>}/>
                <Route path = "/product/:id" exact element = {<ProductPage/>}/>
                <Route path = "/login" exact element = {<LoginPage/>}/>
                <Route path = "/signup" exact element = {<SignUpPage/>}/>
                </Routes>
            </Router>
            {/* <HomePage/> */}
            
    </div>
  );
}

export default App;
