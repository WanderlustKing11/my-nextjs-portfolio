'use client';

import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import Navbar from "./navbar";
import { usePathname } from 'next/navigation';
import { FaHome } from "react-icons/fa";

const TransitionProvider = ({children}) => {

  const pathName = usePathname();

  return (
    <AnimatePresence mode='wait'>
      <div 
        key={pathName} 
        className='w-screen h-screen bg-gradient-to-b from-blue-100 to-red-200'
      >
        {/* TRANSITION PAGE IN */}
        <motion.div 
          className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40' 
          animate={{ height: '0vh' }}
          exit={{ height: '140vh'}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />

        {/* PAGE TITLE */}
        <motion.div
          className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit'
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {pathName === '/' ? <FaHome /> : pathName.substring(1)}
        </motion.div>

        {/* TRANSITION PAGE OUT */}
        <motion.div 
          className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30' 
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.5 } }}
        />

        <div className='h-24'>
          <Navbar />
        </div>
        <div className='h-[calc(100vh-6rem)]'>{children}
          {/* <div className='flex items-center justify-center mt-[30%]'>
            <CircleTestDarkModeState />
          </div> */}          
        </div>        
      </div>
    </AnimatePresence>
  )
}

export default TransitionProvider;