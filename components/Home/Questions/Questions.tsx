"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";

const services = [
  {
    questions: "1. Who is Vikash Mishra, and what makes him stand?",
    answers: [
      "I'm Vikash Mishra, a MERN Stack / Full Stack Developer who loves building web apps that are clean, fast, and easy to use.",
    ],
  },
  {
    questions: "2. What kind of work do you do?",
    answers: [
      "I build modern websites and applications using MongoDB, Express, React, and Node.js — from user-friendly dashboards to data-driven platforms.",
    ],
  },
  {
    questions: "3. How do you keep up with new tech and trends?",
    answers: [
      "I'm always exploring new tools, reading dev blogs, and experimenting with side projects. It keeps me updated and helps me bring fresh ideas into my work.",
    ],
  },
  {
    questions: "4. What kind of impact do you want your projects to have?",
    answers: [
      "I want the apps I build to actually make someone's day easier — whether it's a smoother checkout, a faster dashboard, or just a better overall experience.",
    ],
  },
];

type AccordionItemProps = {
  questions: string;
  answers: string[];
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  questions,
  answers,
  isOpen,
  onClick,
}) => {
  return (
    <div
      className="border border-gray-800 rounded-xl p-4 cursor-pointer 
                 transition-all duration-300 hover:border-[#8B5CF6] bg-gray-900/40"
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 text-lg font-medium px-2">
          <span className="text-gray-300 text-sm sm:text-lg">{questions}</span>
        </div>
        <div className="w-8 h-8 flex items-center justify-center">
          {isOpen ? (
            <FiChevronUp className="text-[#7C3BEB] text-2xl" />
          ) : (
            <FiChevronDown className="text-[#7C3BEB] text-2xl" />
          )}
        </div>
      </div>

      {/* Expandable content */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className=" list-disc text-gray-400 space-y-1 text-sm font-medium">
            {answers.map((answers, index) => (
              <span key={index}>{answers}</span>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Questions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="questions"
      className="px-6 sm:px-12 lg:px-40 pt-16 pb-16 bg-black"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Section */}

        <div className="w-full lg:w-1/3 flex flex-col items-start justify-start gap-5">
          <motion.div
          initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
          className="flex items-center justify-center gap-2">
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
            <h1 className="text-xl shiny-text text-[#8B5CF6]">FAQ&apos;S</h1>
          </motion.div>
          <motion.h1
          initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
          className="text-5xl text-left">
            Have <br /> Questions?
          </motion.h1>
        </div>

        {/* Right Section */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full lg:w-2/3 text-white max-w-3xl mx-auto">
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
        </motion.div>
      </div>
    </section>
  );
};

export default Questions;
