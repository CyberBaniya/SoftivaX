import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

// ============================================================================
// CATEGORY FILTER LIST
// ============================================================================
const categories = [
  "ALL",
  "AI & GENAI",
  "AI AGENTS",
  "CHATBOTS",
  "SOFTWARE",
  "WEB & E-COMMERCE",
  "MOBILE",
  "MACHINE LEARNING",
  "DEVOPS & CLOUD",
  "AUTOMATION",
  "DATA & ANALYTICS"
];

// ============================================================================
// 22 REALISTIC PROJECTS DATABASE
// ============================================================================
const projectsData = [
  // --- AI & GENAI ---
  {
    id: "proj-1",
    title: "AI Knowledge Assistant",
    category: "AI & GENAI",
    subTag: "AI / RAG",
    typeLabel: "DEMO PROJECT",
    description: "Enterprise knowledge assistant that allows users to search and interact with internal documents using RAG (Retrieval-Augmented Generation).",
    problem: "Employees spend hours searching across fragmented company documents, leading to delayed decisions and knowledge loss.",
    solution: "A natural language conversational interface powered by vector embeddings that retrieves exact document passages with page citations.",
    technologies: ["Python", "FastAPI", "LangChain", "OpenAI / Gemini", "Vector Database", "RAG"],
    features: [
      "Sub-50ms vector semantic search",
      "Multi-format document ingestion (PDF, DOCX, CSV)",
      "Role-based document access controls",
      "Inline citations with original PDF page previews"
    ],
    architecture: ["USER QUERY", "FASTAPI GATEWAY", "LANGCHAIN RAG", "VECTOR DB", "LLM SYNTHESIZER", "CITATION PREVIEW"],
    visualType: "chat"
  },
  {
    id: "proj-2",
    title: "Intelligent Document Intelligence Platform",
    category: "AI & GENAI",
    subTag: "DOCUMENT AI",
    typeLabel: "PRODUCT PROTOTYPE",
    description: "Upload documents, extract key structured information, index content and ask questions using an AI-powered knowledge layer.",
    problem: "Manual extraction of invoice, contract, and form data creates operational bottlenecks and human data entry errors.",
    solution: "OCR + LLM document pipeline that extracts key-value entities, structures JSON data, and indexes text for instant query analysis.",
    technologies: ["Python", "LLM", "Embeddings", "Vector Database", "RAG", "FastAPI"],
    features: [
      "Automated OCR & key-value entity extraction",
      "Custom JSON schema validation for invoices/contracts",
      "Semantic similarity clustering across thousands of files",
      "Real-time extraction status and confidence scoring"
    ],
    architecture: ["DOCUMENT UPLOAD", "OCR EXTRACTOR", "ENTITY PARSER", "EMBEDDINGS", "VECTOR DB", "ANALYTICS DASHBOARD"],
    visualType: "dashboard"
  },
  {
    id: "proj-3",
    title: "AI Resume Analyzer",
    category: "AI & GENAI",
    subTag: "NLP / AI",
    typeLabel: "DEMO PROJECT",
    description: "Analyze resumes against job descriptions, identify relevant skills and generate structured improvement suggestions.",
    problem: "HR teams spend excessive time manually filtering hundreds of resumes per job opening.",
    solution: "NLP analysis engine that scores candidate resumes, extracts core competencies, and generates unbiased matching reports.",
    technologies: ["Python", "LLM", "NLP", "FastAPI", "React"],
    features: [
      "Job description vs. candidate skill gap analysis",
      "Unbiased scoring based on verified technical metrics",
      "Automated summary generation for hiring managers",
      "Exportable candidate comparison reports"
    ],
    architecture: ["RESUME PDF", "NLP PARSER", "SKILL MATCHING", "LLM SCORING", "REACT DASHBOARD"],
    visualType: "analytics"
  },

  // --- AI AGENTS ---
  {
    id: "proj-4",
    title: "AI Research Agent",
    category: "AI AGENTS",
    subTag: "AUTONOMOUS AGENT",
    typeLabel: "CONCEPT",
    description: "An autonomous research workflow that searches multiple sources, analyzes information and produces a structured research report.",
    problem: "Market research requires manual web browsing, cross-referencing multiple articles, and synthesizing lengthy notes.",
    solution: "An autonomous multi-step agent that plans search strategies, calls web search tools, verifies facts, and writes comprehensive briefs.",
    technologies: ["Python", "LangGraph", "LLM APIs", "Web Search", "Agent Workflows"],
    features: [
      "Dynamic search query formulation & web scraping",
      "Source reliability verification & fact checking",
      "Automated report outline and markdown generation",
      "Human-in-the-loop approval step before final export"
    ],
    architecture: ["USER TOPIC", "AGENT PLANNER", "WEB SEARCH TOOL", "FACT CHECKER", "REPORT SYNTHESIZER"],
    visualType: "workflow"
  },
  {
    id: "proj-5",
    title: "Multi-Agent Business Assistant",
    category: "AI AGENTS",
    subTag: "MULTI-AGENT",
    typeLabel: "REFERENCE ARCHITECTURE",
    description: "Multiple specialized agents collaborate to handle research, planning, analysis and task execution.",
    problem: "Complex operations like financial planning require diverse domain skillsets operating in tandem.",
    solution: "A multi-agent state machine (LangGraph) where specialized Researcher, Analyst, and Writer agents collaborate asynchronously.",
    technologies: ["LangGraph", "Python", "LLM APIs", "Tool Calling", "Agent Workflows"],
    features: [
      "Asynchronous inter-agent messaging and state memory",
      "Specialized agent roles: Analyst, Coder, Reviewer, Coordinator",
      "Tool integration for SQL execution and web lookup",
      "Full execution trace visualization and error recovery"
    ],
    architecture: ["COORDINATOR AGENT", "RESEARCH AGENT", "ANALYST AGENT", "WRITER AGENT", "FINAL SYSTEM ACTION"],
    visualType: "workflow"
  },
  {
    id: "proj-6",
    title: "AI Customer Support Agent",
    category: "AI AGENTS",
    subTag: "AGENT / SUPPORT",
    typeLabel: "DEMO PROJECT",
    description: "AI support agent that understands customer questions, retrieves relevant knowledge and generates contextual responses.",
    problem: "High support ticket volumes cause customer dissatisfaction and high representative turnover.",
    solution: "Autonomous support agent that inspects order status via APIs, queries help desk FAQs, and resolves routine customer tickets.",
    technologies: ["LLM", "RAG", "LangChain", "FastAPI", "Vector Database"],
    features: [
      "Real-time CRM & Order history database lookup",
      "Sentiment analysis & automatic live agent handoff",
      "Multi-lingual customer response generation",
      "Omni-channel API support for Web, Mobile, and WhatsApp"
    ],
    architecture: ["CUSTOMER MESSAGE", "INTENT CLASSIFIER", "CRM API LOOKUP", "RAG POLICY DB", "AI RESPONSE"],
    visualType: "chat"
  },

  // --- CHATBOTS ---
  {
    id: "proj-7",
    title: "Enterprise Support Chatbot",
    category: "CHATBOTS",
    subTag: "ENTERPRISE CHAT",
    typeLabel: "DEMO PROJECT",
    description: "Context-aware chatbot for company knowledge, FAQs and internal IT support.",
    problem: "Internal IT helpdesks are overwhelmed by repetitive password reset and software access questions.",
    solution: "An internal Slack/Web chatbot connected to IT knowledge bases and active directory tools.",
    technologies: ["Python", "FastAPI", "RAG", "LLM", "Vector Database"],
    features: [
      "Integration with Slack and Microsoft Teams",
      "Automated IT ticket creation for complex issues",
      "Strict data privacy and internal ACL compliance",
      "Instant resolution for 70%+ of routine IT queries"
    ],
    architecture: ["EMPLOYEE CHAT", "API GATEWAY", "IT KNOWLEDGE RAG", "LLM CORE", "RESOLUTION ACTION"],
    visualType: "chat"
  },
  {
    id: "proj-8",
    title: "Medical Knowledge Chatbot",
    category: "CHATBOTS",
    subTag: "EDUCATIONAL DEMO",
    typeLabel: "DEMO / EDUCATIONAL PROJECT",
    description: "Document-based AI assistant that answers questions from uploaded medical reference documents. Presented strictly for educational purposes (no medical diagnosis claims).",
    problem: "Medical researchers and students struggle to navigate complex clinical reference manuals efficiently.",
    solution: "A specialized RAG research chatbot indexing peer-reviewed literature with precise page citations for study.",
    technologies: ["Python", "Streamlit", "LangChain", "FAISS", "LLM"],
    features: [
      "Strict grounding in uploaded clinical research papers",
      "Inline citation mapping directly to paper DOIs",
      "Prominent medical disclaimer & safety guardrails",
      "Interactive Streamlit research dashboard"
    ],
    architecture: ["RESEARCH MANUALS", "FAISS INDEX", "STREAMLIT UI", "RAG RETRIEVAL", "ACADEMIC SUMMARY"],
    visualType: "analytics"
  },
  {
    id: "proj-9",
    title: "E-Commerce Shopping Assistant",
    category: "CHATBOTS",
    subTag: "COMMERCE AI",
    typeLabel: "PRODUCT PROTOTYPE",
    description: "Conversational shopping assistant that helps users discover products and navigate an e-commerce catalog.",
    problem: "Shoppers abandon carts when they can't quickly find specific items matching complex criteria.",
    solution: "AI shopping guide that understands natural language queries like 'find lightweight running shoes under $120' and recommends items.",
    technologies: ["LLM", "RAG", "REST APIs", "React", "Spring Boot"],
    features: [
      "Conversational product filtering and comparison",
      "Real-time inventory and pricing synchronization",
      "Personalized recommendations based on cart contents",
      "One-click add to cart from conversational UI"
    ],
    architecture: ["USER PROMPT", "REACT WIDGET", "SPRING BOOT API", "PRODUCT VECTOR INDEX", "RECOMMENDED ITEMS"],
    visualType: "commerce"
  },

  // --- SOFTWARE & E-COMMERCE ---
  {
    id: "proj-10",
    title: "Multi-Vendor E-Commerce Platform",
    category: "WEB & E-COMMERCE",
    subTag: "ENTERPRISE SOFTWARE",
    typeLabel: "REFERENCE ARCHITECTURE",
    description: "A complete marketplace platform supporting customers, vendors, products, orders and administration.",
    problem: "Legacy single-vendor stores fail to support multi-seller fulfillment, vendor commissions, and complex payouts.",
    solution: "A modular Spring Boot microservice backend with separate Customer, Vendor, Admin, and Payment management portals.",
    technologies: ["Java", "Spring Boot", "Spring Data JPA", "REST APIs", "MySQL", "React"],
    features: [
      "Independent Vendor Management Console & Storefronts",
      "Automated Stripe Connect multi-seller payout routing",
      "High-speed product catalog search with caching",
      "Full order lifecycle tracking & admin analytics"
    ],
    architecture: ["CUSTOMER / VENDOR UI", "SPRING GATEWAY", "ORDER SERVICE", "PRODUCT SERVICE", "MYSQL DB", "STRIPE API"],
    visualType: "commerce"
  },
  {
    id: "proj-11",
    title: "Enterprise Employee Management System",
    category: "SOFTWARE",
    subTag: "ENTERPRISE HR",
    typeLabel: "DEMO PROJECT",
    description: "Employee management platform with authentication, roles, departments and employee lifecycle management.",
    problem: "Fragmented HR tools make tracking employee promotions, department transfers, and performance audits chaotic.",
    solution: "Unified enterprise HR portal with fine-grained role-based security, department hierarchies, and audit logging.",
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "React"],
    features: [
      "Spring Security JWT & OAuth2 role authorization",
      "Interactive department hierarchy org chart",
      "Automated onboarding checklist & document vault",
      "Performance evaluation audit trail"
    ],
    architecture: ["REACT ADMIN UI", "SPRING SECURITY", "HR CONTROLLER", "POSTGRESQL DB", "AUDIT LOG ENGINE"],
    visualType: "dashboard"
  },
  {
    id: "proj-12",
    title: "Online E-Voting Platform",
    category: "SOFTWARE",
    subTag: "SECURE WEB APP",
    typeLabel: "CONCEPT",
    description: "Secure web-based voting platform with user management, election workflows and result management.",
    problem: "Traditional institutional elections suffer from low turnout, manual counting delays, and security concerns.",
    solution: "An encrypted web platform featuring voter identity verification, anonymous cryptographic ballot casting, and instant tallying.",
    technologies: ["Java", "Spring Boot", "REST APIs", "MySQL", "React"],
    features: [
      "Cryptographic voter token generation & verification",
      "Zero-knowledge ballot secrecy protocol",
      "Real-time election countdown & live result charts",
      "Immutable audit log for election scrutiny"
    ],
    architecture: ["VOTER INTERFACE", "AUTH SERVICE", "VOTING ENGINE", "CRYPTO HASHER", "MYSQL DB"],
    visualType: "dashboard"
  },

  // --- DEVOPS & CLOUD ---
  {
    id: "proj-13",
    title: "Microservices Deployment Platform",
    category: "DEVOPS & CLOUD",
    subTag: "DEVOPS / KUBERNETES",
    typeLabel: "REFERENCE ARCHITECTURE",
    description: "Containerized microservices architecture deployed through an API gateway, service discovery and supporting infrastructure.",
    problem: "Monolithic applications become slow to deploy, hard to scale, and risk entire system outages during high traffic.",
    solution: "Decoupled microservice architecture running on Docker and Kubernetes with automated service discovery and rate limiting.",
    technologies: ["Java", "Spring Boot", "Microservices", "Docker", "Kubernetes", "API Gateway", "Service Discovery"],
    features: [
      "API Gateway routing & distributed authentication",
      "Eureka / Kubernetes service discovery cluster",
      "Docker container packaging & vulnerability scans",
      "Resilient Circuit Breaker (Resilience4j) pattern"
    ],
    architecture: ["API GATEWAY", "SERVICE DISCOVERY", "PRODUCT MICROSERVICE", "ORDER MICROSERVICE", "DOCKER", "KUBERNETES"],
    visualType: "terminal"
  },
  {
    id: "proj-14",
    title: "CI/CD Automation Pipeline",
    category: "DEVOPS & CLOUD",
    subTag: "CI/CD / DEVOPS",
    typeLabel: "REFERENCE ARCHITECTURE",
    description: "Automated software delivery pipeline for building, testing, scanning and deploying applications with zero downtime.",
    problem: "Manual deployment steps cause production downtime, unvetted bugs, and delayed feature releases.",
    solution: "An automated GitHub Actions workflow that runs automated tests, security audits, builds Docker images, and deploys to Kubernetes.",
    technologies: ["Git", "GitHub Actions", "Docker", "CI/CD", "Linux", "Cloud"],
    features: [
      "Automated unit testing & SonarQube code quality gate",
      "Container vulnerability scanning with Trivy",
      "Automated Docker image tag push to Container Registry",
      "Zero-downtime rolling deployment to cloud cluster"
    ],
    architecture: ["GIT COMMIT", "GITHUB ACTIONS", "BUILD & TEST", "DOCKER BUILD", "REGISTRY PUSH", "K8S DEPLOY", "MONITORING"],
    visualType: "terminal"
  },
  {
    id: "proj-15",
    title: "Kubernetes Application Platform",
    category: "DEVOPS & CLOUD",
    subTag: "CLOUD / K8S",
    typeLabel: "REFERENCE ARCHITECTURE",
    description: "Container orchestration environment for deploying and scaling application services across multi-node clusters.",
    problem: "Managing dozens of bare-metal containers manually leads to resource waste and scaling failures.",
    solution: "Production Kubernetes cluster configuration with ingress controllers, horizontal pod autoscalers, and Prometheus monitoring.",
    technologies: ["Docker", "Kubernetes", "Linux", "Ingress", "Services", "Containers"],
    features: [
      "Horizontal Pod Autoscaling (HPA) based on CPU/RAM load",
      "NGINX Ingress Controller with SSL termination",
      "Persistent Volume Claim (PVC) database storage management",
      "Self-healing automatic pod restart policy"
    ],
    architecture: ["INGRESS CONTROLLER", "K8S SERVICES", "POD REPLICAS", "HPA AUTOSCALER", "PROMETHEUS METRICS"],
    visualType: "cloud"
  },
  {
    id: "proj-16",
    title: "Cloud Infrastructure Architecture",
    category: "DEVOPS & CLOUD",
    subTag: "AWS / CLOUD",
    typeLabel: "REFERENCE ARCHITECTURE",
    description: "Reference cloud architecture showing application, database, networking, security and monitoring layers.",
    problem: "Unstructured cloud setups suffer from security breaches, high AWS monthly bills, and single point of failures.",
    solution: "Multi-AZ Virtual Private Cloud (VPC) blueprint with isolated public/private subnets, load balancing, and Terraform IaC.",
    technologies: ["AWS / Azure / GCP", "Docker", "Linux", "Nginx", "CI/CD"],
    features: [
      "Multi-Availability Zone deployment for 99.99% uptime",
      "Private subnets for RDS databases and backend workers",
      "Application Load Balancer (ALB) traffic distribution",
      "CloudWatch centralized log aggregation and alerts"
    ],
    architecture: ["ROUTE 53 DNS", "ALB LOAD BALANCER", "PUBLIC SUBNETS", "PRIVATE WORKER SUBNETS", "RDS MULTI-AZ DB"],
    visualType: "cloud"
  },

  // --- MACHINE LEARNING ---
  {
    id: "proj-17",
    title: "Predictive Analytics Platform",
    category: "MACHINE LEARNING",
    subTag: "ML / PREDICTIVE",
    typeLabel: "DEMO PROJECT",
    description: "Machine learning platform for analyzing historical business data and generating predictive trend forecasts.",
    problem: "Executive teams rely on stale static reports rather than predictive insights for inventory and revenue planning.",
    solution: "Scikit-Learn regression and time-series model pipeline exposed via FastAPI microservice to feed interactive analytics dashboards.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "FastAPI"],
    features: [
      "Automated feature engineering & data cleaning pipeline",
      "Time-series forecasting for revenue and customer churn",
      "REST API endpoint for real-time model inference",
      "Interactive confidence interval visualization"
    ],
    architecture: ["HISTORICAL DATA", "FEATURE PIPELINE", "SCIKIT-LEARN MODEL", "FASTAPI INFERENCE", "REACT DASHBOARD"],
    visualType: "analytics"
  },
  {
    id: "proj-18",
    title: "Recommendation Engine",
    category: "MACHINE LEARNING",
    subTag: "ML / RECSYS",
    typeLabel: "CONCEPT",
    description: "Recommendation system that analyzes user and product interactions to generate personalized item recommendations.",
    problem: "Generic product displays result in low cross-sell conversion rates on e-commerce stores.",
    solution: "Collaborative filtering + content-based ML model that generates personalized product recommendations per user session.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "REST API"],
    features: [
      "Matrix factorization & user similarity scoring",
      "Real-time session item affinity updating",
      "Cold-start algorithm for new store users",
      "A/B testing analytics for recommendation conversion"
    ],
    architecture: ["USER BEHAVIOR LOGS", "FEATURE STORE", "COLLABORATIVE FILTERING", "INFERENCE API", "STOREFRONT WIDGET"],
    visualType: "analytics"
  },
  {
    id: "proj-19",
    title: "Anomaly Detection System",
    category: "MACHINE LEARNING",
    subTag: "ML / ANOMALY",
    typeLabel: "DEMO PROJECT",
    description: "Machine learning system designed to identify unusual patterns and fraudulent activity in operational data streams.",
    problem: "Manual auditing misses subtle fraud patterns in high-volume transaction streams.",
    solution: "Isolation Forest and Autoencoder ML models processing incoming transaction events in real time to flag anomalies.",
    technologies: ["Python", "Pandas", "Scikit-learn", "ML Models", "FastAPI"],
    features: [
      "Real-time streaming telemetry analysis",
      "Unsupervised Isolation Forest outlier detection",
      "Automated alert dispatch to risk management team",
      "Historical anomaly cluster visualization"
    ],
    architecture: ["STREAMING EVENT", "FASTAPI GATEWAY", "ISOLATION FOREST", "ANOMALY SCORER", "RISK DASHBOARD"],
    visualType: "analytics"
  },

  // --- AUTOMATION ---
  {
    id: "proj-20",
    title: "Intelligent Workflow Automation",
    category: "AUTOMATION",
    subTag: "WORKFLOW AI",
    typeLabel: "PRODUCT PROTOTYPE",
    description: "Automates repetitive business workflows using APIs, rules and AI-assisted decision steps.",
    problem: "Employees spend hours manually copying data between legacy ERPs, CRMs, and email spreadsheets.",
    solution: "An event-driven workflow engine with visual node connectors that executes multi-step data tasks automatically.",
    technologies: ["Python", "FastAPI", "REST APIs", "LLM", "Workflow Automation"],
    features: [
      "Drag-and-drop workflow node orchestrator UI",
      "Bi-directional connectors for CRMs, ERPs, and DBs",
      "Conditional AI decision gates (e.g. LLM verification)",
      "Automatic retry queues and failure notification alerts"
    ],
    architecture: ["EVENT TRIGGER", "WORKFLOW ENGINE", "AI DECISION GATE", "SYSTEM CONNECTORS", "COMPLETED ACTION"],
    visualType: "workflow"
  },
  {
    id: "proj-21",
    title: "Document Processing Automation",
    category: "AUTOMATION",
    subTag: "RPA / OCR",
    typeLabel: "DEMO PROJECT",
    description: "Automated workflow for receiving documents, extracting information, validating data and routing results.",
    problem: "Supplier invoices and POs arriving via email require manual verification before payment processing.",
    solution: "Email ingestion bot that extracts attachments, runs OCR & LLM validation, and posts formatted invoices directly to accounting APIs.",
    technologies: ["Python", "OCR", "LLM", "APIs", "Automation"],
    features: [
      "Automated inbox monitoring for PDF attachments",
      "High-accuracy OCR parsing & invoice table extraction",
      "Matching against PO database records",
      "Direct API posting to QuickBooks / SAP ERP"
    ],
    architecture: ["EMAIL INBOX", "OCR ENGINE", "LLM VALIDATOR", "ACCOUNTING API", "ERP AUDIT LOG"],
    visualType: "workflow"
  },

  // --- DATA & ANALYTICS ---
  {
    id: "proj-22",
    title: "Business Intelligence Dashboard",
    category: "DATA & ANALYTICS",
    subTag: "BI & DATA",
    typeLabel: "PRODUCT PROTOTYPE",
    description: "Interactive analytics platform that transforms raw business data into actionable executive dashboards.",
    problem: "Leadership lacks real-time visibility into cross-departmental KPIs, revenue metrics, and operational performance.",
    solution: "A unified data warehouse pipeline feeding real-time React analytics dashboards with custom filtering and charting.",
    technologies: ["Python", "SQL", "Data Processing", "Analytics", "React"],
    features: [
      "SQL data aggregation & ETL processing pipelines",
      "Real-time interactive KPI metric cards & charts",
      "Role-based view customization for executives",
      "Scheduled automated PDF report email dispatch"
    ],
    architecture: ["DATA SOURCES", "ETL PIPELINE", "DATA WAREHOUSE", "ANALYTICS ENGINE", "EXECUTIVE DASHBOARD"],
    visualType: "analytics"
  }
];

