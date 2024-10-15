import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-blue-200 w-full h-[75%] px-2 flex justify-between items-center'>
        <h1>David Kwon</h1>
        <div>
            <a className='mr-4'>Home</a>
            <a className='mr-4'>Bio</a>
            <a className='mr-4'>Experience</a>
            <a className='mr-4'>Portfolio</a>
        </div>
    </nav>
  )
}

export default Nav