"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.nav
      className="nav-bar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Left-aligned logo */}
      <h1 className="logo">Shubham Goel</h1>

      {/* Navigation Links (Centered with the body alignment) */}
      <div className="nav-links-container">
        <div className="nav-links">
          {["About Me", "Industries", "Blog"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="nav-item"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}