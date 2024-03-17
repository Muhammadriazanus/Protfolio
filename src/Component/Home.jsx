import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
const Home = () => {
  return (
    <div name="home" className='bg-[#0a192f] w-full h-screen overflow-y-hidden'>
      {/* Contanier */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className="text-pink-600">My name is</p>
        <h1 className='text-4xl sm:text-7xl text-[#ccd6f6]'>Mohammad anas</h1>
        <h2 className='text-4xl sm:text-4xl font-bold text-[#8892b0]'>I'm a Mern-Stack  Developer</h2>
        <p className='py-4 max-w-[700px] text-[#8892b0]'>My name is Mohammad Anas and I am from Karachi. I am an undergraduate student in the Department of Computer Sciences university of Karachi in software engineering. I have expertise in front-end development and can create very good websites. I am skilled in React.js and can also create REST APIs using Node.js and Express.js</p>
        <div>
          <button className='text-white border-2 group px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300' >
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>


    </div>

  )
}

export default Home
