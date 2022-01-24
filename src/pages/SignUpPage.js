import React from 'react'
import '../style/signup.css'
function SignUpPage() {
    return (
        <div className='dark-container'>
            <div className='white-container'>
                <div className='inside-form'>
                    <h1>Create Account</h1>
                    <p>Please Register using account detail below</p>
                    <form className='form-da'>
                        <div className='fields-ra'>
                            <input type="text" placeholder='First Name'/>
                        </div>
                        <div className='fields-ra'>
                            <input type="text" placeholder='Last Name'/>
                        </div>
                        <div className='fields-ra'>
                            <input type="email" placeholder='Email'/>
                        </div>
                        <div className='fields-ra'>
                            <input type="password" placeholder='Password'/>
                        </div>
                    </form>
                    <div className='end'>
                        <div className='buttonss'>
                            <button>Create</button>
                        </div>
                        <a className = "return" href="shop">Return to Store</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SignUpPage
