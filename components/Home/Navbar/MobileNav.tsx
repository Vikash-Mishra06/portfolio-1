"use client";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({closeNav, showNav}:Props) => {

  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]"
  return (
    <div className={`${navOpen} fixed inset-0 z-[100002]`}>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 transition-opacity duration-300"
        onClick={closeNav} // close when clicking outside
      ></div>

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-[80%] sm:w-[60%] bg-cyan-800 text-white flex flex-col justify-start pt-20 items-center space-y-6 transform transition-transform duration-500">

        <ul className="flex flex-col space-y-5 text-xl font-medium ">
          <li>
            <a className="hover:text-[#7C3AED] transition-colors border-b" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-[#7C3AED] transition-colors border-b" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="hover:text-[#7C3AED] transition-colors border-b" href="#skills">
              Skills & Tools
            </a>
          </li>
          <li>
            <a className="hover:text-[#7C3AED] transition-colors border-b" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="hover:text-[#7C3AED] transition-colors border-b" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-10 sm:h-10 w-8 h-8"/>
    </div>
  );
};

export default MobileNav;