import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Solutions.css';

// ============================================================================
// 1. ROTATING PLACEHOLDERS & QUICK CHIPS
// ============================================================================
const rotatingPlaceholders = [
  "Too much manual data entry...",
  "We have thousands of documents that are difficult to search...",
  "Our customer support team handles repetitive questions...",
  "We need an e-commerce platform...",
  "Our business data is spread across multiple systems...",
  "Our application needs a scalable cloud deployment...",
  "Our workflow requires too many manual approvals..."
];

const quickChips = [
  { label: "AI & Automation", prompt: "Our workflow requires too many manual approvals and repetitive data entry." },
  { label: "Documents", prompt: "We have thousands of documents and employees cannot quickly find information." },
  { label: "Customer Support", prompt: "Our customer support team answers the same questions repeatedly." },
  { label: "E-Commerce", prompt: "We need a scalable e-commerce platform for high traffic sales." },
  { label: "Cloud & Deployment", prompt: "Our application needs reliable cloud deployment with Docker and Kubernetes." },
  { label: "Data & Analytics", prompt: "We need predictions and actionable insights from historical business data." },
  { label: "Business Software", prompt: "Our business data is spread across multiple systems without a unified platform." }
];

// ============================================================================
// 2. SOLUTIONS DATABASE (5 Realistic Examples + Custom Fallback)
// ============================================================================
const solutionsDatabase = {
  documents: {
    id: "doc_ai",
    category: "DOCUMENT INTELLIGENCE",
    title: "AI-Powered Document Intelligence",
    tagline: "Transform thousands of static files into an instant conversational knowledge base.",
    whatWeWouldBuild: "An enterprise RAG (Retrieval-Augmented Generation) engine that automatically parses, chunks, and indexes all your unstructured files (PDFs, DOCX, spreadsheets) into a secure vector database with an AI natural language research assistant.",
    problemSummary: "Thousands of documents scattered across systems make finding key information slow and error-prone.",
    architecture: [
      {
        id: "doc-1",
        stage: "INPUT",
        title: "User Problem",
        subtitle: "Thousands of documents difficult to search",
        icon: "📄",
        desc: "Raw enterprise data locked in PDFs, DOCX, contracts, and legacy drives."
      },
      {
        id: "doc-2",
        stage: "INGESTION",
        title: "Document Ingestion",
        subtitle: "PDF / DOCX / Scanned Files",
        icon: "📥",
        desc: "Automated ingestion pipeline syncing with Cloud Storage, Drive, or S3."
      },
      {
        id: "doc-3",
        stage: "PROCESSING",
        title: "Processing & Chunking",
        subtitle: "Text Extraction & OCR",
        icon: "⚙️",
        desc: "High-accuracy OCR, metadata tagging, and semantic chunking."
      },
      {
        id: "doc-4",
        stage: "KNOWLEDGE LAYER",
        title: "Vector Database",
        subtitle: "Embeddings & Vector Index",
        icon: "🧠",
        desc: "Stores semantic representations so knowledge can be queried in milliseconds."
      },
      {
        id: "doc-5",
        stage: "INTELLIGENCE",
        title: "RAG & LLM Engine",
        subtitle: "Retrieval + Synthesized Reasoning",
        icon: "⚡",
        desc: "Retrieves relevant context and generates precise answers with citations."
      },
      {
        id: "doc-6",
        stage: "APPLICATION",
        title: "AI Knowledge Assistant",
        subtitle: "Conversational Web & API Portal",
        icon: "💻",
        desc: "Intuitive chat interface and API endpoints for internal teams."
      },
      {
        id: "doc-7",
        stage: "OUTCOME",
        title: "Business Outcome",
        subtitle: "Instant Answers & 90% Faster Search",
        icon: "🎯",
        desc: "Zero manual searching, complete audit trail, and instant compliance verification."
      }
    ],
    components: [
      { name: "Document Parser & OCR", desc: "Extracts formatted text, tables, and metadata from scanned PDFs." },
      { name: "Semantic Vector Engine", desc: "Generates 1536-dim embeddings for deep conceptual understanding." },
      { name: "Vector Search Store", desc: "Milvus / Pinecone cluster for sub-50ms vector similarity lookup." },
      { name: "RAG Context Synthesizer", desc: "Combines top-k retrieved chunks with strict prompt guardrails." },
      { name: "Enterprise Auth & ACL", desc: "Ensures users only query documents they have permission to access." }
    ],
    technologies: ["Python", "LangChain", "RAG", "Vector Search", "OpenAI / Gemini", "FastAPI", "Pinecone"],
    nodeDetails: {
      "doc-1": { name: "User Problem", details: "Enterprise teams waste 20%+ of working hours searching across thousands of unindexed documents, contracts, and technical manuals." },
      "doc-2": { name: "Document Ingestion", details: "Ingests PDF, DOCX, CSV, and image files via batch uploads or real-time webhooks linked to SharePoint, Google Drive, or S3." },
      "doc-3": { name: "Processing & Chunking", details: "Splits raw documents into optimal 512-token semantic chunks using recursive text splitters while preserving header hierarchy and page numbers." },
      "doc-4": { name: "Vector Database", details: "Stores semantic representations of your documents so relevant knowledge can be retrieved when a user asks a question." },
      "doc-5": { name: "RAG & LLM Engine", details: "Retrieval-Augmented Generation connects the user's question with relevant business knowledge before generating a precise answer." },
      "doc-6": { name: "AI Knowledge Assistant", details: "Modern web UI with multi-turn chat, inline page citations, source PDF previewer, and export tools." },
      "doc-7": { name: "Business Outcome", details: "Dramatically speeds up research, accelerates onboarding, and eliminates document retrieval bottlenecks." }
    },
    uiPreview: {
      title: "SoftivaX Document AI • Enterprise Knowledge Console v2.4",
      status: "Index Active • 14,820 Documents Synced",
      sampleQuery: "What are our policy terms for international vendor refunds?",
      sampleAnswer: "According to Section 4.2 of the Global Procurement Policy (Doc #8841, Page 12), international vendor refunds require dual approval for amounts exceeding $10,000 USD and must be processed within 14 business days.",
      citations: ["Global_Procurement_Policy.pdf (p.12)", "Vendor_Terms_2025.docx (p.4)"]
    }
  },

  customer_support: {
    id: "support_ai",
    category: "CUSTOMER SUPPORT",
    title: "AI Customer Support Assistant",
    tagline: "Autonomously resolve repetitive inquiries 24/7 with empathetic AI.",
    whatWeWouldBuild: "An omni-channel support agent that resolves 75%+ of routine customer questions autonomously by querying your updated knowledge base and escalating complex queries smoothly to human reps.",
    problemSummary: "Customer support handles repetitive questions, causing long queue times and high operational cost.",
    architecture: [
      { id: "cs-1", stage: "INPUT", title: "Customer Inquiry", subtitle: "Web Widget, Email, WhatsApp", icon: "👤", desc: "Customer submits a question or service ticket." },
      { id: "cs-2", stage: "INTERFACE", title: "Chat Interface", subtitle: "Messaging Gateway & Webhooks", icon: "💬", desc: "Omni-channel interface receiving incoming query streams." },
      { id: "cs-3", stage: "AGENT", title: "AI Support Agent", subtitle: "Intent & Sentiment Parser", icon: "🤖", desc: "Analyzes sentiment, intent, and customer profile context." },
      { id: "cs-4", stage: "KNOWLEDGE", title: "Knowledge Base & RAG", subtitle: "Verified Policy Index", icon: "📚", desc: "Retrieves latest product specifications, return rules, and FAQs." },
      { id: "cs-5", stage: "INTELLIGENCE", title: "LLM Synthesizer", subtitle: "Natural Response Generator", icon: "🧠", desc: "Generates helpful, accurate responses adhering to brand guidelines." },
      { id: "cs-6", stage: "ESCALATION", title: "Human Escalation", subtitle: "Smart Live Handoff", icon: "🙋‍♂️", desc: "Transfers edge cases or low-confidence queries to human reps." },
      { id: "cs-7", stage: "OUTCOME", title: "Business Outcome", subtitle: "24/7 Support & 75% Ticket Deflection", icon: "✨", desc: "Instant responses, higher CSAT, and reduced support load." }
    ],
    components: [
      { name: "Omni-Channel Gateway", desc: "Connects web chat, email ticketing, WhatsApp, and Intercom." },
      { name: "Intent Classifier", desc: "Routes billing, technical, and general inquiries automatically." },
      { name: "Policy Guardrails", desc: "Prevents hallucinations by enforcing strict factual context bounds." },
      { name: "CRM Data Integration", desc: "Pulls order history and account status in real-time." },
      { name: "Agent Desktop Co-Pilot", desc: "Suggests AI responses for human agents during manual escalation." }
    ],
    technologies: ["LLM", "RAG", "Python", "FastAPI", "Vector Database", "APIs", "WebSockets"],
    nodeDetails: {
      "cs-1": { name: "Customer Inquiry", details: "Customers reach out via website chat, mobile app, email, or social channels expecting instantaneous answers." },
      "cs-2": { name: "Chat Interface", details: "Clean, light-weight widget with streaming websocket connection and offline support ticket capture." },
      "cs-3": { name: "AI Support Agent", details: "An agent can reason through tasks, call tools, and execute multi-step inquiries such as checking tracking numbers." },
      "cs-4": { name: "Knowledge Base & RAG", details: "Retrieval-Augmented Generation connects the user's question with relevant business knowledge before generating an answer." },
      "cs-5": { name: "LLM Synthesizer", details: "Synthesizes clear, courteous answers in 30+ languages tailored to customer sentiment." },
      "cs-6": { name: "Human Escalation", details: "Seamlessly routes ticket context, conversation transcript, and sentiment analysis to Zendesk/Freshdesk for human takeover." },
      "cs-7": { name: "Business Outcome", details: "Cuts response times from hours to under 2 seconds while handling peak traffic spikes automatically." }
    },
    uiPreview: {
      title: "SoftivaX AI Support Console • Active Live Stream",
      status: "AI Agent Operational • 98.4% CSAT",
      sampleQuery: "Hi! Can I change the shipping address for my order #SF-9921?",
      sampleAnswer: "I can help with that! Order #SF-9921 is currently in processing and hasn't dispatched yet. I've updated your shipping address to 742 Evergreen Terrace. A confirmation email has been sent!",
      citations: ["Order Status: In Warehouse", "Address Modified: Success"]
    }
  },

  automation: {
    id: "workflow_automation",
    category: "WORKFLOW AUTOMATION",
    title: "Intelligent Workflow Automation",
    tagline: "Replace repetitive manual operations with event-driven AI agents.",
    whatWeWouldBuild: "An agentic workflow orchestrator that automates data extraction, multi-system synchronization, conditional approvals, and event-driven notifications across legacy and modern software.",
    problemSummary: "Employees manually process repetitive business workflows across disconnected applications.",
    architecture: [
      { id: "wf-1", stage: "INPUT", title: "Business Request", subtitle: "Email, Webhook, API Event", icon: "📩", desc: "Event or document arrival triggers operational pipeline." },
      { id: "wf-2", stage: "ENGINE", title: "Workflow Engine", subtitle: "Pipeline & State Orchestrator", icon: "🔄", desc: "Coordinates asynchronous execution and retries." },
      { id: "wf-3", stage: "AGENT", title: "AI Processing Agent", subtitle: "Autonomous Agent & Extraction", icon: "🤖", desc: "Parses unstructured data and executes multi-step tasks." },
      { id: "wf-4", stage: "RULES", title: "Business Rules", subtitle: "Validation & Governance", icon: "🛡️", desc: "Verifies threshold limits, compliance checks, and approval gates." },
      { id: "wf-5", stage: "INTEGRATION", title: "API Integrations", subtitle: "ERP, CRM, Billing Connectors", icon: "🔗", desc: "Bi-directional sync with SAP, Salesforce, and internal databases." },
      { id: "wf-6", stage: "STORAGE", title: "Database & Audit", subtitle: "Immutable Log & Traces", icon: "🗄️", desc: "Logs execution steps and state history for full auditability." },
      { id: "wf-7", stage: "OUTCOME", title: "Automated Action", subtitle: "End-to-End Hands-Free Execution", icon: "⚡", desc: "Records updated, notifications dispatched, task completed." }
    ],
    components: [
      { name: "Event Bus & Orchestrator", desc: "Reliable state engine managing asynchronous worker queues." },
      { name: "Agent Tool Router", desc: "Equips AI agents with database query and REST API execution tools." },
      { name: "Approval Gateway", desc: "Routes high-value actions to managers via Slack/Email one-click approvals." },
      { name: "Data Mapping Transformer", desc: "Normalizes diverse vendor formats into standard JSON schemas." },
      { name: "Audit & Error Handler", desc: "Automatic retry on network failures and instant exception alerting." }
    ],
    technologies: ["AI Agents", "LangGraph", "APIs", "Spring Boot", "Python", "PostgreSQL"],
    nodeDetails: {
      "wf-1": { name: "Business Request", details: "Triggers automatically when an invoice arrives via email, a web form is submitted, or a database status changes." },
      "wf-2": { name: "Workflow Engine", details: "Orchestrates complex multi-stage tasks with state persistence, fallback logic, and queue management." },
      "wf-3": { name: "AI Processing Agent", details: "An agent can reason through tasks, call tools, and execute multi-step workflows like validating line items." },
      "wf-4": { name: "Business Rules", details: "Ensures compliance by evaluating predefined governance policies before writing changes to core systems." },
      "wf-5": { name: "API Integrations", details: "Connects securely with SAP, QuickBooks, Salesforce, Hubspot, and REST/SOAP services." },
      "wf-6": { name: "Database & Audit", details: "Records detailed JSON traces for every step to maintain total transparency and financial audit readiness." },
      "wf-7": { name: "Automated Action", details: "Executes final downstream actions such as updating ERP records, notifying teams, and releasing payments." }
    },
    uiPreview: {
      title: "SoftivaX Workflow Studio • Pipeline Dashboard",
      status: "Pipeline Execution #8041 • STATUS: SUCCESS",
      sampleQuery: "Automated Invoice Processing & ERP Entry Flow",
      sampleAnswer: "Invoice #INV-2025-08 parsed. Extracted vendor: Acme Corp. Subtotal: $4,200. Rule check passed (Limit < $5,000). Synced to SAP ERP and Slack alert dispatched to Finance.",
      citations: ["Parsing: 100%", "Rules: Passed", "ERP Sync: Complete"]
    }
  },

  commerce: {
    id: "commerce_platform",
    category: "E-COMMERCE",
    title: "Scalable Commerce Platform",
    tagline: "High-performance headless architecture for enterprise digital commerce.",
    whatWeWouldBuild: "A modern headless e-commerce architecture built with microservices, lightning-fast storefronts, global CDN caching, and automated inventory sync.",
    problemSummary: "Legacy store struggles with high traffic spikes, slow checkout speeds, and disconnected systems.",
    architecture: [
      { id: "cm-1", stage: "INPUT", title: "Customer", subtitle: "Web / Mobile Storefront", icon: "🛒", desc: "Ultra-fast Next.js / React headless storefront interface." },
      { id: "cm-2", stage: "GATEWAY", title: "API Gateway", subtitle: "Security & Load Balancer", icon: "🛡️", desc: "Handles authentication, rate limiting, and request routing." },
      { id: "cm-3", stage: "PRODUCTS", title: "Product Service", subtitle: "Search & Catalog Cache", icon: "📦", desc: "High-speed product catalog backed by Redis memory clusters." },
      { id: "cm-4", stage: "ORDERS", title: "Order Service", subtitle: "Cart & Multi-Fulfillment", icon: "⚙️", desc: "Transactional processing engine managing cart and inventory." },
      { id: "cm-5", stage: "PAYMENTS", title: "Payment Service", subtitle: "Stripe / PayPal Gateway", icon: "💳", desc: "PCI-compliant global payment gateway integration." },
      { id: "cm-6", stage: "DATA", title: "Database Layer", subtitle: "PostgreSQL & Caching", icon: "🗄️", desc: "High-availability relational database cluster with read-replicas." },
      { id: "cm-7", stage: "INFRA", title: "Cloud Infrastructure", subtitle: "Kubernetes Auto-Scaler", icon: "☁️", desc: "Auto-scaling cloud cluster capable of handling 100k+ concurrent shoppers." }
    ],
    components: [
      { name: "Headless Storefront", desc: "Sub-second page loads optimized for mobile conversion." },
      { name: "Inventory Sync Engine", desc: "Real-time stock synchronization across physical warehouses and web." },
      { name: "Cart & Checkout Core", desc: "Resilient checkout flow handling multi-currency and global taxes." },
      { name: "Recommendation Engine", desc: "Personalized product recommendations based on user shopping behavior." },
      { name: "CDN & Edge Caching", desc: "Global asset delivery with Cloudflare / CloudFront edge nodes." }
    ],
    technologies: ["React", "Java", "Spring Boot", "REST APIs", "PostgreSQL / MySQL", "Docker", "Kubernetes", "Cloud"],
    nodeDetails: {
      "cm-1": { name: "Customer", details: "Shoppers interact with a responsive, progressive web app (PWA) with instant product page transitions." },
      "cm-2": { name: "API Gateway", details: "Secures API endpoints, enforces token auth, and routes requests to appropriate microservices." },
      "cm-3": { name: "Product Service", details: "Delivers instantaneous search results and inventory availability across millions of SKUs." },
      "cm-4": { name: "Order Service", details: "Manages transactional order placement, promo code validation, and fulfillment routing." },
      "cm-5": { name: "Payment Service", details: "Processes payments securely via Stripe, Apple Pay, PayPal, and local payment methods with 3D Secure." },
      "cm-6": { name: "Database Layer", details: "PostgreSQL cluster with Redis caching ensuring zero transaction data loss during high traffic." },
      "cm-7": { name: "Cloud Infrastructure", details: "Kubernetes cluster automatically spins up additional pods during high-traffic flash sales." }
    },
    uiPreview: {
      title: "SoftivaX Commerce Core • Operations Dashboard",
      status: "Store Active • 1,480 Active Sessions",
      sampleQuery: "Global E-Commerce System Health & Real-time Telemetry",
      sampleAnswer: "System operating at 99.99% uptime. Average page load: 240ms. Checkout conversion: 4.8%. 1,240 orders processed in the past hour.",
      citations: ["API Gateway: 18ms", "Cache Hit Ratio: 96.4%", "Cart DB: Healthy"]
    }
  },

  cloud: {
    id: "cloud_devops",
    category: "CLOUD & DEVOPS",
    title: "Cloud & DevOps Platform",
    tagline: "Resilient, automated cloud infrastructure built for high availability and zero downtime.",
    whatWeWouldBuild: "An enterprise-grade Infrastructure-as-Code (IaC) setup with automated CI/CD pipelines, container orchestration, zero-downtime rolling updates, and full observability.",
    problemSummary: "Manual application deployments lead to downtime, security vulnerabilities, and unpredictable cloud costs.",
    architecture: [
      { id: "cl-1", stage: "CODE", title: "Code Repository", subtitle: "Git Version Control", icon: "💻", desc: "Developer commits trigger automated build hooks." },
      { id: "cl-2", stage: "CI/CD", title: "CI/CD Pipeline", subtitle: "Automated Build & Test", icon: "⚙️", desc: "Runs unit tests, static code analysis, and container build." },
      { id: "cl-3", stage: "CONTAINER", title: "Docker Registry", subtitle: "Container Image Packaging", icon: "🐳", desc: "Packages code into lightweight, secure container images." },
      { id: "cl-4", stage: "ORCHESTRATION", title: "Kubernetes Cluster", subtitle: "Container Orchestration", icon: "☸️", desc: "Manages pod scaling, self-healing, and traffic routing." },
      { id: "cl-5", stage: "CLOUD", title: "Cloud Provider", subtitle: "AWS / GCP Infrastructure", icon: "☁️", desc: "Multi-zone cloud architecture with high-availability load balancing." },
      { id: "cl-6", stage: "MONITORING", title: "Observability", subtitle: "Prometheus & Grafana", icon: "📊", desc: "Real-time metrics, centralized log tracing, and automated alerts." },
      { id: "cl-7", stage: "OUTCOME", title: "Business Outcome", subtitle: "99.99% Uptime & Zero Downtime Releases", icon: "🚀", desc: "Continuous deployment confidence and optimized infrastructure spend." }
    ],
    components: [
      { name: "Infrastructure as Code", desc: "Terraform / CloudFormation scripts for reproducible cloud environments." },
      { name: "Automated CI/CD Workflow", desc: "GitHub Actions / GitLab CI pipelines for automated testing and deployment." },
      { name: "Kubernetes Cluster", desc: "Managed EKS / GKE cluster with horizontal pod autoscaling." },
      { name: "Zero-Downtime Deployment", desc: "Blue-green and canary release strategies." },
      { name: "Security & Secrets Vault", desc: "HashiCorp Vault / AWS Secrets Manager for encrypted keys." }
    ],
    technologies: ["Docker", "Kubernetes", "AWS", "Linux", "GitHub Actions", "Nginx", "Monitoring"],
    nodeDetails: {
      "cl-1": { name: "Code Repository", details: "Developers push code to Git repositories with automated webhooks enforcing commit linting and PR approvals." },
      "cl-2": { name: "CI/CD Pipeline", details: "Automates testing, security vulnerability scanning, and Docker image compilation in isolated build nodes." },
      "cl-3": { name: "Docker Registry", details: "Stores versioned, immutable container images scanned for vulnerabilities before release." },
      "cl-4": { name: "Kubernetes Cluster", details: "Orchestrates container deployment, automated rolling upgrades, service discovery, and load balancing." },
      "cl-5": { name: "Cloud Provider", details: "Deploys multi-region cloud infrastructure across isolated Virtual Private Clouds (VPCs)." },
      "cl-6": { name: "Observability", details: "Aggregates logs, metrics, and distributed traces into Grafana dashboards with automated alert routing." },
      "cl-7": { name: "Business Outcome", details: "Eliminates deployment fear, reduces cloud spend through auto-scaling, and achieves enterprise uptime." }
    },
    uiPreview: {
      title: "SoftivaX Cloud Operations • Infrastructure Overview",
      status: "Kubernetes Cluster Healthy • 12 Active Nodes",
      sampleQuery: "Production Environment Status & Telemetry",
      sampleAnswer: "All 24 service pods running smoothly across AWS us-east-1 and us-west-2. CPU load: 22%. Memory load: 38%. Build #194 deployed with zero downtime.",
      citations: ["Nodes: 12/12", "Pods: 24/24 Healthy", "Deploy Time: 42s"]
    }
  },

  custom: {
    id: "custom_digital",
    category: "CUSTOM DIGITAL SOLUTION",
    title: "Custom Digital & Intelligence Platform",
    tagline: "A tailored software and data architecture designed around your exact business requirements.",
    whatWeWouldBuild: "A custom modular solution architecture engineered specifically around your organization's workflows, data systems, security standards, and operational goals.",
    problemSummary: "Unique business requirements that require a tailored combination of software, AI, and cloud technology.",
    architecture: [
      { id: "ct-1", stage: "CHALLENGE", title: "Business Challenge", subtitle: "User Problem Statement", icon: "💡", desc: "Detailed requirements analysis and goal definition." },
      { id: "ct-2", stage: "INGESTION", title: "System Ingestion", subtitle: "APIs & System Connectors", icon: "🔌", desc: "Data pipelines connecting legacy and modern enterprise data." },
      { id: "ct-3", stage: "CORE", title: "Processing Core", subtitle: "Business Logic & Services", icon: "⚙️", desc: "Scalable backend microservices and domain rules." },
      { id: "ct-4", stage: "INTELLIGENCE", title: "Intelligence Layer", subtitle: "AI, Analytics & Rules", icon: "🧠", desc: "Custom predictive models, automation rules, or AI tools." },
      { id: "ct-5", stage: "SECURITY", title: "Security Layer", subtitle: "Auth, ACL & Encryption", icon: "🛡️", desc: "Role-based access controls and encrypted data transmission." },
      { id: "ct-6", stage: "APPLICATION", title: "Application UI", subtitle: "Custom Web / Mobile Portal", icon: "💻", desc: "Tailored user interface for employees or clients." },
      { id: "ct-7", stage: "OUTCOME", title: "Business Outcome", subtitle: "Streamlined Digital Solution", icon: "🎯", desc: "Measurable operational efficiency and competitive advantage." }
    ],
    components: [
      { name: "Modular Application Backend", desc: "Clean architecture built with Python/Java/Node.js." },
      { name: "Custom Web & Mobile UX", desc: "Intuitive, high-performance interface designed for your team." },
      { name: "Database & Caching", desc: "Optimized data storage layer tailored to your read/write volume." },
      { name: "Security & Role Access", desc: "SSO, OAuth2, and granular permissions." }
    ],
    technologies: ["React", "Python", "Node.js", "PostgreSQL", "FastAPI", "Docker", "Cloud APIs"],
    nodeDetails: {
      "ct-1": { name: "Business Challenge", details: "Defining exact operational goals, system inputs, compliance needs, and user workflows." },
      "ct-2": { name: "System Ingestion", details: "Integrating with your existing databases, third-party APIs, and file repositories." },
      "ct-3": { name: "Processing Core", details: "Robust backend software orchestrating core business logic." },
      "ct-4": { name: "Intelligence Layer", details: "An intelligence engine built specifically for your domain context and data structures." },
      "ct-5": { name: "Security Layer", details: "Enterprise-grade encryption in transit and at rest with role-based authorization." },
      "ct-6": { name: "Application UI", details: "Clean, modern web or mobile app focused on speed, clarity, and user productivity." },
      "ct-7": { name: "Business Outcome", details: "A proprietary software asset aligned 100% with your company's growth strategy." }
    },
    uiPreview: {
      title: "SoftivaX Custom Platform Console",
      status: "System Active • Tailored Architecture Ready",
      sampleQuery: "Custom Digital Solution Consultation",
      sampleAnswer: "Your business challenge requires a tailored architecture. We will analyze your workflows, security requirements, and data models to build an ideal solution.",
      citations: ["Architecture: Custom", "Status: Ready for Discovery"]
    }
  }
};

