import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function VideoAnimation() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const videoRef = useRef(null);

  useEffect(() => {
    if (inView) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [inView]);

  const springConfig = { stiffness: 200, damping: 30 };

  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  const scaleAnim = useTransform(
    scrollY,
    [0, windowHeight / 2, windowHeight],
    [0.5, 1, 1]
  );
  const opacityAnim = useTransform(
    scrollY,
    [0, windowHeight / 2, windowHeight],
    [0, 1, 1]
  );

  return (
    <div className="flex justify-center items-center ">
      <motion.div
        ref={ref}
        style={{ opacity: opacityAnim, scale: scaleAnim }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full h-full rounded-xl overflow-hidden"
      >
        <video
          ref={videoRef}
          className="w-full h-[70%] rounded-lg"
          src="animationVid.mp4"
          muted
          loop
          playsInline
        />
      </motion.div>
    </div>
  );
}
