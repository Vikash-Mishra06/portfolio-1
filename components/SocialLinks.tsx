// components/SocialLinks.tsx
"use client";

import React, { FC } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks: FC = () => {
  const links = [
    {
      href: "https://www.linkedin.com/in/vikash-mishra1206/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      classes: "hover:text-[#0A66C2] active:text-[#0A66C2]",
      color: "#0A66C2",
    },
    {
      href: "https://github.com/Vikash-Mishra06",
      icon: <FaGithub />,
      label: "GitHub",
      classes: "hover:text-gray-200 active:text-gray-200",
      color: "#D1D5DB",
    },
    {
      href: "https://www.instagram.com/vikas060_/",
      icon: <FaInstagram />,
      label: "Instagram",
      classes: "hover:text-[#E1306C] active:text-[#E1306C]",
      color: "#E1306C",
    },
    {
      href: "https://wa.me/9637078026",
      icon: <FaWhatsapp />,
      label: "Whatsapp",
      classes: "hover:text-[#25D366] active:text-[#25D366]",
      color: "#25D366",
    },
  ];

  const clearInlineColor = (el: HTMLElement) => {
    el.style.color = "";
  };

  return (
    <div className="flex space-x-6 text-2xl">
      {links.map(({ href, icon, label, classes, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`transition-colors duration-200 text-gray-500 ${classes} cursor-pointer`}
          onTouchStart={(e) => {
            (e.currentTarget as HTMLElement).style.color = color;
          }}
          onTouchEnd={(e) => {
            const el = e.currentTarget as HTMLElement;
            setTimeout(() => clearInlineColor(el), 150);
          }}
          onTouchCancel={(e) => {
            clearInlineColor(e.currentTarget as HTMLElement);
          }}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