// ============================================================================
// MAIN PROJECTS COMPONENT
// ============================================================================
const Projects = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Filter Projects
  const filteredProjects = selectedCategory === "ALL" 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  const openProjectModal = (project) => {
    setActiveModalProject(project);
  };

  const closeProjectModal = () => {
    setActiveModalProject(null);
  };

  return (
    <div className="projects-page-experience">
      
      {/* ===================================================================
          1. PROJECTS HERO
          =================================================================== */}
      <section className="prj-hero-section">
        <div className="prj-container">
          <div className="prj-hero-content">
            
            <div className="prj-eyebrow">
              <span className="badge-pulse"></span>
              SELECTED PROJECTS
            </div>

            <h1 className="prj-hero-title">
              Ideas Turned Into<br />
              <span className="gold-text-glow">Working Systems.</span>
            </h1>

            <p className="prj-hero-sub">
              Explore a collection of software, AI, automation and infrastructure projects representing the kind of systems SoftivaX can design and build.
            </p>

            <div className="prj-hero-cta">
              <button className="btn-primary-new btn-large" onClick={() => navigate('/contact')}>
                Start a Project <span className="arrow-icon">→</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================================================
          2. FEATURED PROJECT (TOP HIGHLIGHT)
          =================================================================== */}
      <section className="prj-featured-section">
        <div className="prj-container">
          
          <div className="featured-card-wrapper">
            <div className="featured-header-badge">
              <span className="feat-star">★</span> FEATURED PROJECT &bull; DEMO / REFERENCE ARCHITECTURE
            </div>

            <div className="featured-content-grid">
              <div className="featured-left-info">
                <span className="feat-category">AI & GENAI / SOFTWARE / CLOUD</span>
                <h2 className="feat-title">AI + Enterprise Software Platform</h2>
                <p className="feat-desc">
                  A unified digital platform combining an AI Knowledge Assistant, autonomous Workflow Automation agents, microservice REST APIs, and a scalable Kubernetes cloud infrastructure.
                </p>

                <div className="feat-tags">
                  <span className="sol-tech-tag">Python</span>
                  <span className="sol-tech-tag">LangChain</span>
                  <span className="sol-tech-tag">Java Spring Boot</span>
                  <span className="sol-tech-tag">FastAPI</span>
                  <span className="sol-tech-tag">React</span>
                  <span className="sol-tech-tag">Kubernetes</span>
                  <span className="sol-tech-tag">Vector DB</span>
                </div>

                <button 
                  className="btn-primary-new" 
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => openProjectModal(projectsData[0])}
                >
                  Explore Architecture <span className="arrow-icon">→</span>
                </button>
              </div>

              {/* Composite Window Preview */}
              <div className="featured-right-visual">
                <div className="composite-window">
                  <div className="window-bar">
                    <div className="window-dots">
                      <span className="dot dot-close"></span>
                      <span className="dot dot-min"></span>
                      <span className="dot dot-max"></span>
                    </div>
                    <span className="window-title">SoftivaX Platform &bull; Architecture Console</span>
                  </div>

                  <div className="composite-body">
                    <div className="comp-row cr-top">
                      <div className="c-box">
                        <span className="c-label">AI RAG ENGINE</span>
                        <span className="c-val text-gold">14,820 Docs Synced</span>
                      </div>
                      <div className="c-box">
                        <span className="c-label">WORKFLOW AGENT</span>
                        <span className="c-val text-green">100% Automations Passed</span>
                      </div>
                      <div className="c-box">
                        <span className="c-label">K8S CLUSTER</span>
                        <span className="c-val text-blue">24/24 Pods Healthy</span>
                      </div>
                    </div>

                    <div className="comp-code-stream">
                      <span className="cm-ln">// Unified SoftivaX System Architecture Overview</span><br />
                      <span className="cm-kw">const</span> platform = <span className="cm-kw">new</span> SoftivaXPlatform(&#123;<br />
                      &nbsp;&nbsp;aiAssistant: <span className="cm-str">'LangChain RAG Vector Index'</span>,<br />
                      &nbsp;&nbsp;workflowEngine: <span className="cm-str">'LangGraph Event Agents'</span>,<br />
                      &nbsp;&nbsp;cloudInfra: <span className="cm-str">'Kubernetes Auto-Scaler AWS'</span><br />
                      &#125;);
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ===================================================================
          3. CATEGORY FILTERS
          =================================================================== */}
      <section className="prj-filters-section">
        <div className="prj-container">
          
          <div className="filters-row-scroll">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  className={`prj-filter-chip ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================
          4. EDITORIAL PROJECTS SHOWCASE GRID
          =================================================================== */}
      <section className="prj-showcase-section">
        <div className="prj-container">
          
          <div className="projects-editorial-grid">
            {filteredProjects.map((proj, idx) => {
              // Layout variation class based on index
              const isWide = (idx % 5 === 0);
              return (
                <div 
                  key={proj.id} 
                  className={`prj-card ${isWide ? 'card-wide' : 'card-standard'}`}
                >
                  <div className="prj-card-inner">
                    
                    {/* Top Window Bar */}
                    <div className="prj-card-bar">
                      <span className="prj-sub-tag">{proj.subTag}</span>
                      <span className="prj-type-label">{proj.typeLabel}</span>
                    </div>

                    <div className="prj-card-body">
                      <div className="prj-category-name">{proj.category}</div>
                      <h3 className="prj-card-title">{proj.title}</h3>
                      <p className="prj-card-desc">{proj.description}</p>

                      {/* Tech Tags */}
                      <div className="prj-tech-list">
                        {proj.technologies.slice(0, 4).map((tech, tIdx) => (
                          <span key={tIdx} className="tech-pill-small">{tech}</span>
                        ))}
                        {proj.technologies.length > 4 && (
                          <span className="tech-pill-more">+{proj.technologies.length - 4}</span>
                        )}
                      </div>

                      {/* Visual Mock Preview Box */}
                      <div className="prj-card-visual-box">
                        <div className="mini-visual-header">
                          <span className="mv-dot"></span>
                          <span className="mv-title">{proj.title} Preview</span>
                        </div>
                        <div className="mini-visual-content">
                          <div className="visual-code-snippet">
                            <span className="vc-tag">[SYSTEM ARCHITECTURE]</span> {proj.architecture.slice(0, 3).join(" ➔ ")}
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="prj-card-footer">
                        <button 
                          className="btn-view-project"
                          onClick={() => openProjectModal(proj)}
                        >
                          View Project <span className="btn-arrow">→</span>
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================
          5. INTERACTIVE PROJECT DETAIL MODAL
          =================================================================== */}
      {activeModalProject && (
        <div className="prj-modal-overlay" onClick={closeProjectModal}>
          <div className="prj-modal-card" onClick={(e) => e.stopPropagation()}>
            
            <button className="prj-modal-close" onClick={closeProjectModal}>✕</button>

            <div className="prj-modal-header">
              <div className="modal-badge-row">
                <span className="modal-cat">{activeModalProject.category}</span>
                <span className="modal-type">{activeModalProject.typeLabel}</span>
              </div>
              <h2 className="modal-title">{activeModalProject.title}</h2>
              <p className="modal-desc">{activeModalProject.description}</p>
            </div>

            <div className="prj-modal-body">
              
              {/* Problem & Solution */}
              <div className="modal-two-col">
                <div className="modal-box box-problem">
                  <div className="mbox-title">⚠️ THE CHALLENGE</div>
                  <p className="mbox-text">{activeModalProject.problem}</p>
                </div>

                <div className="modal-box box-solution">
                  <div className="mbox-title">⚡ SOFTIVAX SOLUTION</div>
                  <p className="mbox-text">{activeModalProject.solution}</p>
                </div>
              </div>

              {/* Architecture Diagram */}
              <div className="modal-arch-container">
                <div className="m-arch-title">SYSTEM ARCHITECTURE FLOW</div>
                
                <div className="m-arch-flow">
                  {activeModalProject.architecture.map((stage, sIdx) => {
                    const isLast = sIdx === activeModalProject.architecture.length - 1;
                    return (
                      <React.Fragment key={sIdx}>
                        <div className="arch-stage-pill">
                          <span className="stage-num">0{sIdx + 1}</span>
                          <span className="stage-text">{stage}</span>
                        </div>
                        {!isLast && <span className="arch-flow-arrow">➔</span>}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Key Features */}
              <div className="modal-features-box">
                <div className="mf-title">KEY ENGINEERING FEATURES</div>
                <div className="mf-grid">
                  {activeModalProject.features.map((feat, fIdx) => (
                    <div key={fIdx} className="mf-item">
                      <span className="mf-check">✓</span>
                      <span className="mf-text">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="modal-tech-box">
                <div className="mt-title">TECHNOLOGY STACK USED</div>
                <div className="mt-tags">
                  {activeModalProject.technologies.map((t, tIdx) => (
                    <span key={tIdx} className="sol-tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Authentic Disclaimer Note */}
              <div className="modal-disclaimer-note">
                <span>✦</span> This reference architecture / prototype demonstrates SoftivaX system design capabilities.
              </div>

            </div>

            <div className="prj-modal-footer">
              <button className="btn-secondary-new" onClick={closeProjectModal}>
                Close Inspection
              </button>
              <button 
                className="btn-primary-new" 
                onClick={() => {
                  closeProjectModal();
                  navigate('/contact', {
                    state: {
                      prefillMessage: `Hi SoftivaX team,\n\nI reviewed your reference project "${activeModalProject.title}" (${activeModalProject.category}). I would like to discuss building a similar digital system for our organization.`,
                      selectedService: activeModalProject.category.includes("AI") ? "AI Solutions" : "Custom Software"
                    }
                  });
                }}
              >
                Discuss a Similar Project →
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ===================================================================
          6. FINAL CTA
          =================================================================== */}
      <section className="prj-cta-section">
        <div className="prj-container">
          
          <div className="prj-cta-card">
            <h2 className="prj-cta-title">Have a Project In Mind?</h2>
            
            <p className="prj-cta-text">
              Tell us what you're trying to build. We'll help turn the idea into a working digital system.
            </p>

            <div className="prj-cta-buttons">
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

export default Projects;
