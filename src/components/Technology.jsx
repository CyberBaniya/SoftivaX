import React, { useEffect, useRef, useState } from 'react';
import './Technology.css';

const techCategories = [
  {
    id: "01",
    title: "ARTIFICIAL INTELLIGENCE",
    keywords: ["AI Applications", "Generative AI", "AI Agents", "RAG & Knowledge Systems"],
    codeSnippet: `// SoftivaX AI Engine Integration
const client = new SoftivaXAI({ apiKey: env.AI_KEY });
const agent = await client.agents.create({
  model: "claude-3-5-sonnet",
  tools: [retrievalTool, vectorSearch]
});`
  },
  {
    id: "02",
    title: "SOFTWARE ENGINEERING",
    keywords: ["Web Applications", "Backend Systems", "APIs & Integrations", "Enterprise Platforms"],
    codeSnippet: `@SpringBootApplication
@RestController
@RequestMapping("/api/v1/services")
public class PlatformApplication {
    @GetMapping("/health")
    public ResponseEntity<HealthState> check() { ... }
}`
  },
  {
    id: "03",
    title: "DATA & INTELLIGENCE",
    keywords: ["Data Processing", "Analytics", "Knowledge Systems", "Predictive Solutions"],
    codeSnippet: `SELECT 
  tenant_id, 
  COUNT(event_id) AS total_events,
  AVG(latency_ms) AS p99_latency
FROM telemetry_stream
GROUP BY tenant_id HAVING p99_latency < 50;`
  },
  {
    id: "04",
    title: "CLOUD & INFRASTRUCTURE",
    keywords: ["Cloud Platforms", "Scalable Architecture", "Containers", "Deployment & Infrastructure"],
    codeSnippet: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: softivax-core-mesh
spec:
  replicas: 5
  selector:
    matchLabels: { app: api-gateway }`
  },
  {
    id: "05",
    title: "AUTOMATION",
    keywords: ["Workflow Automation", "Process Orchestration", "System Integrations", "Intelligent Operations"],
    codeSnippet: `// Workflow Orchestration Pipeline
export const workflow = new WorkflowBuilder()
  .trigger(WebhookEvent.ORDER_CREATED)
  .step(ValidateInventory)
  .step(ProcessPayment)
  .execute();`
  }
];

const Technology = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const activeCategory = techCategories[activeIndex];

  return (
    <section className="technology-section" id="technology" ref={sectionRef} aria-label="Technology and Capabilities">
      <div className="technology-container">
        
        <div className="technology-layout">
          
          {/* Left Column */}
          <div className={`technology-left ${isVisible ? 'animate-up' : ''}`}>
            <div className="tech-eyebrow">Technology &amp; Stack</div>
            <h2 className="tech-headline">Built With Modern Technology.<br/>Designed for Real-World Impact.</h2>
            <p className="tech-paragraph">
              From intelligent applications to scalable software platforms, we bring together proven open enterprise stacks to build reliable, adaptable digital systems.
            </p>
            
            {/* Real Software Code / Architecture Console Box */}
            <div className="tech-code-box">
              <div className="code-box-header">
                <div className="window-dots">
                  <span className="dot dot-close"></span>
                  <span className="dot dot-min"></span>
                  <span className="dot dot-max"></span>
                </div>
                <span className="code-box-filename">{activeCategory.title.toLowerCase().replace(/ /g, '_')}.config.ts</span>
              </div>
              <pre className="code-box-body">
                <code>{activeCategory.codeSnippet}</code>
              </pre>
            </div>
          </div>

          {/* Right Column - Capabilities List */}
          <div className={`technology-right ${isVisible ? 'animate-up' : ''}`} style={{ animationDelay: '0.15s' }}>
            <div className="tech-list" role="tablist">
              {techCategories.map((category, index) => {
                const isActive = activeIndex === index;
                return (
                  <div 
                    key={category.id} 
                    className={`tech-row ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                    role="tab"
                    aria-selected={isActive}
                    tabIndex="0"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveIndex(index);
                        e.preventDefault();
                      }
                    }}
                  >
                    <div className="tech-row-header">
                      <span className="tech-row-num">{category.id}</span>
                      <div className="tech-row-main">
                        <h3 className="tech-row-title">{category.title}</h3>
                        <div className="tech-row-keywords">
                          {category.keywords.join(' • ')}
                        </div>
                      </div>
                      <div className="tech-row-arrow" aria-hidden="true">&rarr;</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Ecosystem Bar */}
        <div className={`tech-ecosystem ${isVisible ? 'animate-fade' : ''}`} style={{ animationDelay: '0.4s' }} aria-hidden="true">
          <div className="eco-flow">
            <div className="eco-item"><span className="eco-label">AI ENGINE</span></div>
            <div className="eco-line"></div>
            <div className="eco-item"><span className="eco-label">SPRING BOOT / JAVA</span></div>
            <div className="eco-line"></div>
            <div className="eco-item"><span className="eco-label">PYTHON &bull; RAG</span></div>
            <div className="eco-line"></div>
            <div className="eco-item"><span className="eco-label">REACT / NEXT.JS</span></div>
            <div className="eco-line"></div>
            <div className="eco-item"><span className="eco-label">DOCKER &bull; K8S</span></div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className={`tech-footer ${isVisible ? 'animate-up' : ''}`} style={{ animationDelay: '0.6s' }}>
          <div className="tech-footer-statement">
            Technology is the foundation. Engineering precision is the difference.
          </div>
        </div>

      </div>
    </section>
  );
};

export default Technology;
