import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-content">
          <h2>About Me</h2>
          <div className="bio">
            <div className="bio-image">
              <img src="https://placehold.co/400x400" alt="Profile" />
            </div>
            <div className="bio-text">
              <h3>Hi, I'm Michelle </h3>
              <p>A passionate Web Developer based in Cedar rapids. With a strong foundation in both front-end and back-end development, I create efficient, scalable, and user-friendly solutions to complex problems.</p>
              <p>My journey in software development began with a deep curiosity for technology and problem-solving. Today, I specialize in building modern web applications using cutting-edge technologies and best practices.</p>
              <p>When I'm not coding, you can find me doing somr photography, VOlonteering in the community, or spending some time with family and friends.</p>
            </div>
          </div>
          
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <ul>
                  <li>React.js</li>
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>HTML5/CSS3</li>
                  <li>SASS/SCSS</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Python</li>
                  <li>RESTful APIs</li>
                  <li>GraphQL</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Tools & Others</h4>
                <ul>
                  <li>Git/GitHub</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
      <div className="cta-banners">
            <Link to="/contact" className="cta-banner contact-banner">
              <h3>Want to work together?</h3>
              <span className="btn primary">Contact Me</span>
            </Link>
            <Link to="/projects" className="cta-banner projects-banner">
              <h3>Check out my work</h3>
              <span className="btn secondary">View Projects</span>
            </Link>
          </div>
     
    </>
  );
};

export default About;