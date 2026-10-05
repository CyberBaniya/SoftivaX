export const mainCategories = [
  {
    id: "01",
    slug: "web-development",
    title: "WEB DEVELOPMENT",
    subtitle: "Modern websites and full-stack web applications built around your business requirements.",
    description: "Modern websites and web applications designed for performance, usability, scalability, and business growth.",
    tags: ["React", "Java", "Spring Boot", "Node.js", "Next.js", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    windowTitle: "SoftivaX Web Engine • Frontend & Backend Workspace",
    layoutType: "featured-large"
  },
  {
    id: "02",
    slug: "app-development",
    title: "APP DEVELOPMENT",
    subtitle: "Native and cross-platform mobile applications engineered for iOS, Android, and enterprise mobility.",
    description: "High-performance mobile applications built with Flutter, React Native, Swift, and Kotlin for modern iOS & Android devices.",
    tags: ["Flutter", "React Native", "Android", "iOS", "Swift", "Kotlin"],
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    windowTitle: "Mobile Studio • iOS & Android SDK Workspace",
    layoutType: "standard"
  },
  {
    id: "03",
    slug: "game-development",
    title: "GAME DEVELOPMENT",
    subtitle: "Immersive 2D, 3D, mobile, and multiplayer gaming experiences powered by modern engines.",
    description: "Full-cycle game development services covering mechanics, graphics, multiplayer backends, and platform optimization.",
    tags: ["Unity", "Unreal Engine", "C#", "C++", "3D Assets", "Physics"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    windowTitle: "Game Studio • 3D Workstation & Render Pipeline",
    layoutType: "standard"
  },
  {
    id: "04",
    slug: "deployment",
    title: "DEPLOYMENT & DEVOPS",
    subtitle: "Automated CI/CD pipelines, container orchestration, cloud infrastructure, and 24/7 production reliability.",
    description: "End-to-end cloud deployment, server configuration, Kubernetes orchestration, Docker containerization, and monitoring.",
    tags: ["Docker", "Kubernetes", "AWS", "Google Cloud", "Nginx", "Linux"],
    imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&q=80",
    windowTitle: "DevOps Mesh • K8s & Infrastructure Console",
    layoutType: "featured-large"
  },
  {
    id: "05",
    slug: "ai-solutions",
    title: "AI SOLUTIONS",
    subtitle: "Intelligent AI agents, conversational assistants, RAG retrieval systems, and document processing applications.",
    description: "Custom AI applications leveraging LLMs, RAG vector search, multi-agent workflows, and intelligent enterprise automation.",
    tags: ["OpenAI", "Claude", "Gemini", "LangChain", "RAG", "Vector DB"],
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    windowTitle: "SoftivaX AI Engine • Assistant & Knowledge Hub",
    layoutType: "standard"
  },
  {
    id: "06",
    slug: "machine-learning",
    title: "MACHINE LEARNING",
    subtitle: "Data science pipelines, predictive modeling, classification, recommendation engines, and end-to-end MLOps.",
    description: "Data processing, model training, feature engineering, statistical evaluation, and production ML API deployments.",
    tags: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "MLflow"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    windowTitle: "ML Lab • Model Training & Data Analytics Notebook",
    layoutType: "standard"
  },
  {
    id: "07",
    slug: "resume-designing",
    title: "RESUME DESIGNING",
    subtitle: "Professional ATS-compliant resumes, executive CVs, tech/non-tech profiles, and career formatting studio.",
    description: "Custom-crafted professional resume designs tailored for Indian, US, and international job markets, ATS scanners, and career growth.",
    tags: ["Tech Resume", "Non-Tech Resume", "ATS Resume", "Indian CV", "US Format", "LinkedIn"],
    imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
    windowTitle: "Resume Studio • Professional CV Formatting & ATS Suite",
    layoutType: "featured-large"
  }
];

export const detailedServices = {
  "web-development": {
    heading: "Web Development",
    description: "Modern websites and web applications designed for performance, usability, scalability, and business growth.",
    subServices: [
      {
        id: "01",
        title: "Frontend Development",
        description: "Responsive, ultra-fast web user interfaces crafted with modern component frameworks and state management.",
        technologies: ["React", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript"],
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "02",
        title: "Backend Development",
        description: "Secure, enterprise-grade REST APIs, business logic layers, and relational database services.",
        technologies: ["Java", "Spring Boot", "Node.js", "Python", "REST APIs"],
        imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "03",
        title: "Full Stack Development",
        description: "End-to-end web applications combining modern frontend UIs with powerful microservices backends.",
        technologies: ["React", "Spring Boot", "Node.js", "PostgreSQL", "MySQL"],
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "04",
        title: "E-Commerce Development",
        description: "Scalable online stores with product catalog management, secure checkout, order processing, and payment gateway integration.",
        technologies: ["React", "Spring Boot", "Node.js", "Payment APIs", "MySQL/PostgreSQL"],
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "05",
        title: "Corporate Websites",
        description: "High-impact enterprise portals designed to establish industry authority, engage clients, and support marketing goals.",
        technologies: ["React", "Next.js", "CMS", "SEO", "Responsive Design"],
        imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "06",
        title: "Portfolio Websites",
        description: "Sleek, editorial personal and agency portfolio sites built to present projects with smooth animations.",
        technologies: ["React", "Next.js", "HTML", "CSS"],
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "07",
        title: "Landing Pages",
        description: "High-converting single page experiences optimized for speed, clarity, and targeted lead generation.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "08",
        title: "Admin Dashboards",
        description: "Data-dense internal administration portals featuring real-time data visualization, tables, and role-based access control.",
        technologies: ["React", "Charts", "REST APIs", "Authentication"],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "09",
        title: "CMS Development",
        description: "Custom headless and traditional content management systems designed for painless content publishing.",
        technologies: ["WordPress", "Headless CMS", "React", "REST APIs"],
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "10",
        title: "API Development",
        description: "High-throughput JSON REST microservices built for inter-system communication and third-party API exposure.",
        technologies: ["REST", "JSON", "Spring Boot", "Node.js", "Python"],
        imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },

  "app-development": {
    heading: "App Development",
    description: "Native and cross-platform mobile applications engineered for performance, usability, scalability, and business growth.",
    subServices: [
      { id: "01", title: "Android Development", description: "Native Android apps built with Kotlin & Java optimized for modern Android smartphones & tablets.", technologies: ["Android", "Kotlin", "Java", "REST APIs"], imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" },
      { id: "02", title: "iOS Development", description: "Native Apple iOS apps designed with Swift & Swift UI adherence to Apple Human Interface Guidelines.", technologies: ["Swift", "Xcode", "iOS SDK", "REST APIs"], imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" },
      { id: "03", title: "Cross-Platform Apps", description: "Single codebase mobile applications that deliver native performance on both iOS and Android.", technologies: ["Flutter", "React Native", "Dart", "TypeScript"], imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80" },
      { id: "04", title: "Flutter Development", description: "Expressive, flexible mobile UIs built with Google's Flutter framework for lightning fast render performance.", technologies: ["Flutter", "Dart", "Firebase", "REST APIs"], imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80" },
      { id: "05", title: "React Native Development", description: "Cross-platform mobile applications leveraging React ecosystem tools, Redux state, and native modules.", technologies: ["React Native", "TypeScript", "Redux", "Node.js"], imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" },
      { id: "06", title: "Business Applications", description: "Mobile enterprise applications for field teams, approval workflows, inventory tracking, and client portals.", technologies: ["React Native", "Flutter", "REST APIs", "Security"], imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80" },
      { id: "07", title: "E-Commerce Apps", description: "Mobile shopping apps featuring product catalogs, cart management, instant checkout, and push notifications.", technologies: ["Flutter", "React Native", "Payment Gateways", "Firebase"], imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
      { id: "08", title: "Admin / Management Apps", description: "Mobile management consoles providing operational oversight and real-time alerts on the move.", technologies: ["React Native", "Flutter", "Realtime Analytics"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
      { id: "09", title: "API Integration & Push Services", description: "Seamless integration of push notifications, real-time WebSockets, background synchronization, and cloud storage.", technologies: ["Firebase", "WebSockets", "REST APIs"], imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80" },
      { id: "10", title: "App UI/UX & Design Systems", description: "Intuitive mobile user interface designs, wireframes, interactive prototypes, and touch-first navigation.", technologies: ["Figma", "Prototyping", "Mobile Design"], imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" }
    ]
  },

  "game-development": {
    heading: "Game Development",
    description: "Immersive 2D, 3D, mobile, and multiplayer gaming experiences powered by modern engines.",
    subServices: [
      { id: "01", title: "2D Game Development", description: "Engaging 2D games with custom physics, sprite animations, level design, and polished mechanics.", technologies: ["Unity", "C#", "SpriteKit", "Physics"], imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" },
      { id: "02", title: "3D Game Development", description: "Visually rich 3D gaming experiences featuring realistic environments, character rigging, and lighting shader effects.", technologies: ["Unity", "Unreal Engine", "C++", "C#"], imageUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80" },
      { id: "03", title: "Mobile Games", description: "Optimized mobile games tailored for iOS and Android devices with touch controls, ads, and in-app purchases.", technologies: ["Unity", "C#", "iOS", "Android", "Optimization"], imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" },
      { id: "04", title: "PC & Console Games", description: "High-fidelity PC games engineered in Unreal Engine & Unity with advanced graphics rendering and input mapping.", technologies: ["Unreal Engine", "C++", "High-End Graphics"], imageUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80" },
      { id: "05", title: "Multiplayer & Networked Games", description: "Real-time networked multiplayer infrastructure with low-latency matchmaking and server synchronization.", technologies: ["Photon", "Mirror", "Node.js", "WebSockets"], imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" },
      { id: "06", title: "Game UI/UX & HUD Design", description: "Diegetic and overlay heads-up display (HUD) systems, inventory menus, settings, and player interface design.", technologies: ["Unity UI", "UMG", "Canvas", "Animation"], imageUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80" },
      { id: "07", title: "Game Prototyping & Mechanics", description: "Rapid game design validation, player movement mechanics, weapon physics, and gameplay loop testing.", technologies: ["Game Design", "Physics", "Rapid Prototyping"], imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" },
      { id: "08", title: "Game Backend & Leaderboards", description: "Cloud backends for player authentication, global leaderboards, inventory persistence, and telemetry.", technologies: ["Firebase", "Node.js", "PostgreSQL", "AWS"], imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80" },
      { id: "09", title: "Game Optimization & Performance", description: "Framerate stabilization, texture compression, occlusion culling, draw call reduction, and memory profiling.", technologies: ["Profiling", "Memory Management", "Shaders"], imageUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80" },
      { id: "10", title: "AR/VR Gaming Experiences", description: "Interactive augmented and virtual reality gaming environments for Meta Quest, Apple Vision Pro, and mobile AR.", technologies: ["Unity AR Foundation", "Meta Quest SDK", "Unreal Engine"], imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" }
    ]
  },

  "deployment": {
    heading: "Deployment & DevOps",
    description: "Automated CI/CD pipelines, container orchestration, cloud infrastructure, and 24/7 production reliability.",
    subServices: [
      { id: "01", title: "Application Deployment", description: "Reliable production deployment of full-stack web and backend applications.", technologies: ["Docker", "Linux", "Nginx", "Node.js"], imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80" },
      { id: "02", title: "Cloud Deployment", description: "Multi-region cloud infrastructure configuration on AWS, Azure, and Google Cloud Platform.", technologies: ["AWS", "Azure", "Google Cloud", "Terraform"], imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" },
      { id: "03", title: "Docker Deployment", description: "Containerized deployment environments ensuring consistent behavior between staging and production.", technologies: ["Docker", "Docker Compose", "Containers"], imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80" },
      { id: "04", title: "Kubernetes Deployment", description: "Production Kubernetes cluster deployment with automatic scaling, self-healing, and service discovery.", technologies: ["Kubernetes", "Helm", "K8s Mesh"], imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80" },
      { id: "05", title: "CI/CD Pipelines", description: "Automated code testing, building, scanning, and zero-downtime deployment pipelines.", technologies: ["GitHub Actions", "Jenkins", "GitLab CI"], imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80" },
      { id: "06", title: "Linux Server Deployment", description: "Hardened Ubuntu / Debian / RHEL server provisioning, firewall configuration, and systemctl services.", technologies: ["Linux", "Ubuntu", "Bash", "SSH"], imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" },
      { id: "07", title: "AWS Deployment", description: "AWS EC2, ECS, S3, RDS, CloudFront, and Route53 infrastructure setup and IAM security policy configuration.", technologies: ["AWS", "EC2", "RDS", "S3"], imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" },
      { id: "08", title: "Azure Deployment", description: "Azure App Services, Virtual Machines, Azure SQL, and Blob Storage deployment management.", technologies: ["Azure", "App Services", "Azure DevOps"], imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" },
      { id: "09", title: "Google Cloud Deployment", description: "Google Cloud Run, GKE, Compute Engine, BigQuery, and Cloud Storage setup.", technologies: ["Google Cloud", "GKE", "Cloud Run"], imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" },
      { id: "10", title: "Nginx / Reverse Proxy", description: "Nginx reverse proxy, load balancing, rate limiting, and SSL termination configuration.", technologies: ["Nginx", "Reverse Proxy", "SSL"], imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80" },
      { id: "11", title: "SSL / HTTPS Setup", description: "Let's Encrypt / Certbot automated SSL certificate provisioning and TLS 1.3 security hardening.", technologies: ["SSL", "Certbot", "HTTPS", "TLS"], imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80" },
      { id: "12", title: "Domain & DNS Configuration", description: "Domain record management, Cloudflare integration, A/AAAA records, CNAME, and MX setup.", technologies: ["DNS", "Cloudflare", "Domain"], imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" },
      { id: "13", title: "Database Deployment", description: "PostgreSQL, MySQL, and Redis production database setup with connection pooling and security.", technologies: ["PostgreSQL", "MySQL", "Redis"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
      { id: "14", title: "Production Environment Setup", description: "Environment variable isolation, secret management, process supervision, and health monitoring.", technologies: ["PM2", "Systemd", "Environment"], imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80" },
      { id: "15", title: "Monitoring & Logging", description: "Prometheus, Grafana, Datadog, and ELK stack integration for real-time telemetry.", technologies: ["Prometheus", "Grafana", "Logs"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
      { id: "16", title: "Backup & Recovery", description: "Automated snapshot routines, database dumps, offsite S3 backups, and disaster recovery plans.", technologies: ["Backups", "S3", "Disaster Recovery"], imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" },
      { id: "17", title: "Containerization", description: "Converting legacy and new applications into optimized, lightweight Docker container images.", technologies: ["Docker", "Alpine", "Multi-stage"], imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80" },
      { id: "18", title: "Infrastructure Automation", description: "Infrastructure as Code (IaC) using Terraform & Ansible for repeatable environment deployment.", technologies: ["Terraform", "Ansible", "IaC"], imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80" },
      { id: "19", title: "Server Configuration", description: "System level tuning, security audits, port management, and user permission hardening.", technologies: ["Linux", "Security", "SSH"], imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" },
      { id: "20", title: "Application Scaling", description: "Horizontal pod autoscaling, load balancing, read replicas, and caching strategies for spike traffic.", technologies: ["Autoscaling", "Redis", "Load Balancer"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" }
    ]
  },

  "ai-solutions": {
    heading: "AI Solutions",
    description: "Intelligent AI agents, conversational assistants, RAG retrieval systems, and document processing applications.",
    subServices: [
      { id: "01", title: "AI Chatbots", description: "Conversational AI chatbots trained on your custom data for 24/7 customer support & lead capture.", technologies: ["OpenAI", "LangChain", "FastAPI", "React"], imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" },
      { id: "02", title: "AI Assistants", description: "Role-specific AI copilots that assist human workflows, summarize communications, and execute tasks.", technologies: ["Claude", "GPT-4o", "Python", "REST APIs"], imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" },
      { id: "03", title: "Generative AI Applications", description: "Custom text, image, code, and content synthesis applications tailored to corporate guidelines.", technologies: ["Generative AI", "Gemini", "OpenAI", "Python"], imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" },
      { id: "04", title: "LLM Applications", description: "Custom LLM integrations with prompt engineering, function calling, fine-tuning, and guardrails.", technologies: ["LLMs", "LangChain", "LlamaIndex"], imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" },
      { id: "05", title: "AI Agents", description: "Autonomous task-executing AI agents capable of reasoning, planning, tool usage, and API actions.", technologies: ["AI Agents", "LangGraph", "Python", "APIs"], imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" },
      { id: "06", title: "Multi-Agent Systems", description: "Orchestrated networks of specialized AI agents collaborating to solve multi-step complex operations.", technologies: ["Multi-Agent", "LangGraph", "CrewAI", "Python"], imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" },
      { id: "07", title: "RAG Applications", description: "Retrieval-Augmented Generation engines combining vector search with LLMs for accurate grounding.", technologies: ["RAG", "Pinecone", "ChromaDB", "Python"], imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" },
      { id: "08", title: "Document Intelligence", description: "Converting PDFs, invoices, contracts, and scans into structured, searchable JSON knowledge.", technologies: ["Document AI", "OCR", "Vector Search", "Python"], imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" },
      { id: "09", title: "AI Search", description: "Semantic vector search engines that understand query intent beyond exact keyword matches.", technologies: ["Vector Search", "Embeddings", "Qdrant"], imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" },
      { id: "10", title: "Knowledge Assistants", description: "Internal company knowledge bases enabling employees to instantly query policies, code, and documentation.", technologies: ["Knowledge Base", "RAG", "Slack/Teams Integration"], imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" },
      { id: "11", title: "AI Automation", description: "End-to-end operational automation combining AI decision making with system webhooks & APIs.", technologies: ["Automation", "Python", "Node.js", "APIs"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
      { id: "12", title: "Workflow Agents", description: "AI agents embedded directly inside business approval pipelines, CRM routing, and email processing.", technologies: ["Workflow", "AI Agents", "REST APIs"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
      { id: "13", title: "NLP Applications", description: "Sentiment analysis, entity extraction, text classification, and multilingual translation engines.", technologies: ["NLP", "spaCy", "Transformers", "Python"], imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" },
      { id: "14", title: "Computer Vision", description: "Image classification, object detection, facial recognition, and automated visual inspection systems.", technologies: ["OpenCV", "YOLO", "PyTorch", "Python"], imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" },
      { id: "15", title: "AI API Integration", description: "Connecting commercial and open source AI models (OpenAI, Anthropic, Gemini, Llama 3) into software.", technologies: ["OpenAI", "Claude", "Gemini", "FastAPI"], imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80" },
      { id: "16", title: "AI-powered Business Applications", description: "Full-stack enterprise applications built around custom AI features, predictive dashboards, and security.", technologies: ["React", "Spring Boot", "AI Models", "PostgreSQL"], imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" }
    ]
  },

  "machine-learning": {
    heading: "Machine Learning",
    description: "Data science pipelines, predictive modeling, classification, recommendation engines, and end-to-end MLOps.",
    subServices: [
      { id: "01", title: "Predictive Modeling", description: "Statistical machine learning models trained to forecast business trends, demand, and risk factors.", technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
      { id: "02", title: "Classification", description: "Binary and multi-class decision models for fraud detection, lead scoring, and spam detection.", technologies: ["Python", "RandomForest", "Scikit-learn"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
      { id: "03", title: "Regression", description: "Continuous numerical estimation models for pricing analysis, revenue projection, and property valuation.", technologies: ["Python", "Linear Regression", "NumPy"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
      { id: "04", title: "Clustering", description: "Unsupervised machine learning for customer segmentation, pattern discovery, and data grouping.", technologies: ["K-Means", "DBSCAN", "Python", "Pandas"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
      { id: "05", title: "Recommendation Systems", description: "Collaborative and content-based recommendation engines for e-commerce and media platforms.", technologies: ["RecSys", "Python", "PyTorch", "Redis"], imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
      { id: "06", title: "Forecasting", description: "Time-series forecasting models using ARIMA, Prophet, and LSTM for inventory & sales prediction.", technologies: ["Prophet", "Time-Series", "Python"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
      { id: "07", title: "Anomaly Detection", description: "Real-time outlier detection systems identifying network breaches, system failures, and fraudulent transactions.", technologies: ["IsolationForest", "PyTorch", "Python"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
      { id: "08", title: "Natural Language Processing", description: "Custom NLP models for sentiment analysis, topic modeling, named entity recognition, and text summaries.", technologies: ["Transformers", "spaCy", "PyTorch", "Python"], imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" },
      { id: "09", title: "Computer Vision", description: "Deep learning convolutional neural networks (CNNs) for image recognition, OCR, and defect inspection.", technologies: ["PyTorch", "TensorFlow", "OpenCV"], imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" },
      { id: "10", title: "Model Training", description: "Distributed GPU training pipelines, hyperparameter tuning, and cross-validation strategy.", technologies: ["PyTorch", "TensorFlow", "CUDA", "Python"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
      { id: "11", title: "Model Evaluation", description: "Comprehensive model evaluation metrics including ROC-AUC, Precision, Recall, F1-score, and confusion matrices.", technologies: ["Scikit-learn", "MLflow", "Python"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
      { id: "12", title: "Feature Engineering", description: "Data transformation, normalization, one-hot encoding, feature extraction, and dimensionality reduction.", technologies: ["Pandas", "NumPy", "Scikit-learn"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
      { id: "13", title: "Data Preprocessing", description: "Handling missing values, outlier removal, noise reduction, and automated ETL pipelines.", technologies: ["Python", "Pandas", "PySpark"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
      { id: "14", title: "Model Deployment", description: "Deploying trained ML models into production microservices with REST endpoints and low latency.", technologies: ["FastAPI", "Docker", "MLflow", "AWS"], imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80" },
      { id: "15", title: "ML APIs", description: "High-throughput inference APIs optimized for real-time predictions and batch scoring.", technologies: ["FastAPI", "Python", "gRPC", "REST"], imageUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80" },
      { id: "16", title: "ML Pipelines", description: "Automated end-to-end MLOps pipelines covering data ingestion, retraining, validation, and deployment.", technologies: ["MLflow", "Kubeflow", "Airflow", "Python"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" }
    ]
  },

  "resume-designing": {
    heading: "Resume & CV Designing Studio",
    description: "Professional ATS-compliant resumes, executive CVs, tech/non-tech profiles, and career formatting studio.",
    subCategories: [
      {
        categoryTitle: "TECH RESUMES",
        items: [
          { id: "01", title: "Software Developer Resume", description: "Custom tech resume showcasing full-stack skills, Git repos, projects, system architecture, and core stack.", technologies: ["Full Stack", "Java", "React", "ATS Optimized"], imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80" },
          { id: "02", title: "Java Developer Resume", description: "Tailored Java & Spring Boot engineer resume emphasizing microservices, SQL, APIs, and enterprise projects.", technologies: ["Java", "Spring Boot", "Microservices", "ATS Scannable"], imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80" },
          { id: "03", title: "AI / ML Engineer Resume", description: "Data science and AI engineer CV highlighting model deployment, Python, PyTorch, RAG, and achievements.", technologies: ["Python", "PyTorch", "AI Models", "ATS Ready"], imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80" },
          { id: "04", title: "Data Analyst / Engineer Resume", description: "Structured resume focusing on SQL pipelines, ETL, data modeling, BI dashboards, and metrics.", technologies: ["SQL", "Python", "ETL", "BI Dashboards"], imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80" },
          { id: "05", title: "DevOps Engineer Resume", description: "Cloud infrastructure CV featuring Docker, Kubernetes, CI/CD pipelines, AWS, and server automation.", technologies: ["Docker", "Kubernetes", "AWS", "CI/CD"], imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80" }
        ]
      },
      {
        categoryTitle: "NON-TECH RESUMES",
        items: [
          { id: "06", title: "HR & Talent Acquisition Resume", description: "Impact-driven HR resume focusing on talent management, recruitment metrics, and organizational policy.", technologies: ["HR Metrics", "Talent Acquisition", "ATS Format"], imageUrl: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=800&q=80" },
          { id: "07", title: "Sales & Marketing Resume", description: "High-converting sales CV highlighting quota achievements, revenue growth, CRM, and campaign management.", technologies: ["Sales Growth", "CRM", "Marketing Strategy"], imageUrl: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=800&q=80" },
          { id: "08", title: "Finance & Accounting Resume", description: "Clean, quantitative financial CV showcasing audit, budgeting, reporting, and ERP software expertise.", technologies: ["Financial Modeling", "Reporting", "Compliance"], imageUrl: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=800&q=80" },
          { id: "09", title: "Operations & Business Admin Resume", description: "Process-oriented administration resume emphasizing workflow optimization and team management.", technologies: ["Process Optimization", "Logistics", "Leadership"], imageUrl: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=800&q=80" }
        ]
      },
      {
        categoryTitle: "REGIONAL & FORMAT TYPES",
        items: [
          { id: "10", title: "Indian Resume Format", description: "Tailored for top Indian tech & corporate recruiters, matching local HR expectations and project disclosures.", technologies: ["Indian Corporate Format", "ATS Friendly", "Detailed Projects"], imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80" },
          { id: "11", title: "US Resume Format", description: "Concise 1-page US style resume highlighting action verbs, bullet points, quantifiable metrics, and impact.", technologies: ["US Single Page", "Action Verbs", "ATS Pass Rate"], imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80" },
          { id: "12", title: "International Resume", description: "Global standard CV formatted for European, UK, Middle East, and remote enterprise applications.", technologies: ["International Standard", "Global Hiring", "Multi-Region"], imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80" },
          { id: "13", title: "ATS-Compliant Resume", description: "Engineered specifically to pass Automated Tracking Systems (Workday, Greenhouse, Taleo) with 95%+ parse rates.", technologies: ["ATS Scanner Tested", "Parse Friendly", "Standard Fonts"], imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80" },
          { id: "14", title: "Academic & Research CV", description: "Detailed multi-page academic CV formatting publications, research, teaching, grants, and credentials.", technologies: ["Publications", "Research", "Academic Standards"], imageUrl: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=800&q=80" },
          { id: "15", title: "Executive Resume", description: "Sophisticated executive profile designed for Directors, VPs, CTOs, and C-level leaders.", technologies: ["Executive Branding", "C-Level Leadership", "Strategic Impact"], imageUrl: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=800&q=80" },
          { id: "16", title: "Fresher & Graduate Resume", description: "Entry-level resume highlighting academic projects, internships, certifications, and core technical skills.", technologies: ["Fresher Friendly", "Project Focus", "Skills Highlight"], imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80" },
          { id: "17", title: "Experienced Professional Resume", description: "Career progression resume mapping promotions, key milestones, domain expertise, and system achievements.", technologies: ["Career Progression", "Milestones", "Domain Expert"], imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80" },
          { id: "18", title: "LinkedIn Profile Optimization", description: "Matching your resume to a high-converting LinkedIn profile with optimized headlines, summary, and skills.", technologies: ["LinkedIn SEO", "Headline Crafting", "Personal Brand"], imageUrl: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=800&q=80" },
          { id: "19", title: "Resume Formatting & Polish", description: "Converting messy or wordy draft resumes into clean, modern, perfectly aligned PDF designs.", technologies: ["PDF Layout", "Typography Polish", "Alignment"], imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80" },
          { id: "20", title: "Complete Resume Redesign", description: "Total overhaul of your existing resume visual layout, structure, phrasing, and executive presentation.", technologies: ["Total Overhaul", "Modern Design", "Professional Pitch"], imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80" }
        ]
      }
    ]
  }
};
