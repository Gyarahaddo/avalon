import { Github, Gitlab, Linkedin, Twitter, Mail } from "lucide-react";
import userAvatar from "@avalon/assets/galahad.png";
import fgogachaProjecctIcon from "@avalon/assets/fatego-gacha-kami.png";
import avalonProjectIcon from "@avalon/assets/avalon.png";
import fgofoumesProjectIcon from "@avalon/assets/fatego-foumes.png";
import awsdevIcon from "@avalon/assets/aws-dev.png";
import awsdevDarkIcon from "@avalon/assets/aws-dev-dark.png";
import awssaaIcon from "@avalon/assets/aws-saa.png";
import awssaaDarkIcon from "@avalon/assets/aws-saa-dark.png";
import awssapIcon from "@avalon/assets/aws-sap.png";
import awssapDarkIcon from "@avalon/assets/aws-sap-dark.png";
import awssysopsIcon from "@avalon/assets/aws-sysops.png";
import awssysopsDarkIcon from "@avalon/assets/aws-sysops-dark.png";
import ccnaIcon from "@avalon/assets/cisco-ccna.png";
import ccnaDarkIcon from "@avalon/assets/cisco-ccna-dark.png";

export const profile = {
  first_name: "Galahad",
  last_name: "Zhao",
  title: "DevOps Engineer & Full Stack Developer",
  avatar_link: userAvatar,
  introduction:
    "Passionate software developer with a strong foundation in full-stack development, cloud systems, and DevOps.",
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
  {
    name: "Twitter",
    icon: Twitter,
    alt: "twitter icon",
    url: "https://x.com/angelsnow1990",
    hover_color: "hover:text-[#1DA1F2]",
  },
];

export const educations = [
  {
    institution: "Algonquin College",
    program: "Computer Programming",
    degree: "Ontario College Diploma",
    location: "Ottawa, Canada",
    period: "2024 - 2026",
    description:
      "Developed strong skills in full-stack development, mobile programming, and database design. Achieved Dean’s List recognition for academic excellence.",
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
    description:
      "Gained a strong foundation in computer systems, programming, and network security. Developed hands-on skills in C programing, and Cisco network configuration through practical lab work and projects.",
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
      "AWS S3",
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
    duties: [
      "Designed and built a cross-team automated onboarding backend in TypeScript (Node.js), integrated with Okta, Azure AD, and DUO APIs.",
      "Streamlined logs from SaaS, infrastructure, and endpoint systems into SumoLogic and DataDog, enabling real-time analytics dashboards.",
      "Built a dynamic cost-reduction tool in TypeScript, reducing AWS WorkSpaces bills by ~50% over 3 months.",
      "Re-architected legacy systems using AWS Glue (Python), S3, and Snowflake to build scalable ETL pipelines.",
    ],
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
    title: "IT Engineer",
    company: "Amazon Web Services (AWS)",
    location: "Beijing, China",
    period: "Nov 2017 - Apr 2020",
    type: "Full-time Permanent",
    duties: [
      "Maintained IT infrastructure across AWS offices in China and supported secure operations inside DataCenter facilities.",
      "Developed internal tools to monitor SLA performance, automate device compliance in high-security zones, and reduce hardware loss.",
      "Led the cloud-side development of a monitoring and rescue service using AWS Lambda, API Gateway, RDS, and more.",
      "Built a lightweight data visualization solution for the Amazon Kindle (Lab126) team to improve their supply chain operations and helped them transition to Tableau for analytics.",
    ],
    technologies: ["AWS", "Python", "MySQL", "JavaScript", "MongoDB", "Vue.js"],
  },
  {
    title: "VIP Support Engineer",
    company: "China Development Bank",
    location: "Beijing, China",
    period: "Aug 2016 - Oct 2017",
    type: "Full-time Contract",
    duties: [
      "Provided technical support to the bank’s senior leadership, including directors, VPs, and the president, ensuring reliable hardware, software, and network operation.",
      "Supported the rollout of a digital meeting system to reduce paper usage as part of the bank’s carbon emission goals.",
      "Developed a Java program to automate weekly IT reporting, saving hours of manual work.",
      "Assisted third-party development teams in setting up secure environments with Jenkins CI/CD servers, databases, and Nginx, in line with strict internal security policies.",
    ],
    technologies: ["JAVA", "Linux", "Jenkins", "GitHub", "GitLab"],
  },
  {
    title: "IT Specialist",
    company: "DHL",
    location: "Beijing, China",
    period: "Oct 2012 - Jun 2016",
    type: "Full-time Contract",
    duties: [
      "Supported IT infrastructure and daily operations at DHL’s logistics hub near Beijing International Airport.",
      "Provided technical support to over 60 call center and customs agents.",
      "Maintained servers, network devices, and printers, ensuring stable system performance.",
      "Planned and deployed WiFi coverage throughout the warehouse to support mobile terminals used for package scanning and logistics tracking.",
    ],
    technologies: ["Cisco Networking", "Windows Server", "Active Directory"],
  },
];

