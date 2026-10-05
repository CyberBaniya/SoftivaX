import React, { useEffect, useRef, useState } from 'react';
import './Process.css';

const processSteps = [
  {
    id: "01",
    title: "Discover",
    description: "Understand the business, users, challenges, and opportunities before defining the solution.",
    visualClass: "visual-discover"
  },
  {
    id: "02",
    title: "Design",
    description: "Shape the product architecture, user experience, AI strategy, and technical direction around real requirements.",
    visualClass: "visual-design"
  },
  {
    id: "03",
    title: "Build",
    description: "Develop the solution using modern software engineering, AI, automation, APIs, and scalable infrastructure.",
    visualClass: "visual-build"
  },
  {
    id: "04",
    title: "Evolve",
    description: "Continuously improve the system through feedback, optimization, new capabilities, and changing business needs.",
    visualClass: "visual-evolve"
  }
];

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const renderVisual = (type) => {
    switch(type) {
      case 'visual-discover':
        return (
          <div className="process-visual p-discover" aria-hidden="true">
            <div className="p-ring"></div>
            <div className="p-dot"></div>
          </div>
        );
      case 'visual-design':
        return (
          <div className="process-visual p-design" aria-hidden="true">
            <div className="p-square s-1"></div>
            <div className="p-square s-2"></div>
            <div className="p-line"></div>
          </div>
        );
      case 'visual-build':
        return (
          <div className="process-visual p-build" aria-hidden="true">
            <div className="p-bar b-1"></div>
            <div className="p-bar b-2"></div>
            <div className="p-bar b-3"></div>
          </div>
        );
      case 'visual-evolve':
        return (
          <div className="process-visual p-evolve" aria-hidden="true">
            <div className="p-circle c-1"></div>
            <div className="p-circle c-2"></div>
            <div className="p-pulse"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="process-section" id="process" ref={sectionRef} aria-label="How We Work">
      <div className="process-container">
        
        {/* Header */}
        <div className={`process-header ${isVisible ? 'animate-up' : ''}`}>
          <div className="process-eyebrow">How We Work</div>
          <h2 className="process-headline">From Concept to Intelligent Product.</h2>
          <p className="process-paragraph">
            We combine strategic thinking, modern engineering, and AI capabilities to turn complex ideas into reliable digital solutions.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="process-timeline-wrapper">
          <div className={`process-connection-line ${isVisible ? 'animate-line' : ''}`} aria-hidden="true"></div>
          
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div 
                key={step.id} 
                className={`process-step ${isVisible ? 'animate-up' : ''}`}
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
              >
                <div className="process-top-area">
                  <div className="process-number-wrapper">
                    {renderVisual(step.visualClass)}
                    <span className="process-number">{step.id}</span>
                  </div>
                  <div className="process-node" aria-hidden="true"></div>
                </div>
                
                <div className="process-content">
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Footer */}
        <div className={`process-footer ${isVisible ? 'animate-up' : ''}`} style={{ animationDelay: '1s' }}>
          <div className="process-footer-statement">
            Think. Build. Intelligently.
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
