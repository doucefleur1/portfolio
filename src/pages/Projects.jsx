import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      image: "https://placehold.co/600x400",
      github: "https://github.com",
      demo: "https://demo-link.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      image: "https://placehold.co/600x400",
      github: "https://github.com",
      demo: "https://demo-link.com"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather data, forecasts, and interactive maps using multiple weather APIs.",
      technologies: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
      image: "https://placehold.co/600x400",
      github: "https://github.com",
      demo: "https://demo-link.com"
    },
    {
      title: "Social Media Analytics",
      description: "A dashboard for tracking and analyzing social media metrics across multiple platforms with data visualization.",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      image: "https://placehold.co/600x400",
      github: "https://github.com",
      demo: "https://demo-link.com"
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile-responsive fitness tracking application with workout planning, progress tracking, and nutrition logging.",
      technologies: ["React", "TypeScript", "Firebase", "PWA"],
      image: "https://placehold.co/600x400",
      github: "https://github.com",
      demo: "https://demo-link.com"
    },
    {
        title: "Real-time Chat Application",
        description: "A modern chat application featuring real-time messaging, file sharing, and group chat capabilities. Includes user presence indicators and message encryption.",
        technologies: ["React", "WebSocket", "Express", "MongoDB", "Socket.io"],
        image: "https://placehold.co/600x400",
        github: "https://github.com",
        demo: "https://demo-link.com"
      }
  ];

  return (
    <>
      <section className="projects">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn primary">GitHub</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn secondary">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </section>
      <div className="cta-banners">
        <Link to="/contact" className="cta-banner contact-banner">
          <h3>Want to work together?</h3>
          <span className="btn primary">Contact Me</span>
        </Link>
        <Link to="/about" className="cta-banner projects-banner">
          <h3>Learn more about me</h3>
          <span className="btn secondary">About Me</span>
        </Link>
      </div>
    </>
  );
};

export default Projects;