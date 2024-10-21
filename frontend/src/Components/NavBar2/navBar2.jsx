import React,{useState} from 'react'
import {Link ,NavLink} from 'react-router-dom'
import "../NavBar1/NavBar.css"
import logo from './Img/logo.jpg'; 
import user from './Img/user.png';

export const NavBar2 = () => {
  const[menuOpen,setMenuOpen]=useState(false);
  return (
    <nav >
      
      <li>
        <Link to="/" className='title'>
          <img src={logo} alt='logo'/>
          <h1>Eagle</h1>
        </Link>
      </li>

        <div className='menu' onClick={() =>{
          setMenuOpen(!menuOpen);
          }}>
          <span></span>
          <span></span>
          <span></span>
          </div>
     <ul className={menuOpen ? "open" : ""}>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/Services">Services</NavLink>
        </li>
        <li>
          {/* <NavLink to="/login">Login</NavLink> */}
          <NavLink to="/login">
          <img  className="userimg" src={user} alt="User" />
          </NavLink>

        </li>
        {
        /* <li>
          <NavLink to="/register">Register</NavLink>
        </li> */}
        
      
      </ul>
    </nav>
  )
}



