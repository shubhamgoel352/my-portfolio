"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // For navigation

export default function About() {
  return (
    <div className="about-container">
      {/* Back Arrow Button */}
      <motion.div
        className="arrow-button"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Link href="/" passHref>
          <button className="arrow-icon">
            ←
          </button>
        </Link>
      </motion.div>

      <section className="about-hero">
        <motion.h1
          className="about-heading typewriter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="about-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hello There!
        </motion.p>
      </section>

      <section className="about-content">
        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I specialize in Technology & AI Innovation Strategy...
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          With a foundation in both technology and systems thinking...
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Every project is an opportunity for me to build something meaningful...
        </motion.p>
      </section>
    </div>
  );
}