import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

// ============================================================================
// 1. PHILOSOPHY PANELS DATA
// ============================================================================
const philosophyData = [
  {
    id: "01",
    title: "UNDERSTAND THE PROBLEM",
    quote: "We start with the challenge, not the technology.",
    desc: "Before writing code, we dive deep into your operational bottlenecks, data structures, and user workflows to define the exact challenge that needs solving.",
    tags: ["Problem Discovery", "Workflow Mapping", "Requirements Analysis"],
    codeSnippet: "// Phase 1: Problem Definition\nconst challenge = analyzeUserWorkflow(inputData);\nassert(challenge.isRootCause === true);"
  },
  {
    id: "02",
    title: "ENGINEER THE SYSTEM",
    quote: "We design software around reliability, usability and scale.",
    desc: "We construct modular microservices, clean API gateways, and high-throughput backend infrastructure that perform flawlessly under enterprise workloads.",
    tags: ["System Architecture", "Microservices", "Clean Code"],
    codeSnippet: "// Phase 2: System Architecture\nconst system = new EnterpriseArchitecture({\n  reliability: '99.99%',\n  scaling: 'AutoKubernetes'\n});"
  },
  {
    id: "03",
    title: "ADD INTELLIGENCE",
    quote: "We apply AI and automation where they create real value.",
    desc: "We integrate pragmatic artificial intelligence, RAG vector retrieval, and autonomous agents only where they measurably eliminate manual effort.",
    tags: ["Generative AI", "RAG Systems", "Autonomous Agents"],
    codeSnippet: "// Phase 3: Intelligent Augmentation\nconst aiLayer = new RAGEngine({ vectorStore: 'Pinecone' });\nconst outcome = await aiLayer.synthesize(context);"
  }
];

// ============================================================================
// 2. FROM IDEA TO SYSTEM STAGES DATA
// ============================================================================
const stagesData = [
  {
    id: "stage-idea",
    name: "IDEA",
    sub: "Opportunity",
    desc: "An opportunity waiting to become a product.",
    details: "Every groundbreaking digital solution begins with a bold concept or strategic vision to capture market value.",
    icon: "💡"
  },
  {
    id: "stage-problem",
    name: "PROBLEM",
    sub: "Real Challenge",
    desc: "The real-world challenge that needs solving.",
    details: "Isolating friction points, scattered data silos, and manual operational delays before engineering a solution.",
    icon: "🎯"
  },
  {
    id: "stage-arch",
    name: "ARCHITECTURE",
    sub: "Foundation",
    desc: "The technical foundation behind the solution.",
    details: "Designing scalable database schemas, microservice boundaries, security encryption, and cloud deployments.",
    icon: "🏗️"
  },
  {
    id: "stage-software",
    name: "SOFTWARE",
    sub: "Application",
    desc: "The applications and systems users interact with.",
    details: "Building responsive, modern web/mobile interfaces and robust REST/gRPC backend APIs.",
    icon: "💻"
  },
  {
    id: "stage-intel",
    name: "INTELLIGENCE",
    sub: "AI & Automation",
    desc: "AI, automation and data where they create value.",
    details: "Embedding LLM models, vector search, predictive analytics, and workflow automation agents.",
    icon: "🧠"
  },
  {
    id: "stage-product",
    name: "PRODUCT",
    sub: "Usable Solution",
    desc: "A usable solution built around people and workflows.",
    details: "Deploying an intuitive, high-performance product tailored directly to user needs and business operations.",
    icon: "🚀"
  },
  {
    id: "stage-scale",
    name: "SCALE",
    sub: "Continuous Growth",
    desc: "Infrastructure designed to grow with demand.",
    details: "Auto-scaling Kubernetes clusters, multi-region database failover, and zero-downtime releases.",
    icon: "📈"
  }
];

