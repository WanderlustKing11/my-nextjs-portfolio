'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const TestPage = () => {

  const [darkMode, setDarkMode] = useState(false);


  const variants = {
    variant1: {
      x: 400, 
      y:300, 
      opacity:0.5,
      transition: {
        delay: 1,
        duration: 3
      }
    },
    variant2: {
      x: -200, 
      y:300, 
      opacity:0.5, 
      rotation:90,
      transition: {
        delay: 1,
        duration: 2
      }
    }
  }

  return (
    <div className='h-full flex items-center justify-center'>
      <motion.div 
        className={`w-96 h-96 ${darkMode ? 'bg-red-500' : 'bg-green-500'} rounded `}
        // initial={{ x:-100 }}
        variants={variants}
        animate='variant2'  // {condition ? 'variant2' : 'variant1'}
        // transition={{ delay:2, duration:4 }}
      >
        Yup
      </motion.div>

      <div className='flex flex-col items-center justify-center'>
        <div className={`w-64 h-64 flex items-center justify-center rounded-full border-solid border-[32px] ${darkMode ? 'bg-orange-500 border-black' : 'bg-black border-orange-500'}`}>
          <div className={`w-32 h-32 flex items-center justify-center rounded-full border-solid border-[32px] ${darkMode ? 'bg-orange-500 border-black' : 'bg-black border-orange-500'}`}>
          </div>
        </div>
        <button 
          aria-pressed={darkMode}
          className={`w-48 mt-8 flex items-center justify-center text-white ${darkMode ? 'bg-black': 'bg-orange-500'} rounded hover:bg-gray-700 hover:h-8 hover:w-52 active:translate-y-2 active:text-black transition-all duration-300`} onClick={(() => setDarkMode(!darkMode))}>
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </div>
  )
}

export default TestPage;