import React, { useState } from 'react'
import './Login.css'
import hero_banner from '../../assets/logo.png'

const Login = () => {
const [SignState,setsignState]=useState("sign In")

  return (
    <div className='login'>
        <img src={hero_banner} className='login-logo' alt='' />
        <div className='login-form'>
            <h1>{SignState}</h1>
            <form>
              {SignState==="sign up" ? 
              <input type="text" placeholder="Your name"/> :<></>}
              
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign In</button>
                <div className='form-help'>
                  <div className="remember">
                    <input type="checkbox" />
                    <label htmlFor="">Remember Me</label>
                  </div>
                  <p>Need Help?</p>
                </div>
            </form>
            <div className="form-switch">
              {SignState=="sign In" ?
              <p>New to Netflix? <span onClick={()=>{setsignState("sign up")}}>Sign Up Now</span> </p> :
              <p>Already ave Account? <span onClick={()=>{setsignState("sign In")}}>Sign In Now</span> </p>

              }
              
          
            </div>
        </div>
    </div>
);

}

export default Login
