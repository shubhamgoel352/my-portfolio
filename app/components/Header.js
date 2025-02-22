"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`nav-bar ${isScrolled ? "scrolled" : ""}`}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Centered Header Text */}
      <h1 className="header-title">About Shubham Goel</h1>
    </motion.nav>
  );
}