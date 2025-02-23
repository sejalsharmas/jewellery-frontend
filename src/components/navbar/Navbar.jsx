import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <div className='navbar'>
        <h1 className='heading-name'>Caratlane <img className='favicon' src= {logo}></img></h1>
    </div>
  )
}

export default Navbar