/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * You can easily edit information, add new skills, or add new projects here
 * without modifying the core React component code.
 */

export const personalInfo = {
  name: "Zahidul Islam",
  role: "CSE Student & Aspiring Software Developer",
  badge: "CSE 59 Batch • Metropolitan University",
  heroHeading: "Hi, I'm Zahidul Islam.",
  heroSubheading: "CSE Student & Aspiring Software Developer",
  heroDescription:
    "I'm a Computer Science and Engineering student passionate about building useful, practical, and user-friendly software.",
  aboutParagraphs: [
    "I am a Computer Science & Engineering student at Metropolitan University (Batch 59) with a keen interest in modern software development, problem-solving, and web technologies.",
    "I enjoy learning how complex systems operate and transforming ideas into clean, functional, and responsive digital products. My academic journey focuses on developing strong algorithmic foundations and hands-on programming experience."
  ],
  detailsCard: {
    name: "Zahidul Islam",
    department: "Computer Science & Engineering",
    batch: "59",
    university: "Metropolitan University",
    location: "Sylhet, Bangladesh"
  },
  contact: {
    email: "zahidul.cse59@example.com",
    github: "https://github.com/#",
    linkedin: "https://linkedin.com/in/#",
    location: "Sylhet, Bangladesh"
  }
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Programming",
    skills: ["C", "C++", "Python"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"]
  },
  {
    title: "Other",
    skills: ["Problem Solving", "Responsive Web Design", "Basic UI/UX"]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website built to showcase my skills, projects, and academic background.",
    tech: ["React", "JavaScript", "CSS"],
    projectUrl: "#",
    sourceUrl: "#",
    tag: "Web Application"
  },
  {
    id: 2,
    title: "Student Management System",
    description:
      "A simple web-based application concept for managing student information and academic records.",
    tech: ["React", "JavaScript", "CSS"],
    projectUrl: "#",
    sourceUrl: "#",
    tag: "Concept & Prototype"
  },
  {
    id: 3,
    title: "Problem Solving Platform",
    description:
      "A web application concept where users can share problems, collaborate on solutions, and manage tasks.",
    tech: ["React", "JavaScript", "CSS"],
    projectUrl: "#",
    sourceUrl: "#",
    tag: "Concept & Prototype"
  }
];

export const educationData = [
  {
    id: 1,
    institution: "Metropolitan University",
    degree: "B.Sc. in Computer Science & Engineering",
    batch: "CSE 59 Batch",
    location: "Sylhet, Bangladesh",
    status: "Currently Enrolled"
  }
];
