/**
 * ============================================================================
 * PORTFOLIO CONTENT — single source of truth
 * ============================================================================
 * Everything on the site is generated from this file. To add a new
 * experience, project, skill, course, certificate or award in the future,
 * just push a new object into the matching array below — no need to touch
 * any component. Keep the shapes (the `interface`s) consistent and the
 * site will pick up the new entry automatically.
 * ============================================================================
 */

export interface SocialLink {
  label: string;
  url: string;
  /** lucide-react icon name, see Nav/Hero/Footer for the icon map */
  icon: "github" | "linkedin" | "mail" | "phone";
}

export interface Personal {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  statement: string;
  interests: string[];
  photoUrl?: string; // e.g. "/photo.jpg" — see README for how to add your photo
  socials: SocialLink[];
}

export interface ExperienceItem {
  org: string;
  role: string;
  location: string;
  start: string;
  end: string; // use "Present" for ongoing roles
  summary?: string;
  points: string[];
  links?: { label: string; url: string }[];
}
export interface ProjectItem {
  name: string;
  tag: string; // short category label, e.g. "Flagship Academic Project"
  period: string;
  links?: { github?: string; demo?: string };
  points: string[];
  stack: string[];
  featured?: boolean;
}

export interface EducationItem {
  institution: string;
  credential: string;
  location?: string;
  start: string;
  end: string;
  details?: string[];
}

export interface CourseworkItem {
  name: string;
  grade?: string;
}

export interface CertificateItem {
  name: string;
  provider: string;
  year: string;
  url?: string;
}

