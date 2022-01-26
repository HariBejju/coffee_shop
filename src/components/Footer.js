import React from 'react'
import '../style/footer.css'
import { Slide } from 'react-reveal'
function Footer() {
    return (
        <div className='footer'>
            <div className='last-part'>
                <Slide left>
                <div className='about-info'>
                    
                    <h2>About Info</h2>
                    <p>This is the perfect place to find a nice and cozy spot to sip some</p>
                    <p>Address: 456, east coast Road, Chennai 600023</p>
                    <p>Email: hello@example.com</p>
                    <p>phone 1234567890</p>
                </div>
                </Slide>
                <Slide top>
                <div className='information'>
                <ul>
                    <a className='hello' href="/"><li>Home</li></a>
                    <a className='hello' href="/shop"><li>Shop</li></a>
                    {/* <a href=""><li>Pages</li></a> */}
                    {/* <a href=""><li>Blog</li></a> */}
                    <a className='hello' href="/menu"><li>Menu</li></a>
                </ul>
                </div>
                </Slide>
                <Slide right>
                <div className='media'>
                <p>Facebook</p>
                <p>twitter</p>
                <p>Instagram</p>
                <p>Youtube</p>
                </div>
                </Slide>
            </div>
            
            <p>MADE BY S. HARIPRASANNA </p>
            
        </div>
    )
}

export default Footer
