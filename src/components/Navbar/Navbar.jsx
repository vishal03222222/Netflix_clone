import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'


import { logout } from '../../firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
  const navref=useRef();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      } else {
        navRef.current.classList.remove('nav-dark')
      }
    })
  }, [])
  
  return (
    <div ref={navref} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
    <li>Home</li>
    <li>TV Shows</li>
    <li>Movies</li>
    <li>New & Popular</li>
    <li>My List</li>
    <li>Browse by Languages</li>
</ul>

      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons'/>
        <p>children</p>
       <img src={bell_icon} alt="" className='icons'/>
        <div className='navbar-profile'>
        {/* <img src={bell_icon} alt="" className='profile'/> */}
        <img src={profile_img} alt="" className='profile'/>
        <img src={caret_icon} alt="" className='profile'/>
       

        <div className="dropdown">
    <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
</div>


        </div>
        {/* <img src={caret_icon} alt="" className='profile'/> */}

      </div>
    </div>
  )
}

export default Navbar
