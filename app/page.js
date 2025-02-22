"use client";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="main-container">
      {/* Minimal Navigation */}
      <header className="top-nav">
        <div className="nav-left">SHUBHAM GOEL</div>
        <nav className="nav-right">
          <a href="#index" className="nav-link">MY PROJECTS</a>
          <a href="#close" className="nav-link">ABOUT ME</a>
          <a href="#sitemap" className="nav-link">SOCIALS</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        {/* Video Background */}
        <video 
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
          <h1 className="hero-heading">Technology Redifined.</h1>
          <p className="hero-subheading">
            Your brand's story told through digital artistry.
          </p>
          <button className="hero-cta">My Work →</button>
        </motion.div>
      </section>

      {/* Footer / Bottom Bar */}
      <footer className="bottom-bar">
        <div className="left-bar">
          <p>Thank you for visiting</p>
        </div>
        <div className="right-bar">
          <button>Accept</button>
          <button>Sound On</button>
        </div>
      </footer>
    </div>
  );
}