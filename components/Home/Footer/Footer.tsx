import SocialLinks from '@/components/SocialLinks';
import React from 'react';

const Footer = () => {
  return (
    <footer className='py-5 bg-[#000000] border-t border-gray-600/50'>
      <div className='w-full px-5 md:w-[90%] lg:w-4/5 md:mx-auto md:px-0'>
      <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start'>
        <div className='text-gray-400 text-center sm:text-left'>
          <h1>© 2025 Vikash Mishra. All rights reserved.</h1>
        </div>
        <div className='mt-3 sm:mt-0'>
          <SocialLinks />
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
