import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import useWindowSize from "../hooks/useWindowSize";
import Link from "next/link";

export default function MyWork() {
  const controls = useAnimation();
  const ref = useRef(null);
  const { width } = useWindowSize();

  const xMovement = width < 768 ? 160 : 320;
  const minusXMovement = width < 768 ? -160 : -320;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden"); // Update the animation state directly here
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <div id="Projects" className="text-neutral-200 mt-5">
      <h1 className="text-neutral-400">My Work</h1>
      <hr className="mb-6 border-slate-600 shadow-md" />
      <div className="mb-8">
        <h2 className="text-xl lg:text-3xl font-bold mb-2">Projects</h2>
      </div>
      <div
        ref={ref}
        className="relative h-[500px] flex justify-center items-center overflow-hidden lg:overflow-visible"
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { x: 0, opacity: 1, rotate: 0 },
            visible: {
              x: minusXMovement,
              opacity: 0.8,
              rotate: -10,
              transition: { duration: 1.5 },
            },
          }}
          className="absolute rounded-lg overflow-hidden"
        >
          <div className="w-[200px] h-[300px] md:w-[500px] md:h-[500px]">
            <Image
              src="/webproject1.jpg"
              layout="fill"
              alt="Project Image 1"
              className="rounded-lg opacity-80"
            />
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { x: 0, opacity: 1, rotate: 0 },
            visible: {
              x: xMovement,
              opacity: 0.8,
              rotate: 10,
              transition: { duration: 1.5 },
            },
          }}
          className="absolute rounded-lg overflow-hidden"
        >
          <div className="w-[200px] h-[300px] md:w-[500px] md:h-[500px]">
            <Image
              src="/appproject5.jpg"
              layout="fill"
              alt="Project Image 2"
              className="rounded-lg opacity-80"
            />
          </div>
        </motion.div>
        <motion.button
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
          }}
          className="mb-5 bg-blue-800 text-white rounded-2xl shadow-md shadow-slate-600 px-2 py-1 "
        >
          <Link href="/projects/"> See Projects</Link>
        </motion.button>
      </div>
    </div>
  );
}
