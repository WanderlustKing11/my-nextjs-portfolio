'use client'

import { useState } from 'react';

const CircleTestDarkModeState = () => {

    const [darkMode, setDarkMode] = useState(false);

    return (
        // Container
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
    )
}

export default CircleTestDarkModeState;