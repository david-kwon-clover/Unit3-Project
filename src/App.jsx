import React from 'react';
import WizardPortrait from './assets/wizard_portrait.png';

const App = () => {
  return (
    <main className='h-[85%] w-full flex justify-center items-center font-jetbrains px-24 text-white'>
      <span className='text-right text-pretty w-[40%]'>
        <h2 className='text-3xl mb-4'>Hi, I'm David 👋</h2>
        <h2 className='text-6xl mb-12'>A powerful wizard</h2>
        <h2 className='text-2xl mb-4'>Wielding the power of Harry Potter and all the legends before him...</h2>
      </span>
      <img src={WizardPortrait} className='rounded-3xl ml-16 shadow-2xl hover:shadow-3xl transform transition duration-300 hover:scale-105'/>
    </main>
  )
}

export default App
