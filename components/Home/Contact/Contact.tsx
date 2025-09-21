"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact"
      className="flex flex-col lg:flex-row items-center bg-[#000000] gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 sm:pt-16 sm:pb-16 text-gray-700 dark:text-white"
    >
      {/* Left Side - Form */}
      <div className="w-full lg:w-[50%]">
        <div className="pb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Let&apos;s Connect
          </h1>
        </div>

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
            <label htmlFor="name" className="mb-2 text-sm font-medium">
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
            <label htmlFor="email" className="mb-2 text-sm font-medium">
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
            <label htmlFor="message" className="mb-2 text-sm font-medium">
              Enter Message
            </label>
            <div className="flex rounded-lg border border-gray-400 dark:border-gray-600">
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={8}
                className="w-full p-3 text-sm outline-0"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-max flex gap-2 border border-gray-400 text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:bg-[#111116] transition-all disabled:opacity-50"
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
        className="w-full lg:w-[50%] pt-10"
      >
        <div className="bg-[#111116] flex flex-col gap-5 p-10 rounded-2xl">
          <span className="text-gray-400">Available for work</span>
          <Image
            src="/images/profile1.png"
            width={100}
            height={100}
            alt=""
            className="rounded-full border-4 border-gray-950/80"
          />
          <p className="text-md text-gray-300">
            My inbox is always open, Whether you have a project or just want to
            say Hi. I would love to hear from you. Feel free to contact me and
            I&apos;ll get back to you.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
