"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Jagriti Mishra",
    role: "Senior Developer @Ignite Solutions",
    img: "/images/c1.png",
    text: "Vikash is highly dependable and brings both creativity and structure to projects. He consistently delivers work on time without compromising on quality, which made a big difference to our team's success.",
  },
  {
    name: "Pranav Kapadane",
    role: "Product Designer @ABC",
    img: "/images/c2.png",
    text: "What sets Vikash apart is his ability to blend technical expertise with strong communication. He explains complex ideas in a way that everyone can understand, making teamwork smooth and efficient.",
  },
  {
    name: "Amit Prasad",
    role: "Senior Developer @Ignite Solutions",
    img: "/images/c3.png",
    text: "I've had the chance to collaborate with Vikash, and I was impressed with his problem-solving skills. He approaches challenges thoughtfully and always finds practical, effective solutions.",
  },
  {
    name: "Swaraj Mhatre",
    role: "Product Designer @ABC",
    img: "/images/c4.png",
    text: "Vikash is detail-oriented and committed to doing things right. His dedication shows in the quality of his work, and he's someone you can always count on for reliable results.",
  },
  {
    name: "Kush ",
    role: "Senior Developer @Ignite Solutions",
    img: "/images/c5.png",
    text: "Working with Vikash has been a positive experience. He's proactive, easy to collaborate with, and genuinely cares about producing meaningful outcomes for the team.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0); // used to restart animation
  const duration = 5000; // 5 seconds per testimonial

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
      setKey((prev) => prev + 1); // reset animation key
    }, duration);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];
  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  return (
    <div id="testimonials" className="bg-[#000000]">
      <div className="w-full px-5 md:w-[90%] lg:w-[90%] xl:w-4/5 md:mx-auto md:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 text-white p-12 min-h-[400px]">
        
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center justify-start gap-2">
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
                <h1 className="text-xl shiny-text text-[#8B5CF6]">
                  TESTIMONIALS
                </h1>
              </div>
          <h2 className="text-5xl mt-2">What others say</h2>
          <p className="text-gray-400 mt-4">
            I&apos;ve worked with some amazing people over the years, here is what
            they have to say about me.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.text} // unique per testimonial
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-[#111116]/80 rounded-2xl p-6 shadow-lg flex flex-col gap-4 relative w-full"
            >
              {/* Profile + Timer */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <svg className="absolute top-0 left-0 w-16 h-16 -rotate-90"> 
                    {/* rotate -90deg so animation starts at 12 o'clock */}
                    <circle
                      cx="32"
                      cy="32"
                      r={radius}
                      stroke="gray"
                      strokeWidth="2"
                      fill="transparent"
                    />
                    <motion.circle
                      key={key} // restart animation each time
                      cx="32"
                      cy="32"
                      r={radius}
                      stroke="white"
                      strokeWidth="3"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: duration / 1200, ease: "linear" }}
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300">{testimonial.text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
