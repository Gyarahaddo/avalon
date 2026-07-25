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
    url: "https://www.linkedin.com/in/galahad-zhao-6193b0353",
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
    degree: "Ontario College Diploma with Honours",
    location: "Ottawa, ON, Canada",
    period: "2024 – 2026",
    description:
      "Developed practical skills in software development, database design, mobile application development, and object-oriented programming. Earned Dean’s List recognition for academic achievement.",
    courses: [
      "Advanced Database Topics",
      "Object-Oriented Programming with Design Patterns",
      "Mobile Application Development",
      "Business Programming (COBOL)",
      "Network Programming",
    ],
  },
  {
    institution: "Peking University Founder Technology College",
    program: "Information Security",
    degree: "College Diploma",
    location: "Beijing, China",
    period: "2009 – 2012",
    description:
      "Built a foundation in computer systems, programming, networking, and information security through hands-on coursework and technical lab projects.",
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
    category: "Languages",
    skills: [
      "Python",
      "TypeScript",
      "Java",
      "C++",
    ],
  },

  {
    category: "Frameworks & Libraries",
    skills: [
      "React",
      "FastAPI",
      "Spring Boot",
      "Requests",
    ],
  },

  {
    category: "Cloud Platforms",
    skills: [
      "AWS",
      "Google Cloud",
      "Microsoft Azure",
      "Alibaba Cloud",
    ],
  },

  {
    category: "Cloud Services",
    skills: [
      "Amazon ECS",
      "AWS Lambda",
      "Amazon S3",
      "Amazon RDS",
      "Amazon EventBridge",
      "Amazon SQS",
      "Amazon SNS",
      "Amazon API Gateway",
      "AWS Glue",
    ],
  },

  {
    category: "DevOps",
    skills: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "GitLab CI/CD",
    ],
  },

  {
    category: "Observability",
    skills: [
      "Datadog",
      "Sumo Logic",
      "Site24x7",
    ],
  },

  {
    category: "Data Platforms",
    skills: [
      "Snowflake",
      "Google BigQuery",
      "Amazon Redshift",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },

  {
    category: "Identity & Security",
    skills: [
      "Okta",
      "Microsoft Entra ID",
      "Cisco Duo",
    ],
  },

  {
    category: "Analytics",
    skills: [
      "Tableau",
      "Power BI",
      "Looker Studio",
    ],
  },
];

