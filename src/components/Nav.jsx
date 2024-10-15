import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-blue-200 w-full h-[75%] px-4 flex justify-between items-center'>
        <h1>David Kwon</h1>
        <ul className='flex'>
            <li className='mr-4'>
                <Link to="/">Home</Link>
            </li>
            <li className='mr-4'>
                <Link to="/bio">Bio</Link>
            </li>
            <li className='mr-4'>
                <Link to="/experience">Experience</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav