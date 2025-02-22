"use client"; 
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Import the useRouter hook to navigate programmatically

export default function About() {
  const router = useRouter(); // Initialize the useRouter hook

  const goBack = () => {
    router.push('/'); // Redirect to the homepage
  };

  return (
    <div className="about-container">
      <section className="about-hero">
        <motion.h1
          className="about-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          A Good Story
        </motion.h1>
        <motion.p
          className="about-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          (Our Approach)
        </motion.p>
      </section>

      <section className="about-content">
        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          The digital medium is filled with disposable content. Our approach is
          founded on capturing the authentic character of our clients’ brands,
          technology, product, and service...
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Without an authentic story told with integrity, people see through it.
          A good story is real, it is something you want to experience.
        </motion.p>
        
        {/* Back to Home button */}
        <button className="back-button" onClick={goBack}>
          Back to Home
        </button>
      </section>
    </div>
  );
}