// ============================================================================
// 3. SMART MATCHING ENGINE (Keyword / Intent Detection)
// ============================================================================
const matchSolutionFromProblem = (text) => {
  const query = (text || "").toLowerCase();

  if (!query.trim()) {
    return solutionsDatabase.documents; // default default
  }

  // Document / Knowledge Base keywords
  if (
    query.includes("document") || query.includes("pdf") || query.includes("search") ||
    query.includes("find information") || query.includes("files") || query.includes("knowledge") ||
    query.includes("contract") || query.includes("paperwork") || query.includes("unstructured")
  ) {
    return solutionsDatabase.documents;
  }

  // Customer support keywords
  if (
    query.includes("customer") || query.includes("support") || query.includes("question") ||
    query.includes("questions") || query.includes("chat") || query.includes("ticket") ||
    query.includes("helpdesk") || query.includes("faq") || query.includes("inquiry") || query.includes("inquiries")
  ) {
    return solutionsDatabase.customer_support;
  }

  // Workflow & Automation & Invoice keywords
  if (
    query.includes("manual") || query.includes("workflow") || query.includes("automation") ||
    query.includes("approval") || query.includes("approvals") || query.includes("invoice") ||
    query.includes("invoices") || query.includes("repetitive") || query.includes("process") ||
    query.includes("entry") || query.includes("data entry")
  ) {
    return solutionsDatabase.automation;
  }

  // E-Commerce keywords
  if (
    query.includes("e-commerce") || query.includes("ecommerce") || query.includes("store") ||
    query.includes("shop") || query.includes("cart") || query.includes("checkout") ||
    query.includes("payment") || query.includes("catalog") || query.includes("retail") || query.includes("sales")
  ) {
    return solutionsDatabase.commerce;
  }

  // Cloud & DevOps keywords
  if (
    query.includes("cloud") || query.includes("devops") || query.includes("docker") ||
    query.includes("kubernetes") || query.includes("deploy") || query.includes("deployment") ||
    query.includes("hosting") || query.includes("server") || query.includes("aws") || query.includes("gcp") ||
    query.includes("ci/cd") || query.includes("infrastructure")
  ) {
    return solutionsDatabase.cloud;
  }

  // Fallback to custom solution
  return solutionsDatabase.custom;
};

