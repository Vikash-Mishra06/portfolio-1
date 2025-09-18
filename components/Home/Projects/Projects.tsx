'use client';
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const Projects = () => {
  return (
    <div id="projects" className="md:pt-16 md:pb-16 bg-[#000000]">
       <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-400"
      >
        <i>Projects: My</i><br /> Latest-- 
        <span className="text-gray-200 font-bold">
          <i> Projects </i>
          </span>
      </motion.h1>

      <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
        <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
        >
          <Image src='/images/image.png' alt='Project 1 Img' width={800} height={700} className='rounded-lg object-cover'/>
          <h1 className='mt-4 text-lg sm:text-2xl font-semibold text-gray-200'>Agency.Ai</h1>
          <h3 className='mt-2 text-sm sm:text-md font-semibold text-gray-400'>Service Web App.</h3>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        viewport={{ once: true }}
        >
          <Image src='/images/image2.png' alt='Project 2 Img' width={800} height={700} className='rounded-lg'/>
          <h1 className='mt-4 text-lg sm:text-2xl font-semibold text-gray-200'>Nexovate-Agency</h1>
          <h3 className='mt-2 text-sm sm:text-md font-semibold text-gray-400'>Service Web App.</h3>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        viewport={{ once: true }}
        >
          <Image src='/images/image3.png' alt='Project 3 Img' width={800} height={700} className='rounded-lg'/>
          <h1 className='mt-4 text-lg sm:text-2xl font-semibold text-gray-200'>Mensco Re-design</h1>
          <h3 className='mt-2 text-sm sm:text-md font-semibold text-gray-400'>E-commerce Web App.</h3>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1 }}
        viewport={{ once: true }}
        >
          <Image src='/images/image4.png' alt='Project 4 Img' width={800} height={700} className='rounded-lg'/>
          <h1 className='mt-4 text-lg sm:text-2xl font-semibold text-gray-200'>K72-ca Portfolio</h1>
          <h3 className='mt-2 text-sm sm:text-md font-semibold text-gray-400'>Web App.</h3>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects