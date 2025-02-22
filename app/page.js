"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set playback speed to 0.5 (half speed)
      video.playbackRate = 0.6;
    }
  }, []);

  return (
    <div className="main-container">
      {/* Minimal Navigation */}
      <header className="top-nav">
        <div className="nav-left">SHUBHAM GOEL</div>
        <nav className="nav-right">
          <a href="#projects" className="nav-link">MY PROJECTS</a>
          <a href="#about" className="nav-link">ABOUT ME</a>
          <a href="#socials" className="nav-link">SOCIALS</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        {/* Video Background */}
        <video 
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src="/intro-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Existing Hero Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
        <h1 className="hero-heading">Creating, Innovating, and Transforming</h1>
          <p className="hero-subheading">
          Bridging Technology and Creativity for Lasting Impact.
          </p>
          <button className="hero-cta">My Work →</button>
        </motion.div>
      </section>

      {/* Footer / Bottom Bar */}
      <footer className="bottom-bar">
        <div className="left-bar">
            <p></p>
        </div>
        <div className="right-bar">
            <p>Thank you for visiting</p>
        </div>
      </footer>
    </div>
  );
}