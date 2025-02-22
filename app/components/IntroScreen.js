"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3000); // Adjust intro duration
  }, []);

  return (
    <motion.div
      className="intro-screen flex items-center justify-center text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0, scale: 1.2 }} // Adds a zoom-out effect
      transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
      style={{ display: isVisible ? "flex" : "none" }} // Ensures it disappears fully
    >
      <motion.h1
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold"
      >
        About Shubham Goel
      </motion.h1>
    </motion.div>
  );
}