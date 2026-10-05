import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
  const [message, setMessage] = useState('');
  const [service, setService] = useState('');
  const sectionRef = useRef(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Mock submission process
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section className="contact-section" id="contact" ref={sectionRef} aria-label="Start a Project">
      <div className="contact-container">
        
        <div className="contact-layout">
          
          {/* Left Column */}
          <div className={`contact-left ${isVisible ? 'animate-up' : ''}`}>
            <div className="contact-eyebrow">Let’s Build Something</div>
            <h2 className="contact-headline">Have an Idea?<br/>Let’s Turn It Into Something Intelligent.</h2>
            <p className="contact-paragraph">
              Whether you are exploring an AI solution, building a new software platform, or looking to automate a complex workflow, let’s start with the problem and work toward the right solution.
            </p>
            
            <div className="contact-divider"></div>
            
            <h3 className="contact-subhead">Let’s talk about your next digital product.</h3>
            <ul className="contact-points">
              <li><span className="point-dot"></span>AI & Intelligent Applications</li>
              <li><span className="point-dot"></span>Custom Software & Platforms</li>
              <li><span className="point-dot"></span>Automation & Digital Transformation</li>
            </ul>

            {/* Connection Visual */}
            <div className="contact-visual" aria-hidden="true">
              <div className="cv-flow">
                <div className="cv-item">
                  <div className="cv-node cv-n1"></div>
                  <span className="cv-label">IDEA</span>
                </div>
                <div className="cv-line">
                  <div className="cv-traveler"></div>
                </div>
                <div className="cv-item">
                  <div className="cv-node cv-n2"></div>
                  <span className="cv-label">SYSTEM</span>
                </div>
                <div className="cv-line">
                  <div className="cv-traveler t2"></div>
                </div>
                <div className="cv-item">
                  <div className="cv-node cv-n3">
                    <div className="cv-pulse"></div>
                  </div>
                  <span className="cv-label">INTELLIGENCE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={`contact-right ${isVisible ? 'animate-up' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="contact-form-wrapper">
              
              {formStatus === 'success' ? (
                <div className="form-success-state">
                  <div className="success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="success-heading">Message Received</h3>
                  <p className="success-text">
                    Thank you for reaching out. A member of our strategy team will review your inquiry and contact you shortly to discuss your digital product.
                  </p>
                  <button className="reset-form-btn" onClick={() => setFormStatus('idle')}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name</label>
                      <input type="text" id="fullName" name="fullName" required placeholder="John Doe" />
                      <div className="input-focus-border"></div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" required placeholder="john@company.com" />
                      <div className="input-focus-border"></div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company / Organization</label>
                      <input type="text" id="company" name="company" placeholder="Acme Corp" />
                      <div className="input-focus-border"></div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="service">What can we help you with?</label>
                      <div className="select-wrapper">
                        <select 
                          id="service" 
                          name="service" 
                          required 
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                        >
                          <option value="" disabled>Select an option</option>
                          <option value="AI Solutions">AI Solutions</option>
                          <option value="Custom Software">Custom Software</option>
                          <option value="Automation">Automation</option>
                          <option value="Cloud & Platforms">Cloud & Platforms</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="select-arrow">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                        <div className="input-focus-border"></div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your challenges, goals, or the project you'd like to build..." 
                      rows="4"
                    ></textarea>
                    <div className="input-focus-border"></div>
                  </div>

                  <button 
                    type="submit" 
                    className={`btn-primary-new ${formStatus === 'submitting' ? 'submitting' : ''}`}
                    disabled={formStatus === 'submitting'}
                    style={{ width: '100%', marginTop: '1rem', padding: '1.2rem' }}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Start a Conversation'} 
                    <span className="arrow-icon" aria-hidden="true">&rarr;</span>
                  </button>
                </form>
              )}
              
            </div>
          </div>

        </div>

        {/* Section End */}
        <div className={`contact-footer ${isVisible ? 'animate-up' : ''}`} style={{ animationDelay: '0.6s' }}>
          <div className="contact-footer-line"></div>
          <div className="cta-group cta-group-center" style={{ marginTop: '0' }}>
            <Link to="/" className="btn-secondary-new">
              Back to Home
            </Link>
            <Link to="/services" className="btn-link-new">
              Explore Our Services <span className="arrow-icon">&rarr;</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
