import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="home-container">
      <section className="home">
        <div className="hero">
          <h1>Welcome to Michelle's Portfolio</h1>
          <p className="subtitle">Web Designer/Developer</p>
          <div className="cta-buttons">
            <Link to="/projects" className="btn primary">View Projects</Link>
            <Link to="/contact" className="btn secondary">Contact Me</Link>
          </div>
        </div>
      </section>

      <section className="home-projects">
        <h2>Featured Projects</h2>
        <div className="featured-projects">
          <div className="project-preview">
            <h3>E-Commerce Platform</h3>
            <p>A full-stack e-commerce solution with modern features</p>
            <Link to="/projects" className="btn secondary">View More</Link>
          </div>
          <div className="project-preview">
            <h3>Task Management App</h3>
            <p>Collaborative task management with real-time updates</p>
            <Link to="/projects" className="btn secondary">View More</Link>
          </div>
        </div>
      </section>

      <section className="home-about">
        <h2>About Me</h2>
        <p>Passionate developer creating innovative web solutions</p>
        <Link to="/about" className="btn primary">Learn More</Link>
      </section>

      <section className="home-contact">
        <h2>Get in Touch</h2>
        <p>Interested in collaboration? Let's connect! Can't wait to hear from you.</p>
        <Link to="/contact" className="btn primary">Contact Me</Link>
      </section>
    </div>
  );
};

export default Home;