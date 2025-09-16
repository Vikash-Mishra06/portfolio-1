'use client'
import Link from "next/link";
import React, { useState } from "react";
import Github from "./../../../public/images/Github_white.png";
import Instagram from "./../../../public/images/Instagram_white.png";
import Linkedin from "./../../../public/images/LinkedIN_white.png";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
}

const Nav = ({openNav}:Props) => {
  const [navbg, setNavbg] = useState(false)
  
  return (
    <div className="transition-all duration-300 h-[9vh] z-[1000] fixed w-full px-5 md:px-10 flex justify-between items-center gap-5 bg-black/50 backdrop-blur-md shadow-md">
      <div className="flex items-center w-[90%] h-auto gap-6">
        <div>
          <Link href="#">
          <div className="flex items-center">
            <span className="px-2 bg-[#8B5CF6] rounded-md text-white font-bold mr-2">
              /
            </span>
            <span className="text-white text-2xl font-semibold cursor-pointer">Vikash </span>{" "}
            <span className="text-2xl font-extrabold text-[#8B5CF6] ml-1">
              .
            </span>
          </div>
          </Link>
          {/* logo */}
        </div>
        <div className="hidden lg:flex items-center space-x-5">
          <ul>
            <li className="text-md text-blue-400 font-medium transition-all duration-300 space-x-5">
              <a className="hover:text-[#7C3AED]" href="#hero">Home</a>
              <a className="hover:text-[#7C3AED]" href="#projects">Projects</a>
              <a className="hover:text-[#7C3AED]" href="#skills">Skills & Tools</a>
              <a className="hover:text-[#7C3AED]" href="#resume">Resume</a>
              <a className="hover:text-[#7C3AED]" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex gap-4 cursor-pointer">
        <img src={Github.src} alt="GitHub" className="w-[25px] h-[25px]" />
        <img src={Linkedin.src} alt="GitHub" className="w-[25px] h-[25px]" />
        <img src={Instagram.src} alt="GitHub" className="w-[25px] h-[25px]" />
      </div>

      <HiBars3BottomRight onClick={openNav} className="lg:hidden w-8 h-8 text-white cursor-pointer"/>
    </div>
  );
};

export default Nav;
