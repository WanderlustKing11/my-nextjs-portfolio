'use client';

import { motion } from 'framer-motion';

const TestPage = () => {

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
        className='w-96 h-96 bg-red-500 rounded' 
        // initial={{ x:-100 }}
        variants={variants}
        animate='variant2'  // {condition ? 'variant2' : 'variant1'}
        // transition={{ delay:2, duration:4 }}
      >
        Yup
      </motion.div>
    </div>
  )
}

export default TestPage;