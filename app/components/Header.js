import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sticky top-0 flex justify-between items-center text-neutral-200 pt-5 relative z-50">
        <Image src="/kc.png" width={70} height={70} alt="Logo" />
        <button className="text-[20px] font-bold" onClick={toggleMenu}>
          {isOpen ? (
            "Close"
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </button>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "80vh" : 0 }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`absolute top-16 right-0 w-full lg:w-[300px] bg-blue-800 text-white rounded-xl shadow-lg z-50 flex flex-col items-start p-6`}
          style={{ zIndex: 1000 }} // Add this line
        >
          <Link href="#Home">
            <motion.div
              whileHover={{ x: 20, scale: 1.1 }} // Scale on hover
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-[30px] font-bold mb-4"
            >
              Home
            </motion.div>
          </Link>

          <Link href="#Services">
            <motion.div
              whileHover={{ x: 20, scale: 1.1 }} // Scale on hover
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-[30px] font-bold mb-4"
            >
              Services
            </motion.div>
          </Link>

          <Link href="#Projects">
            <motion.div
              whileHover={{ x: 20, scale: 1.1 }} // Scale on hover
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-[30px] font-bold mb-4"
            >
              Projects
            </motion.div>
          </Link>

          <Link href="#Testimonials">
            <motion.div
              whileHover={{ x: 20, scale: 1.1 }} // Scale on hover
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-[30px] font-bold mb-4"
            >
              Testimonials
            </motion.div>
          </Link>

          <Link href="#Contact">
            <motion.div
              whileHover={{ x: 20, scale: 1.1 }} // Scale on hover
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-[30px] font-bold"
            >
              Contact
            </motion.div>
          </Link>

          <div className="flex flex-col lg:mt-20 mt-[100px] space-y-4">
            <div className="flex gap-4">
              <button className="text-blue-800 bg-white rounded-2xl shadow-sm shadow-slate-600 px-3 py-1 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <a
                  href="https://github.com/muhammadkamran8837"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </button>
              <button className="text-blue-800 bg-white rounded-2xl shadow-sm shadow-slate-600 px-3 py-1 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <a
                  href="https://www.linkedin.com/in/mkamran-webdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </button>
            </div>
            <button className="text-blue-800 self-start	 bg-white rounded-2xl shadow-sm shadow-slate-600 px-3 py-1 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <a
                href="https://www.fiverr.com/users/mkamran306"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fiverr
              </a>
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
