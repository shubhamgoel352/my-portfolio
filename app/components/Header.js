"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full p-5 bg-white shadow-md flex items-center justify-between z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Left-Aligned Name */}
      <h1 className="text-2xl font-bold text-black pl-8">Shubham Goel</h1>

      {/* Center-Aligned Navigation */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-12">
        {["About Me", "Industries", "Blog"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} 
            className="text-lg font-medium text-black hover:text-gray-600 transition duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}