// ============================================================================
// 3. WHAT POWERS SOFTIVAX (INTERACTIVE OPERATING SYSTEM)
// ============================================================================
const osNodesData = [
  {
    id: "software",
    label: "SOFTWARE",
    icon: "💻",
    description: "Web • Applications • APIs • Enterprise Systems",
    summary: "Modern web applications, high-throughput microservice APIs, and custom enterprise software platforms built for reliability and speed."
  },
  {
    id: "ai",
    label: "AI",
    icon: "🧠",
    description: "Generative AI • LLMs • RAG • AI Agents",
    summary: "Pragmatic machine learning, vector retrieval engines, and autonomous reasoning agents embedded directly into business workflows."
  },
  {
    id: "automation",
    label: "AUTOMATION",
    icon: "⚡",
    description: "Workflows • Integrations • Intelligent Processes",
    summary: "Event-driven process orchestration replacing multi-step manual data entry and approval bottlenecks across systems."
  },
  {
    id: "data",
    label: "DATA",
    icon: "📊",
    description: "Analytics • Intelligence • Data Systems",
    summary: "Unified data pipelines, vector databases, and real-time telemetry transforming raw data into actionable decision intelligence."
  },
  {
    id: "cloud",
    label: "CLOUD",
    icon: "☁️",
    description: "Infrastructure • Containers • Deployment • Scalability",
    summary: "Resilient Cloud Infrastructure-as-Code, Kubernetes container orchestration, CI/CD pipelines, and zero-downtime releases."
  },
  {
    id: "products",
    label: "PRODUCTS",
    icon: "🚀",
    description: "Digital Platforms • Business Applications • Customer Experiences",
    summary: "Scalable, user-centric software products engineered to drive operational excellence and enterprise growth."
  }
];

// ============================================================================
// 4. WHY SOFTIVAX PRINCIPLES DATA
// ============================================================================
const principlesData = [
  {
    number: "01",
    title: "PURPOSE",
    subtitle: "Every system starts with a real problem.",
    description: "We don't write code for technology's sake. Every feature, database schema, and AI model exists to solve a verified operational challenge."
  },
  {
    number: "02",
    title: "CLARITY",
    subtitle: "Complex technology should create simple experiences.",
    description: "Behind our sleek user interfaces sits sophisticated engineering, making complex enterprise tasks feel effortless for users."
  },
  {
    number: "03",
    title: "INTELLIGENCE",
    subtitle: "AI should solve problems, not exist for decoration.",
    description: "We deploy artificial intelligence only where it generates measurable ROI, accuracy improvements, and time savings."
  },
  {
    number: "04",
    title: "EVOLUTION",
    subtitle: "Good software should keep getting better.",
    description: "Our modular architecture allows applications to adapt, integrate new AI capabilities, and scale seamlessly as your business grows."
  }
];

