import React from 'react';
import Nav from './Nav';

const App = () => {
  return (
    <main className='h-full w-full flex flex-col items-center'>
      <header className='bg-red-200 h-[15%] w-full mt-2 px-4 flex justify-center items-center'>
        <Nav />
      </header>
    </main>
  )
}

export default App
