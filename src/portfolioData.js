// ============================================================
// portfolioData.js — Single source of truth for all portfolio content
// ============================================================

export const personalInfo = {
  name: "Sarthak Chaudhary",
  subtitle: "Freelancer | Developer | Recruiter | Operations Manager",
  typingRoles: [
    "Freelance Developer",
    "Discord Bot Builder",
    "FiveM Script Dev",
    "Python Programmer",
  ],
  email: "chsarthak24@gmail.com",
  phone: "+91 8700612640",
  github: "https://github.com/sarthakchaudhary24",
  linkedin: "https://www.linkedin.com/in/sarthakchaudhary24",
  location: "Ghaziabad, Uttar Pradesh, India",
  bio: "Passionate developer focused on delivering high-quality, reliable, and custom solutions for communities and creators. Specializing in Discord bots, FiveM Scripts, and digital tools that simplify complex systems.",
};

export const projects = [
  {
    id: 1,
    title: "Spades Manager",
    description:
      "A feature-rich Discord bot built in Python to manage community servers — handles moderation, role management, event coordination, and automated workflows for growing communities.",
    // ✅ ADD PROJECT IMAGE: put your image in src/assets/ and import path here
    // Example: image: require("./assets/spades.png")
    // Leave as null to show the default colored banner
    image: null,
    color: "#4F46E5",
    tech: ["Python", "Discord.py", "GitHub"],
    // ✅ STATUS: true = "Deployed" (green) | false = "In Development" (amber)
    deployed: true,
    // ✅ GITHUB BUTTON: set showGithub to false to hide it
    showGithub: true,
    github: "https://github.com/sarthakchaudhary24",
    // ✅ LIVE DEMO BUTTON: set showLive to false to hide it
    showLive: false,
    live: "",
  },
  {
    id: 2,
    title: "Password Generator",
    description:
      "A secure Python-based password generator with customizable length, character sets, and complexity rules. Built with clean OOP principles, file I/O, and a simple interactive interface.",
    image: null,
    color: "#8B5CF6",
    tech: ["Python", "OOP", "File I/O"],
    deployed: true,
    showGithub: true,
    github: "https://github.com/sarthakchaudhary24",
    showLive: false,
    live: "",
  },
  {
    id: 3,
    title: "To-Do List App",
    description:
      "A Python command-line To-Do List application with persistent file handling, task prioritization, and deadline tracking. Demonstrates clean modular coding and exception handling.",
    image: null,
    color: "#06B6D4",
    tech: ["Python", "File Handling", "OOP"],
    deployed: true,
    showGithub: true,
    github: "https://github.com/sarthakchaudhary24",
    showLive: false,
    live: "",
  },
  {
    id: 4,
    title: "Simple Calculator",
    description:
      "An interactive Python calculator supporting arithmetic operations, history tracking, and error handling. Built as part of the Codsoft internship with focus on clean, maintainable code.",
    image: null,
    color: "#10B981",
    tech: ["Python", "OOP", "Exception Handling"],
    deployed: true,
    showGithub: true,
    github: "https://github.com/sarthakchaudhary24",
    showLive: false,
    live: "",
  },
];