// ============================================================================
// MAIN ABOUT COMPONENT
// ============================================================================
const About = () => {
  const navigate = useNavigate();
  
  // Interactive States
  const [activePhilosophyIndex, setActivePhilosophyIndex] = useState(0);
  const [activeStageId, setActiveStageId] = useState("stage-idea");
  const [activeOSNodeId, setActiveOSNodeId] = useState("software");
  
  // Mouse Parallax for Hero
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroCardRef = useRef(null);
  const philosophySectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!heroCardRef.current) return;
    const rect = heroCardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const scrollToPhilosophy = () => {
    if (philosophySectionRef.current) {
      philosophySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentStage = stagesData.find(s => s.id === activeStageId) || stagesData[0];
  const currentOSNode = osNodesData.find(n => n.id === activeOSNodeId) || osNodesData[0];

  return (
    <div className="about-wow-experience">
      
      {/* ===================================================================
          1. CINEMATIC ABOUT HERO
          =================================================================== */}
      <section className="abt-hero-section" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <div className="abt-container">
          <div className="abt-hero-grid">
            
            {/* Hero Left Content */}
            <div className="abt-hero-left">
              <div className="abt-eyebrow-badge">
                <span className="badge-pulse"></span>
                ABOUT SOFTIVAX
              </div>
              
              <h1 className="abt-hero-headline">
                WE DON'T JUST<br />
                BUILD SOFTWARE.<br />
                <span className="gold-gradient-text">WE BUILD WHAT'S NEXT.</span>
              </h1>

              <p className="abt-hero-subtext">
                SoftivaX combines software engineering, artificial intelligence, automation and modern infrastructure to transform complex ideas into practical digital products.
              </p>

              <div className="abt-hero-buttons">
                <button className="btn-primary-new btn-hero" onClick={scrollToPhilosophy}>
                  Explore Our Thinking <span className="arrow-icon">→</span>
                </button>

                <button className="btn-secondary-new btn-hero" onClick={() => navigate('/contact')}>
                  Start a Project <span className="arrow-icon">→</span>
                </button>
              </div>
            </div>

            {/* Hero Right Command Center Visual */}
            <div className="abt-hero-right">
              <div 
                className="abt-command-center-card" 
                ref={heroCardRef}
                style={{
                  transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`
                }}
              >
                <div className="command-bar">
                  <div className="command-dots">
                    <span className="dot dot-close"></span>
                    <span className="dot dot-min"></span>
                    <span className="dot dot-max"></span>
                  </div>
                  <div className="command-title">SoftivaX Digital Engineering System &bull; IDE v4.2</div>
                  <div className="command-status">
                    <span className="live-dot"></span> LIVE
                  </div>
                </div>

                <div className="command-body">
                  <div className="code-editor-header">
                    <span className="file-tab active">SoftivaXCore.ts</span>
                    <span className="file-tab">RAGEngine.py</span>
                    <span className="file-tab">Cluster.yaml</span>
                  </div>

                  <div className="code-editor-lines">
                    <div className="code-line"><span className="ln">01</span><span className="kw">import</span> &#123; SystemEngine, AIReasoning &#125; <span className="kw">from</span> <span className="str">'@softivax/core'</span>;</div>
                    <div className="code-line"><span className="ln">02</span></div>
                    <div className="code-line"><span className="ln">03</span><span className="cmt">// Initialize Enterprise Engineering Pipeline</span></div>
                    <div className="code-line"><span className="ln">04</span><span className="kw">const</span> softivaxSystem = <span className="kw">new</span> SystemEngine(&#123;</div>
                    <div className="code-line"><span className="ln">05</span>  reliability: <span className="str">'99.99%'</span>,</div>
                    <div className="code-line"><span className="ln">06</span>  aiEngine: <span className="kw">new</span> AIReasoning(&#123; mode: <span className="str">'RAG_Autonomous'</span> &#125;),</div>
                    <div className="code-line"><span className="ln">07</span>  cloud: <span className="str">'Kubernetes_AutoScaler'</span></div>
                    <div className="code-line"><span className="ln">08</span>&#125;);</div>
                    <div className="code-line"><span className="ln">09</span></div>
                    <div className="code-line"><span className="ln">10</span><span className="kw">await</span> softivaxSystem.deployIntelligentPlatform();</div>
                  </div>

                  <div className="command-metrics-grid">
                    <div className="metric-box">
                      <span className="m-label">SYS LATENCY</span>
                      <span className="m-val text-green">14ms</span>
                    </div>
                    <div className="metric-box">
                      <span className="m-label">AI RAG INDEX</span>
                      <span className="m-val text-gold">ACTIVE</span>
                    </div>
                    <div className="metric-box">
                      <span className="m-label">CONTAINERS</span>
                      <span className="m-val text-blue">24/24 HEALTHY</span>
                    </div>
                  </div>
                </div>

                <div className="floating-system-badge">
                  <span className="badge-glow-dot"></span>
                  SOFTIVAX DIGITAL ENGINEERING SYSTEM
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================================================
          2. "THE IDEA" SECTION
          =================================================================== */}
      <section className="abt-idea-section">
        <div className="abt-container">
          
          <div className="idea-statement-box">
            <h2 className="idea-big-text">
              Technology is everywhere.<br />
              <span className="gold-glow">The right technology changes everything.</span>
            </h2>
            <p className="idea-sub-text">
              SoftivaX exists to turn difficult business problems into elegant digital systems.
            </p>
          </div>

          <div className="idea-visual-showcase">
            <div className="idea-showcase-window">
              <div className="showcase-bar">
                <span className="showcase-dot"></span>
                <span className="showcase-title">SoftivaX System Architecture &bull; Problem to Solution Transformation</span>
              </div>
              
              <div className="showcase-content">
                <div className="showcase-card sc-left">
                  <div className="sc-icon">⚠️</div>
                  <div className="sc-title">UNSTRUCTURED CHALLENGE</div>
                  <p className="sc-desc">Manual workflows, fragmented business data, and slow legacy processes.</p>
                </div>

                <div className="showcase-divider-flow">
                  <div className="flow-pulse"></div>
                  <span className="flow-arrow">➔</span>
                </div>

                <div className="showcase-card sc-center">
                  <div className="sc-icon">⚡</div>
                  <div className="sc-title">SOFTIVAX ENGINEERING</div>
                  <p className="sc-desc">Clean architecture, microservices, and pragmatic artificial intelligence.</p>
                </div>

                <div className="showcase-divider-flow">
                  <div className="flow-pulse"></div>
                  <span className="flow-arrow">➔</span>
                </div>

                <div className="showcase-card sc-right">
                  <div className="sc-icon">✨</div>
                  <div className="sc-title">INTELLIGENT SYSTEM</div>
                  <p className="sc-desc">Unified digital product with 24/7 automation and sub-second performance.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===================================================================
          3. THE SOFTIVAX PHILOSOPHY
          =================================================================== */}
      <section className="abt-philosophy-section" ref={philosophySectionRef}>
        <div className="abt-container">
          
          <div className="section-head-center">
            <div className="abt-eyebrow-text">ENGINEERING METHODOLOGY</div>
            <h2 className="section-main-title">WE BUILD WITH INTENTION.</h2>
          </div>

          <div className="philosophy-panels-grid">
            {philosophyData.map((item, index) => {
              const isActive = activePhilosophyIndex === index;
              return (
                <div 
                  key={item.id}
                  className={`philosophy-card ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setActivePhilosophyIndex(index)}
                  onClick={() => setActivePhilosophyIndex(index)}
                >
                  <div className="ph-number">{item.id}</div>
                  <h3 className="ph-title">{item.title}</h3>
                  <div className="ph-quote">"{item.quote}"</div>
                  <p className="ph-desc">{item.desc}</p>
                  
                  <div className="ph-tags">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="ph-tag">{tag}</span>
                    ))}
                  </div>

                  {isActive && (
                    <div className="ph-active-bar">
                      <div className="active-line-gold"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================
          4. INTERACTIVE "FROM IDEA TO SYSTEM" (ARCHITECTURE JOURNEY)
          =================================================================== */}
      <section className="abt-journey-section">
        <div className="abt-container">
          
          <div className="section-head-center">
            <div className="abt-eyebrow-text">SYSTEM EVOLUTION</div>
            <h2 className="section-main-title">FROM IDEA TO INTELLIGENT SYSTEM.</h2>
            <p className="section-sub-text">
              Hover or click any stage of the architecture pipeline to see how SoftivaX transforms concepts into enterprise platforms.
            </p>
          </div>

          <div className="journey-interactive-layout">
            
            {/* Stage Pipeline Selector Nodes */}
            <div className="journey-pipeline-stepper">
              {stagesData.map((stage, idx) => {
                const isActive = activeStageId === stage.id;
                const isLast = idx === stagesData.length - 1;
                return (
                  <React.Fragment key={stage.id}>
                    <button
                      className={`journey-step-node ${isActive ? 'active' : ''}`}
                      onMouseEnter={() => setActiveStageId(stage.id)}
                      onClick={() => setActiveStageId(stage.id)}
                    >
                      <span className="step-num">0{idx + 1}</span>
                      <span className="step-icon">{stage.icon}</span>
                      <span className="step-name">{stage.name}</span>
                    </button>

                    {!isLast && (
                      <div className="pipeline-connector">
                        <div className="conn-pulse"></div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Selected Stage Explanation Inspector */}
            <div className="journey-stage-inspector">
              <div className="inspector-badge">STAGE DETAIL • {currentStage.name}</div>
              <h3 className="inspector-stage-title">
                {currentStage.icon} {currentStage.name} — <span className="sub">{currentStage.sub}</span>
              </h3>
              <div className="inspector-desc-quote">
                "{currentStage.desc}"
              </div>
              <p className="inspector-details">
                {currentStage.details}
              </p>

              <div className="inspector-meta-row">
                <span className="meta-tag">✦ Phase Outputs: System Schemas, Verification Audits, & Code Deployment</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================
          5. "WHAT POWERS SOFTIVAX" (INTERACTIVE OPERATING SYSTEM)
          =================================================================== */}
      <section className="abt-os-section">
        <div className="abt-container">
          
          <div className="section-head-center">
            <div className="abt-eyebrow-text">CORE CAPABILITIES</div>
            <h2 className="section-main-title">WHAT POWERS SOFTIVAX</h2>
            <p className="section-sub-text">
              An interconnected technology operating system designed to deliver end-to-end digital solutions.
            </p>
          </div>

          <div className="os-cluster-canvas">
            
            {/* Center Core Node */}
            <div className="os-core-node">
              <div className="core-glow-ring"></div>
              <div className="core-title">SOFTIVAX</div>
              <div className="core-subtitle">SYSTEM CORE</div>
            </div>

            {/* Satellite Operating System Nodes */}
            <div className="os-satellites-grid">
              {osNodesData.map((node) => {
                const isActive = activeOSNodeId === node.id;
                return (
                  <div
                    key={node.id}
                    className={`os-satellite-card ${isActive ? 'active' : ''}`}
                    onMouseEnter={() => setActiveOSNodeId(node.id)}
                    onClick={() => setActiveOSNodeId(node.id)}
                  >
                    <div className="sat-icon">{node.icon}</div>
                    <h3 className="sat-label">{node.label}</h3>
                    <div className="sat-description">{node.description}</div>
                  </div>
                );
              })}
            </div>

            {/* Active Node Terminal Drawer */}
            <div className="os-terminal-card">
              <div className="terminal-header">
                <span className="term-dot"></span>
                <span className="term-title">OPERATING SYSTEM CONSOLE &bull; {currentOSNode.label} MODULE</span>
              </div>
              <div className="terminal-body">
                <div className="term-label-row">
                  <span className="term-icon">{currentOSNode.icon}</span>
                  <span className="term-name">{currentOSNode.label} CAPABILITY</span>
                </div>
                <p className="term-summary">{currentOSNode.summary}</p>
                <div className="term-tags">{currentOSNode.description}</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================
          6. THE "WHY" SECTION
          =================================================================== */}
      <section className="abt-why-section">
        <div className="abt-container">
          
          <div className="why-header">
            <div className="abt-eyebrow-text">OUR GUIDING PRINCIPLES</div>
            <h2 className="why-title">WHY SOFTIVAX?</h2>
            
            <div className="why-statement-quote">
              Because technology should<br />
              <span className="gold-text">make things simpler.</span><br />
              <span className="gold-text">Smarter.</span><br />
              <span className="gold-text">More capable.</span>
            </div>
          </div>

          <div className="why-principles-grid">
            {principlesData.map((item) => (
              <div key={item.number} className="why-card">
                <div className="why-card-header">
                  <span className="why-number">{item.number}</span>
                  <h3 className="why-card-title">{item.title}</h3>
                </div>
                <div className="why-subtitle">"{item.subtitle}"</div>
                <p className="why-desc">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================================
          7. SIGNATURE VISUAL SECTION
          =================================================================== */}
      <section className="abt-signature-section">
        <div className="abt-container">
          
          <div className="signature-card">
            <div className="signature-overlay-gradient"></div>
            
            <div className="signature-content">
              <div className="sig-badge">✦ SOFTIVAX SIGNATURE STATEMENT</div>
              
              <h2 className="sig-headline">
                THE FUTURE IS BUILT.<br />
                <span className="gold-gradient">NOT PREDICTED.</span>
              </h2>

              <p className="sig-text">
                We engineer scalable, intelligent digital infrastructure so your business doesn't just adapt to the future — it builds it.
              </p>

              <div className="sig-telemetry-bar">
                <div className="sig-tel-item">
                  <span className="tel-dot"></span>
                  <span className="tel-label">ARCHITECTURE:</span>
                  <span className="tel-val">Enterprise Modular</span>
                </div>
                <div className="sig-tel-item">
                  <span className="tel-dot"></span>
                  <span className="tel-label">SECURITY:</span>
                  <span className="tel-val">Zero-Trust Standard</span>
                </div>
                <div className="sig-tel-item">
                  <span className="tel-dot"></span>
                  <span className="tel-label">INTELLIGENCE:</span>
                  <span className="tel-val">RAG & AI Agent Ready</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================
          8. FINAL CTA
          =================================================================== */}
      <section className="abt-cta-section">
        <div className="abt-container">
          
          <div className="abt-cta-card">
            <h2 className="abt-cta-heading">
              READY TO BUILD<br />
              <span className="gold-text">WHAT'S NEXT?</span>
            </h2>

            <p className="abt-cta-paragraph">
              Whether you're starting something new, modernizing an existing system or exploring what AI can do for your business — let's build it together.
            </p>

            <div className="abt-cta-buttons">
              <button className="btn-primary-new btn-large" onClick={() => navigate('/contact')}>
                Start a Project <span className="arrow-icon">→</span>
              </button>

              <button className="btn-secondary-new btn-large" onClick={() => navigate('/solutions')}>
                Explore Solutions <span className="arrow-icon">→</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
