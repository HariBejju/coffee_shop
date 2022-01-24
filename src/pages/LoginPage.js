import React from 'react'
import '../style/login.css'
function LoginPage() {
    return (
        <div className='entire-login-black'>
            <div className='login-container'>
                <h1>Login</h1>
                <p>Please Login using account detail below</p>
                <form className='form'>
                    <div className='form-in'>
                    <input type = "email" placeholder='Email '></input>
                    </div>
                    <div className='form-in2'>
                    <input type = "password" placeholder='Password'></input>
                    </div>
                </form>
                <div className='bottom-part'>
                    <div className='sign-in-button'>
                        <button> Sign In</button>
                    </div>
                    
                    <div className='create-acc'>
                    create account
                    </div>
                </div>
                <div className='forgot'>
                    <a href = "/forgotpassword">
                    forgot Password?
                    </a>
                    </div>
            </div>
          
        </div>
    )
}

export default LoginPage
