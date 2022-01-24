import React from 'react'
import'../style/menu.css'
import logo from '../images/americano.png'
import data from '../data'
import { Slide , Fade} from 'react-reveal'
function MenuComp() {
     
        return (
          
            <div className='entire-menu-ra'>
                
            <div className='topic-ra'>
                <p>Kofi Menu</p>
                <h1>EXPLORE POPULAR MENU</h1>
                <Fade bottom duration = {2000}>
                
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
                </Fade>
                   
            
            </div>
            </div>
            
               )}
    
    


export default MenuComp
