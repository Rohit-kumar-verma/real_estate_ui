import React from 'react'
import { navLinks } from '../../constants'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center flex-1 sm:items-stretch sm:justify-start'>
        <div className='flex space-x-6 w-[60%] px-4 py-1 justify-start items-center'>
            <a href="/" className="logo">
                <img src="/logo.png" alt="" />
                <span>LamaEstate</span>
            </a>
            {navLinks.map((navLink,index)=>(
                <a href='#' key={navLink.id} className={`
                    ${navLink.current ? 'bg-gray-200 text-black-300' : 'text-black-300 hover:bg-gray-100 hover:text-black'} rounded-md px-3 py-2 text-sm font-medium`}>{navLink.title}</a>
            ))}
        </div>
        <div className='w-[40%] flex justify-end items-center space-x-6 pr-10 bg-orange-100'>
            <button type='button' className='px-2 py-1 text-[16px] my-2 font-semibold rounded-[2px]'>sign in</button>
            <button type='button' className='bg-yellow-500 px-2 py-1 text-[16px] my-2 font-semibold rounded-[2px]'>sign up</button>
        </div>
    </nav>
  )
}

export default NavBar
