"use client"; // ✅ Important for Next.js app directory
import React from "react";
import ServicesCard from "./ServicesCard"; 
import { Layout, Server, Sparkles, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "../../../SpotlightCard";

const Services = () => {
  return (
    <div id="services" className="pb-16 md:pt-16 bg-[#000000]">
      <motion.h1
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-400"
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

      {/* 🌟 Responsive container */}
      <div className="w-full px-5 md:w-[90%] lg:w-[90%] xl:w-4/5 md:mx-auto md:px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        {/* Frontend */}
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(139, 92, 246, 0.2)"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-5 border border-gray-400 rounded-md hover:border-[#7C3BEB]"
          >
            <ServicesCard
              icon={<Layout size={40} className="text-[#7C3BEB]" />}
              name="Frontend"
              description="Designing responsive, modern UIs with React and Tailwind, emphasizing speed, accessibility, performance, and seamless user experiences across platforms."
            />
          </motion.div>
        </SpotlightCard>

        {/* Backend */}
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(139, 92, 246, 0.2)"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-5 border border-gray-400 rounded-md hover:border-[#8B5CF6]"
          >
            <ServicesCard
              icon={<Server size={40} className="text-[#8B5CF6]" />}
              name="Backend"
              description="Building scalable APIs using Node.js and Express, efficiently managing data, authentication, security, and performance for reliable backend services."
            />
          </motion.div>
        </SpotlightCard>

        {/* Animations */}
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(139, 92, 246, 0.2)"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-5 border border-gray-400 rounded-md hover:border-[#7C3BEB]"
          >
            <ServicesCard
              icon={<Sparkles size={40} className="text-[#7C3BEB]" />}
              name="Animations"
              description="Enhancing web applications with smooth, animations powered by Framer Motion and GSAP, creating dynamic, engaging, and memorable user experiences."
            />
          </motion.div>
        </SpotlightCard>

        {/* Deployment */}
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(139, 92, 246, 0.2)"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-5 border border-gray-400 rounded-md hover:border-[#7C3BEB]"
          >
            <ServicesCard
              icon={<Cloud size={40} className="text-[#7C3BEB]" />}
              name="Deployment"
              description="Deploying applications on Vercel, Netlify, and Docker while prioritizing scalability, performance, automation, and seamless developer-to-production workflows."
            />
          </motion.div>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default Services;
