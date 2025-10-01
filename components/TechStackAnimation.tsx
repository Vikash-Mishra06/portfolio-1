import Image from "next/image";
import React from "react";

const logos = [
  { src: "https://ik.imagekit.io/vikash06/Portfolio/HTML.svg?updatedAt=1758724556788", name: "HTML" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/CSS.svg?updatedAt=1758724698203", name: "CSS" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/TailwindCSS.svg?updatedAt=1758724701087", name: "TailwindCSS" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/JavaScript.svg?updatedAt=1758724700510", name: "JavaScript" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/TypeScript.svg?updatedAt=1758724700896", name: "TypeScript" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/React.js.svg?updatedAt=1758724700809", name: "React.js" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/Redux.svg?updatedAt=1758724700580", name: "Redux" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/Next.js.svg?updatedAt=1758724700991", name: "Next.js" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/Node.js.svg?updatedAt=1758724700775", name: "Node.js" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/Express.js.svg?updatedAt=1758724698044", name: "Express.js" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/Angular.svg?updatedAt=1758724698129", name: "Angular" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/MongoDB.svg?updatedAt=1758724700397", name: "MongoDB" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/GIT.svg?updatedAt=1758724697811", name: "GIT" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/Firebase.svg?updatedAt=1758724698297", name: "Firebase" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/GSAP.svg?updatedAt=1758724700488", name: "GSAP" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/FramerMotion.svg?updatedAt=1758724698237", name: "FramerMotion" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/Figma.svg?updatedAt=1758724697892", name: "Figma" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/AWS.svg?updatedAt=1758724698024", name: "AWS" },
  { src: "https://ik.imagekit.io/vikash06/Portfolio/Docker.svg?updatedAt=1758724697896", name: "Docker" },
];

const TechStackAnimation = () => {
  return (
    <div className="bg-[#000000] flex items-center justify-center ">
  <div className="relative overflow-hidden py-5 w-[90%] px-5 md:w-[90%] lg:w-[90%] xl:w-4/5 md:mx-auto md:px-0 mask-gradient">
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
