'use client';

import { motion } from "framer-motion";

const AboutPage = () => {
    return (
      <motion.div 
        className='h-full' 
        initial={{ y:'-200vh'}} 
        animate={{ y:'0%'}} 
        transition={{ duration: 1 }}
      >
        {/* CONTAINER */}
        <div className=''>

          {/* TEXT CONTAINER */}
          <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64'>
            
            {/* BIGOGRAPHY CONTAINER */}
            <div className='flex flex-col gap-12 justify-center'>
              {/* BIO TITLE */}
              <h1>BIGOGRAPHY</h1>
              {/* BIO DESC*/}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Etiam ut nunc dui. Nullam hendrerit dui eu porta venenatis. 
                Mauris in nisl sit amet lacus volutpat volutpat. Nullam libero nisi, 
                mattis sit amet maximus eget, tempus et dui. Nulla bibendum est 
                et tellus ornare lacinia.
              </p>
              {/* BIO QUOTE */}
              <span>
                Vivamus sit amet tellus et magna accumsan rhoncus lacinia vel enim.
              </span>
              {/* BIO SIGNATURE SVG */}
              <div className=''>
              <svg width="418" height="285" viewBox="0 0 418 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M202 163C205.129 170.824 208.437 178.535 211.889 186.222C213.224 189.196 217.336 203.756 221.333 205.167C224.637 206.333 231.149 199.578 232.778 198.222C244.728 188.281 256.096 177.69 268.444 168.222C269.476 167.431 270.74 166.389 272.129 165.258M272.129 165.258C275.712 162.342 280.13 158.84 283.556 157.556C285.74 156.736 280.065 160.655 278.389 162.278C273.108 167.392 268.885 171.89 263.778 177.333C256.372 185.226 249.101 193.245 241.667 201.111C240.695 202.139 237.773 205.207 238.667 204.111C242.207 199.772 245.831 195.501 249.444 191.222C256.871 182.43 264.379 173.735 272.129 165.258ZM272.129 165.258C278.313 158.494 284.65 151.869 291.222 145.444C291.846 144.835 323.232 111.023 322.889 128.5C322.576 144.433 315.171 161.612 310.889 176.667C308.037 186.691 304.433 199.209 302 209.556C301.681 210.911 299.496 220.238 299.889 223.222C300.369 226.868 306.177 223.911 307.278 223.444C318.489 218.696 329.001 212.964 340.667 209.222C364.948 201.434 389.719 200 415 200M73 61C75.2456 56.1345 81.3746 52.0282 85.8889 49.6667C108.829 37.6659 139.883 36.4828 164.889 37.6667C203.95 39.5159 254.174 47.4223 268.222 90.7778C273.518 107.122 272.537 136.208 269.778 152.333C264.163 185.142 250.412 219.106 227.889 244C204.471 269.883 168.738 286.79 133.444 280.889C109.122 276.822 99.6855 254.219 91.8889 233.444C81.8712 206.752 74.4773 177.815 77.6667 149.111C79.2113 135.209 83.6159 121.536 87 108M133 3C134.137 7.54621 139.019 12.577 141.444 16.2778C152.788 33.5842 162.588 51.5106 152.778 72C149.173 79.5299 145.154 84.2379 139.389 90.4444C121.05 110.187 100.259 127.573 80.5556 145.889C59.8046 165.178 38.9293 184.439 23.1111 208.167C13.0575 223.247 9.52846 237.679 3 254" stroke="black" strokeWidth="5" strokeLinecap="round"/>
              </svg>
              </div>
              {/* BIO SCROLL SVG */}
            </div>

            {/* SKILLS CONTAINER */}
            <div className=''>
              SKILLS
            </div>

            {/* EXPERIENCE CONTAINER */}
            <div className=''>
              EXPERIENCE
            </div>
          </div>

          {/* SVG CONTAINER */}
          <div className=''>

          </div>
        </div>
      </motion.div>
    )
  }
  
  export default AboutPage;