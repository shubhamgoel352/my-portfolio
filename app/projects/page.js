"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const projects = [
    { id: 1, title: "Project One", description: "A breakthrough innovation in AI technology." },
    { id: 2, title: "Project Two", description: "Revolutionizing smart arenas with cutting-edge solutions." },
    { id: 3, title: "Project Three", description: "Transforming digital experiences through design." },
    { id: 4, title: "Project Four", description: "Sustainable tech solutions for a better tomorrow." },
  ];

  return (
    <div className="projects-container">
      <header className="projects-header">
        <Link href="/" passHref>
          <button className="back-button">← Back</button>
        </Link>
        <h1 className="projects-title">My Projects</h1>
      </header>
      <section className="projects-grid">
        {projects.map((project) => (
          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.2 }}
          >
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}