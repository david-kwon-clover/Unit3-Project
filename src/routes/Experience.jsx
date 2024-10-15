import React from 'react'
import Hogwarts from '../assets/hogwarts.jpg'
import Google from '../assets/google_magical.jpg';

const Experience = () => {
  return (
    <section className='h-[85%] w-full flex justify-center items-center font-jetbrains px-24 text-white'>
      <article className='text-left text-pretty w-[55%]'>
        <h3 className='text-2xl'>Education</h3>
        <ul className='mb-12'>
          <li className='text-lg list-disc'>Houdini Elementary</li>
          <li className='text-lg list-disc'>Ron Weasly High School</li>
          <li className='text-lg list-disc'>Hogwarts School of Witchcraft and Wizardry</li>
        </ul>
        <h3 className='text-3xl'>Professional Experience</h3>
        <ul>
          <li className='text-xl list-disc'>Instructor of the Dark Arts - Hogwarts</li>
          <li className='text-xl list-disc'>Spellware Engineer - Google</li>
          <li className='text-xl list-disc'>Potions Development Operations - Facebook</li>
        </ul>
      </article>
      <div className='flex flex-col ml-4 h-full items-center'>
        <img src={Hogwarts} className='rounded-3xl h-[45%] w-full'/>
        <img src={Google} className='rounded-3xl h-[45%] w-full'/>
      </div>
    </section>
  )
}

export default Experience