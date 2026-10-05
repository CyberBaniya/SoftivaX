import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Area */}
        <Link to="/" className="navbar-brand" style={{ textDecoration: 'none' }}>
          <div className="logo-group">
            <span className="logo-softiva">Softiva</span>
            <span className="logo-x">X</span>
          </div>
          <span className="logo-tagline">AI &amp; SOFTWARE SOLUTIONS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="navbar-actions">
          <Link to="/contact" className="btn-primary-new desktop-only" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
            Start a Project <span className="arrow-icon">&rarr;</span>
          </Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`} aria-hidden={!isMobileMenuOpen}>
        <ul className="mobile-nav-links">
          {navLinks.map((link, index) => (
            <li key={link.name} style={{ animationDelay: `${index * 0.05}s` }}>
              <Link
                to={link.path}
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mobile-btn-wrapper" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <Link
              to="/contact"
              className="btn-primary-new"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ width: '100%' }}
            >
              Start a Project <span className="arrow-icon">&rarr;</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
