"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div id="achievements" className="pt-16 pb-16 bg-[#000000]">
      <motion.h1
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-400 "
      >
        <i>Achievements: Some</i> <br />
        of my
        <span className="text-gray-200 font-bold">
          <i>
            {" "}
            Achievements- <br />
            Certifications.
          </i>
        </span>{" "}
      </motion.h1>

      <div className="w-full px-5 md:w-[90%] lg:w-[90%] xl:w-4/5 md:mx-auto md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div
            className="p-4 lg:p-8 rounded-lg bg-[#1F1F1F] active:bg-[#2e2e2e] cursor-pointer"
            onClick={() => setSelectedImage("https://ik.imagekit.io/vikash06/Portfolio/certi8.png?updatedAt=1759327275686")}
          >
            <Image
              src="https://ik.imagekit.io/vikash06/Portfolio/certi8.png?updatedAt=1759327275686"
              alt="Project 1 Img"
              width={550}
              height={500}
              className="rounded-lg hover:scale-103 transition-all duration-400 object-cover w-full aspect-[16/11]"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mt-4 text-lg sm:text-2xl font-semibold text-gray-300">
                JOB-READY COHORT
              </h1>
              <h3 className="mt-2 text-sm sm:text-md text-gray-400">
                Job Ready AI-Powered Cohort: Web + DSA + Aptitude
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div
            className="p-4 lg:p-8 rounded-lg bg-[#1F1F1F] active:bg-[#2e2e2e] cursor-pointer"
            onClick={() => setSelectedImage("https://ik.imagekit.io/vikash06/Portfolio/certi7.png?updatedAt=1759327271396")}
          >
            <Image
              src="https://ik.imagekit.io/vikash06/Portfolio/certi7.png?updatedAt=1759327271396"
              alt="Project 2 Img"
              width={550}
              height={500}
              className="rounded-lg hover:scale-103 transition-all duration-400 object-cover w-full"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mt-4 text-lg sm:text-2xl font-semibold text-gray-300">
                JOB-READY HACKATHON
              </h1>
              <h3 className="mt-2 text-sm sm:text-md text-gray-400">
                Frontend-Focused Hackathon
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div
            className="p-4 lg:p-8 rounded-lg bg-[#1F1F1F] active:bg-[#2e2e2e] cursor-pointer"
            onClick={() => setSelectedImage("https://ik.imagekit.io/vikash06/Portfolio/certi1.png?updatedAt=1759327271375")}
          >
            <Image
              src="https://ik.imagekit.io/vikash06/Portfolio/certi1.png?updatedAt=1759327271375"
              alt="Project 3 Img"
              width={550}
              height={500}
              className="rounded-lg hover:scale-103 transition-all duration-400 object-cover w-full"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mt-4 text-lg sm:text-2xl font-semibold text-gray-300">
                FRONTEND DEVELOPMENT
              </h1>
              <h3 className="mt-2 text-sm sm:text-md text-gray-400">
                Frontend Course by OneRoadmap
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div
            className="p-4 lg:p-8 rounded-lg bg-[#1F1F1F] active:bg-[#2e2e2e] cursor-pointer"
            onClick={() => setSelectedImage("https://ik.imagekit.io/vikash06/Portfolio/certi2.png?updatedAt=1759327271877")}
          >
            <Image
              src="https://ik.imagekit.io/vikash06/Portfolio/certi2.png?updatedAt=1759327271877"
              alt="Project 4 Img"
              width={550}
              height={500}
              className="rounded-lg hover:scale-103 transition-all duration-400 object-cover w-full"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mt-4 text-lg sm:text-2xl font-semibold text-gray-300">
                FULL-STACK DEVELOPER
              </h1>
              <h3 className="mt-2 text-sm sm:text-md text-gray-400">
                Full-Stack Course by OneRoadmap
              </h3>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full px-5 md:w-[90%] lg:w-4/5 md:mx-auto md:px-0 mt-10">
        <Link
          href="https://www.linkedin.com/in/vikash-mishra1206/"
          className="text-gray-400 flex items-center justify-center py-2 text-sm sm:text-md md:text-lg lg:text-xl border border-gray-400/40 hover:bg-[#1E1E1E]/40 active:bg-[#1E1E1E]/40 rounded-2xl"
        >
          More Certificates on Linkedin <FaLinkedin className="ml-2 text-2xl" />
        </Link>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90%] md:w-[70%] lg:w-[60%] h-[80%] flex items-center justify-center lg:top-10">
            <Image
              src={selectedImage}
              alt="Fullscreen certificate"
              fill
              className="object-contain rounded-lg"
            />
            {/* Close button positioned relative to the image container */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the backdrop click
                setSelectedImage(null);
              }}
              className="absolute top-20 sm:top-5 lg:top-5 xl:-top-5 -right-3  text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold  z-10"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
