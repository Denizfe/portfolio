export const profile = {
  name: "Deniz Efe Karacakaya",
  role: "Artificial Intelligence & Data Engineering Student",
  location: "Antalya, Türkiye",
  education: "Akdeniz University — Artificial Intelligence & Data Engineering",
  headline:
    "Building AI-powered applications, cloud-native systems, and intelligent software for real-world impact.",
  email: "denizefekaracakaya@gmail.com",
  github: "https://github.com/Denizfe",
  linkedin: "https://linkedin.com/in/denizefekaracakaya",
  kaggle: "https://kaggle.com/denizefekaracakaya",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    category: "Machine Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
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
    slug: "chronos",
    name: "Chronos",
    summary:
      "A time-series forecasting platform that turns raw market and sensor data into actionable predictions with an interactive Streamlit interface.",
    stack: ["Python", "Prophet", "Streamlit", "Docker"],
    github: "https://github.com/Denizfe/chronos",
    featured: true,
  },
  {
    slug: "gym-buddy-ai",
    name: "Gym Buddy AI",
    summary:
      "A computer-vision workout companion that tracks form and reps in real time using pose estimation, giving instant feedback during training.",
    stack: ["Python", "OpenCV", "PyTorch", "FastAPI"],
    github: "https://github.com/Denizfe/gym-buddy-ai",
    featured: true,
  },
  {
    slug: "artifee-ai-photo-editor",
    name: "Artifee — AI Photo Editor",
    summary:
      "A browser-based photo editor with generative AI retouching, background replacement, and style transfer built for speed and simplicity.",
    stack: ["Next.js", "TypeScript", "TensorFlow.js"],
    github: "https://github.com/Denizfe/artifee",
    featured: true,
  },
  {
    slug: "forest-fire-analysis",
    name: "Forest Fire Analysis",
    summary:
      "A geospatial risk-modeling pipeline that maps forest fire spread probability using satellite imagery and climate data.",
    stack: ["Python", "GeoPandas", "Leafmap", "Scikit-Learn"],
    github: "https://github.com/Denizfe/forest-fire-analysis",
    featured: true,
  },
  {
    slug: "local-flow-mlops",
    name: "Local Flow MLOps",
    summary:
      "A self-hosted MLOps platform on K3s with MinIO object storage and Sealed Secrets, built to run a full model lifecycle entirely on local hardware.",
    stack: ["Kubernetes", "K3s", "MinIO", "Helm", "Argo CD"],
    github: "https://github.com/Denizfe/local-flow-mlops",
    featured: true,
  },
];

export const experience = [
  {
    period: "2025",
    title: "Software Engineering Intern",
    org: "ASEE",
    description:
      "Contributed to production software systems, working across the stack on internal tooling and gaining hands-on experience with enterprise development workflows.",
  },
  {
    period: "2024",
    title: "AI Workshop Graduate",
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
