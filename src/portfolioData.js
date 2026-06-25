// ============================================================
// portfolioData.js — Single source of truth for all portfolio content
// ============================================================

export const personalInfo = {
  name: "Sarthak Chaudhary",
  subtitle: "Freelancer | Developer | Recruiter | Operations Manager",
  typingRoles: [
    "Freelance Developer",
    "Discord Bot Builder",
    "FiveM Script Developer",
    "Python Programmer",
  ],
  email: "chsarthak24@gmail.com",
  // phone: "+91 8700612640",
  github: "https://github.com/sarthakchaudhary24",
  linkedin: "https://www.linkedin.com/in/sarthakchaudhary24",
  location: "Ghaziabad, Uttar Pradesh, India",
  bio: "Passionate developer focused on delivering high-quality, reliable, and custom solutions for communities and creators. Specializing in Discord bots, FiveM Scripts, and digital tools that simplify complex systems.",
};

export const projects = [
  {
    id: 1,
    title: "myParking",
    description:
      "Developed a full-stack web application to simplify parking management by allowing users to find, book, and manage parking spaces efficiently.",
    // ✅ ADD PROJECT IMAGE: put your image in src/assets/ and import path here
    // Example: image: require("./assets/spades.png")
    // Leave as null to show the default colored banner
    image: require("./myparking.png"),
    color: "#4F46E5",
    tech: ["React.js", "Node.js", "Express.js"],
    // ✅ STATUS: true = "Deployed" (green) | false = "In Development" (amber)
    deployed: false,
    // ✅ GITHUB BUTTON: set showGithub to false to hide it
    showGithub: true,
    github: "https://github.com/SarthakChaudhary24/myParking",
    // ✅ LIVE DEMO BUTTON: set showLive to false to hide it
    showLive: true,
    live: "https://my-parking-ten.vercel.app/",
  },
  {
    id: 2,
    title: "Spades Manager",
    description:
      "A feature-rich Discord bot built in Python to manage community servers — handles moderation, role management, event coordination, and automated workflows for growing communities.",
    // ✅ ADD PROJECT IMAGE: put your image in src/assets/ and import path here
    // Example: image: require("./assets/spades.png")
    // Leave as null to show the default colored banner
    image: require("./spadesmanager.jpg"),
    color: "#4F46E5",
    tech: ["Python", "Discord.py"],
    // ✅ STATUS: true = "Deployed" (green) | false = "In Development" (amber)
    deployed: true,
    // ✅ GITHUB BUTTON: set showGithub to false to hide it
    showGithub: true,
    github: "https://github.com/SarthakChaudhary24/Spades-Manager",
    // ✅ LIVE DEMO BUTTON: set showLive to false to hide it
    showLive: false,
    live: "",
  },
  {
    id: 3,
    title: "Password Generator",
    description:
      "A secure Python-based password generator with customizable length, character sets, and complexity rules. Built with clean OOP principles, file I/O, and a simple interactive interface.",
    image: require("./password.png"),
    color: "#8B5CF6",
    tech: ["Python", "OOP", "File I/O"],
    deployed: true,
    showGithub: true,
    github: "https://github.com/SarthakChaudhary24/CODSOFT/tree/main/Task3_PasswordGenerator",
    showLive: false,
    live: "",
  },
  {
    id: 4,
    title: "To-Do List App",
    description:
      "A Python command-line To-Do List application with persistent file handling, task prioritization, and deadline tracking. Demonstrates clean modular coding and exception handling.",
    image: require("./todolist.png"),
    color: "#06B6D4",
    tech: ["Python", "File Handling", "OOP"],
    deployed: true,
    showGithub: true,
    github: "https://github.com/SarthakChaudhary24/CODSOFT/tree/main/Task1_ToDoList",
    showLive: false,
    live: "",
  },
  {
    id: 5,
    title: "Simple Calculator",
    description:
      "An interactive Python calculator supporting arithmetic operations, history tracking, and error handling. Built as part of the Codsoft internship with focus on clean, maintainable code.",
    image: require("./calculator.png"),
    color: "#10B981",
    tech: ["Python", "OOP", "Exception Handling"],
    deployed: true,
    showGithub: true,
    github: "https://github.com/https://github.com/SarthakChaudhary24/CODSOFT/tree/main/Task2_Calculator",
    showLive: false,
    live: "",
  },
];

