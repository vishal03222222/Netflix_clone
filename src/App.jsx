import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Route,Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'


import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'


const App = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
        if(user){
            console.log("Logged In");
            navigate('/')
        }else{
            console.log("Logged Out");
            navigate('/login')
        }
    });
  }, []);
  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>

    <Route path='/player/:id' element={<Player/>}/>

    <Route path='/' element={<Home/>}/>

      </Routes>

      
    </div>
  )
}

export default App
