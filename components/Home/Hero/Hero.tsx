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
      className="relative h-screen flex items-center justify-center text-white"
    >
      {/* Main container with responsive width */}
      <div className="w-full px-5 md:pt-5 lg:pt-10 md:w-[90%] lg:w-[90%] xl:w-4/5 md:mx-auto md:px-0 grid grid-cols-1 md:grid-cols-2 items-center max-w-[77rem]">
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
              className="px-4 py-2 bg-[#7C3BEB] hover:bg-[#8B5CF6] active:bg-[#8B5CF6] text-sm sm:text-md font-medium rounded-md lg:rounded-lg cursor-pointer"
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
          className="hidden md:flex justify-center md:justify-end"
        >
          <div className="relative flex items-center justify-center">
            {/* 🔹 Gradient glow behind */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-blue-500/10 blur-3xl" />

            {/* 🔹 Rotating dashed circular border with gaps (SVG) */}
            <svg
              className="absolute w-[485px] h-[485px] animate-spin-slow "
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2"
                strokeDasharray="10 10" // 10px dash, 10px gap
                strokeLinecap="round"
              />
            </svg>

            <div className="relative flex items-center justify-center">
              <Image
                src="/images/pic12.png"
                alt="heroImage"
                width={450}
                height={450}
                loading="lazy"
                className="rounded-full hidden md:block shadow-down relative z-10"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
