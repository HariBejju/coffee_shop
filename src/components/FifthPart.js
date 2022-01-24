import React from 'react'
import logo from '../images/user.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import { Slide } from 'react-reveal';
import '../style/fifthpart.css'
import SwiperCore , {Autoplay,Pagination,Navigation} from 'swiper'
SwiperCore.use([Autoplay,Pagination,Navigation]);

function FifthPart() {
    
    return (
        <div className='fifth-part'>
            <Slide bottom>
            <div className='client-say'>
                <h1>What Client Says</h1>
                <p>Resto Cafe is not just a coffee shop, It is an emotion</p>
            </div>
            
        <Swiper 
        spaceBetween={30} 
        centeredSlides={true}
         autoplay={{
            "delay": 5000,
            "disableOnInteraction": false}}
            pagination={{
            "clickable": true
            }}
             navigation={true}
              className="mySwiper">
            <SwiperSlide>
                <div className='move'>
                <img src = {logo} />
                
                <p>I've been driniking coffee for years and I can honestly say that coffee is the best product out there.</p>
                <p>Coffee has a perfect taste and it wakes up me in the morning. Its also really affordable</p>
                <h3>HESTER PERKINS</h3>
                </div>
                
            </SwiperSlide>
            <SwiperSlide>
            <div className='move'>
                <img src = {logo} />
                
                <p>I've been driniking coffee for years and I can honestly say that coffee is the best product out there.</p>
                <p>Coffee has a perfect taste and it wakes up me in the morning. Its also really affordable</p>
                <h3>HESTER PERKINS</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='move'>
                <img src = {logo} />
                
                <p>I've been driniking coffee for years and I can honestly say that coffee is the best product out there.</p>
                <p>Coffee has a perfect taste and it wakes up me in the morning. Its also really affordable</p>
                <h3>HESTER PERKINS</h3>
                </div>
            </SwiperSlide>
              </Swiper>
    
              </Slide>
        </div>
    )
}

export default FifthPart
