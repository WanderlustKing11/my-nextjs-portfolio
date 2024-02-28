'use client';

import { useRef } from "react";
import Brain from "@/components/brain";
import { motion, useScroll } from "framer-motion";

const AboutPage = () => {

  const containerRef = useRef();

  const {scrollYProgress} = useScroll({container:containerRef});


    return (
      <motion.div 
        className='h-full' 
        initial={{ y:'-200vh'}} 
        animate={{ y:'0%'}} 
        transition={{ duration: 1 }}
      >
        {/* CONTAINER */}
        <div className='h-full overflow-scroll lg:flex' ref={containerRef}>

          {/* TEXT CONTAINER */}
          <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2'>
            
            {/* BIOGRAPHY CONTAINER */}
            <div className='flex flex-col gap-12 justify-center'>
              {/* BIO TITLE */}
              <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
              {/* BIO DESC*/}
              <p className='text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Etiam ut nunc dui. Nullam hendrerit dui eu porta venenatis. 
                Mauris in nisl sit amet lacus volutpat volutpat. Nullam libero nisi, 
                mattis sit amet maximus eget, tempus et dui. Nulla bibendum est 
                et tellus ornare lacinia.
              </p>
              {/* BIO QUOTE */}
              <span className='italic'>
                Vivamus sit amet tellus et magna accumsan rhoncus lacinia vel enim.
              </span>
              {/* BIO SIGNATURE SVG */}
              <div className='self-end'>
                <svg width="185" height="auto" viewBox="0 0 418 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M202 163C205.129 170.824 208.437 178.535 211.889 186.222C213.224 189.196 217.336 203.756 221.333 205.167C224.637 206.333 231.149 199.578 232.778 198.222C244.728 188.281 256.096 177.69 268.444 168.222C269.476 167.431 270.74 166.389 272.129 165.258M272.129 165.258C275.712 162.342 280.13 158.84 283.556 157.556C285.74 156.736 280.065 160.655 278.389 162.278C273.108 167.392 268.885 171.89 263.778 177.333C256.372 185.226 249.101 193.245 241.667 201.111C240.695 202.139 237.773 205.207 238.667 204.111C242.207 199.772 245.831 195.501 249.444 191.222C256.871 182.43 264.379 173.735 272.129 165.258ZM272.129 165.258C278.313 158.494 284.65 151.869 291.222 145.444C291.846 144.835 323.232 111.023 322.889 128.5C322.576 144.433 315.171 161.612 310.889 176.667C308.037 186.691 304.433 199.209 302 209.556C301.681 210.911 299.496 220.238 299.889 223.222C300.369 226.868 306.177 223.911 307.278 223.444C318.489 218.696 329.001 212.964 340.667 209.222C364.948 201.434 389.719 200 415 200M73 61C75.2456 56.1345 81.3746 52.0282 85.8889 49.6667C108.829 37.6659 139.883 36.4828 164.889 37.6667C203.95 39.5159 254.174 47.4223 268.222 90.7778C273.518 107.122 272.537 136.208 269.778 152.333C264.163 185.142 250.412 219.106 227.889 244C204.471 269.883 168.738 286.79 133.444 280.889C109.122 276.822 99.6855 254.219 91.8889 233.444C81.8712 206.752 74.4773 177.815 77.6667 149.111C79.2113 135.209 83.6159 121.536 87 108M133 3C134.137 7.54621 139.019 12.577 141.444 16.2778C152.788 33.5842 162.588 51.5106 152.778 72C149.173 79.5299 145.154 84.2379 139.389 90.4444C121.05 110.187 100.259 127.573 80.5556 145.889C59.8046 165.178 38.9293 184.439 23.1111 208.167C13.0575 223.247 9.52846 237.679 3 254" stroke="black" strokeWidth="5" strokeLinecap="round"/>
                </svg>
              </div>
              {/* BIO SCROLL SVG */}
              <svg              
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </svg>
            </div>

            {/* SKILLS CONTAINER */}
            <div className='flex flex-col gap-12 justify-center'>
              {/* SKILL TITLE */}
              <h1 className='font-bold text-2xl'>SKILLS</h1>
              {/* SKILL LIST */}
              <div className='flex gap-4 flex-wrap'>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  JavaScript
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  TypeScript
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  React.js
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  Next.js
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  SCSS
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  Tailwind
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  Bootstrap
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  Material-UI
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  Chakra-UI
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  Framer Motion
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  Canvas
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  MongoDB
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  SQL
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  Node.js
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  Express.js
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  Webpack
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  Babel
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  Google Platform
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  AWS
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  Docker
                </div>
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  Linux
                </div>                
                <div className='rounded p-2 text-sm cursor-pointer bg-black       text-white hover:bg-white hover:text-black'>
                  Windows
                </div>
              </div>
              {/* SCROLL SVG */}
              <svg              
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </svg>
            </div>

            {/* EXPERIENCE CONTAINER */}
            <div className='flex flex-col gap-12 justify-center pb-48'>
              <h1 className='font-bold text-2xl'>EXPERIENCE</h1>

              {/* EXPERIENCE LIST */}
              <div className=''>
                {/* EXPERIENCE LIST ITEM 1 */}
                <div className='flex justify-between h-48 xs:h-80'>
                  {/* LEFT */}
                  <div className='w-1/3'>
                    {/* JOB TITLE */}
                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                      Front End Website Developer
                    </div>
                    {/* JOB DESC */}
                    <div className='p-2 text-sm italic'>
                      Solo developer for a local fire extinguisher service business, responsible for increased brand awareness and standing against industry giants.
                    </div>
                    {/* JOB DATE */}
                    <div className='p-3 text-red-400 text-sm font-semibold'>
                      June 2024 - Present
                    </div>
                    {/* COMPANY */}
                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                      Cain &amp; Sons
                    </div>
                  </div>
                  {/* CENTER */}
                  <div className='w-1/6 xs:w-1/9 flex justify-center'>
                    {/* LINE */}
                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                      {/* CIRCLE */}
                      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className='w-1/3'></div>
                </div>

                {/* EXPERIENCE LIST ITEM 2 */}
                <div className='flex justify-between h-48 xs:h-80'>
                  {/* LEFT */}
                  <div className='w-1/3'></div>
                  {/* CENTER */}
                  <div className='w-1/6 xs:w-1/9 flex justify-center'>
                    {/* LINE */}
                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                      {/* CIRCLE */}
                      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className='w-1/3'>
                    {/* JOB TITLE */}
                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                      Front End Website Developer
                    </div>
                    {/* JOB DESC */}
                    <div className='p-2 text-sm italic'>
                      Solo developer for a local fire extinguisher service business, responsible for increased brand awareness and standing against industry giants.
                    </div>
                    {/* JOB DATE */}
                    <div className='p-3 text-red-400 text-sm font-semibold'>
                      June 2024 - Present
                    </div>
                    {/* COMPANY */}
                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                      Cain &amp; Sons
                    </div>
                  </div>
                </div>

                {/* EXPERIENCE LIST ITEM 3 */}
                <div className='flex justify-between h-48 xs:h-80'>
                  {/* LEFT */}
                  <div className='w-1/3'>
                    {/* JOB TITLE */}
                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                      Front End Website Developer
                    </div>
                    {/* JOB DESC */}
                    <div className='p-2 text-sm italic'>
                      Solo developer for a local fire extinguisher service business, responsible for increased brand awareness and standing against industry giants.
                    </div>
                    {/* JOB DATE */}
                    <div className='p-3 text-red-400 text-sm font-semibold'>
                      June 2024 - Present
                    </div>
                    {/* COMPANY */}
                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                      Cain &amp; Sons
                    </div>
                  </div>
                  {/* CENTER */}
                  <div className='w-1/6 xs:w-1/9 flex justify-center'>
                    {/* LINE */}
                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                      {/* CIRCLE */}
                      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className='w-1/3'></div>
                </div>

              </div>
            </div>
          </div>

          {/* SVG CONTAINER */}
          <div className='hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2'>
            <Brain scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </motion.div>
    )
  }
  
  export default AboutPage;