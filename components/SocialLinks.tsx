// components/SocialLinks.tsx
import { FC } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

const SocialLinks: FC = () => {
  const links = [
    {
      href: "https://www.linkedin.com/in/vikash-mishra-6803a1362/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      hoverColor: "hover:text-[#0A66C2]", 
    },
    {
      href: "https://github.com/Vikash-Mishra06",
      icon: <FaGithub />,
      label: "GitHub",
      hoverColor: "hover:text-gray-200", 
    },
    {
      href: "https://www.instagram.com/vikas060_/",
      icon: <FaInstagram />,
      label: "Instagram",
      hoverColor: "hover:text-[#E1306C]",
    },
    {
      href: "https://x.com/Vikasm_06?t=Cm2CbMC8oz_Ee60WCHYuww&s=09",
      icon: <FaXTwitter />,
      label: "Twitter / X",
      hoverColor: "hover:text-white",
    },
    {
      href: "https://wa.me/9637078026",
      icon: <FaWhatsapp />,
      label: "Whatsapp",
      hoverColor: "hover:text-[#25D366]",
    },
  ];

  return (
    <div className="flex space-x-6 text-2xl text-gray-500">
      {links.map(({ href, icon, label, hoverColor }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`transition-colors duration-300 ${hoverColor}`}
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
