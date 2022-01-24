import React from 'react'
import product1 from '../images/product1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import data from '../data'
import { Slide } from 'react-reveal'
function shopPageComp() {
    return (
    
        <div className='entire-product'>
            <Slide bottom duration = {1500}> 
            {data.products.map((product)=>(
                <div className='product-container' key={product._id}>
                <div className='product-top'>
                    <a className='links-da' href = {`/product/${product._id}`}>
                        <img src = {require(`../images/${product.img}`)}/>
                    </a>
                </div>
                <div className='product-bottom'>
                <a className='links-da' href = {`/product/${product._id}`}>
                 <div className='product-name'>
                 {product.name}
                 
                 </div>
                 <div className='product-price'>
                     Rs. {product.price}
                 </div>
                 <div className='product-rating'>
                     <FontAwesomeIcon icon = {faStar}/>
                     <FontAwesomeIcon icon = {faStar}/>
                     <FontAwesomeIcon icon = {faStar}/>
                     <FontAwesomeIcon icon = {faStar}/>
                     <FontAwesomeIcon icon = {faStar}/>
                 </div>
                 </a>
                </div>
                
            </div>
            ))}
            </Slide>
           
           {/* <div className='product-container'>
               <div className='product-top'>
                <img src = {product1}/>
               </div>
               <div className='product-bottom'>
                <div className='product-name'>
                1. Fresh coffee seeds
                </div>
                <div className='product-price'>
                    Rs. 200
                </div>
                <div className='product-rating'>
                <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                </div>
               </div>
           </div>
           <div className='product-container'>
               <div className='product-top'>
                <img src = {product1}/>
               </div>
               <div className='product-bottom'>
                <div className='product-name'>
                1. Fresh coffee seeds
                </div>
                <div className='product-price'>
                    Rs. 200
                </div>
                <div className='product-rating'>
                <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                </div>
               </div>
           </div>
           <div className='product-container'>
               <div className='product-top'>
                <img src = {product1}/>
               </div>
               <div className='product-bottom'>
                <div className='product-name'>
                1. Fresh coffee seeds
                </div>
                <div className='product-price'>
                    Rs. 200
                </div>
                <div className='product-rating'>
                <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                </div>
               </div>
           </div>
           <div className='product-container'>
               <div className='product-top'>
                <img src = {product1}/>
               </div>
               <div className='product-bottom'>
                <div className='product-name'>
                1. Fresh coffee seeds
                </div>
                <div className='product-price'>
                    Rs. 200
                </div>
                <div className='product-rating'>
                <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                </div>
               </div>
           </div>
           <div className='product-container'>
               <div className='product-top'>
                <img src = {product1}/>
               </div>
               <div className='product-bottom'>
                <div className='product-name'>
                1. Fresh coffee seeds
                </div>
                <div className='product-price'>
                    Rs. 200
                </div>
                <div className='product-rating'>
                <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                </div>
               </div>
           </div>
           <div className='product-container'>
               <div className='product-top'>
                <img src = {product1}/>
               </div>
               <div className='product-bottom'>
                <div className='product-name'>
                1. Fresh coffee seeds
                </div>
                <div className='product-price'>
                    Rs. 200
                </div>
                <div className='product-rating'>
                <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                </div>
               </div>
           </div>
           <div className='product-container'>
               <div className='product-top'>
                <img src = {product1}/>
               </div>
               <div className='product-bottom'>
                <div className='product-name'>
                1. Fresh coffee seeds
                </div>
                <div className='product-price'>
                    Rs. 200
                </div>
                <div className='product-rating'>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                    <FontAwesomeIcon icon = {faStar}/>
                </div>
               </div>
           </div>
           <div className='product-container'>
               <div className='product-top'>
                <img src = {product1}/>
               </div>
               <div className='product-bottom'>
                <div className='product-name'>
                1. Fresh coffee seeds
                </div>
                <div className='product-price'>
                    Rs. 200
                </div>
                <div className='product-rating'>
                                        <FontAwesomeIcon icon = {faStar}/>
                                        <FontAwesomeIcon icon = {faStar}/>
                                        <FontAwesomeIcon icon = {faStar}/>
                                        <FontAwesomeIcon icon = {faStar}/>
                </div>
               </div>
           </div>
           <div className='product-container'>
               <div className='product-top'>
                <img src = {product1}/>
               </div>
               <div className='product-bottom'>
                <div className='product-name'>
                1. Fresh coffee seeds
                </div>
                <div className='product-price'>
                    Rs. 200
                </div>
                <div className='product-rating'>
                                        <FontAwesomeIcon icon = {faStar}/>
                                        <FontAwesomeIcon icon = {faStar}/>
                                        <FontAwesomeIcon icon = {faStar}/>
                                        <FontAwesomeIcon icon = {faStar}/>
                </div>
               </div>
           </div>
           <div className='product-container'>
               <div className='product-top'>
                <img src = {product1}/>
               </div>
               <div className='product-bottom'>
                <div className='product-name'>
                1. Fresh coffee seeds
                </div>
                <div className='product-price'>
                    Rs. 200
                </div>
                <div className='product-rating'>
                                        <FontAwesomeIcon icon = {faStar}/>
                                        <FontAwesomeIcon icon = {faStar}/>
                                        <FontAwesomeIcon icon = {faStar}/>
                                        <FontAwesomeIcon icon = {faStar}/>
                                        <FontAwesomeIcon icon = {faStar}/>
                </div>
               </div>
           </div>
           
           <div className='product-container'>
               <div className='product-top'>
                <img src = {product1}/>
               </div>
               <div className='product-bottom'>
                <div className='product-name'>
                1. Fresh coffee seeds
                </div>
                <div className='product-price'>
                    Rs. 200
                </div>
                <div className='product-rating'>
                                        <FontAwesomeIcon icon = {faStar}/>
                                        <FontAwesomeIcon icon = {faStar}/>
                                        <FontAwesomeIcon icon = {faStar}/>
                                        <FontAwesomeIcon icon = {faStar}/>
                </div>
               </div>
           </div> */}
           
                    
            </div>
               
           
        
    )
}

export default shopPageComp
