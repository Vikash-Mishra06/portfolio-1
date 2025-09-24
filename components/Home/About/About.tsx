'use client'
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaLaptopCode, FaServer, FaBezierCurve, FaCloud } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode />,
    items: [
      "Building responsive and dynamic web apps",
      "Single Page Applications (SPAs)",
      "Landing pages and portfolio websites",
    ],
  },
  {
    title: "Backend Development",
    icon: <FaServer />,
    items: [
      "REST ful API & GraphQL development",
      "Database design and optimization",
      "Authentication & security best practices",
    ],
  },
  {
    title: "Animations & UI/UX",
    icon: <FaBezierCurve />,
    items: [
      "Smooth micro-interactions",
      "Wireframing & prototyping",
      "User-centric design with modern tools",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <FaCloud />,
    items: [
      "CI/CD pipeline setup",
      "Docker & Kubernetes orchestration",
      "Cloud deployment (AWS, Azure, GCP)",
    ],
  },
];

type AccordionItemProps = {
  title: string;
  icon: React.ReactNode;
  items: string[];
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, icon, items, isOpen, onClick }) => {
  return (
    <div
      className="border border-gray-800 rounded-xl p-4 cursor-pointer 
                 transition-all duration-300 hover:border-[#8B5CF6] bg-gray-900/40"
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 text-lg font-medium">
          <span className="text-[#8B5CF6] text-xl">{icon}</span>
          <span className="text-gray-300 text-sm sm:text-lg">{title}</span>
        </div>
        {isOpen ? (
          <FiChevronUp className="text-[#7C3BEB] text-2xl" />
        ) : (
          <FiChevronDown className="text-[#7C3BEB] text-2xl" />
        )}
      </div>

      {/* Expandable content */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="pl-8 list-disc text-gray-300 space-y-1 text-sm">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 📝 Paragraph split into words
  const paragraph = `I hold a B.Sc. in IT and I'm a passionate MERN stack and full-stack developer with a strong focus on clean code, scalability, and user-friendly design, data-driven web applications. I've actively completed 20+ projects that span frontend, backend, and full-stack development.`;
  const words = paragraph.split(" ");

  return (
    <section id="about" className=" pt-16 pb-16 bg-black">
      <div className="w-full px-5 pt-10 md:w-[90%] lg:w-4/5 md:mx-auto md:px-0">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      className="flex items-center justify-start gap-2 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#8B5CF6] lucide lucide-sparkle"
              aria-hidden="true"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
            </svg>
            <motion.h1
            initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
            className="text-xl shiny-text text-[#8B5CF6]">ABOUT ME</motion.h1>
          </motion.div>
      <motion.div
      initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      className="flex flex-col lg:flex-row justify-between items-start gap-20 lg:gap-10">
        {/* Left Section */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="lg:w-1/2">
          <h1 className="text-white text-5xl">About Me</h1>
          <h1 className="text-gray-300 text-3xl font-semibold pt-8">I&apos;m <span className="text-[#8B5CF6]"> Vikash </span>Mishra,</h1>

          {/* Animated paragraph */}
          <p className="text-gray-400 text-lg leading-relaxed pt-3 flex flex-wrap">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.2, color: "#9ca3af" }} // start gray & faded
                whileInView={{ opacity: 1, color: "#D1D5DC" }} // brighten
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="mr-1"
              >
                {word}
              </motion.span>
            ))}
          </p>

          <div className="flex gap-5 pt-5">
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mishravikash0612@gmail.com&su=Let's%20Connect&body=Hi%20Vikash,"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#7C3BEB] hover:bg-[#8B5CF6] text-sm sm:text-md font-medium rounded-md lg:rounded-lg cursor-pointer"
            >
              Get in Touch
            </Link>
            <button className="flex items-center gap-2 text-gray-400 hover:text-gray-100 text-sm sm:text-base font-medium transition-colors">
              <i className="ri-file-text-line"></i>
              <span>RESUME</span>
            </button>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2  max-w-3xl mx-auto">
          <motion.h2
          initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
          className="text-5xl mb-10 text-white">Areas of Expertise</motion.h2>
          <motion.div
          initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
          className="space-y-4">
            {services.map((service, index) => (
              <AccordionItem
                key={index}
                {...service}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
};

export default About;
