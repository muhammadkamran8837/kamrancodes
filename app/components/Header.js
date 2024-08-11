import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "./Elements/MenuIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sticky top-0 flex justify-between items-center text-neutral-200 pt-5 relative z-50">
        <Image src="/kc.png" width={70} height={70} alt="Logo" />
        <button
          className="text-[20px] font-bold focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? "Close" : <MenuIcon />}
        </button>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className={`absolute top-16 right-0 w-full lg:w-[300px] bg-blue-800 text-white rounded-xl shadow-lg z-50 flex flex-col gap-4 items-start p-6`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
              className="text-[30px] font-bold"
            >
              <Link href="#Home">Home</Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              className="text-[30px] font-bold"
            >
              <Link href="#Services">Services</Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
              className="text-[30px] font-bold"
            >
              <Link href="./projects">Projects</Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9, ease: "easeInOut" }}
              className="text-[30px] font-bold"
            >
              <Link href="#Testimonials">Testimonials</Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1, ease: "easeInOut" }}
              className="text-[30px] font-bold"
            >
              <Link href="#Contact">Contact</Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3, ease: "easeInOut" }}
              className="flex flex-row gap-4"
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
              className="text-blue-800 self-start bg-white rounded-2xl shadow-sm shadow-slate-600 px-3 py-1 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <a
                href="https://www.fiverr.com/users/mkamran306"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fiverr
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
}
