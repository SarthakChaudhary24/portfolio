// ============================================================
// portfolioData.js — Single source of truth for all portfolio content
// ============================================================

export const personalInfo = {
  name: "Sarthak Chaudhary",
  subtitle: "Computer Science Student | Full Stack Developer | Problem Solver",
  typingRoles: [
    "Web Developer",
    "AI Enthusiast",
    "IoT Builder",
    "Full Stack Developer",
  ],
  email: "sarthak.chaudhary@email.com",
  github: "https://github.com/sarthakchaudhary",
  linkedin: "https://linkedin.com/in/sarthakchaudhary",
  location: "India",
  bio: "Passionate Computer Science student building impactful web applications, exploring AI, and crafting IoT solutions.",
};

export const projects = [
  {
    id: 1,
    title: "EV Route Planner",
    description:
      "An intelligent route-planning web app for electric vehicles. Finds optimal paths considering charging stations, battery range, and real-time traffic to reduce range anxiety.",
    image: null,
    color: "#4F46E5",
    tech: ["React", "Node.js", "MongoDB", "Google Maps API", "Express.js"],
    github: "https://github.com/sarthakchaudhary/ev-route-planner",
    live: "https://ev-route-planner.vercel.app",
  },
  {
    id: 2,
    title: "MyParking",
    description:
      "A smart parking management system that allows users to find, reserve, and pay for parking spots in real time. Includes admin dashboard and QR-based entry.",
    image: null,
    color: "#8B5CF6",
    tech: ["React", "Express.js", "MySQL", "JWT", "REST API"],
    github: "https://github.com/sarthakchaudhary/myparking",
    live: "https://myparking.vercel.app",
  },
  {
    id: 3,
    title: "StreamTips",
    description:
      "A real-time live streaming tip aggregator that collects, categorizes, and displays tips from viewers. Built with WebSocket connections for instant updates.",
    image: null,
    color: "#06B6D4",
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
    github: "https://github.com/sarthakchaudhary/streamtips",
    live: "https://streamtips.vercel.app",
  },
];

export const experience = [
  {
    id: 1,
    role: "Intern",
    company: "Codsoft · Internship",
    period: "July 2025 – August 2025",
    type: "development",
    points: [
      "Built responsive web applications with React and Node.js",
      "Developed and consumed REST APIs for multiple client projects",
      "Integrated relational and NoSQL databases (MySQL, MongoDB)",
      "Created real-time systems using WebSockets and Socket.io",
    ],
  },
  {
    id: 2,
    role: "Software Development Enthusiast",
    company: "Self-directed Learning",
    period: "2021 – Present",
    type: "learning",
    points: [
      "Exploring AI and machine learning applications in web dev",
      "Learning cloud deployment with AWS and Vercel",
      "Building scalable and maintainable system architectures",
      "Contributing to open-source projects on GitHub",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Information Technology (B.Tech)",
    institution: "IMS Engineering College · Dr. Abdul Kalam Technical University",
    period: "2023 – 2027",
    subjects: [
      "Programming Fundamentals",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
      "Web Technologies",
    ],
  },
  {
    id: 2,
    degree: "Intermediate",
    institution: "Gurukul The School · CBSE",
    period: "2022 – 2023",
    subjects: [
      "Programming Fundamentals",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
      "Web Technologies",
    ],
  },
];

export const skills = {
  Frontend: [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 90 },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 85 },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85 },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 80 },
  ],
  Backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 78 },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 75 },
  ],
  Database: [
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 75 },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 70 },
  ],
  Tools: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 82 },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 85 },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 90 },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", level: 78 },
  ],
  Languages: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 72 },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 68 },
  ],
};

export const stats = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "GitHub Commits", value: 300, suffix: "+" },
  { label: "Problems Solved", value: 100, suffix: "+" },
];
