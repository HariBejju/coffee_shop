import React from 'react'
import '../style/slick.css'
import data from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from 'react-reveal'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

// import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

function SlickProducts() {
    return (
        <div className='slick'>
             <Slide bottom duration = {2500}>
            <p>What Happens Here</p>
            <h1>POPULAR COLLECTIONS</h1>
            <Swiper slidesPerView={4} spaceBetween={-1} slidesPerGroup={2} loop={true}
            // breakpoints: {
            //     // when window width is <= 499px
            //     499: {
            //         slidesPerView: 1,
            //         spaceBetweenSlides: 50
            //     },
            //     // when window width is <= 999px
            //     999: {
            //         slidesPerView: 2,
            //         spaceBetweenSlides: 50
            //     }
  loopFillGroupWithBlank={true} 
  breakpoints={
     { 500: {
          slidesPerGroup: 1,
          slidesPerView: 4,
        spaceBetween: 1
      }}
  }
  pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">
            {data.products.map((product)=>(
                <div className='slick-top-ra' >
                <SwiperSlide className='slick-top-ra'>
                <div className='product-container' >
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
            </SwiperSlide>
            </div>
            ))}
            </Swiper>
            </Slide>
        </div>
    )
}

export default SlickProducts
