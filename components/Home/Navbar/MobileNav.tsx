"use client";
import SocialLinks from "@/components/SocialLinks";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";
  return (
    <div id="mobilenav" className={`${navOpen} fixed inset-0 z-[100002]`}>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 transition-opacity duration-300"
        onClick={closeNav} // close when clicking outside
      ></div>

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-[80%] sm:w-[60%] bg-[#0f172a] text-[#8B5CF6] flex flex-col justify-start pt-20 items-center space-y-6 transform transition-transform duration-500">
        <ul className="flex flex-col space-y-5 text-xl font-medium ">
          <li>
            <a
              href="#hero"
              onClick={closeNav}
              className="hover:text-[#7C3AED] transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={closeNav}
              className="hover:text-[#7C3AED] transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={closeNav}
              className="hover:text-[#7C3AED] transition-colors"
            >
              Skills & Tools
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={closeNav}
              className="hover:text-[#7C3AED] transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={closeNav}
              className="hover:text-[#7C3AED] transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeNav}
              className="hover:text-[#7C3AED] transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <CgClose
        onClick={closeNav}
        className="absolute top-[0.7rem] right-[1.4rem] sm:w-10 sm:h-10 w-8 h-8 text-[#8B5CF6]"
      />
    </div>
  );
};

export default MobileNav;
