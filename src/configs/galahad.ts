import { Github, Gitlab, Linkedin, Mail } from "lucide-react";

export const profile = {
  first_name: "Galahad",
  last_name: "Zhao",
  title: "DevOps Engineer & Full Stack Developer",
  avatar_link: "",
};

export const links = [
  {
    name: "GitHub",
    icon: Github,
    alt: "github icon",
    url: "https://github.com/Gyarahaddo",
    hover_color: "hover:text-[#333] dark:hover:text-white",
  },
  {
    name: "GitLab",
    icon: Gitlab,
    alt: "gitlab icon",
    url: "https://gitlab.com/StHakurei",
    hover_color: "hover:text-[#FC6D26]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    alt: "linkedin icon",
    url: "www.linkedin.com/in/galahad-zhao-6193b0353",
    hover_color: "hover:text-[#0077B5]",
  },
  {
    name: "Email",
    icon: Mail,
    alt: "email icon",
    url: "mailto:galahad@fastmail.com",
    hover_color: "hover:text-[#EA4335]",
  },
];

export const educations = [
  {
    institution: "Algonquin College",
    program: "Computer Programming",
    degree: "Ontario College Diploma",
    location: "Ottawa, Canada",
    period: "2024 - 2026",
    description: "Some description",
    courses: [
      "Advanced Database",
      "OOP with Design Patterns",
      "Mobile Graphical Interface Programming",
      "Business Programming (COBOL)",
      "Network Programming",
    ],
  },
  {
    institution: "Peking University Founder Technology College",
    program: "Information Security",
    degree: "Associate's Degree",
    location: "Beijing, China",
    period: "2009 - 2012",
    description: "Some description",
    courses: [
      "Operating Systems",
      "Cisco Networking",
      "C Programming",
      "Web Development",
      "Data Structures",
    ],
  },
];

export const skillsets = [
  {
    category: "Programming Languages & Frameworks",
    skills: [
      "Python",
      "TypeScript",
      "Java",
      "C++",
      "COBOL",
      "React",
      "Requests",
      "FastAPI",
      "Spring Boot",
    ],
  },
  {
    category: "Database & Lakehouse",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Snowflake",
      "Google BigQuery",
      "Amazon Redshift",
    ],
  },
  {
    category: "Data Analytics & Visualization",
    skills: ["Tableau", "Google Data Studio", "Microsoft Power BI"],
  },
  {
    category: "Cloud Platforms & SIEM Tools",
    skills: ["AWS", "MS Azure", "GCP", "DataDog", "SumoLogic", "Site24x7"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "GitLab CI/CD"],
  },
];

export const experiences = [
  {
    title: "DevOps Engineer",
    company: "Sequoia Capital China",
    location: "Beijing, China",
    period: "Oct 2020 - Aug 2024",
    type: "Full-time Permanent",
    duties: ["One", "Two"],
    technologies: [
      "AWS",
      "GCP",
      "TypeScript",
      "Docker",
      "PostgreSQL",
      "DataDog",
      "Tableau",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Sequoia Capital China",
    location: "Beijing, China",
    period: "Oct 2020 - Aug 2024",
    type: "Full-time Permanent",
    duties: ["One", "Two"],
    technologies: [
      "AWS",
      "GCP",
      "TypeScript",
      "Docker",
      "PostgreSQL",
      "DataDog",
      "Tableau",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Sequoia Capital China",
    location: "Beijing, China",
    period: "Oct 2020 - Aug 2024",
    type: "Full-time Permanent",
    duties: ["One", "Two"],
    technologies: [
      "AWS",
      "GCP",
      "TypeScript",
      "Docker",
      "PostgreSQL",
      "DataDog",
      "Tableau",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Sequoia Capital China",
    location: "Beijing, China",
    period: "Oct 2020 - Aug 2024",
    type: "Full-time Permanent",
    duties: ["One", "Two"],
    technologies: [
      "AWS",
      "GCP",
      "TypeScript",
      "Docker",
      "PostgreSQL",
      "DataDog",
      "Tableau",
    ],
  },
];

export const projects = [
  {
    name: "FGO Gacha Kami",
    description: "Some description",
    image: "src/assets/fatego-gacha-kami.png",
    codebaseUrl: "https://gitlab.com/StHakurei/fatego-gacha-kami",
    technologies: [
      "Python",
      "NumPy",
      "OpenCV",
      "Requests",
      "BeautifulSoup",
      "SQLAlchemy",
      "PostgreSQL",
    ],
  },
];

export const certificates = [
  {
    name: "AWS Certified Solution Architect - Associate",
    issuer: "Amazon Web Services (AWS)",
    credentialId: "YS8486M2N1Q41F3E",
    logoSrc: "src/assets/aws-saa.png",
  },
];