export const experience = [
  {
    id: 1,
    role: "Recruiter",
    company: "Helfen Consultants, India",
    period: "August 2024 – Present",
    type: "work",
    points: [
      "Managing end-to-end Corporate and Technical Recruitment for diverse roles across departments",
      "Sourcing and screening candidates using LinkedIn, job portals, and professional networks",
      "Coordinating with hiring managers to understand requirements and ensure quality, timely hiring",
      "Handling interview scheduling, candidate communication, and offer processes",
    ],
  },
  {
    id: 2,
    role: "Python Programming Intern",
    company: "Codsoft, India",
    period: "July 2025 – August 2025",
    type: "internship",
    points: [
      "Developed and deployed Python projects — Calculator App, Password Generator, and To-Do List",
      "Practiced OOP, file I/O, exception handling, and modular coding for clean maintainable code",
      "Utilized Git and GitHub for version control and collaborative project documentation",
      "Completed all hands-on tasks and delivered projects within deadlines",
    ],
  },
  {
    id: 3,
    role: "Freelance Operations Manager",
    company: "APL eSports, India",
    period: "July 2024 – October 2024",
    type: "freelance",
    points: [
      "Managed and coordinated multiple online gaming events and tournaments",
      "Oversaw the planning and launch of APL Nation, a custom FiveM Roleplay server",
      "Handled day-to-day operations, team coordination, and community management",
      "Collaborated with developers, designers, and marketing partners to meet project deadlines",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Information Technology",
    institution: "IMS Engineering College, Dr. APJ Abdul Kalam Technical University",
    period: "2023 – 2027",
    subjects: [
      "Python Programming",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Cybersecurity Fundamentals",
      "Artificial Intelligence",
      "Software Engineering",
    ],
  },
  {
    id: 2,
    degree: "Intermediate (Class XII)",
    institution: "Gurukul The School, CBSE",
    period: "2023",
    subjects: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science",
      "English",
    ],
  },
];

export const certifications = [
  {
    id: 1,
    title: "Human Resources Expert Certificate: HR Metrics and Analytics",
    issuer: "Udemy",
    date: "January 2026",
    credentialId: "UC-c1185271-38e5-4848-a6fb-f0c741d2f3fc",
  },
  {
    id: 2,
    title: "The Complete Leadership Toolkit: From Conflict to Vision",
    issuer: "Udemy",
    date: "January 2026",
    credentialId: "UC-ec433a51-fb04-4421-8b63-3aa104f55e8e",
  },
  {
    id: 3,
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    issuer: "Udemy",
    date: "January 2026",
    credentialId: "UC-d173d50c-0bb7-46f6-9057-6c727701019b",
  },
];

// ----------------------------------------------------------------
// ICON REFERENCE — reuse these exact URLs everywhere so logos
// are always consistent (Hero typing badges, Skills, Experience etc.)
// ----------------------------------------------------------------
// Python   → python-original.svg
// Java     → java-original.svg
// C        → c-original.svg
// Lua      → lua-original.svg
// Git      → git-original.svg
// GitHub   → github-original.svg
// VS Code  → vscode-original.svg
// ChatGPT  → use emoji "🤖" (no official devicon)
// AI / TF  → tensorflow-original.svg  ← SAME logo for "AI Enthusiast" badge
// Linux/CS → linux-original.svg
// DS/Algo  → python-original.svg (Python is its primary vehicle)
// LinkedIn → linkedin-original.svg   ← used for Recruiting
// Trello   → trello-plain.svg        ← used for Ops Management
// ----------------------------------------------------------------

// ✅ SKILL STATUS OPTIONS:
// deployed: true  → shows green "Deployed" badge
// deployed: false → shows orange "In Development" badge

export const skills = {
  Languages: [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      deployed: true,
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      deployed: false,
    },
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      deployed: false,
    },
    {
      name: "Lua",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
      deployed: true,
    },
  ],
  Tools: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      deployed: true,
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      deployed: true,
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      deployed: true,
    },
    {
      name: "ChatGPT",
      icon: "emoji:🤖",
      deployed: true,
    },
  ],
  Domains: [
    {
      name: "Artificial Intelligence",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      deployed: false,
    },
    {
      name: "Cybersecurity",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      deployed: false,
    },
    {
      name: "Data Structures",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      deployed: true,
    },
    {
      name: "HR Analytics",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
      deployed: true,
    },
  ],
  Soft: [
    {
      name: "Leadership",
      icon: "emoji:🏆",
      deployed: true,
    },
    {
      name: "Recruiting",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      deployed: true,
    },
    {
      name: "Ops Management",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
      deployed: true,
    },
  ],
};

export const stats = [
  { label: "Projects Built", value: 8, suffix: "+" },
  { label: "Certifications", value: 3, suffix: "" },
  { label: "Experience", value: 2, suffix: "yr" },
  { label: "Skills", value: 16, suffix: "+" },
];
