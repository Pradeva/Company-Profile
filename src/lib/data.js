// =====================================================================
// SUMBER DATA TUNGGAL (frontend-only, tanpa backend/DB).
// Edit file ini untuk mengubah konten situs. Cocok untuk company profile
// / portofolio jasa yang kontennya jarang berubah.
// =====================================================================

export const company = {
  name: "Nevra Studio",
  tagline: "We design, build, and ship reliable digital products.",
  shortDesc:
    "A software studio helping businesses turn ideas into fast, modern, and dependable web, mobile, and computer-vision solutions.",
  about:
    "Nevra Studio is an independent software studio founded on a simple belief: good software should be reliable, fast, and a pleasure to use. We partner with startups, SMEs, and teams to design and engineer products end to end, from clean back-end systems to polished interfaces and intelligent vision solutions.",
  email: "hello@nevrastudio.com",
  phone: "+62 812-3456-7890",
  address: "Bekasi, Indonesia (Remote worldwide)",
  foundedYear: 2022,
  socials: {
    github: "https://github.com/Pradeva",
    linkedin: "https://www.linkedin.com/in/pradeva-fairuz-zabbar-a06055196/",
    instagram: "https://www.instagram.com/prdvfrzzbbr/",
  },
  stats: [
    { value: "30+", label: "Projects delivered" },
    { value: "20+", label: "Happy clients" },
    { value: "3+", label: "Years of experience" },
    { value: "100%", label: "Commitment" },
  ],
  values: [
    {
      title: "Reliability first",
      description:
        "We build systems that stay up and behave predictably, with clean architecture and sensible defaults.",
    },
    {
      title: "Speed & craft",
      description:
        "Fast load times, smooth interactions, and attention to detail in every pixel and every query.",
    },
    {
      title: "Honest partnership",
      description:
        "Clear communication, realistic timelines, and no over-promising. We tell you what works.",
    },
  ],
};

// Layanan yang ditawarkan.
export const services = [
  {
    id: "web",
    icon: "FiGlobe",
    title: "Web Development",
    description:
      "Modern, responsive websites and web apps built with React and Next.js, optimized for speed and SEO.",
  },
  {
    id: "backend",
    icon: "FiServer",
    title: "Back-End & APIs",
    description:
      "Scalable REST APIs and back-end systems with Node.js and Express, secure authentication, and clean data models.",
  },
  {
    id: "mobile",
    icon: "FiSmartphone",
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications with Flutter and React Native for Android and iOS.",
  },
  {
    id: "vision",
    icon: "FiEye",
    title: "Computer Vision",
    description:
      "AI-powered detection and surveillance systems using OpenCV and modern vision models.",
  },
  {
    id: "ui",
    icon: "FiLayout",
    title: "UI / UX Design",
    description:
      "Clean, accessible, and professional interfaces that make your product a pleasure to use.",
  },
  {
    id: "maintenance",
    icon: "FiTool",
    title: "Support & Maintenance",
    description:
      "Ongoing improvements, monitoring, and maintenance to keep your product healthy and up to date.",
  },
];

// Portofolio / studi kasus. slug dipakai untuk URL detail.
export const portfolios = [
  {
    slug: "vision-surveillance-jababeka",
    title: "Computer Vision Surveillance System",
    category: "Computer Vision",
    client: "Jababeka Industrial Estate",
    year: "2024",
    cover: "#0f766e",
    summary:
      "A real-time surveillance system detecting and analyzing activities across an industrial estate to improve security and operations.",
    description:
      "We designed and engineered a computer-vision pipeline capable of monitoring multiple camera streams in real time. The system detects anomalies and fraudulent activities, routing alerts to operators and storing evidence for review. Built with a vision model stack and an efficient streaming architecture.",
    tools: ["OpenCV", "YOLO", "Python", "MinIO", "PostgreSQL"],
    results: [
      "Real-time monitoring across dozens of camera feeds",
      "Automated anomaly detection with operator alerts",
      "Centralized evidence storage and review",
    ],
  },
  {
    slug: "video-management-system",
    title: "Video Management System",
    category: "Web Platform",
    client: "Internal / SaaS",
    year: "2024",
    cover: "#0e7490",
    summary:
      "A brand-agnostic VMS that integrates any RTSP camera for centralized monitoring, recording, and analysis.",
    description:
      "A full-stack video management platform that connects to RTSP streams from cameras of any brand, providing centralized live monitoring, scheduled recording, and playback. Built with a Node.js/Express back-end and a React front-end, with process management and scheduled jobs for reliability.",
    tools: ["Express.js", "React", "PostgreSQL", "PM2", "JWT"],
    results: [
      "Supports RTSP cameras from any brand",
      "Centralized recording and playback",
      "Reliable 24/7 operation with process management",
    ],
  },
  {
    slug: "mbravo-mobile-app",
    title: "Mbravo Field Data Mobile App",
    category: "Mobile App",
    client: "Telecom Field Ops",
    year: "2023",
    cover: "#047857",
    summary:
      "A mobile app that streamlines data collection for documenting fiber-optic network expansion in the field.",
    description:
      "A cross-platform mobile application enabling field technicians to record, organize, and share network expansion data efficiently. Offline-friendly data capture with structured syncing improved accuracy and operational workflows.",
    tools: ["React Native", "REST API"],
    results: [
      "Faster, more accurate field data capture",
      "Streamlined documentation workflow",
      "Used daily by field technicians",
    ],
  },
  {
    slug: "iot-attendance-platform",
    title: "IoT Attendance Platform",
    category: "Web Platform",
    client: "Workforce Management",
    year: "2023",
    cover: "#065f46",
    summary:
      "A web platform that automates attendance tracking through integrated IoT devices such as biometric and RFID readers.",
    description:
      "A web-based workforce attendance system integrating IoT devices to automate tracking, with real-time reporting and analytics. Clean data pipelines and a straightforward admin experience made daily management effortless.",
    tools: ["Laravel", "ZKTeco", "MySQL"],
    results: [
      "Automated attendance via IoT devices",
      "Real-time reporting & analytics",
      "Reduced manual administration",
    ],
  },
];

export function getPortfolioBySlug(slug) {
  return portfolios.find((p) => p.slug === slug);
}
