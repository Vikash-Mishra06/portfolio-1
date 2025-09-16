"use client";
import TechStack from "@/components/TechStack";
import Image from "next/image";
import React from "react";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div
      id="hero"
      className=" relative h-screen flex items-center justify-center text-white overflow-hidden pt-10 px-6"
    >
      {/* Container split into two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center max-w-6xl w-full">
        {/* LEFT SIDE - Text Content */}
        <div className="text-center md:text-left gap-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[63px] font-bold  text-gray-300">
            <span className="text-gray-400 font-light ">Hi!👋</span>
            <br /> I'm<span className="text-[#8b5cf6] tracking-wider">Vikash</span>Mishra,
            <br /><p className="mt-5 text-lg font-medium text-gray-400 tracking-wide">A Passionate
              <span className="text-gray-200 ">
                MERN Developer, Full Stack Developer.
              </span>
              Building
              <span className="text-gray-200"> Data-Driven</span> web apps.
            </p>
          </h1>

          <h2 className="mt-5 text-sm sm:text-xl md:text-3xl font-semibold flex justify-center md:justify-start items-center">
            I'm a
            <span className="pl-2 text-[#8b5cf6] font-semibold tracking-wider">
              <Typewriter
                options={{
                  strings: [
                    "MERN Stack Developer",
                    "Full Stack Developer",
                    "Frontend Developer",
                    "Backend Developer",
                    "Web Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h2>
          <div className="flex gap-5 mt-5">
            <button className="px-4 py-2 bg-[#7C3AED] hover:bg-[#8b5cf6] text-lg font-medium rounded-xl">
              Get in Touch
            </button>
            <div className="flex">
              <button className="flex items-center gap-2 text-gray-400 hover:text-gray-200 text-lg font-medium rounded-xl">
                <span>
                  <i className="ri-file-text-line"></i>
                </span>
                RESUME
              </button>
            </div>
          </div>
          <div className="pt-10 flex flex-col">
            <h1 className="text-gray-400 font-medium text-lg pb-2">
              My current Tech Stack/Tools:
            </h1>
            <TechStack />
          </div>
        </div>

        {/* RIGHT SIDE - Profile Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/s1.jpg"
            alt="heroImage"
            width={450}
            height={450}
            className="rounded-full border-8 border-black/30 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
