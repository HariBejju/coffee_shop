import React from 'react'
import logo from '../images/botero.png'
import '../style/productpage.css'
import data from '../data'
import { useParams } from 'react-router'
import Footer from '../components/Footer'
import SlickProducts from '../components/SlickProducts'
function ProductPage(props) {
// console.log(props)
const {id} = useParams()
const product = data.products.find((x)=> x._id === id)
console.log(product)

// console.log(id)
    return (
        <div className='entire-product-da'>
            <div className='product-container-da'>
                <div className='product-left-da'>
                    <div className='product-image-da'>
                        <img src= {require(`../images/${product.img}`)}/>
                    </div>
                     </div>
                <div className='product-right-da'>
                <h1>{product.name}</h1>
                <h2>Rs. {product.price}</h2>
                <p>Vendor: vendor_name</p>
                <p>Availability: {product.availability} Nos</p>
                <p>packing : {product.weight} gms </p>
                <p>Description: </p>
                {product.description}
                <div className='buy-it-button'>
                    <button>Buy it now</button>
                </div>
                </div>
            </div>
            <SlickProducts/>
            <Footer/>
        </div>
        
    )
}

export default ProductPage