export const experiences = [
  {
    title: "DevOps Engineer",
    company: "Sequoia Capital China",
    location: "Beijing, China",
    period: "Oct 2020 - Aug 2024",
    type: "Full-time Permanent",
    overview: "Worked as a Platform and DevOps Engineer responsible for enterprise cloud platforms, automation, and internal engineering tools. Designed cloud infrastructure across AWS, GCP, and Alibaba Cloud while building self-service platforms and automation solutions that improved engineering productivity and streamlined cross-functional business operations.",
    highlights: [
      "Designed and built an enterprise onboarding backend in TypeScript, integrating Okta, Microsoft Entra ID, and Cisco Duo APIs.",
      "Developed self-service deployment workflows using GitHub Actions and Slack bots.",
      "Built an automated AWS WorkSpaces cost optimization platform, reducing operating costs by approximately 50%.",
      "Designed enterprise workflow automation integrating HR, Finance, Security, and IT systems.",
      "Supported cloud migration, observability, and data engineering initiatives across multiple cloud platforms."
    ],
    technologies: [
      "AWS", "GCP", "Alibaba", "TypeScript", "GitHub Actions", "Docker", "Snowflake", "Amazon ECS", "EventBridge", "Okta"
    ],
  },
  {
    title: "IT Engineer",
    company: "Amazon Web Services (AWS)",
    location: "Beijing, China",
    period: "Nov 2017 - Apr 2020",
    type: "Full-time Permanent",
    overview: "Supported AWS internal engineering teams by operating enterprise IT infrastructure and developing cloud-based automation tools. Worked across AWS services and Python to build internal platforms, improve operational efficiency, and support engineering initiatives for corporate offices and data center operations.",
    highlights: [
      "Served as the local service owner for multiple AWS global systems, maintaining enterprise IT infrastructure and supporting secure operations across AWS offices and data centers in China.",
      "Developed internal automation tools to monitor SLA performance, enforce device compliance in high-security environments, and reduce hardware loss.",
      "Designed and implemented cloud infrastructure for an internal monitoring and rescue platform using AWS Lambda, API Gateway, Amazon RDS, S3, SNS, SQS, and other AWS services.",
      "Built a lightweight web-based data visualization platform for the Amazon Kindle (Lab126) team, replacing spreadsheet-based workflows and later supporting their migration to Tableau.",
    ],
    technologies: [
      "AWS",
      "Python",
      "JavaScript",
      "Vue.js",
      "Amazon RDS",
      "Amazon S3",
      "AWS Lambda",
      "API Gateway",
      "Amazon SNS",
      "Amazon SQS",
      "MongoDB",
      "MySQL",
      "Tableau"
    ],
  },
  {
    title: "VIP Support Engineer",
    company: "China Development Bank",
    location: "Beijing, China",
    period: "Aug 2016 - Oct 2017",
    type: "Full-time Contract",
    overview: "Provided executive IT support within one of China's largest policy banks while improving operational efficiency through automation and software development. This role marked my transition from enterprise IT operations into software engineering by applying programming to solve business and infrastructure challenges.",
    highlights: [
      "Delivered technical support for senior executives, directors, and the bank president, maintaining reliable hardware, software, and network services in a highly regulated financial environment.",
      "Developed a Java application that automated weekly operational reporting by consolidating data from multiple internal systems, reducing report preparation time from several hours to approximately 15 minutes.",
      "Supported the rollout of a paperless digital meeting platform as part of the bank's environmental sustainability initiative.",
      "Diagnosed infrastructure issues affecting a third-party Jenkins deployment, coordinated cross-department communication, and helped establish a secure development environment compliant with internal security policies.",
    ],
    technologies: [
      "Java",
      "Linux",
      "Jenkins",
      "Nginx",
      "Git",
    ],
  },
  {
    title: "IT Specialist",
    company: "DHL",
    location: "Beijing, China",
    period: "Oct 2012 - Jun 2016",
    type: "Full-time Contract",
    overview: "Supported enterprise IT infrastructure for DHL's Northern China logistics center near Beijing Capital International Airport. Worked across servers, networking, warehouse systems, and global infrastructure projects while ensuring reliable IT operations for logistics and customer service teams.",
    highlights: [
      "Supported enterprise IT operations for approximately 70 employees, maintaining Windows servers, Active Directory, Cisco networking equipment, enterprise services, printers, and automated parcel sorting systems.",
      "Led the local implementation of multiple global infrastructure projects, deploying HP servers, Cisco switches, wireless controllers, and more than 40 Motorola handheld devices while coordinating with engineering teams in Germany.",
      "Configured Windows Server, Active Directory, DNS, DHCP, file services, and network infrastructure to support daily warehouse and office operations.",
      "Investigated warehouse Wi-Fi coverage issues through on-site analysis, identified signal dead zones inside the steel warehouse, proposed additional access point placement, and improved wireless connectivity for handheld logistics terminals.",
      "Supported Windows CE-based Motorola handheld devices used for barcode scanning and parcel tracking across warehouse operations.",
      "Maintained mission-critical IT systems supporting automated parcel sorting, helping ensure uninterrupted logistics operations."
    ],
    technologies: [
      "Windows Server",
      "Active Directory",
      "Cisco Networking",
      "Cisco Wireless",
      "Windows CE",
      "Motorola Handheld",
      "Enterprise Wi-Fi",
      "DNS",
      "DHCP"
    ],
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
  lastUpdate: "July 2026",
  assetAllocation: [
    {
      code: "NYSE:ORCL",
      link: "https://www.google.com/finance/beta/quote/ORCL:NYSE",
      percentage: 70,
      color: "bg-purple-500",
    },
    {
      code: "NYSE:SOXL",
      link: "https://www.google.com/finance/beta/quote/SOXL:NYSEARCA",
      percentage: 17,
      color: "bg-blue-500",
    },
    {
      code: "NYSE:SMR",
      link: "https://www.google.com/finance/beta/quote/SMR:NYSE",
      percentage: 13,
      color: "bg-emerald-500",
    },
  ],
  sectorAllocation: [
    {
      name: "Technology",
      percentage: 70,
      color: "bg-pink-500",
    },
    {
      name: "Semiconductors",
      percentage: 17,
      color: "bg-teal-500",
    },
    {
      name: "Energy",
      percentage: 13,
      color: "bg-indigo-500",
    },
  ],
};