export const projects = [
  {
    name: "FateGO Gacha Kami",
    description:
      "Screenshot-based FGO gacha tracker built with Python, OpenCV, and PostgreSQL integration.",
    image: fgogachaProjecctIcon,
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
  {
    name: "Avalon",
    description:
      "A personal website built with React, TypeScript, Tailwind CSS, sharing my journey and experiences.",
    image: avalonProjectIcon,
    codebaseUrl: "https://github.com/Gyarahaddo/avalon",
    technologies: ["React", "TypeScript", "Tailwind CSS", "HTML"],
  },
  {
    name: "FateGO Foumes",
    description:
      "A data analysis tool that processes and visualizes FGO gacha records using Pandas and Matplotlib.",
    image: fgofoumesProjectIcon,
    codebaseUrl: "https://gitlab.com/StHakurei/fatego-foumes",
    technologies: ["Python", "Pandas", "Matplotlib"],
  },
];

export const certificates = [
  {
    name: "AWS Certified Solution Architect - Professional",
    issuer: "Amazon Web Services (AWS)",
    credentialId: "076LDDVC4E1Q1Q5S",
    logoSrc: awssapIcon,
    logoSrcDark: awssapDarkIcon,
  },
  {
    name: "AWS Certified Solution Architect - Associate",
    issuer: "Amazon Web Services (AWS)",
    credentialId: "YKV4YK3KNJFE1K95",
    logoSrc: awssaaIcon,
    logoSrcDark: awssaaDarkIcon,
  },
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services (AWS)",
    credentialId: "YS8486M2N1Q41F3E",
    logoSrc: awsdevIcon,
    logoSrcDark: awsdevDarkIcon,
  },
  {
    name: "AWS Certified SysOps Administrator - Associate",
    issuer: "Amazon Web Services (AWS)",
    credentialId: "37HC4H4J2NVEQLKD",
    logoSrc: awssysopsIcon,
    logoSrcDark: awssysopsDarkIcon,
  },
  {
    name: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    credentialId: "405244167484DNZF",
    logoSrc: ccnaIcon,
    logoSrcDark: ccnaDarkIcon,
  },
];

export const holdings = {
  lastUpdate: "2025-12-15",
  assetAllocation: [
    {
      code: "NASDAQ:BMNU",
      link: "https://www.google.com/finance/quote/BMNU:BATS",
      percentage: 18,
      color: "bg-blue-500",
    },
    {
      code: "NASDAQ:LAES",
      link: "https://www.google.com/finance/quote/LAES:NASDAQ",
      percentage: 10,
      color: "bg-emerald-500",
    },
    {
      code: "NASDAQ:MARA",
      link: "https://www.google.com/finance/quote/MARA:NASDAQ",
      percentage: 15,
      color: "bg-purple-500",
    },
    {
      code: "NASDAQ:SERV",
      link: "https://www.google.com/finance/quote/SERV:NASDAQ",
      percentage: 13,
      color: "bg-amber-500",
    },
    {
      code: "NYSE:VG",
      link: "https://www.google.com/finance/quote/VG:NYSE",
      percentage: 44,
      color: "bg-rose-500",
    },
  ],
  sectorAllocation: [
    {
      name: "Energy",
      percentage: 44,
      color: "bg-indigo-500",
    },
    {
      name: "Crypto Infrastructure",
      percentage: 34,
      color: "bg-teal-500",
    },
    {
      name: "Machinery",
      percentage: 12,
      color: "bg-orange-500",
    },
    {
      name: "Semiconductors",
      percentage: 10,
      color: "bg-pink-500",
    },
  ],
};
