import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import RobotInteractiveHero from './RobotInteractiveHero';
import './Hero.css';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth) * 2 - 1;
      const normY = -(e.clientY / innerHeight) * 2 + 1;
      mousePos.current = { x: normX, y: normY };
    };

    const handleScroll = () => {
      scrollY.current = window.scrollY || window.pageYOffset;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero-section">
      {/* Background Atmosphere */}
      <div className="hero-bg-grid" aria-hidden="true"></div>
      <div className="hero-ambient-glow" aria-hidden="true"></div>

      <div className="hero-container">
        
        {/* Left Column: Approved Text Content */}
        <div className={`hero-content ${isLoaded ? 'animate-in' : ''}`}>
          <div className="hero-eyebrow">
            <span className="eyebrow-accent">AI</span> &bull; SOFTWARE &bull; ROBOTICS
          </div>
          
          <h1 className="hero-headline">
            Intelligent Software.<br />
            Built for <span className="headline-highlight">What’s Next.</span>
          </h1>
          
          <p className="hero-paragraph">
            We build intelligent software, AI-powered applications, automation systems, and scalable digital platforms for modern businesses.
          </p>
          
          <div className="cta-group">
            <Link to="/solutions" className="btn-primary-new">
              Explore Solutions <span className="arrow-icon">&rarr;</span>
            </Link>
            <Link to="/contact" className="btn-secondary-new">
              Start a Project <span className="arrow-icon">&rarr;</span>
            </Link>
          </div>
          
          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/about" className="btn-link-new">
              See How We Work <span className="arrow-icon">&rarr;</span>
            </Link>
          </div>
          
          <div className="hero-trust-line">
            AI &bull; Cloud &bull; Automation &bull; Robotics
          </div>
        </div>

        {/* Right Column: Approved Reference 3D Interactive Robot */}
        <div className={`hero-robot-wrapper ${isLoaded ? 'animate-in' : ''}`}>
          <RobotInteractiveHero mousePos={mousePos} scrollY={scrollY} />
        </div>

      </div>
    </section>
  );
};

export default Hero;
