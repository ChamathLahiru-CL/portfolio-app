export const profile = {
  name: "Lahiru Jayasuriya",
  username: "ChamathLahiru-CL",
  title: "Full Stack Developer & QA Engineer",
  roles: [
    "Full Stack Developer",
    "QA Engineer",
    "Automation Tester",
    "ICT Undergraduate",
  ],
  bio: "Undergraduate of Information and Communication Technology at Uva Wellassa University, passionate about building quality software and ensuring it works flawlessly. I bridge the gap between development and quality assurance — crafting robust applications and rigorous test frameworks.",
  location: "Gampaha, Sri Lanka",
  university: "Uva Wellassa University",
  degree: "BICT (Bachelor of Information & Communication Technology)",
  avatar: "https://avatars.githubusercontent.com/u/173532719?v=4",
  githubUrl: "https://github.com/ChamathLahiru-CL",
  linkedinUrl: "https://www.linkedin.com/in/lahiru-jayasuriya/",
  email: "lahirujayasuriya@email.com",
  funFact: '"Quality is never an accident; it is always the result of smart testing."',
  currentlyLearning: [
    "Playwright Automation (Python)",
    "Advanced Selenium Framework Design",
    "API Automation Testing",
    "CI/CD Integration for QA",
  ],
};

export const skills = [
  {
    category: "Programming Languages",
    icon: "code",
    items: [
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Python", level: 60 },
      { name: "PHP", level: 65 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "layers",
    items: [
      { name: "React", level: 78 },
      { name: "React Native", level: 70 },
      { name: "Next.js", level: 65 },
      { name: "Node.js", level: 68 },
    ],
  },
  {
    category: "QA & Testing",
    icon: "shield",
    items: [
      { name: "Selenium WebDriver", level: 88 },
      { name: "TestNG", level: 85 },
      { name: "Playwright", level: 70 },
      { name: "Postman / API Testing", level: 82 },
      { name: "JMeter", level: 65 },
      { name: "Manual Testing", level: 90 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "tool",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Page Object Model", level: 88 },
      { name: "Maven", level: 75 },
      { name: "VS Code / IntelliJ", level: 85 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "GoBus – Bus Route Tracking",
    description:
      "A full-featured mobile application for Sri Lanka bus route tracking with real-time location updates. Built with React Native and TypeScript.",
    tech: ["React Native", "TypeScript", "Mobile"],
    category: "mobile",
    github: "https://github.com/ChamathLahiru-CL/GoBus-Bus_Route_Tracking_Application-",
    featured: true,
    stars: 0,
    language: "TypeScript",
  },
  {
    id: 2,
    title: "UniResult – University Results Portal",
    description:
      "A full-stack web application for university students to view and manage their academic results. Role-based access for students and admin.",
    tech: ["JavaScript", "Node.js", "Web App"],
    category: "fullstack",
    github: "https://github.com/ChamathLahiru-CL/UniResult",
    featured: true,
    stars: 0,
    language: "JavaScript",
  },
  {
    id: 3,
    title: "SauceDemo QA Framework",
    description:
      "Comprehensive Selenium + TestNG automation plan for SauceDemo e-commerce. Includes login, cart, checkout flows with assertions and Page Object Model.",
    tech: ["Java", "Selenium", "TestNG", "POM"],
    category: "qa",
    github: "https://github.com/ChamathLahiru-CL/SauceDemo_AutomationPlan",
    featured: true,
    stars: 0,
    language: "Java",
  },
  {
    id: 4,
    title: "E-Shop Automation Framework",
    description:
      "Production-grade Selenium automation framework for an e-commerce platform. Implements Page Object Model, data-driven testing with Excel, and automated flow execution.",
    tech: ["Java", "Selenium", "TestNG", "Excel"],
    category: "qa",
    github: "https://github.com/ChamathLahiru-CL/E-Shop-Automation-Project",
    featured: false,
    stars: 0,
    language: "Java",
  },
  {
    id: 5,
    title: "Eco-Cycle Hub Automation Testing",
    description:
      "Selenium automation testing project for an eco-recycling marketplace. Demonstrates UI testing using POM, data-driven testing, and locator strategies.",
    tech: ["Java", "Selenium", "TestNG"],
    category: "qa",
    github: "https://github.com/ChamathLahiru-CL/Eco-Cycle_Hub-Automation_Testing",
    featured: false,
    stars: 0,
    language: "Java",
  },
  {
    id: 6,
    title: "Sri Lanka Weather App",
    description:
      "Mobile weather application for Sri Lanka built with React Native and TypeScript, powered by the Open-Meteo free API for real-time weather data.",
    tech: ["React Native", "TypeScript", "Open-Meteo API"],
    category: "mobile",
    github: "https://github.com/ChamathLahiru-CL/Weather-Mobile-Application",
    featured: false,
    stars: 0,
    language: "TypeScript",
  },
  {
    id: 7,
    title: "Notes App",
    description:
      "A clean and intuitive React notes application with local state management. One of the most starred repositories, demonstrating solid React skills.",
    tech: ["React", "JavaScript"],
    category: "fullstack",
    github: "https://github.com/ChamathLahiru-CL/notes-app",
    featured: false,
    stars: 4,
    language: "JavaScript",
  },
  {
    id: 8,
    title: "Student Management System",
    description:
      "A PHP-based student management system built for D-School in Minuwangoda. Handles student data, CRUD operations, and reporting.",
    tech: ["PHP", "HTML", "CSS", "MySQL"],
    category: "fullstack",
    github: "https://github.com/ChamathLahiru-CL/Student_Management_System",
    featured: false,
    stars: 4,
    language: "PHP",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Stats", href: "#stats" },
  { label: "Contact", href: "#contact" },
];
