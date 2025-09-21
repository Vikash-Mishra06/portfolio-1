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
      className="relative h-screen flex items-center justify-center text-white px-6 md:px-10"
    >
      {/* Container split into two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center max-w-6xl w-full">
        {/* LEFT SIDE - Text Content */}
        <div className=" md:text-left gap-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[60px] font-bold  text-gray-300"
          >
            <span className="text-gray-400 font-light text-left">Hi!👋</span>
            <br /> I&apos;m <span className="text-[#8B5CF6] pt-2">Vikash </span>
            Mishra,
            <br />
            <p className="mt-6 text-sm sm:text-md lg:text-lg font-medium text-gray-400 tracking-wide text-left">
              A Passionate
              <span className="text-gray-200 ">
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
            className="mt-6 text-left text-md sm:text-xl md:text-xl font-semibold flex justify-start items-center"
          >
            I&apos;m a
            <span className="pl-2 text-[#7C3BEB] font-semibold tracking-wider ">
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
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mishravikash0612@gmail.com&su=Let's%20Connect&body=Hi%20Vikash,"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#7C3BEB] hover:bg-[#8B5CF6] text-sm sm:text-md font-medium rounded-md lg:rounded-lg cursor-pointer"
            >
              Get in Touch
            </Link>
            <div className="flex ">
              <button className="flex items-center gap-2 text-gray-400 hover:text-gray-100 text-md font-medium rounded-xl cursor-pointer tracking-wide">
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
          <Image
            src="/images/profile1.png"
            alt="heroImage"
            width={450}
            height={450}
            className="rounded-full border-8 border-black/30 shadow-lg hidden md:block"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
