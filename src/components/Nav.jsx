import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='w-full h-[75%] px-4 flex justify-between items-center text-white'>
        <h1 className='font-extrabold text-xl'>David Kwon</h1>
        <ul className='flex'>
            <li className='mr-4 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className='mr-4 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'>
                <NavLink to="/bio">Bio</NavLink>
            </li>
            <li className='mr-4 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'>
                <NavLink to="/experience">Experience</NavLink>
            </li>
            <li className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'>
                <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav