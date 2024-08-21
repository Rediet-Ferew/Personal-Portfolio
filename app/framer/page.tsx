"use client";
import CanvasAnimation from "./Canva";
import { motion } from "framer-motion";
// import {transform} from 'framer-motion/dom'
import Link from "next/link";
export default function FramerMotion() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  // const MotionLink = motion(Link);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      {/* <motion.div
        className="bg-slate-200 ml-56 text-center rounded-full p-14"
        animate={{ rotate: 180 }}
        transition={{ type: "inertia", velocity: 50 }}
      >
        <motion.span className="text-xl text-center">Poll</motion.span>
      </motion.div>

      <motion.div>
        <motion.ul variants={container} initial="hidden" animate="show">
          <motion.li
            variants={item}
            className="bg-slate-200 ml-56 text-center rounded-full p-14"
          >
            Item 1
          </motion.li>
          <motion.li
            variants={item}
            className="bg-slate-200 ml-56 text-center rounded-full p-14"
          >
            Item 2
          </motion.li>
        </motion.ul> */}
        <CanvasAnimation/>
        
      {/* </motion.div> */}
    </div>
  );
}

// import { useEffect } from 'react';
// import styles from './style.module.scss';
// import { motion, useMotionValue, useSpring } from 'framer-motion';

// export default function index({stickyElement}) {

//   const cursorSize = 15;
//   const mouse = {
//     x: useMotionValue(0),
//     y: useMotionValue(0)
//   }

//   const smoothOptions = {damping: 20, stiffness: 300, mass: 0.5}
//   const smoothMouse = {
//     x: useSpring(mouse.x, smoothOptions),
//     y: useSpring(mouse.y, smoothOptions)
//   }

//   const manageMouseMove = e => {
//     const { clientX, clientY } = e;
//     mouse.x.set(clientX - cursorSize / 2);
//     mouse.y.set(clientY - cursorSize / 2);
//   }

//   useEffect( () => {
//     window.addEventListener("mousemove", manageMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", manageMouseMove)
//     }
//   }, [])

//   return (
//     <div className={styles.cursorContainer}>
//       <motion.div
//         style={{
//           left: smoothMouse.x,
//           top: smoothMouse.y,
//         }}
//         className={styles.cursor}>
//       </motion.div>
//     </div>
//   )
// }
