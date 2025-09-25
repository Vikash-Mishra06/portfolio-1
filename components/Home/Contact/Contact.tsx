"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "20035b0d-505f-45ae-972d-d2cacfb77b12");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        toast.success("Form Submitted Successfully");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("");
        toast.error(data.message || "Submission failed");
      }
    } catch (error) {
      setResult("");
      if (error instanceof Error) {
        toast.error(error.message || "Something went wrong");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact"
      className=" bg-[#000000] pt-16 pb-16 text-gray-300 "
    >
      <div className="w-full px-5 md:w-[90%] lg:w-4/5 md:mx-auto md:px-0 flex flex-col lg:flex-row items-center gap-10">
      {/* Left Side - Form */}
      <div className="w-full lg:w-[50%]">
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="pb-10 flex flex-col gap-5">
        <div className="flex items-center justify-start gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8B5CF6] lucide lucide-sparkle" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg>
        <h1 className="text-xl shiny-text text-[#8B5CF6]">LET&apos;S CONNECT</h1>
        </div>
          <motion.h1
          initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
          className="text-5xl text-white">
            Let&apos;s Connect
          </motion.h1>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-300">
              Your Name
            </label>
            <div className="flex pl-3 rounded-lg border border-gray-400 dark:border-gray-600 items-center">
              <img
                src="/images/person_icon.svg"
                alt="Person Icon"
                className="mr-2"
              />
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 text-sm outline-0"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-300">
              Your Email
            </label>
            <div className="flex pl-3 rounded-lg border border-gray-400 dark:border-gray-600 items-center">
              <img
                src="/images/email_icon.svg"
                alt="Email Icon"
                className="mr-2"
              />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 text-sm outline-0"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2 flex flex-col">
            <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-300">
              Enter Message
            </label>
            <div className="flex rounded-lg border border-gray-400 dark:border-gray-600">
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={8}
                className="w-full p-3 text-sm outline-0 "
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-max flex gap-2 border border-gray-400 text-gray-300 text-sm px-10 py-3 rounded-full cursor-pointer hover:bg-[#111116] transition-all disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </motion.form>
      </div>

      {/* Right Side - Profile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="w-full lg:w-[50%] pt-20"
      >
        <div className="bg-[#111116]/40 flex flex-col gap-5 p-10 rounded-2xl">
          <div className="flex items-center justify-start gap-2 shiny-text">
            <span className="bg-highlight-primary relative inline-flex h-2 w-2 rounded-full bg-[#8B5CF6] "></span>
        <h1 className="text-md  text-[#8B5CF6]">AVAILABLE FOR WORK</h1>
        </div>
          <Image
            src="/images/profile1.png"
            width={100}
            height={100}
            alt=""
            loading="lazy"
            className="rounded-full border-4 border-gray-950/80"
          />
          <p className="text-md text-gray-300">
            My inbox is always open, Whether you have a project or just want to
            say Hi. I would love to hear from you. Feel free to contact me and
            I&apos;ll get back to you.
          </p>
          <SocialLinks />
        </div>
      </motion.div>
        </div>
    </motion.div>
    </>
  );
};

export default Contact;
