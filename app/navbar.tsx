"use client";
import { FaHome } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";
import { GiRotaryPhone } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import Link from "next/link";
import { motion } from "framer-motion";
export default function NavBar() {
  const links = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome className="text-6xl rounded-full border-2 p-2" />,
    },
    {
      name: "Skills",
      path: "/skills",
      icon: <LuBrainCircuit className="text-6xl rounded-full border-2 p-2" />,
    },
    {
      name: "Experience",
      path: "/work",
      icon: <RiComputerFill className="text-6xl rounded-full border-4 p-2" />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <AiFillProject className="text-6xl rounded-full border-2 p-2" />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <GiRotaryPhone className="text-6xl rounded-full border-2 p-2" />,
    },
    
    
  ];
  return (
    <div className="bg-transparent">
      <nav className="p-6 mx-48 text-white">
        <ul className="flex justify-around">
          {links.map((link) => {
            return (
              <li key={link.path}>
                <Link href={link.path}>
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ y: -10 }}
                  
                  >
                   
                    <div>{link.name}</div>
                  </motion.div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
