import React, { useState } from 'react'
import './Login.css'
import hero_banner from '../../assets/logo.png'
import {login,signup} from '../../firebase'
const Login = () => {
 
const [SignState,setsignState]=useState("sign In")
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const user_auth = async (event)=>{
  event.preventDefault();
  if(SignState==="Sign In"){
      await login(email, password);
  }else{
      await signup(name, email, password);
  }
}

  return (
    <div className='login'>
        <img src={hero_banner} className='login-logo' alt='' />
        <div className='login-form'>
            <h1>{SignState}</h1>
            <form>
              {SignState==="sign up" ? 
             <input value={name} onChange={(e)=>{setName(e.target.value)}}
             type="text" placeholder='Your name' />:<></>}
             <input value={email} onChange={(e)=>{setEmail(e.target.value)}}
             type="email" placeholder='Email' />
             <input value={password} onChange={(e)=>{setPassword(e.target.value)}}
             type="password" placeholder='Password' />
              <button onClick={user_auth} type='submit'>{SignState}</button>
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
