import React from 'react'
import logo from '../images/coffee-mug.png'
import '../style/thirdpart.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBeer} from '@fortawesome/free-solid-svg-icons'
import {faMugHot} from '@fortawesome/free-solid-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {faCocktail} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faStore} from '@fortawesome/free-solid-svg-icons'
import { Fade, Slide } from 'react-reveal'
import { motion } from 'framer-motion'

function ThirdPart() {
    return (

        <div className='third-part'>
            <Fade bottom duration = {2000}>
            <div className='topic'>
                <p>Dark Chocolate, Clove, Mint </p>
                <h1>COFFEE BUILD YOUR BASE</h1>

            </div>
            </Fade>
            <div className='three-box'>
            <div className='box-left-3'>
            <Fade left duration = {2000}>
                <div className='stuff'>
                    <div>
                    <h2>EASY TO ORDER</h2>
                    <p>get your coffee at your door step. Easy to order. </p>
                    <p>So cherish the sip</p>
                    </div>
                    <div >
                    <FontAwesomeIcon size = "3x" icon = {faBeer} className='iconda' ></FontAwesomeIcon>
                </div>
                </div>
                
                <div className='stuff'>
                    <div>
                    <h2>MOBILE FRIENDLY</h2>
                    <p>Available across 20 states with more than 170 shops. </p>
                    <p>Grab your coffee from nearby shop</p>
                    </div>
                    <div >
                    <FontAwesomeIcon  size = "3x" icon = {faStore}></FontAwesomeIcon>
                </div>
                </div>
                <div className='stuff'>
                    <div >
                    <h2 className='coffee-icon'>CUPS OF COFFEE</h2>
                    <p className='coffee-icon'>Now get into the world of dope with a sip of Resto Cafe's coffee</p>
                    </div>
                    <div >
                    <FontAwesomeIcon size = "3x" icon = {faMugHot} ></FontAwesomeIcon>
                </div>
                </div>
               </Fade>
            </div>
            <div className='box-mid-3'>
                <motion.img 
                initial={{y:-70}}
                animate={{y:0}}
                transition={{duration:1.5,
                yoyo:Infinity
                }}
                src = {logo}
                />
            </div>
            <div className='box-right-3'>
            <Fade right duration = {2000}>
                <div className='stuff'>
                    <div>
                    <h2>SELLING ONLINE</h2>
                    <p>products available in online with 24x7 Service.  </p>
                    <p>Order at any time. Any day</p>
                    </div>
                    
                    <div >
                    <FontAwesomeIcon size = "3x" icon = {faShoppingCart}></FontAwesomeIcon>
                </div>
                </div>
                <div className='stuff'>
                    <div>
                    <h2>EASY CUSTOMAIZATION</h2>
                    <p>Customer friendly service with two layer authentication.  </p>
                    <p>So Chill and relax with Resto Cafe's coffee</p>
                    </div>
                    <div >
                    <FontAwesomeIcon size = "3x" icon = {faUsers}></FontAwesomeIcon>
                </div>
                </div>
                <div className='stuff'>
                    <div>
                    <h2>LOWEST COST</h2>
                    <p>Grab your Resto Cafe's coffee starting from just ₹99</p>
                    </div>
                    <div >
                    <FontAwesomeIcon size = "3x" icon = {faCocktail}></FontAwesomeIcon>
                </div>
                </div>
                </Fade>
            </div>


            </div>
        </div>
    )
}

export default ThirdPart
