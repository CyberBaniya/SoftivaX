import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section" id="footer" aria-label="Site Footer">
      {/* Background Watermark */}
      <div className="footer-watermark" aria-hidden="true">X</div>
      
      <div className="footer-container">
        
        {/* Pre-Footer CTA */}
        <div className="footer-pre-cta" style={{ textAlign: 'center', marginBottom: '6rem', padding: '4rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '500', color: '#F5F1EA', marginBottom: '1rem' }}>Ready to Build What’s Next?</h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '2.5rem' }}>Let’s turn your idea into an intelligent digital solution.</p>
          <div className="cta-group cta-group-center" style={{ marginTop: '0' }}>
            <Link to="/contact" className="btn-primary-new">
              Start a Project <span className="arrow-icon">&rarr;</span>
            </Link>
            <Link to="/solutions" className="btn-secondary-new">
              Explore Solutions <span className="arrow-icon">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-logo">Softiva<span>X</span></div>
            <div className="footer-tagline">AI & SOFTWARE SOLUTIONS</div>
            <p className="footer-description">
              Building intelligent software, AI solutions, and digital systems for what’s next.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Company</h4>
            <ul className="footer-nav-list">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Capabilities</h4>
            <ul className="footer-nav-list">
              <li><span className="footer-static-link">Artificial Intelligence</span></li>
              <li><span className="footer-static-link">Custom Software</span></li>
              <li><span className="footer-static-link">Automation</span></li>
              <li><span className="footer-static-link">Cloud & Platforms</span></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Explore</h4>
            <ul className="footer-nav-list">
              <li><Link to="/about">Our Process</Link></li>
              <li><Link to="/about">Technology</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* CTA Column */}
          <div className="footer-cta-col">
            <h4 className="footer-nav-title">Start a Conversation</h4>
            <div className="footer-cta-box">
              <h5 className="footer-cta-heading">Have a project in mind?</h5>
              <p className="footer-cta-text">Let’s explore what we can build together.</p>
              <Link to="/contact" className="btn-link-new">
                Start a Project <span className="arrow-icon" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            &copy; 2026 SoftivaX. All rights reserved.
          </div>
          
          <div className="footer-legal">
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
            <button 
              className="back-to-top" 
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
