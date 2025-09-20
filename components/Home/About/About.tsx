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
      "RESTful API & GraphQL development",
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
                 transition-all duration-300 hover:border-[#7C3BEB] bg-gray-900/40"
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 text-lg font-medium">
          <span className="text-[#7C3BEB] text-xl">{icon}</span>
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
          <ul className="pl-8 list-disc text-gray-400 space-y-1 text-sm">
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
    <section id="about" className="px-6 sm:px-12 lg:px-40 py-16 bg-black">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h1 className="text-gray-100 text-4xl font-semibold">About Me</h1>
          <h1 className="text-gray-300 text-3xl font-semibold pt-10">I&apos;m <span className="text-[#8B5CF6]"> Vikash </span>Mishra,</h1>

          {/* Animated paragraph */}
          <p className="text-gray-400 text-lg leading-relaxed pt-3 flex flex-wrap">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.2, color: "#9ca3af" }} // start gray & faded
                whileInView={{ opacity: 1, color: "#D1D5DC" }} // brighten
                transition={{ duration: 0.6, delay: i * 0.1 }}
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
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 text-white max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">What I do?</h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <AccordionItem
                key={index}
                {...service}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
