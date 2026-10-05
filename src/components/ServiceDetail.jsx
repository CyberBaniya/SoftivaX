import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { detailedServices, mainCategories } from '../data/servicesData';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  // Find matching category meta and detailed sub-services
  const categoryMeta = mainCategories.find(c => c.slug === categorySlug) || mainCategories[0];
  const detailData = detailedServices[categorySlug] || detailedServices['web-development'];

  const isResumeCategory = categorySlug === 'resume-designing';

  return (
    <main className="service-detail-page">
      {/* Top Header & Breadcrumbs */}
      <section className="detail-hero-section">
        <div className="detail-container">
          
          {/* Back Link & Breadcrumb Bar */}
          <div className="detail-nav-bar">
            <Link to="/services" className="back-link-btn">
              &larr; Back to All Services
            </Link>
            
            <nav className="breadcrumbs-nav" aria-label="Breadcrumb">
              <Link to="/services" className="breadcrumb-item">Services</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">{detailData.heading}</span>
            </nav>
          </div>

          {/* Hero Content */}
          <div className="detail-header-content">
            <div className="detail-eyebrow">{categoryMeta.title} CATALOGUE</div>
            <h1 className="detail-title">{detailData.heading}</h1>
            <p className="detail-description">{detailData.description}</p>
          </div>

        </div>
      </section>

      {/* Sub-Services Catalogue Section */}
      <section className="sub-services-section">
        <div className="detail-container">

          {isResumeCategory && detailData.subCategories ? (
            /* Special Categorized Layout for Resume Designing */
            <div className="resume-categorized-groups">
              {detailData.subCategories.map((group, groupIdx) => (
                <div key={groupIdx} className="resume-group-block">
                  <div className="group-header">
                    <span className="group-bullet">&bull;</span>
                    <h2 className="group-title">{group.categoryTitle}</h2>
                  </div>

                  <div className="sub-services-grid">
                    {group.items.map((item) => (
                      <article key={item.id} className="sub-service-card">
                        <div className="sub-card-img-container">
                          <div className="sub-window-bar">
                            <span className="sub-window-title">Resume Studio • {item.title}</span>
                          </div>
                          <img 
                            src={item.imageUrl} 
                            alt={`${item.title} Demo Preview`}
                            className="sub-card-img"
                            loading="lazy"
                          />
                          <div className="sub-img-overlay"></div>
                        </div>

                        <div className="sub-card-content">
                          <div className="sub-card-top">
                            <span className="sub-card-num">{item.id}</span>
                            <span className="sub-card-badge">FORMAT SPECIFICATION</span>
                          </div>

                          <h3 className="sub-card-title">{item.title}</h3>
                          <p className="sub-card-desc">{item.description}</p>

                          <div className="sub-card-bottom">
                            <div className="sub-card-tags">
                              {item.technologies.map((tech, tIdx) => (
                                <span key={tIdx} className="sub-tag-pill">{tech}</span>
                              ))}
                            </div>

                            <Link to="/contact" className="btn-primary-new sub-card-btn">
                              Discuss This Service <span className="arrow-icon">&rarr;</span>
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Standard 10-20 Sub-Services Catalogue Grid */
            <div className="sub-services-grid">
              {detailData.subServices.map((item) => (
                <article key={item.id} className="sub-service-card">
                  <div className="sub-card-img-container">
                    <div className="sub-window-bar">
                      <div className="window-dots">
                        <span className="dot dot-close"></span>
                        <span className="dot dot-min"></span>
                        <span className="dot dot-max"></span>
                      </div>
                      <span className="sub-window-title">{categoryMeta.title} • {item.title}</span>
                    </div>
                    <img 
                      src={item.imageUrl} 
                      alt={`${item.title} Real Software Interface`}
                      className="sub-card-img"
                      loading="lazy"
                    />
                    <div className="sub-img-overlay"></div>
                  </div>

                  <div className="sub-card-content">
                    <div className="sub-card-top">
                      <span className="sub-card-num">{item.id}</span>
                      <span className="sub-card-badge">SERVICE SPECIFICATION</span>
                    </div>

                    <h3 className="sub-card-title">{item.title}</h3>
                    <p className="sub-card-desc">{item.description}</p>

                    <div className="sub-card-bottom">
                      <div className="sub-card-tags">
                        {item.technologies.map((tech, tIdx) => (
                          <span key={tIdx} className="sub-tag-pill">{tech}</span>
                        ))}
                      </div>

                      <Link to="/contact" className="btn-primary-new sub-card-btn">
                        Discuss This Service <span className="arrow-icon">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Bottom Call to Action */}
          <div className="detail-bottom-cta">
            <h2 className="cta-heading">Need {detailData.heading} Services?</h2>
            <p className="cta-subtext">Let's discuss your project goals, technical requirements, and timeline.</p>
            
            <div className="cta-buttons-row">
              <Link to="/contact" className="btn-primary-new">
                Start a Project <span className="arrow-icon">&rarr;</span>
              </Link>
              <Link to="/services" className="btn-secondary-new">
                &larr; Explore All Services
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