export const experience = [
  {
    id: 1,
    role: "Recruiter",
    company: "Helfen Consultants, India",
    period: "August 2024 – August 2025",
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
      "Artificial Intelligence",
      "English",
    ],
  },
];

export const certifications = [
  {
    id: 1,
    title: "Project Management Fundamentals",
    issuer: "IBM",
    date: "June 2026",
    credentialId: "59efff5a-42a3-4851-92c2-eac743c40a6d",
  },
  {
    id: 2,
    title: "Lifelong Professional Skills",
    issuer: "IBM",
    date: "June 2026",
    credentialId: "e6f78765-60c1-425c-9c77-ecdfdffb9c6a",
  },
  {
    id: 3,
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    date: "June 2026",
    credentialId: "ac368a9f-3ac3-4e68-8d0a-6c86439083e3",
  },
  {
    id: 4,
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM",
    date: "June 2026",
    credentialId: "aa2719f7-ee95-4ebb-ae2d-836d0d13486e",
  },
  {
    id: 5,
    title: "Human Resources Expert Certificate: HR Metrics and Analytics",
    issuer: "Udemy",
    date: "January 2026",
    credentialId: "UC-c1185271-38e5-4848-a6fb-f0c741d2f3fc",
  },
  {
    id: 6,
    title: "The Complete Leadership Toolkit: From Conflict to Vision",
    issuer: "Udemy",
    date: "January 2026",
    credentialId: "UC-ec433a51-fb04-4421-8b63-3aa104f55e8e",
  },
  {
    id: 7,
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
      name: "Discord API",
      icon: "https://img.icons8.com/ios-filled/50/discord-logo.png",
      deployed: true,
    },
    {
      name: "FiveM Framework",
      icon: "https://img.icons8.com/color/48/fivem.png",
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
      name: "Operations Management",
      icon: "https://img.icons8.com/ios/50/commercial-development-management--v1.png",
      deployed: true,
    },
  ],
  Development: [
    {
      name: "Artificial Intelligence",
      icon: "https://img.icons8.com/ios/50/bard.png",
      deployed: false,
    },
    {
      name: "Cybersecurity",
      icon: "https://img.icons8.com/ios/50/cyber-security.png",
      deployed: false,
    },
    {
      name: "Data Structures",
      icon: "https://img.icons8.com/external-outline-andi-nur-abdillah/64/external-Data-Structure-artificial-intelligence-(outline)-outline-andi-nur-abdillah.png",
      deployed: true,
    },
    {
      name: "Discord Bot Development",
      icon: "https://img.icons8.com/ios-filled/50/discord-logo.png",
      deployed: true,
    },
    {
      name: "Web Development",
      icon: "https://img.icons8.com/ios/50/laptop-coding.png",
      deployed: true,
    },
    {
      name: "Rest APIs",
      icon: "https://img.icons8.com/ios/50/api.png",
      deployed: true,
    },
    {
      name: "Machine Learning",
      icon: "https://img.icons8.com/ios/50/machine-learning.png",
      deployed: true,
    },
    {
      name: "Natural Learning Processing",
      icon: "https://img.icons8.com/external-solidglyph-m-oki-orlando/32/external-NLP-artificial-intelligence-solidglyph-m-oki-orlando.png",
      deployed: true,
    },
    {
      name: "Project Management",
      icon: "https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/external-project-management-industrial-production-factory-automation-smart-industries-smashingstocks-mixed-smashing-stocks.png",
      deployed: true,
    },
  ],
};

export const stats = [
  { label: "Projects Built", value: 5, suffix: "+" },
  { label: "Certifications", value: 7, suffix: "" },
  { label: "Experience", value: 2, suffix: "yr" },
  { label: "Skills", value: 21, suffix: "+" },
];
