"use client";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BiLogoTypescript } from "react-icons/bi";
import { SiDjango } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { useState } from "react";
import {motion} from 'framer-motion';
export default function About() {
  const [isHovered, setIsHoverd] = useState("");

  const skill_expert = [
    {
      icon: <SiNextdotjs className="text-6xl" />,
      name: "Next.js",
    },
    {
      icon: <FaReact className="text-6xl" />,
      name: "React.js",
    },
    {
      icon: <FaPython className="text-6xl" />,
      name: "Python",
    },
    {
      icon: <SiMysql className="text-6xl" />,
      name: "SQL",
    },
    {
      icon: <DiJavascript className="text-6xl" />,
      name: "Javascript",
    },
    {
      icon: <GiArtificialIntelligence className="text-6xl" />,
      name: "ML",
    },
    {
      icon: <BiLogoTypescript className="text-6xl" />,
      name: "Typescript",
    },

    {
      icon: <SiDjango className="text-6xl" />,
      name: "Django",
    },
    {
      icon: <FaHtml5 className="text-6xl" />,
      name: "HTML",
    },
    {
      icon: <SiTailwindcss className="text-6xl" />,
      name: "Tailwind css",
    },
  ];
  const skill_intermediate = [
    {
      icon: <SiDart className="text-6xl" />,
      name: "Dart",
    },
    {
      icon: <SiPhp className="text-6xl" />,
      name: "PHP",
    },
    {
      icon: <SiFlutter className="text-6xl" />,
      name: "Flutter",
    },
    {
      icon: <SiMongodb className="text-6xl" />,
      name: "MongoDB",
    },
    {
      icon: <SiTensorflow className="text-6xl" />,
      name: "TensorFlow",
    },
  ];
  const skill_novice = [
    {
      icon: <SiFastapi className="text-6xl" />,
      name: "FastApi",
    },
    {
      icon: <SiCplusplus className="text-6xl" />,
      name: "C++",
    },
    {
      icon: <SiPytorch className="text-6xl" />,
      name: "Pytorch",
    },
  ];
  return (
    <main className="min-h-screen">
      <motion.div className="flex items-center">
        <motion.div className="w-1/3 p-4 m-4">
          Fifth-year software engineering student specializing in
          Artificial Intelligence at Addis Ababa University.
        </motion.div>
        <motion.div className="w-2/3 mt-10">
          <motion.div className="flex flex-wrap">
            {/* <h1 className="text-5xl">Beginner Skills</h1> */}

            {skill_expert.slice(0, 6).map((skill) => {
              return (
                <motion.div
                  key={skill.name}
                  className="p-4 w-min rounded-3xl relative bg-slate-800 m-4 shadow-2xl"
                  onMouseEnter={() => setIsHoverd("")}
                  onMouseLeave={() => setIsHoverd("")}
                >
                  {skill.icon}
                  {isHovered === skill.name && (
                    <p className="absolute border-2 top-auto left-0">
                      {skill.name}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div className="flex flex-wrap ml-14">
            {/* <h1 className="text-5xl">Intermediate Skills</h1> */}
            {skill_intermediate.map((skill) => {
              return (
                <motion.div
                  key={skill.name}
                  className="p-4 w-min rounded-3xl relative bg-slate-800 m-4 shadow-2xl"
                  onMouseEnter={() => setIsHoverd("")}
                  onMouseLeave={() => setIsHoverd("")}
                >
                  {skill.icon}
                  {isHovered === skill.name &&
                    skill_intermediate.find((item) => item === skill) && (
                      <p className="absolute border-2 top-auto left-0">
                        {skill.name}
                      </p>
                    )}
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div className="flex flex-wrap ml-28">
            {/* <h1 className="text-5xl">Expert Skills</h1> */}
            {skill_expert.slice(6, skill_expert.length).map((skill) => {
              return (
                <motion.div
                  key={skill.name}
                  className="p-4 w-min rounded-3xl relative bg-slate-800 m-4 shadow-2xl"
                  onMouseEnter={() => setIsHoverd("")}
                  onMouseLeave={() => setIsHoverd("")}
                >
                  {skill.icon}
                  {isHovered === skill.name && (
                    <p className="absolute border-2 top-auto left-0">
                      {skill.name}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div className="flex flex-wrap ml-40">
            {/* <h1 className="text-5xl">Beginner Skills</h1> */}

            {skill_novice.map((skill) => {
              return (
                <motion.div
                  key={skill.name}
                  className="p-4 w-min rounded-3xl relative bg-slate-800 m-4 shadow-2xl"
                  onMouseEnter={() => setIsHoverd("")}
                  onMouseLeave={() => setIsHoverd("")}
                >
                  {skill.icon}
                  {isHovered === skill.name && (
                    <p className="absolute border-2 top-auto left-0">
                      {skill.name}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}
