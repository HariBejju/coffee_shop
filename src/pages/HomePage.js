import React from 'react'
import SecondPart from '../components/SecondPart'
import ThirdPart from '../components/ThirdPart'
import FifthPart from '../components/FifthPart'
import Footer from '../components/Footer'
import SlickProducts from '../components/SlickProducts'
import { Slide } from 'react-reveal'

function HomePage() {
    return (
        <div>
            
            <SecondPart/>
           
            <ThirdPart/>
            
            <SlickProducts/>
            <FifthPart/>
            <Footer/>
        </div>
    )
}

export default HomePage
