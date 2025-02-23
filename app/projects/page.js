"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import "../../styles/projects.css";

export default function Projects() {
  const projects = [
    { id: 1, title: "Project One", description: "A breakthrough innovation in AI technology.", image: "/project1.jpg" },
    { id: 2, title: "Project Two", description: "Revolutionizing smart arenas with cutting-edge solutions.", image: "/project2.jpg" },
    { id: 3, title: "Project Three", description: "Transforming digital experiences through design.", image: "/project3.jpg" },
    { id: 4, title: "Project Four", description: "Sustainable tech solutions for a better tomorrow.", image: "/project4.jpg" },
  ];

  return (
    <div className="projects-container">
      <header className="projects-header">
        <Link href="/" passHref>
          <button className="back-button">← Back</button>
        </Link>
        <h1 className="projects-title">My Projects</h1>
      </header>

      <section className="projects-list">
        {projects.map((project) => (
          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.2 }}
          >
            {/* Image on the Left */}
            <div className="project-image">
              <Image src={project.image} alt={project.title} width={300} height={200} />
            </div>

            {/* Project Details */}
            <div className="project-details">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}