import React from 'react'
// import logo from '../images/cofee-side.jpg'
import '../style/secondpart.css'
import logo from '../images/coffee-left.png'
import { Slide } from 'react-reveal'
import { motion } from 'framer-motion'
import useIntro from './useIntro'

function SecondPart() {
    const showAnimation = useIntro()
    return (
        <div className='second-part'>
            <div className='container1'>
                <div className='content'>
                    
                    <span className='black-coffee'>
                    <motion.p
                    initial={{x:'-100vw'}}
                    animate={{x: 0}}
                    transition = {{duration: 1.5,delay:2, type: 'tween' , stiffness: 70 }}
                    
                    >black coffee is awesome.</motion.p></span>
                    <span className='font-size-big'>
                    <motion.p
                    initial={{x:'-100vw'}}
                    animate={{x: 0}}
                    transition = {{duration: 1.5,delay:4, type: 'tween' , stiffness: 70 }}>
                    
                    TIME DISCOVER</motion.p>
                    <motion.p
                    initial={{x:'-100vw'}}
                    animate={{x: 0}}
                    transition = {{duration: 1.5,delay:6, type: 'tween' , stiffness: 70 }}>
                    
                    COFEE HOUSE</motion.p>
                    </span>
                    <motion.p className='moderate-size'
                     initial={{x:'-100vw'}}
                     animate={{x: 0}}
                     transition = {{duration: 1.5,delay:8, type: 'tween' , stiffness: 70 }}
                    >Experience the decibels of a sip like your ears deserve to.</motion.p>
                    <motion.p className='moderate-size'
                     initial={{x:'-100vw'}}
                     animate={{x: 0}}
                     transition = {{duration: 1.5,delay:8, type: 'tween' , stiffness: 70 }}
                    > Safe for the ears, very for the heart. A treat to your ears</motion.p>
                    <motion.div className='move-bit'
                     initial={{x:'-100vw'}}
                     animate={{x: 0}}
                     transition = {{duration: 1.5,delay: 10, type: 'tween' , stiffness: 70 }}
                    >
                        <button className='explore'>Explore More</button>
                    </motion.div>
            
                </div>
            </div>
            <motion.div
             className='container2'
             initial = {{scale: 0}}
             animate = {{scale:1}}
             transition={{duration:1.5}}
             >
                <img src = {logo}/>
            </motion.div>

            
        </div>
    )
}

export default SecondPart
