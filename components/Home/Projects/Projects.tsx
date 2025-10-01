"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects" className="pt-16 pb-16 bg-[#000000]">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-4xl lg:text-5xl xl:text-6xl text-gray-400"
      >
        <i>Projects: My</i>
        <br /> Latest--
        <span className="text-gray-200 font-bold">
          <i> Projects </i>
        </span>
      </motion.h1>

      <div className="w-full px-5 md:w-[90%] lg:w-[90%] xl:w-4/5 md:mx-auto md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href='https://agency-ai-teal.vercel.app/'>
          <div className="p-4 lg:p-8 rounded-lg bg-[#1F1F1F] active:bg-[#2e2e2e]">
            <Image
              src="https://ik.imagekit.io/vikash06/Portfolio/image.png?updatedAt=1759327277222"
              alt="Project 1 Img"
              width={800}
              height={650}
              className="rounded-lg hover:scale-103 transition-all duration-300"
            />
          </div>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mt-4 text-lg sm:text-2xl font-semibold text-gray-300">
                Agency.Ai
              </h1>
              <h3 className="mt-2 text-sm sm:text-md text-gray-400">
                Service Web App.
              </h3>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <Link href="https://github.com/Vikash-Mishra06/Agency.Ai">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 md:size-9 lg:size-10 xl:size-11 text-gray-400 border-gray-400/40 hover:bg-[#1E1E1E] active:bg-[#1E1E1E] border p-2 rounded-lg"
                >
                  <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
                </svg>
              </Link>
              <Link href="https://agency-ai-teal.vercel.app/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 md:size-9 lg:size-10 xl:size-11 text-gray-400 border-gray-400/40 hover:bg-[#1E1E1E] active:bg-[#1E1E1E] border p-2 rounded-lg"
                >
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href='https://nexovate-agency.vercel.app/'>
          <div className="p-4 lg:p-8 rounded-lg bg-[#1F1F1F] active:bg-[#2e2e2e]">
            <Image
              src="https://ik.imagekit.io/vikash06/Portfolio/image2.png?updatedAt=1759327277547"
              alt="Project 2 Img"
              width={800}
              height={650}
              className="rounded-lg hover:scale-103 transition-all duration-300"
            />
          </div>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mt-4 text-lg sm:text-2xl font-semibold text-gray-300">
                Nexovate Agency
              </h1>
              <h3 className="mt-2 text-sm sm:text-md text-gray-400">
                Service Web App.
              </h3>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <Link href="https://github.com/Vikash-Mishra06/Nexovate.-Agency">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 md:size-9 lg:size-10 xl:size-11 text-gray-400 border-gray-400/40 hover:bg-[#1E1E1E] active:bg-[#1E1E1E] border p-2 rounded-lg"
                >
                  <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
                </svg>
              </Link>
              <Link href="https://nexovate-agency.vercel.app/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 md:size-9 lg:size-10 xl:size-11 text-gray-400 border-gray-400/40 hover:bg-[#1E1E1E] active:bg-[#1E1E1E] border p-2 rounded-lg"
                >
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href='https://menscoin-redesign.vercel.app/'>
          <div className="p-4 lg:p-8 rounded-lg bg-[#1F1F1F] active:bg-[#2e2e2e]">
            <Image
              src="https://ik.imagekit.io/vikash06/Portfolio/image3.png?updatedAt=1759327277270"
              alt="Project 3 Img"
              width={800}
              height={650}
              className="rounded-lg hover:scale-103 transition-all duration-300"
            />
          </div>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mt-4 text-lg sm:text-2xl font-semibold text-gray-300">
                Mensco Re-design
              </h1>
              <h3 className="mt-2 text-sm sm:text-md text-gray-400">
                E-commerce Web App.
              </h3>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <Link href="https://github.com/Vikash-Mishra06/Mensco.in_redesign">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 md:size-9 lg:size-10 xl:size-11 text-gray-400 border-gray-400/40 hover:bg-[#1E1E1E] active:bg-[#1E1E1E] border p-2 rounded-lg"
                >
                  <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
                </svg>
              </Link>
              <Link href="https://menscoin-redesign.vercel.app/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 md:size-9 lg:size-10 xl:size-11 text-gray-400 border-gray-400/40 hover:bg-[#1E1E1E] active:bg-[#1E1E1E] border p-2 rounded-lg"
                >
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href='https://k72-ca-project.vercel.app/'>
          <div className="p-4 lg:p-8 rounded-lg bg-[#1F1F1F] active:bg-[#2e2e2e]">
            <Image
              src="https://ik.imagekit.io/vikash06/Portfolio/image4.png?updatedAt=1759327277276"
              alt="Project 4 Img"
              width={800}
              height={650}
              className="rounded-lg hover:scale-103 transition-all duration-300"
            />
          </div>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mt-4 text-lg sm:text-2xl font-semibold text-gray-300">
                K72-ca Portfolio
              </h1>
              <h3 className="mt-2 text-sm sm:text-md text-gray-400">
                Web App.
              </h3>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <Link href="https://github.com/Vikash-Mishra06/K72.ca-Project">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 md:size-9 lg:size-10 xl:size-11 text-gray-400 border-gray-400/40 hover:bg-[#1E1E1E] active:bg-[#1E1E1E] border p-2 rounded-lg"
                >
                  <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
                </svg>
              </Link>
              <Link href="https://k72-ca-project.vercel.app/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 md:size-9 lg:size-10 xl:size-11 text-gray-400 border-gray-400/40 hover:bg-[#1E1E1E] active:bg-[#1E1E1E] border p-2 rounded-lg"
                >
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href='https://flybytravelbooking.netlify.app/'>
          <div className="p-4 lg:p-8 rounded-lg bg-[#1F1F1F] active:bg-[#2e2e2e]">
            <Image
              src="https://ik.imagekit.io/vikash06/Portfolio/image5.png?updatedAt=1759327277568"
              alt="Project 5 Img"
              width={800}
              height={650}
              className="rounded-lg hover:scale-103 transition-all duration-300"
            />
          </div>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mt-4 text-lg sm:text-2xl font-semibold text-gray-300">
                Fly-By Travel Booking
              </h1>
              <h3 className="mt-2 text-sm sm:text-md text-gray-400">
                Web App.
              </h3>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <Link href="https://github.com/Vikash-Mishra06/FlyBy-Travel-Booking-Website">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 md:size-9 lg:size-10 xl:size-11 text-gray-400 border-gray-400/40 hover:bg-[#1E1E1E] active:bg-[#1E1E1E] border p-2 rounded-lg"
                >
                  <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
                </svg>
              </Link>
              <Link href="https://flybytravelbooking.netlify.app/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 md:size-9 lg:size-10 xl:size-11 text-gray-400 border-gray-400/40 hover:bg-[#1E1E1E] active:bg-[#1E1E1E] border p-2 rounded-lg"
                >
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href='https://bike-essentials.netlify.app/'>
          <div className="p-4 lg:p-8 rounded-lg bg-[#1F1F1F] active:bg-[#2e2e2e]">
            <Image
              src="https://ik.imagekit.io/vikash06/Portfolio/image6.png?updatedAt=1759327274715"
              alt="Project 6 Img"
              width={800}
              height={650}
              className="rounded-lg hover:scale-103 transition-all duration-300"
            />
          </div>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mt-4 text-lg sm:text-2xl font-semibold text-gray-300">
                Bike-Essentials Store
              </h1>
              <h3 className="mt-2 text-sm sm:text-md text-gray-400">
                Web App.
              </h3>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <Link href="https://github.com/Vikash-Mishra06/Bike-Essentials-Store">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 md:size-9 lg:size-10 xl:size-11 text-gray-400 border-gray-400/40 hover:bg-[#1E1E1E] active:bg-[#1E1E1E] border p-2 rounded-lg"
                >
                  <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
                </svg>
              </Link>
              <Link href="https://bike-essentials.netlify.app/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 md:size-9 lg:size-10 xl:size-11 text-gray-400 border-gray-400/40 hover:bg-[#1E1E1E] active:bg-[#1E1E1E] border p-2 rounded-lg"
                >
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full px-5 md:w-[90%] lg:w-4/5 md:mx-auto md:px-0 mt-10">
        <Link
          href="https://github.com/Vikash-Mishra06"
          className="text-gray-400 flex items-center justify-center py-2 text-sm sm:text-md md:text-lg lg:text-xl border border-gray-400/40 hover:bg-[#1E1E1E]/40 active:bg-[#1E1E1E]/40 rounded-2xl"
        >
          More Projects on Github <FaGithub className="ml-2 text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
