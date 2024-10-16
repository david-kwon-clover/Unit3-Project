import React from 'react'
import MeAndKanye from '../assets/me_and_kanye.jpg';
import MeAndVoldy from '../assets/me_and_voldy.jpg';

const Bio = () => {
  return (
    <section className='h-[75%] w-full flex justify-center items-center font-jetbrains px-24 text-white'>
      <article className='text-right text-pretty w-[45%]'>
        <p className='text-lg mb-4'>Born in the year 1687, I am a 337 year old mage who achieved immortality at the young age of 63.</p>
        <br></br>
        <p className='text-lg mb-4'>I have earned the admiration of even the most discerning minds including Severus Snape, Albus Dumbledore, P Diddy, and Kanye West.</p>
        <br></br>
        <p className='text-lg mb-4'>As a wizard, I aspire to elevate the perception of The World of Witchcraft and Wizardry by pushing for advanced research into charms, potions, elixirs, and spell creation.</p>
      </article>
      <div className='flex ml-4 h-full items-center'>
        <img src={MeAndKanye} className='rounded-3xl m-4 h-[90%] shadow-2xl hover:shadow-3xl transform transition duration-300 hover:scale-105'/>
        <img src={MeAndVoldy} className='rounded-3xl m-4 h-[90%] shadow-2xl hover:shadow-3xl transform transition duration-300 hover:scale-105'/>
      </div>
    </section>
  )
}

export default Bio