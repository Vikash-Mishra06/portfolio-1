import SocialLinks from '@/components/SocialLinks';
import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full px-4 sm:px-12 lg:px-40 py-5 bg-[#000000] border-t border-gray-600/50'>
      <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start'>
        <div className='text-gray-400 text-center sm:text-left'>
          <h1>© 2025 Vikash Mishra. All rights reserved.</h1>
        </div>
        <div className='mt-3 sm:mt-0'>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
