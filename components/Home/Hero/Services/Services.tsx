"use client"; // ✅ Important for Next.js app directory
import React from "react";
import ServicesCard from "./ServicesCard"; // check if default export!
import { Layout, Server, Sparkles, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "../../../SpotlightCard";

const Services = () => {
  return (
    <div id="services" className=" md:pt-16 md:pb-16 bg-[#000000]">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-400 "
      >
        <i>Development: Turning</i> <br />
        Ideas into--{" "}
        <span className="text-gray-200 font-bold">
          <i>
            Data- <br /> Driven
          </i>
        </span>{" "}
        Web Apps.
      </motion.h1>

      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        {/* Frontend */}
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-5 border border-gray-400 rounded-md hover:border-blue-400"
          >
            <ServicesCard
              icon={<Layout size={40} className="text-blue-400" />}
              name="Frontend"
              description="Crafting responsive, modern UIs with React and Tailwind, focusing on speed, and seamless user experiences."
            />
          </motion.div>
        </SpotlightCard>

        {/* Backend */}
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-5 border border-gray-400 rounded-md hover:border-blue-400"
          >
            <ServicesCard
              icon={<Server size={40} className="text-blue-400" />}
              name="Backend"
              description="Building scalable APIs with Node.js and Express, managing data and authentication with efficiency."
            />
          </motion.div>
        </SpotlightCard>

        {/* Animations */}
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="p-5 border border-gray-400 rounded-md hover:border-blue-400"
          >
            <ServicesCard
              icon={<Sparkles size={40} className="text-blue-400" />}
              name="Animations"
              description="Enhancing web apps with smooth, interactive animations using Framer Motion and GSAP for engaging experiences."
            />
          </motion.div>
        </SpotlightCard>

        {/* Deployment */}
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="p-5 border border-gray-400 rounded-md hover:border-blue-400"
          >
            <ServicesCard
              icon={<Cloud size={40} className="text-blue-400" />}
              name="Deployment"
              description="Deploying apps on Vercel, Netlify, and Docker with a focus on scalability, reliability, and performance."
            />
          </motion.div>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default Services;
