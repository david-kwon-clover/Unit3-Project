import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='w-full h-[75%] px-4 flex justify-between items-center text-white'>
        <h1 className='font-extrabold text-xl'>David Kwon</h1>
        <ul className='flex'>
            <li className='mr-4 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'>
                <Link to="/">Home</Link>
            </li>
            <li className='mr-4 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'>
                <Link to="/bio">Bio</Link>
            </li>
            <li className='mr-4 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'>
                <Link to="/experience">Experience</Link>
            </li>
            <li className='hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'>
                <Link to="/portfolio">Portfolio</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav