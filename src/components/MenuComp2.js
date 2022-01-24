import React from 'react'
import'../style/menu2.css'
import logo from '../images/americano.png'
import data from '../data'
import { Slide } from 'react-reveal'
function MenuComp2() {
     
        return (
          
            <div className='entire-menu-ra2'>
                
            <div className='topic-ra'>
                <p>Kofi Menu</p>
                <h1>EXPLORE POPULAR MENU</h1>
                <Slide bottom duration = {2000}>
                
                { data.menu.map((products)=>(
    
                    // return()
                    <div className='menu-thing'>
                        <div className='left-menu' key={products._id}>
                            <div className='left-emo'>
                                <img src ={require(`../images/${products.img}`)} />
                            </div>  
                            <div className='left-content-taa'>
                                <h2>{products.name}</h2>
                            </div>
                            <div className='line'>
                            
                            </div>
                            <div className='rate-dude'>
                                <p>Rs. {products.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
                   
                   </Slide>
            </div>
            </div>
            
               )}
    
    


export default MenuComp2