// ============================================================================
// 4. MAIN SOLUTIONS COMPONENT
// ============================================================================
const Solutions = () => {
  const navigate = useNavigate();
  const [problemText, setProblemText] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [activeSolutionKey, setActiveSolutionKey] = useState("documents");
  const [matchedSolution, setMatchedSolution] = useState(solutionsDatabase.documents);

  // Analysis / Scanning Animation States
  const [analysisStep, setAnalysisStep] = useState(0); // 0 = idle, 1 = scanning, 2 = identified, 3 = revealed
  const [selectedNode, setSelectedNode] = useState(null); // Clicked node for detailed modal/drawer
  const [beforeAfterState, setBeforeAfterState] = useState("after"); // "before" or "after"

  const sectionRef = useRef(null);
  const architectureRef = useRef(null);

  // Rotating placeholder ticker when textarea is empty
  useEffect(() => {
    if (problemText) return;
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % rotatingPlaceholders.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [problemText]);

  // Handle Problem Submission / Solution Finder Trigger
  const handleFindSolution = (customText) => {
    const textToAnalyze = customText !== undefined ? customText : problemText;
    const sol = matchSolutionFromProblem(textToAnalyze);

    // Trigger scanning transition sequence
    setAnalysisStep(1); // Stage 1: Scanning...

    setTimeout(() => {
      setMatchedSolution(sol);
      setActiveSolutionKey(sol.id);
      setAnalysisStep(2); // Stage 2: Identified!
    }, 700);

    setTimeout(() => {
      setAnalysisStep(3); // Stage 3: Revealed!
      if (architectureRef.current) {
        architectureRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1300);
  };

  // Quick chip click handler
  const handleChipClick = (chip) => {
    setProblemText(chip.prompt);
    handleFindSolution(chip.prompt);
  };

  // Direct template preset selection
  const handleSelectPreset = (key) => {
    const sol = solutionsDatabase[key];
    if (sol) {
      setMatchedSolution(sol);
      setActiveSolutionKey(sol.id);
      setAnalysisStep(3);
    }
  };

  // Discuss CTA click (navigates to contact with prefilled message state)
  const handleDiscussClick = () => {
    const currentProblem = problemText.trim() || matchedSolution.problemSummary;
    const prefill = `Hi SoftivaX team,\n\nI explored your Solution Architecture Explorer for the challenge:\n"${currentProblem}"\n\nSuggested Architecture: ${matchedSolution.title}\n\nI would like to discuss building a custom digital implementation around our company's specific requirements.`;
    navigate('/contact', {
      state: {
        prefillMessage: prefill,
        selectedService: matchedSolution.category.includes("AI") ? "AI Solutions" : "Custom Software"
      }
    });
  };

  return (
    <div className="solutions-experience" ref={sectionRef}>
      
      {/* SECTION HEADER & EYEBROW */}
      <section className="sol-hero-section">
        <div className="sol-container">
          <div className="sol-header-badge">
            <span className="badge-dot"></span>
            FIND YOUR SOLUTION
          </div>
          
          <h1 className="sol-main-heading">
            Tell Us the Problem.<br />
            <span className="gold-text-glow">See How We Can Solve It.</span>
          </h1>

          <p className="sol-supporting-text">
            Describe a business challenge and explore how AI, software, automation, data, and cloud technologies can work together to solve it.
          </p>
        </div>
      </section>

      {/* PROBLEM INPUT SECTION */}
      <section className="sol-input-section">
        <div className="sol-container">
          <div className="sol-input-card">
            
            <div className="input-header-row">
              <label htmlFor="problem-textarea" className="sol-input-label">
                What are you trying to solve?
              </label>
              <span className="input-hint">Interactive Architecture Engine</span>
            </div>

            <div className="sol-textarea-wrapper">
              <textarea
                id="problem-textarea"
                className="sol-textarea"
                rows="4"
                value={problemText}
                onChange={(e) => setProblemText(e.target.value)}
                placeholder={rotatingPlaceholders[placeholderIndex]}
              ></textarea>
              
              {problemText && (
                <button 
                  className="clear-btn" 
                  onClick={() => setProblemText('')}
                  title="Clear text"
                  aria-label="Clear input text"
                >
                  ✕
                </button>
              )}
            </div>

            {/* BUTTON & CHIPS */}
            <div className="sol-action-bar">
              <button 
                className={`sol-submit-btn ${analysisStep === 1 ? 'analyzing' : ''}`}
                onClick={() => handleFindSolution()}
              >
                {analysisStep === 1 ? (
                  <>
                    <span className="spinner-icon"></span>
                    Analyzing Challenge...
                  </>
                ) : (
                  <>
                    Find My Solution <span className="btn-arrow">→</span>
                  </>
                )}
              </button>

              <span className="chip-label">Quick Problem Categories:</span>
            </div>

            {/* QUICK PROBLEM CHIPS */}
            <div className="sol-chips-row">
              {quickChips.map((chip, idx) => (
                <button
                  key={idx}
                  className="sol-chip"
                  onClick={() => handleChipClick(chip)}
                >
                  <span className="chip-icon">✦</span>
                  {chip.label}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SCANNING & REVEAL TRANSITION ANIMATION */}
      {analysisStep > 0 && (
        <div className="sol-analysis-transition-wrapper">
          <div className="sol-container">
            
            {/* Step 1: Scanning Beam */}
            {analysisStep === 1 && (
              <div className="sol-scanning-box">
                <div className="radar-sweep"></div>
                <div className="scanning-text-group">
                  <div className="scanning-badge">STEP 1 / 3</div>
                  <h3 className="scanning-title">ANALYZING YOUR CHALLENGE...</h3>
                  <p className="scanning-sub">
                    Evaluating natural language keywords • Mapping enterprise component architecture...
                  </p>
                </div>
              </div>
            )}

            {/* Step 2 & 3: Problem Identified Badge */}
            {analysisStep >= 2 && (
              <div className="sol-identified-banner">
                <div className="identified-badge">
                  <span className="check-icon">✓</span>
                  PROBLEM IDENTIFIED
                </div>
                <div className="identified-category">
                  CATEGORY DETECTED: <strong>{matchedSolution.category}</strong>
                </div>
                <div className="identified-solution-name">
                  SUGGESTED ARCHITECTURE: <span>{matchedSolution.title}</span>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* PROBLEM → SOLUTION ARCHITECTURE DIAGRAM (THE MAIN ATTRACTION) */}
      <section className="sol-architecture-section" ref={architectureRef}>
        <div className="sol-container">
          
          <div className="arch-section-header">
            <div className="sol-eyebrow">ENTERPRISE SYSTEM DIAGRAM</div>
            <h2 className="arch-main-title">
              Interactive Architecture Blueprint
            </h2>
            <p className="arch-subtitle">
              Below is a suggested architecture demonstrating how data, processing, AI, and cloud components connect to solve your challenge. <span className="highlight-text">Click any component to inspect how it works.</span>
            </p>
          </div>

          {/* TEMPLATE PRESET SELECTOR TABS */}
          <div className="preset-tabs-bar">
            <span className="preset-label">Architecture Templates:</span>
            {Object.keys(solutionsDatabase).map((key) => {
              const item = solutionsDatabase[key];
              const isActive = matchedSolution.id === item.id;
              return (
                <button
                  key={key}
                  className={`preset-tab ${isActive ? 'active' : ''}`}
                  onClick={() => handleSelectPreset(key)}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          {/* 3D INTERACTIVE ARCHITECTURE CANVAS */}
          <div className="arch-canvas-card">
            
            <div className="arch-card-header">
              <div className="arch-window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="arch-card-title">
                SoftivaX Architecture Engine • {matchedSolution.category}
              </div>
              <div className="arch-card-tag">
                Interactive 3D Visual Flow
              </div>
            </div>

            {/* ARCHITECTURE FLOW DIAGRAM */}
            <div className="arch-flow-wrapper">
              <div className="arch-flow-line-bg">
                <div className="moving-particle p1"></div>
                <div className="moving-particle p2"></div>
                <div className="moving-particle p3"></div>
              </div>

              <div className="arch-nodes-grid">
                {matchedSolution.architecture.map((node, index) => {
                  const isFirst = index === 0;
                  const isLast = index === matchedSolution.architecture.length - 1;
                  return (
                    <React.Fragment key={node.id}>
                      <div 
                        className={`arch-node-card ${isFirst ? 'node-problem' : ''} ${isLast ? 'node-outcome' : ''}`}
                        onClick={() => setSelectedNode(node)}
                      >
                        <div className="node-stage-badge">STAGE {index + 1}</div>
                        <div className="node-icon">{node.icon}</div>
                        <h4 className="node-title">{node.title}</h4>
                        <div className="node-subtitle">{node.subtitle}</div>
                        <p className="node-desc">{node.desc}</p>
                        
                        <div className="node-click-hint">
                          <span>Click to Inspect</span> →
                        </div>
                      </div>

                      {!isLast && (
                        <div className="arch-connector-line">
                          <div className="line-pulse"></div>
                          <span className="line-arrow">➔</span>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* CLICKABLE NODE INSPECTOR SIDE DRAWER / MODAL */}
            {selectedNode && (
              <div className="node-inspector-overlay" onClick={() => setSelectedNode(null)}>
                <div className="node-inspector-card" onClick={(e) => e.stopPropagation()}>
                  <button className="inspector-close-btn" onClick={() => setSelectedNode(null)}>✕</button>
                  
                  <div className="inspector-header">
                    <span className="inspector-stage">{selectedNode.stage}</span>
                    <h3 className="inspector-title">{selectedNode.icon} {selectedNode.title}</h3>
                    <div className="inspector-sub">{selectedNode.subtitle}</div>
                  </div>

                  <div className="inspector-body">
                    <h4>Component Role in Architecture:</h4>
                    <p className="inspector-text">
                      {matchedSolution.nodeDetails[selectedNode.id]?.details || selectedNode.desc}
                    </p>

                    <h4>Key Technology Choices:</h4>
                    <div className="inspector-tech-tags">
                      {matchedSolution.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-pill">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="inspector-footer">
                    <button className="btn-secondary-new" onClick={() => setSelectedNode(null)}>
                      Close Inspection
                    </button>
                    <button className="btn-primary-new" onClick={handleDiscussClick}>
                      Inquire About This Node →
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* REALISTIC SOLUTION PREVIEW MOCKUP */}
      <section className="sol-preview-section">
        <div className="sol-container">
          
          <div className="preview-header">
            <div className="sol-eyebrow">APPLICATION DEMONSTRATION</div>
            <h2 className="preview-title">What the Solution Looks Like in Action</h2>
            <p className="preview-sub">
              A high-level interface preview of the application dashboard softivax would build for this specific use case.
            </p>
          </div>

          <div className="solution-mock-window">
            <div className="mock-window-bar">
              <div className="window-dots">
                <span className="dot dot-close"></span>
                <span className="dot dot-min"></span>
                <span className="dot dot-max"></span>
              </div>
              <div className="window-title">{matchedSolution.uiPreview.title}</div>
              <div className="window-status">{matchedSolution.uiPreview.status}</div>
            </div>

            <div className="mock-window-body">
              <div className="mock-query-box">
                <span className="query-icon">🔍</span>
                <span className="query-label">INPUT / QUERY:</span>
                <span className="query-text">"{matchedSolution.uiPreview.sampleQuery}"</span>
              </div>

              <div className="mock-response-card">
                <div className="response-header">
                  <span className="response-badge">⚡ SOFTIVAX AI SYSTEM OUTPUT</span>
                  <span className="confidence-tag">Confidence Score: 99.4%</span>
                </div>
                <p className="response-body-text">
                  {matchedSolution.uiPreview.sampleAnswer}
                </p>

                <div className="citations-row">
                  <span className="citation-label">Verified Data Sources:</span>
                  {matchedSolution.uiPreview.citations.map((c, i) => (
                    <span key={i} className="citation-pill">📄 {c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SOLUTION DETAILS BREAKDOWN: CORE COMPONENTS & TECH STACK */}
      <section className="sol-details-section">
        <div className="sol-container">
          
          <div className="details-grid">
            
            {/* Left: What We Would Build */}
            <div className="details-left-card">
              <div className="sol-eyebrow">SYSTEM OVERVIEW</div>
              <h3 className="details-card-title">What We Would Build</h3>
              <p className="details-explanation">
                {matchedSolution.whatWeWouldBuild}
              </p>

              <div className="problem-summary-box">
                <div className="summary-label">ORIGINAL PROBLEM STATEMENT</div>
                <div className="summary-text">
                  "{problemText.trim() || matchedSolution.problemSummary}"
                </div>
              </div>
            </div>

            {/* Right: Core Components */}
            <div className="details-right-card">
              <div className="sol-eyebrow">SYSTEM BLUEPRINT</div>
              <h3 className="details-card-title">Core Components</h3>

              <div className="components-list">
                {matchedSolution.components.map((comp, idx) => (
                  <div key={idx} className="comp-item">
                    <div className="comp-number">0{idx + 1}</div>
                    <div className="comp-info">
                      <div className="comp-name">{comp.name}</div>
                      <div className="comp-desc">{comp.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="tech-stack-row">
                <span className="tech-row-title">Technologies Used:</span>
                <div className="tech-tags-wrapper">
                  {matchedSolution.technologies.map((t, i) => (
                    <span key={i} className="sol-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* BEFORE VS AFTER VISUAL TRANSFORMATION */}
      <section className="sol-transformation-section">
        <div className="sol-container">
          
          <div className="trans-header">
            <div className="sol-eyebrow">MEASURABLE IMPACT</div>
            <h2 className="trans-title">Before vs. After SoftivaX</h2>
            <p className="trans-sub">
              See the operational transformation when replacing legacy manual tasks with an integrated SoftivaX system.
            </p>

            {/* TOGGLE SWITCH */}
            <div className="trans-toggle-bar">
              <button 
                className={`toggle-btn ${beforeAfterState === 'before' ? 'active-before' : ''}`}
                onClick={() => setBeforeAfterState('before')}
              >
                BEFORE SOFTIVAX
              </button>
              <button 
                className={`toggle-btn ${beforeAfterState === 'after' ? 'active-after' : ''}`}
                onClick={() => setBeforeAfterState('after')}
              >
                AFTER SOFTIVAX ✦
              </button>
            </div>
          </div>

          {/* TRANSFORMATION FLOW CARDS */}
          <div className="trans-display-area">
            {beforeAfterState === 'before' ? (
              <div className="trans-state-card state-before">
                <div className="state-badge badge-before">STATE: CURRENT MANUAL BOTTLENECKS</div>
                
                <div className="trans-flow-row">
                  <div className="trans-node danger">
                    <span className="tn-step">01</span>
                    <h4>Manual Work</h4>
                    <p>Repetitive data entry and manual document copy-pasting.</p>
                  </div>
                  <span className="trans-arrow">➔</span>
                  <div className="trans-node danger">
                    <span className="tn-step">02</span>
                    <h4>Multiple Tools</h4>
                    <p>Siloed applications requiring context switching.</p>
                  </div>
                  <span className="trans-arrow">➔</span>
                  <div className="trans-node danger">
                    <span className="tn-step">03</span>
                    <h4>Slow Processes</h4>
                    <p>Days or weeks to complete routine operational requests.</p>
                  </div>
                  <span className="trans-arrow">➔</span>
                  <div className="trans-node danger">
                    <span className="tn-step">04</span>
                    <h4>Scattered Data</h4>
                    <p>Unindexed files making information impossible to find.</p>
                  </div>
                  <span className="trans-arrow">➔</span>
                  <div className="trans-node danger">
                    <span className="tn-step">05</span>
                    <h4>Human Dependency</h4>
                    <p>High risk of human errors, delays, and employee burnout.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="trans-state-card state-after">
                <div className="state-badge badge-after">STATE: SOFTIVAX INTELLIGENT SYSTEM</div>

                <div className="trans-flow-row">
                  <div className="trans-node success">
                    <span className="tn-step">01</span>
                    <h4>Unified System</h4>
                    <p>Single conversational interface and central API hub.</p>
                  </div>
                  <span className="trans-arrow gold">➔</span>
                  <div className="trans-node success">
                    <span className="tn-step">02</span>
                    <h4>Automation</h4>
                    <p>Event-driven AI agents running continuous 24/7 workflows.</p>
                  </div>
                  <span className="trans-arrow gold">➔</span>
                  <div className="trans-node success">
                    <span className="tn-step">03</span>
                    <h4>AI Intelligence</h4>
                    <p>Instant RAG knowledge search and automated decisions.</p>
                  </div>
                  <span className="trans-arrow gold">➔</span>
                  <div className="trans-node success">
                    <span className="tn-step">04</span>
                    <h4>Connected Data</h4>
                    <p>High-speed vector indexes and synchronized cloud databases.</p>
                  </div>
                  <span className="trans-arrow gold">➔</span>
                  <div className="trans-node success">
                    <span className="tn-step">05</span>
                    <h4>Scalable Infrastructure</h4>
                    <p>High uptime, zero-downtime releases, and rapid growth.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* FINAL CTA & CONFIDENCE DISCLAIMER */}
      <section className="sol-cta-section">
        <div className="sol-container">
          
          <div className="sol-cta-box">
            <div className="cta-disclaimer-badge">
              <span>✦</span> DEMONSTRATION & EXAMPLE ARCHITECTURE
            </div>

            <h2 className="cta-heading">This is one possible approach.</h2>
            
            <p className="cta-text">
              Every business has different requirements. We can refine the architecture around your users, systems, data, security, and goals.
            </p>

            <div className="cta-buttons-group">
              <button className="btn-primary-new btn-large" onClick={handleDiscussClick}>
                Discuss This Solution <span className="arrow-icon">→</span>
              </button>
              
              <button className="btn-secondary-new btn-large" onClick={() => navigate('/projects')}>
                Explore Our Projects <span className="arrow-icon">→</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Solutions;
