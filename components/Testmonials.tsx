'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Amrit Raj",
    role: "Senior Developer @Ignite Solutions",
    img: "/images/c1/png", // replace with actual profile
    text: "Vikash is highly dependable and brings both creativity and structure to projects. He consistently delivers work on time without compromising on quality, which made a big difference to our team’s success."
  },
  {
    name: "Jane Doe",
    role: "Product Designer @ABC",
    img: "/images/c2/png",
    text: "What sets Vikash apart is his ability to blend technical expertise with strong communication. He explains complex ideas in a way that everyone can understand, making teamwork smooth and efficient."
  },
  {
    name: "Amrit Raj",
    role: "Senior Developer @Ignite Solutions",
    img: "/images/c3/png", // replace with actual profile
    text: "I’ve had the chance to collaborate with Vikash, and I was impressed with his problem-solving skills. He approaches challenges thoughtfully and always finds practical, effective solutions."
  },
  {
    name: "Jane Doe",
    role: "Product Designer @ABC",
    img: "/images/c4/png",
    text: "Vikash is detail-oriented and committed to doing things right. His dedication shows in the quality of his work, and he’s someone you can always count on for reliable results."
  },
  {
    name: "Amrit Raj",
    role: "Senior Developer @Ignite Solutions",
    img: "/images/c5/png", // replace with actual profile
    text: "Working with Vikash has been a positive experience. He’s proactive, easy to collaborate with, and genuinely cares about producing meaningful outcomes for the team."
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const duration = 5000; // 5 seconds per testimonial

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, duration);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-black text-white p-12 min-h-[400px]">
      <div></div>
      {/* Left Section */}
      <div className="flex flex-col justify-center ">
        <p className="text-green-400 font-semibold">TESTIMONIALS</p>
        <h2 className="text-4xl font-bold mt-2">What others say</h2>
        <p className="text-gray-400 mt-4">
          I've worked with some amazing people over the years, here is what they have to say about me.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900 rounded-2xl p-6 shadow-lg flex flex-col gap-4 relative"
          >
            {/* Profile + Timer */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <svg className="absolute top-0 left-0 w-16 h-16">
                  <circle
                    cx="32"
                    cy="32"
                    r="30"
                    stroke="gray"
                    strokeWidth="2"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="32"
                    cy="32"
                    r="30"
                    stroke="lime"
                    strokeWidth="3"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 30}
                    strokeDashoffset={2 * Math.PI * 30}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: duration / 1000, ease: "linear" }}
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
  );
}
