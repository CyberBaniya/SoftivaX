import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mainCategories } from '../data/servicesData';
import './Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // For homepage, show 4 featured categories; for /services page, show all 7 categories
  const categoriesToDisplay = isHome ? mainCategories.slice(0, 4) : mainCategories;

  return (
    <section className="services-section" id="services" ref={sectionRef} aria-label="Services Catalogue">
      <div className="services-container">
        
        {/* Top Header */}
        <div className={`services-header ${isVisible ? 'animate-up' : ''}`}>
          <div className="services-eyebrow">
            {isHome ? 'What We Build' : 'Service Catalogue'}
          </div>
          <h2 className="services-headline">
            {isHome ? (
              <>Technology That <span className="highlight-business">Moves</span><br/>Your Business Forward.</>
            ) : (
              <>Engineering Excellence.<br/><span className="highlight-business">Tailored Digital Services.</span></>
            )}
          </h2>
          <p className="services-paragraph">
            From web development and mobile applications to AI solutions, DevOps, and professional resume studio services — explore our full-stack capabilities.
          </p>
        </div>

        {/* Editorial Categories Grid */}
        <div className="services-editorial-grid">
          {categoriesToDisplay.map((cat, index) => {
            const isFeatured = cat.layoutType === 'featured-large';

            return (
              <article 
                key={cat.id} 
                className={`service-cat-card ${isFeatured ? 'cat-featured' : 'cat-standard'} ${isVisible ? 'animate-up' : ''}`}
                style={{ animationDelay: `${0.1 + index * 0.08}s` }}
              >
                {/* Product Window Bar & Real Photography */}
                <div className="cat-visual-container">
                  <div className="cat-window-bar">
                    <div className="window-dots">
                      <span className="dot dot-close"></span>
                      <span className="dot dot-min"></span>
                      <span className="dot dot-max"></span>
                    </div>
                    <span className="cat-window-title">{cat.windowTitle}</span>
                  </div>
                  <div className="cat-img-wrapper">
                    <img 
                      src={cat.imageUrl} 
                      alt={`${cat.title} Real Technology Interface`}
                      className="cat-real-img"
                      loading="lazy"
                    />
                    <div className="cat-img-overlay"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="cat-content">
                  <div className="cat-top-row">
                    <span className="cat-number">{cat.id}</span>
                    <span className="cat-badge">MAIN SERVICE</span>
                  </div>

                  <h3 className="cat-title">{cat.title}</h3>
                  <p className="cat-subtitle">{cat.subtitle}</p>

                  <div className="cat-bottom">
                    <div className="cat-tags">
                      {cat.tags.map((tag, i) => (
                        <span key={i} className="cat-tag-pill">{tag}</span>
                      ))}
                    </div>

                    <Link 
                      to={`/services/${cat.slug}`} 
                      className="btn-primary-new cat-btn" 
                      aria-label={`Explore ${cat.title} Services`}
                    >
                      Explore Services <span className="arrow-icon">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Section Footer */}
        {isHome ? (
          <div className="cta-group cta-group-center" style={{ marginTop: '3.5rem' }}>
            <Link to="/services" className="btn-secondary-new">
              View All 7 Service Categories <span className="arrow-icon">&rarr;</span>
            </Link>
          </div>
        ) : (
          <div className="cta-group cta-group-center" style={{ marginTop: '3.5rem' }}>
            <Link to="/contact" className="btn-primary-new">
              Start a Project <span className="arrow-icon">&rarr;</span>
            </Link>
            <Link to="/solutions" className="btn-secondary-new">
              View Our Solutions <span className="arrow-icon">&rarr;</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