export interface AwardItem {
  title: string;
  org?: string;
  year: string;
  /** optional path/URL to a certificate image or PDF proving the award, e.g. "/certificates/bestpaper.jpeg" */
  url?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ActivityItem {
  org: string;
  role: string;
  start: string;
  end: string;
}

/* ---------------------------------------------------------------------- */
/* Personal / hero content                                                */
/* ---------------------------------------------------------------------- */

export const personal: Personal = {
  name: "Vaishnavi Shanmugam",
  title: "AI & Machine Learning Engineer",
  tagline:
    "Building grounded, reasoning AI systems — from knowledge graphs and agentic RAG to production NLP pipelines.",
  location: "Colombo, Sri Lanka",
  email: "shanmugamvaishna@gmail.com",
  phone: "+94 77 666 1617",
  statement:
    "AI and Machine Learning researcher focused on building practical applications while pursuing research and development in advanced AI fields. Deeply interested in language understanding, knowledge representation and data-driven reasoning, with a strong commitment to transforming research ideas into impactful real-world systems.",
  interests: [
    "AI Research",
    "AI Reasoning",
    "Deep Learning",
    "Natural Language Processing",
    "Agentic AI",
    "Knowledge Graphs",
    "Retrieval Augmented Generation",
    "Information Extraction",
  ],
  // Drop your photo file into /public (e.g. public/photo.jpg) and set the
  // path here, for example "/photo.jpg". Leave empty to show the monogram.
  photoUrl: "/IMG_7994.jpg",
  socials: [
    { label: "GitHub", url: "https://github.com/vaishnashan", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/vaishnavi-shanmugam/", icon: "linkedin" },
    { label: "Email", url: "mailto:shanmugamvaishna@gmail.com", icon: "mail" },
    { label: "Phone", url: "tel:+94776661617", icon: "phone" },
  ],
};

/* ---------------------------------------------------------------------- */
/* Experience — add new roles at the top of the array                     */
/* ---------------------------------------------------------------------- */

export const experience: ExperienceItem[] = [
  {
    org: "ExentAI, Sri Lanka",
    role: "Associate Machine Learning Engineer",
    location: "Colombo, Sri Lanka",
    start: "Jun 2025",
    end: "Present",
    summary:
      "Production-grade AI systems, knowledge engineering, and advanced NLP research.",
    points: [
      "Enhanced a production-level Lease Agreements Field Extraction System by fixing critical bugs, expanding field coverage, implementing new client requirements, and optimizing pipelines to improve accuracy and reliability across diverse scanned and digital document formats.",
      "Designed systematic evaluation and error analysis workflows for document AI and NLP pipelines by creating representative test cases, validating extracted outputs against client requirements, and translating failure patterns into iterative model, prompt, and rule-based improvements.",
      "Refactored the existing monolithic API into two independent endpoints, internal and client-facing, reusing core logic while redesigning and optimizing the processing pipeline for better modularity and scalable deployment.",
      "Conducted research on LLMs for a Finance Assistant product by evaluating open-source models for question answering and analyzing reasoning performance.",
      "Developed and iteratively improved a Knowledge Graph pipeline for long-form documents, enabling structured extraction of entities, relationships, events, and semantic representations, with version-controlled deployment through GitLab.",
      "Contributed to a Sri Lankan Tamil NLP and gap-analysis project with the Noolaham Foundation, developing open-source model-based tools for named entity recognition, topic extraction, keyword extraction, and event extraction from digitalized Tamil textual resources.",
    ],
  },
  {
    org: "ExentAI, Sri Lanka",
    role: "Trainee Machine Learning Engineer",
    location: "Colombo, Sri Lanka",
    start: "Dec 2024",
    end: "Jun 2025",
    summary:
      "Research-driven experimentation and prototype development using SLMs for NLP applications.",
    points: [
      "Conducted applied research on SLMs across multiple NLP tasks, built an optimized FastAPI prototype endpoint for multi-task inference, and produced comprehensive technical documentation with detailed model behavior and evaluation workflow.",
      "Architected a modular PDF processing pipeline using the Docling framework to convert digital PDFs into structured representations, extracting text, tables, images and metadata with spatial annotations, with advanced table parsing, OCR fallbacks, and multi-format outputs for downstream NLP tasks.",
      "Developed a question completion prototype by fine-tuning SmolLM2 on domain-specific financial question datasets, and deployed the interactive system using Streamlit on Hugging Face Spaces to demonstrate real-time finance-aware question completion using lightweight SLMs.",
    ],
  },
  {
    org: "University of Moratuwa, Sri Lanka",
    role: "Undergraduate Research Student",
    location: "Moratuwa, Sri Lanka",
    start: "2025",
    end: "2026",
    summary:
      "Final year research project on deep-learning-based fault diagnosis for lithium-ion batteries.",
    points: [
      "Designed and trained a lightweight multi-scale CNN for 4-class Li-ion battery fault diagnosis on multivariate time series data, achieving 92.81% accuracy (0.928 weighted F1) while outperforming CNN, CNN-LSTM, GRU, and LSTM baselines with the fewest parameters (32.6K), validated through systematic ablation studies.",
      "Co-authored and presented the research paper \"Lightweight CNN-Based Embedded System for Li-Ion Battery Fault Diagnosis,\" accepted for publication at the 2026 Moratuwa Engineering Research Conference (MERCon), IEEE.",
    ],
  },
  {
    org: "Kilinochchi Divisional Secretariat",
    role: "Volunteer Software Developer",
    location: "Kilinochchi, Sri Lanka",
    start: "2025",
    end: "2025",
    summary:
      "community-service initiative building digital record-keeping tools for a government office.",
    points: [
      "Independently designed and deployed 3 web-based dashboards (Python, Streamlit) to digitize and visualize administrative data: Visitor Records, Electricity Consumption, and Water Supply Tracking.",
      "Built end-to-end — data pipeline, interactive UI, and cloud deployment — currently used by Divisional Secretariat staff for daily record-keeping and reporting, replacing manual paper-based logs.",
    ],
    links: [
      { label: "Visitor Dashboard", url: "https://visitordashboardnew-refj3ovpufdzjt3aqhxdak.streamlit.app/" },
      { label: "Electricity Dashboard", url: "https://electricity-3yrocwmzrlmstnowdc8a8l.streamlit.app/" },
      { label: "Water Supply Dashboard", url: "https://watersuppy-arpbpuos8frf2btqyszkapp.streamlit.app/" },
    ],
  },
];

/* ---------------------------------------------------------------------- */
/* Projects — add new projects anywhere in the array                      */
/* ---------------------------------------------------------------------- */

export const projects: ProjectItem[] = [
  {
    name: "NOVA — Node Orchestrated Vector and Knowledge Assistant",
    tag: "Flagship Academic Project",
    period: "2025 – 2026",
    links: { github: "https://github.com/vaishnashan/Agentic-Hybrid-RAG-and-KG.", demo: "https://agentic-hybrid-rag-and-kg-frontend.onrender.com" },
    featured: true,
    points: [
      "Architected an Agentic Hybrid RAG + Knowledge Graph system using LangGraph to plan and decompose multi-hop questions, routing each sub-question through dense vector search, BM25 sparse retrieval, and reranking, fused with an LLM-populated Neo4j graph for grounded reasoning.",
      "Engineered production-grade resilience with per-dependency circuit breakers and exponential backoff retries around LLM, Neo4j, and vector store calls, Upstash Redis response caching, input validation guardrails, and Langfuse distributed tracing for observability.",
      "Decoupled the system into independently containerized FastAPI and Streamlit services with Docker and Docker Compose, deployed as live services on Render, with the complete pipeline version-controlled on GitHub.",
    ],
    stack: ["LangGraph", "Neo4j", "FastAPI", "Streamlit", "Docker", "Redis", "Langfuse"],
  },
  {
    name: "Persistent Memory Infrastructure with MCP",
    tag: "AI Infrastructure Project",
    period: "2026",
    links: { github: "https://github.com/vaishnashan/MemoraGraph" },
    featured: true,
    points: [
      "Architected a reusable AI memory infrastructure exposing schema-validated MCP tools, letting external AI agents persist, search, update, and forget organisational or personal knowledge independent of any single chat interface.",
      "Built a write-time ingestion pipeline using Docling for multimodal document parsing and Sentence Transformer embeddings, feeding a hybrid retrieval engine that fuses dense vector search, BM25, and fuzzy matching via Reciprocal Rank Fusion (RRF) with LLM-extracted entities in a FalkorDB knowledge graph for two-hop contextual expansion.",
      "Implemented memory lifecycle management with duplicate detection and active/superseded memory versioning, and containerized independently deployable FastAPI ingestion and MCP services with Docker, version-controlled on GitHub.",
    ],
    stack: ["MCP", "Docling", "FalkorDB", "Sentence Transformers", "FastAPI", "Docker"],
  },
  {
    name: "Aria — AI Voice Receptionist for Hotel Bookings",
    tag: "Voice AI Agent",
    period: "2026",
    links: { github: "https://github.com/vaishnashan/Aria", demo: "https://ariafrontend-sepia.vercel.app/" },
    points: [
      "Built an end-to-end AI voice receptionist that handles hotel room bookings through natural spoken conversation, using the browser's Web Speech API for a full speech-to-text and text-to-speech interaction loop.",
      "Designed a FastAPI backend integrating a Groq-hosted Llama 3.3 70B model via native tool-calling, so every guest-facing action — checking availability, creating a booking, looking up or cancelling a reservation, escalating to a human — is executed and validated against a PostgreSQL (Supabase) database rather than generated by the model.",
      "Implemented booking business logic with thread-safe locking and atomic re-validation of room availability at write time to prevent double-booking, alongside full per-session conversation transcript logging.",
      "Built a separate admin dashboard for reviewing call transcripts, booking and cancellation history, escalations, and live usage stats, decoupled from the guest-facing voice console.",
      "Containerized the backend and frontend independently with Docker, and deployed them as live services on Render (backend) and Vercel (frontend), with environment-driven CORS and API URL configuration.",
    ],
    stack: ["FastAPI", "Llama 3.3 70B", "Groq", "Supabase", "Web Speech API", "Docker", "Vercel"],
  },
];

/* ---------------------------------------------------------------------- */
/* Skills                                                                  */
/* ---------------------------------------------------------------------- */

export const skills: SkillGroup[] = [
  { category: "Programming", items: ["Python"] },
  {
    category: "LLM Orchestration & Agentic Systems",
    items: ["LangChain", "LangGraph", "Ollama", "Vector Databases"],
  },
  {
    category: "Knowledge Engineering",
    items: ["Neo4j (Cypher, Aura)", "NetworkX", "spaCy", "GLiNER"],
  },
  {
    category: "Frameworks & Tools",
    items: ["FastAPI", "Streamlit", "Docling", "LlamaParse", "Langfuse"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Docker Compose", "Google Cloud Platform", "Git", "GitHub", "GitLab", "Postman"],
  },
];

export const strengths: string[] = [
  "Cross-Functional Collaboration",
  "Ownership & Time Management",
  "Problem Solving Under Ambiguity",
  "Technical Writing & Documentation",
];

/* ---------------------------------------------------------------------- */
/* Education                                                               */
/* ---------------------------------------------------------------------- */

export const education: EducationItem[] = [
  {
    institution: "University of Moratuwa, Sri Lanka",
    credential: "B.Sc. Engineering (Hons) in Electrical Engineering",
    start: "Jul 2022",
    end: "Aug 2026",
    details: [
      "CGPA: 3.61",
      "Dean's List Honoree (Semester GPA > 3.9): Semesters 4, 6, 7, and 8",
    ],
  },
  {
    institution: "Kilinochchi Maha Vidyalayam",
    credential: "GCE Advanced Level — Mathematics, Physics, Chemistry",
    start: "Grades 6–13",
    end: "Oct 2020",
    details: [
      "3A passes · Kilinochchi District Rank 1 · Island Rank 496 · Z-score: 2.2801",
    ],
  },
  {
    institution: "Kilinochchi Maha Vidyalayam",
    credential: "GCE Ordinary Level",
    start: "",
    end: "Dec 2017",
    details: ["Passed with 9A passes"],
  },
];

export const coursework: CourseworkItem[] = [
  { name: "Applied Statistics", grade: "A+" },
  { name: "Embedded Systems and Applications", grade: "A+" },
  { name: "Pattern Recognition", grade: "A" },
  { name: "Data Analytics in Power Systems", grade: "A" },
  { name: "Modular Software Development", grade: "A" },
  { name: "Numerical Methods", grade: "A" },
  { name: "Design Project", grade: "A" },
  { name: "Control Systems", grade: "A" },
];

/* ---------------------------------------------------------------------- */
/* Certificates & online courses                                          */
/* ---------------------------------------------------------------------- */

export const certificates: CertificateItem[] = [
  {
    name: "Machine Learning Specialization",
    provider: "DeepLearning.AI · Stanford",
    year: "2024",
  },
  { name: "Machine Learning with Python", provider: "IBM", year: "2023" },
  {
    name: "Introduction to Deep Learning",
    provider: "Great Learning",
    year: "2023",
  },
];

/* ---------------------------------------------------------------------- */
/* Honors & awards                                                        */
/* ---------------------------------------------------------------------- */

export const awards: AwardItem[] = [
  {
    title: "Best Paper Award — \"Lightweight CNN-Based Embedded System for Li-Ion Battery Fault Diagnosis\"",
    org: "MERCon 2026 (IEEE) — Robotics and Intelligent Automated Systems Track, University of Moratuwa",
    year: "2026",
    url: "/certificates/bestpaper.jpeg",
  },
  {
    title: "Dialog Merit Scholarship",
    org: "Based on GCE Advanced Level performance",
    year: "2020",
  },
  {
    title: "NDB Capital Scholarship",
    org: "Based on GCE Advanced Level performance",
    year: "2021",
  },
  {
    title: "Dean's List — Semesters 4 (3.94), 6 (4.00), 7 (3.95), 8 (4.00)",
    org: "University of Moratuwa",
    year: "2024 – 2026",
  },
];

/* ---------------------------------------------------------------------- */
/* Clubs & societies                                                       */
/* ---------------------------------------------------------------------- */

export const activities: ActivityItem[] = [
  {
    org: "EESoc",
    role: "Student Member",
    start: "2022",
    end: "2026",
  },
  {
    org: "IEEE Power & Energy Society",
    role: "Finance Pillar Member",
    start: "2023",
    end: "2024",
  },
];

/* ---------------------------------------------------------------------- */
/* Site navigation — add a section? add its anchor here too                */
/* ---------------------------------------------------------------------- */

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

