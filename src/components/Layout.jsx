import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:your.email@example.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Anne Michelle. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;