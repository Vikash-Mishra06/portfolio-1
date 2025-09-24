import Image from "next/image";
import React from "react";

const logos = [
  { src: "/images/HTML.svg", name: "HTML" },
  { src: "/images/CSS.svg", name: "CSS" },
  { src: "/images/TailwindCSS.svg", name: "TailwindCSS" },
  { src: "/images/JavaScript.svg", name: "JavaScript" },
  { src: "/images/TypeScript.svg", name: "TypeScript" },
  { src: "/images/React.js.svg", name: "React.js" },
  { src: "/images/Redux.svg", name: "Redux" },
  { src: "/images/Next.js.svg", name: "Next.js" },
  { src: "/images/Node.js.svg", name: "Node.js" },
  { src: "/images/Express.js.svg", name: "Express.js" },
  { src: "/images/Angular.svg", name: "Angular" },
  { src: "/images/MongoDB.svg", name: "MongoDB" },
  { src: "/images/GIT.svg", name: "GIT" },
  { src: "/images/Firebase.svg", name: "Firebase" },
  { src: "/images/GSAP.svg", name: "GSAP" },
  { src: "/images/FramerMotion.svg", name: "FramerMotion" },
  { src: "/images/Figma.svg", name: "Figma" },
  { src: "/images/AWS.svg", name: "AWS" },
  { src: "/images/Docker.svg", name: "Docker" },
];

const TechStackAnimation = () => {
  return (
    <div className="bg-[#000000] flex items-center justify-center ">
  <div className="relative overflow-hidden py-5 w-[90%] px-5 md:w-[90%] lg:w-4/5 md:mx-auto md:px-0 mask-gradient">
    <div className="flex animate-scroll gap-4">
      {[...logos, ...logos].map((logo, i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-2xl bg-[#111116]/60 px-4 py-2 text-gray-200 text-sm"
        >
          <Image src={logo.src} alt={logo.name} width={18} height={18} loading="lazy" />
          <h1 className="text-gray-300">{logo.name}</h1>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default TechStackAnimation;
