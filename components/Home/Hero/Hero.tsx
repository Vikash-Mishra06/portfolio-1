"use client";
import TechStack from "@/components/TechStack";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "motion/react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative h-screen min-h-[100dvh] flex items-center justify-center text-white z-10"
    >
      {/* Main container with responsive width */}
      <div className="w-full px-5 pt-10 lg:pt-15 md:w-[90%] lg:w-[90%] xl:w-4/5 md:mx-auto md:px-0 grid grid-cols-1 md:grid-cols-2 items-center max-w-[77rem]">
        {/* LEFT SIDE - Text Content */}
        <div className="md:text-left gap-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[62px] font-bold text-gray-300"
          >
            <span className="text-gray-400 font-light text-left">Hi!👋</span>
            <br />
            I&apos;m{" "}
            <span className="inline-block text-[#8B5CF6] mt-2">
              Vikash
            </span>{" "}
            Mishra,
            <br />
            <p className="mt-5 text-sm sm:text-md lg:text-lg font-medium text-gray-400 tracking-wide text-left">
              A Passionate
              <span className="text-gray-200">
                {" "}
                MERN Developer, Full Stack Developer.
              </span>
              <br />
              Building<span className="text-gray-200"> Data-Driven</span> web
              apps.
            </p>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-5 text-left text-md sm:text-xl md:text-xl font-semibold flex justify-start items-center"
          >
            I&apos;m a
            <span className="pl-2 text-[#8B5CF6] font-semibold tracking-wider">
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
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="flex gap-5 mt-5"
          >
            <Link
              href="#contact"
              className="px-4 py-2 bg-[#7C3BEB] hover:bg-[#8B5CF6] z-1 active:bg-[#8B5CF6] text-sm sm:text-md font-medium rounded-md lg:rounded-lg cursor-pointer"
            >
              Get in Touch
            </Link>
            <div className="flex">
              <button
                onClick={() =>
                  window.open("/Vikash Mishra-Resume.pdf", "_blank")
                }
                className="flex items-center gap-2 text-gray-400 hover:text-gray-100 active:text-gray-100 text-md font-medium rounded-xl cursor-pointer tracking-wide"
              >
                <span>
                  <i className="ri-file-text-line"></i>
                </span>
                RESUME
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            viewport={{ once: true }}
            className="pt-15 flex flex-col"
          >
            {/* ✨ Shiny Text Effect */}
            <h1 className="relative inline-block text-lg sm:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#7C3BEB] via-blue-400 to-[#7C3BEB] animate-shine pb-3">
              My Current Tech Stack/Tools:
            </h1>
            <TechStack />

            {/* 🔥 Shine Animation */}
            <style jsx>{`
              @keyframes shine {
                0% {
                  background-position: -200% 0;
                }
                100% {
                  background-position: 200% 0;
                }
              }
              .animate-shine {
                background-size: 200% auto;
                animation: shine 5s linear infinite;
              }
            `}</style>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="hidden md:flex justify-center md:justify-end mr-10"
        >
          <div className="relative flex items-center justify-center">
            {/* 🔹 Subtle glow behind */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-blue-500/10 blur-3xl" />

            {/* 🔹 Circular text evenly spaced */}
            <svg
              className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[370px] md:h-[370px] lg:w-[490px] lg:h-[490px] xl:w-[530px] xl:h-[530px] animate-spin-slower border rounded-full"
              viewBox="0 0 300 300"
            >
              <defs>
                <path
                  id="circle"
                  d="M150,150 m-130,0 a130,130 0 1,1 260,0 a130,130 0 1,1 -260,0"
                />
              </defs>

              <g className="text-gray-300">
                {(() => {
                  const text =
                    "• FULL-STACK DEVELOPER • MERN STACK DEVELOPER • FRONTEND-BACKEND DEVELOPER ";
                  const radius = 130;
                  const center = 150;
                  const chars = text.split("");
                  const angleStep = 360 / chars.length;

                  return chars.map((char, i) => {
                    const angle = i * angleStep - 90; // start at top
                    const x =
                      center + radius * Math.cos((angle * Math.PI) / 180);
                    const y =
                      center + radius * Math.sin((angle * Math.PI) / 180);
                    return (
                      <text
                        key={i}
                        x={x}
                        y={y}
                        fill="currentColor"
                        fontSize="10"
                        fontWeight="500"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        transform={`rotate(${angle + 90}, ${x}, ${y})`}
                      >
                        {char}
                      </text>
                    );
                  });
                })()}
              </g>
            </svg>

            {/* 🔹 Profile Image */}
            <Image
              src="https://ik.imagekit.io/vikash06/Portfolio/pic1.jpg?updatedAt=1759327190557"
              alt="heroImage"
              width={450}
              height={450}
              loading="lazy"
              className="rounded-full shadow-down relative z-10 
        w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[280px] md:h-[280px] lg:w-[370px] lg:h-[370px] xl:w-[410px] xl:h-[410px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
