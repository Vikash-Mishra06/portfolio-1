"use client";
import React from "react";
import {
  Code2,
  Server,
  Wrench,
  Brain,
  GraduationCap,
  BookOpen,
  Award,
} from "lucide-react";
import { motion } from "framer-motion"; // ✅ Import motion here

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, x: 100 }, // Start off to the right
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 0.3, ease: "easeInOut" as const },
  },
};

const Skills = () => {
  return (
    <div id="skills" className="pt-16 pb-16 bg-[#000000] overflow-x-hidden">
      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-20 lg:gap-10">
        
        {/* LEFT COLUMN - Tech Stack / Tools */}
        <div className="relative space-y-10">
          <h1 className="text-4xl font-semibold text-gray-300 text-center pb-5">
            Tools & Technologies
          </h1>
          <div className="absolute top-0 left-3 bottom-0 w-[3px] bg-gradient-to-t from-blue-400 to-transparent" />

          {/* Frontend */}
          <div className="ml-10 relative">
            <div className="absolute -left-12 top-3 w-10 h-10 rounded-full bg-[#000000] border border-blue-400 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-blue-400" />
            </div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#0F172A] p-5 rounded-2xl shadow-lg border border-gray-400 hover:border-blue-400"
            >
              <span className="text-gray-200 text-md font-semibold">Frontend-</span>
              <p className="text-gray-300 pt-2 text-sm">
                HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js, TypeScript
              </p>
            </motion.div>
          </div>

          {/* Backend */}
          <div className="ml-10 relative">
            <div className="absolute -left-12 top-3 w-10 h-10 rounded-full bg-[#000000] border border-blue-400 flex items-center justify-center">
              <Server className="w-5 h-5 text-blue-400" />
            </div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#0F172A] p-5 rounded-2xl shadow-lg border border-gray-400 hover:border-blue-400"
            >
              <span className="text-gray-200 text-md font-semibold">Backend-</span>
              <p className="text-gray-300 pt-2 text-sm">
                Node.js, Express.js, MongoDB, JWT, Web Sockets
              </p>
            </motion.div>
          </div>

          {/* Tools & Tech */}
          <div className="ml-10 relative">
            <div className="absolute -left-12 top-3 w-10 h-10 rounded-full bg-[#000000] border border-blue-400 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-blue-400" />
            </div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#0F172A] p-5 rounded-2xl shadow-lg border border-gray-400 hover:border-blue-400"
            >
              <span className="text-gray-200 text-md font-semibold">
                Tools & Technologies-
              </span>
              <p className="text-gray-300 pt-2 text-sm">
                Git & GitHub, REST APIs, Redux / Context API, OAuth, Postman,
                Docker, Netlify, Vercel, Bootstrap, Material UI
              </p>
            </motion.div>
          </div>

          {/* AI Tools */}
          <div className="ml-10 relative">
            <div className="absolute -left-12 top-3 w-10 h-10 rounded-full bg-[#000000] border border-blue-400 flex items-center justify-center">
              <Brain className="w-5 h-5 text-blue-400" />
            </div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#0F172A] p-5 rounded-2xl shadow-lg border border-gray-400 hover:border-blue-400"
            >
              <span className="font-semibold text-md text-gray-200">AI Tools-</span>
              <p className="text-gray-300 pt-2 text-sm">
                ChatGPT, GitHub Copilot, Cursor AI, MidJourney, Claude AI, Perplexity
              </p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN - Education / Courses / Certifications */}
        <div className="relative space-y-10">
          <h1 className="text-4xl font-semibold text-gray-300 text-center pb-5">
            Education & Certifications
          </h1>
          <div className="absolute top-0 left-3 bottom-0 w-[3px] bg-gradient-to-t from-blue-400 to-transparent" />

          {/* Education */}
          <div className="ml-10 relative">
            <div className="absolute -left-12 top-3 w-10 h-10 rounded-full bg-[#000000] border border-blue-400 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-blue-400" />
            </div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#0F172A] p-5 rounded-2xl shadow-lg border border-gray-400 hover:border-blue-400"
            >
              <h2 className="text-md font-semibold text-gray-300">Qualification-</h2>
              <h3 className="text-lg font-semibold text-gray-200 pt-2">
                Bachelor of Science in IT (2022 - 2025)
              </h3>
              <p className="text-gray-300 text-sm pt-1">
                Pillai HOC College of Arts, Science and Commerce, Rasayani
              </p>
            </motion.div>
          </div>

          {/* Course */}
          <div className="ml-10 relative">
            <div className="absolute -left-12 top-3 w-10 h-10 rounded-full bg-[#000000] border border-blue-400 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-blue-400" />
            </div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#0F172A] p-5 rounded-2xl shadow-lg border border-gray-400 hover:border-blue-400"
            >
              <h2 className="text-md font-semibold text-gray-300">Courses-</h2>
              <h3 className="text-md font-semibold text-gray-200 pt-2">
                Web + DSA + Aptitude (July 2025)
              </h3>
              <p className="text-gray-300 text-sm pt-1">
                Job Ready AI Powered Cohort By Sheryians Coding School
              </p>
            </motion.div>
          </div>

          {/* Certifications */}
          <div className="ml-10 relative">
            <div className="absolute -left-12 top-3 w-10 h-10 rounded-full bg-[#000000] border border-blue-400 flex items-center justify-center">
              <Award className="w-5 h-5 text-blue-400" />
            </div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#0F172A] p-5 rounded-2xl shadow-lg border border-gray-400 hover:border-blue-400"
            >
              <span className="text-gray-200 text-md font-semibold">Certifications-</span>
              <ul className="list-disc list-inside text-gray-300 space-y-1 pt-2 text-sm">
                <li>Frontend Based Hackathon – Participation (Sheryians)</li>
                <li>Frontend Development</li>
                <li>Full Stack Development</li>
                <li>React Bootcamp</li>
                <li>JavaScript Bootcamp</li>
                <li>Create REST APIs with Node.js & Express.js</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
