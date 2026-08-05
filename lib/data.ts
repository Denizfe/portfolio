export const profile = {
  name: "Deniz Efe Karacakaya",
  role: "Artificial Intelligence & Data Engineering Student",
  location: "Antalya, Türkiye",
  education: "Akdeniz University — Artificial Intelligence & Data Engineering",
  headline:
    "Building AI-powered applications, cloud-native systems, and intelligent software for real-world impact.",
  email: "denizefekaracakaya14@gmail.com",
  github: "https://github.com/Denizfe",
  linkedin: "https://linkedin.com/in/denizefekaracakaya",
  kaggle: "https://kaggle.com/denizefekaracakaya",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    category: "Machine Learning & AI",
    items: [
      "LangChain",
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "MLflow",
      "Pandas",
      "NumPy",
      "OpenCV",
      "Leafmap",
      "GeoPandas",
    ],
  },
  {
    category: "Cloud & Infra",
    items: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "AWS",
      "Google Cloud",
      "Argo CD",
      "Helm",
      "MinIO",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Angular"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Node.js", "Express", "FastAPI"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Firebase"],
  },
];

export type Project = {
  slug: string;
  name: string;
  summary: string;
  stack: string[];
  github?: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "lionel",
    name: "L.I.O.N.E.L",
    summary:
      "A local-first, voice-driven autonomous agent. Bilingual (English/Turkish), MCP-native, and designed to work with the network unplugged — ADR-driven architecture with policy-gated CI.",
    stack: ["Python", "MCP", "gRPC", "OpenTelemetry", "GitHub Actions"],
    github: "https://github.com/Denizfe/L.I.O.N.E.L.git",
    featured: true,
  },
  {
    slug: "forecast",
    name: "Forecast",
    summary:
      "A forecasting platform leveraging Prophet-based time-series models and analytics for predictive stock price insights.",
    stack: ["Python", "Prophet", "Streamlit", "Machine Learning"],
    github: "https://github.com/Denizfe/forecast.git",
    featured: true,
  },
  {
    slug: "gym-buddy-ai",
    name: "Gym Buddy AI",
    summary:
      "An AI-powered fitness & nutrition assistant. Plan workouts, log exercises, analyze meals with Google Gemini, and track hydration — with Firebase-synced profiles.",
    stack: ["React", "TypeScript", "Firebase", "Google Gemini"],
    github: "https://github.com/Denizfe/gym-buddy-v2.git",
    featured: true,
  },
  {
    slug: "artifee-ai-photo-editor",
    name: "Artifee — AI Photo Editor",
    summary:
      "A browser-based AI photo editor. Paint over objects, watermarks, or text and Gemini removes them seamlessly — with one-click image enhancement.",
    stack: ["React", "TypeScript", "Google Gemini"],
    github: "https://github.com/Denizfe/Artifee-AI-Photo-Editor.git",
    featured: true,
  },
  {
    slug: "candymatch",
    name: "Candymatch",
    summary:
      "A match-3 puzzle game for Android built in Kotlin from scratch — swap candies, break ice blocks, and beat the clock across increasingly hard levels.",
    stack: ["Kotlin", "Android", "Game Logic"],
    github: "https://github.com/Denizfe/candymatch.git",
    featured: true,
  },
  {
    slug: "local-flow-mlops",
    name: "Local Flow MLOps",
    summary:
      "End-to-end local MLOps architecture designed for hardware-constrained environments. Integrates CPU offloading for large-scale training, MinIO-backed MLflow tracking, and strict declarative GitOps automation on K8s.",
    stack: ["Kubernetes", "K3s", "Docker", "MinIO", "Helm", "Argo CD", "MLflow"],
    github: "https://github.com/Denizfe/local-flow-mlops",
    featured: true,
  },
  {
    slug: "dsa-oop-assistant",
    name: "DSA & OOP Assistant",
    summary:
      "An AI-powered interactive learning assistant for Data Structures & Algorithms and OOP — with Java/Python language modes, interactive quizzes, and step-by-step Mermaid visualizations.",
    stack: ["React", "TypeScript", "Google Gemini", "Mermaid"],
    github: "https://github.com/Denizfe/DSA-OOP-Assistant",
    featured: true,
  },
  {
    slug: "langchain-multi-agent",
    name: "LangChain Multi-Agent",
    summary:
      "An intelligent system built with LangChain that coordinates multiple autonomous AI agents to collaboratively solve complex reasoning tasks.",
    stack: ["Python", "LangChain", "LLMs", "Multi-Agent"],
    github: "https://github.com/Denizfe/langchain-multiagent-project.git",
    featured: true,
  },
];

export const experience = [
  {
    period: "June 2026 — Present",
    title: "Software Engineering Intern",
    org: "ASEE",
    description:
      "Contributed to production software systems, working across the stack on internal tooling and gaining hands-on experience with enterprise development workflows.",
  },
  {
    period: "2025",
    title: "AI Workshop",
    org: "BTK Akademi",
    description:
      "Completed an intensive applied AI workshop covering machine learning fundamentals, model training, and deployment practices.",
  },
  {
    period: "2022 — Present",
    title: "AI & Data Engineering Student",
    org: "Akdeniz University",
    description:
      "Studying artificial intelligence and data engineering, with coursework spanning numerical methods, distributed systems, and applied machine learning.",
  },
  {
    period: "Ongoing",
    title: "Independent Builder",
    org: "Personal Projects",
    description:
      "Designing and shipping self-directed projects across ML, cloud infrastructure, and full-stack development — from local MLOps platforms to forecasting tools.",
  },
];

export const currentFocus = [
  "Kubernetes & Helm charts",
  "Federated learning systems",
  "Time-series forecasting",
];

export const certificates = [
  {
    name: "Python Programlama Dili",
    file: "/certificates/Python_Programlama_Dili_Sertifika.pdf",
    type: "pdf"
  },
  {
    name: "Python ile Makine Öğrenmesi Uygulamaları",
    file: "/certificates/Python_ile_Makine_Öğrenmesi_Uygulamaları_Sertifika.pdf",
    type: "pdf"
  },
  {
    name: "Yapay Zeka Atölyesi",
    file: "/certificates/Yapay_Zeka_Atölyesi_Sertifika.pdf",
    type: "pdf"
  },
  {
    name: "Yapay Zeka ve Makine Öğrenmesi",
    file: "/certificates/ml-sınav3.pdf.png",
    type: "image"
  },
  {
    name: "Yapay Zeka ve Kolaylaştırıcı Araçlar",
    file: "/certificates/Kolaylaştırıcı-3.pdf.png",
    type: "image"
  },
  {
    name: "Runtalya",
    file: "/certificates/runtalya.jpg",
    type: "image"
  },
  {
    name: "Sosyal Etkinlik",
    file: "/certificates/sosyaletkinlik.jpg",
    type: "image"
  },
];
