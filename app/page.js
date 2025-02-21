"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg text-gray-300"
        >
          Showcasing my work in AI, Smart Arenas, and Innovation.
        </motion.p>
      </section>

      {/* About Section */}
      <section className="h-screen flex flex-col items-center justify-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg text-gray-300 text-center max-w-3xl"
        >
          I am an AI Innovation Strategy Senior Manager at Lenovo, specializing in Smart Technology, AI solutions, and digital transformation.
        </motion.p>
      </section>

      {/* Projects Section */}
      <section className="h-screen flex flex-col items-center justify-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg text-gray-300 text-center max-w-3xl"
        >
          From AI-driven chatbots to smart arenas, my work bridges innovation with real-world impact.
        </motion.p>
      </section>

      {/* Contact Section */}
      <section className="h-screen flex flex-col items-center justify-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold"
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg text-gray-300 text-center max-w-3xl"
        >
          Let's connect! Reach out to discuss AI, innovation, or new opportunities.
        </motion.p>
      </section>
    </div>
  );
}