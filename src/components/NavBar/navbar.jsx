import React, { useState } from 'react'
import { navLinks } from '../../constants'
import './navbar.scss'

const NavBar = () => {
    const [open, setOpen]= useState(false);
    console.log(open);

  return (
    <nav>
        <div className='left'>
            <a href="#" className="logo">
            <img src='../../../src/assets/real-estate.svg' alt='logo' />
                <span>LamaEstate</span>
            </a>
            {navLinks.map((navLink,index)=>(
                <a href='#' key={navLink.id}>{navLink.title}</a>
            ))}
        </div>
        <div className='right'>
            <a href='/'className='px-2 py-0 text-[16px] my-1 font-semibold rounded-[2px]'>sign in</a>
            <a href='/' className='bg-yellow-500 px-2 py-0 text-[16px] my-1 font-semibold rounded-[2px]'>sign up</a>
            <div className='menuIcon'>
                <img src={`../../../src/assets/${open ?'download_1':'download'}.png`} alt='menu-icon' onClick={() => setOpen((prev) => !prev)}/>
            </div>
            <div className={`${open ? "menu active" : "menu"}`}>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Agents</a>
                <a href='/'>Sign in</a>
                <a href='/'>Sign up</a>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
