export interface SocialLink {
  label: string;
  href: string;
  type: "email" | "linkedin" | "github" | "external";
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Project {
  name: string;
  stack: string[];
  description: string;
  features: string[];
  screenshot?: string;
  links?: {
    github?: string;
    demo?: string;
  };
}

export interface ExperienceItem {
  role: string;
  organization: string;
  dates: string;
  location?: string;
  bullets: string[];
}

export interface EducationItem {
  institution: string;
  program?: string;
  dates?: string;
  details?: string[];
}

export interface PortfolioData {
  name: string;
  location: string;
  headline: string;
  intro: string;
  summary: string;
  interests: string;
  email: string;
  resumePath: string;
  socialLinks: SocialLink[];
  skillGroups: SkillGroup[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  achievements: string[];
  certifications: string[];
}

export const portfolio: PortfolioData = {
  name: "Khushi Swarna",
  location: "India",
  headline: "Software Engineer",
  intro:
    "CSE student focused on DSA, full-stack development, API integration, and responsive web applications.",
  summary:
    "Computer Science Engineering student skilled in DSA and full-stack development with JavaScript, Node.js, Express, and MongoDB. Experienced in building scalable web applications with API integration, responsive UI, and structured frontend workflows.",
  interests:
    "Also brings a cultivated appreciation for literature and a passion for artistic creativity.",
  email: "khushiswawarna333@gmail.com",
  resumePath: "/resume.pdf",
  socialLinks: [
    {
      label: "Email",
      href: "mailto:khushiswawarna333@gmail.com",
      type: "email",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/khushi-swarna-29b25827b/",
      type: "linkedin",
    },
    // TODO: Add GitHub when available in the resume/source material.
  ],
  skillGroups: [
    {
      title: "Programming Languages",
      items: ["Python", "C++", "JavaScript", "SQL"],
    },
    {
      title: "Frontend",
      items: ["HTML", "CSS", "Chart.js"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Databases",
      items: ["MongoDB", "DBMS"],
    },
    {
      title: "Core CS",
      items: ["DSA", "OOPs"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub"],
    },
  ],
  projects: [
    {
      name: "EmoStudy – Emotion-Aware Study Timer 2026",
      stack: ["JavaScript", "Node.js", "face-api.js", "TensorFlow.js", "Vercel"],
      description:
        "Emotion-aware study timer deployed on Vercel with on-device AI and complete on-device privacy.",
      features: [
        "Built a full-stack web application using on-device AI to detect emotions in real time via webcam and automatically adapt Pomodoro session lengths based on user emotions.",
        "Designed a dashboard featuring live emotion scores, focus analytics, charts, and streak tracking; deployed on Vercel with complete on-device privacy.",
      ],
      screenshot: "/emostudy-screenshot.png",
      links: {
        demo: "https://emostudy2.vercel.app",
      },
    },
    {
      name: "StudySphere - Student Productivity Web App",
      stack: ["HTML", "CSS", "JavaScript", "Chart.js"],
      description:
        "A multi-feature student productivity dashboard with tracking, time management, notes, and media integration.",
      features: [
        "Built a dashboard with tracker, Pomodoro timer, notes, and YouTube integration.",
        "Implemented REST API integration with Fetch for real-time data across 10+ pages.",
        "Developed interactive charts and dark/light theme persistence using localStorage.",
      ],
    },
  ],
  experience: [
    {
      role: "Intern",
      organization: "ZIDIO Development",
      dates: "06/2022 - 01/2023",
      bullets: [
        "Worked on frontend tasks and gained exposure to SDLC and C++ problem solving.",
      ],
    },
    {
      role: "Frontend Developer",
      organization: "Zidio",
      dates: "06/2026 - 08/2026",
      location: "Online",
      bullets: [
        "Built responsive UI using HTML, CSS, and JavaScript to improve performance and usability.",
        "Collaborated on UI components and used Git for version control.",
      ],
    },
  ],
  education: [
    {
      institution: "K.R. Mangalam University",
      program: "B.Tech, Computer Science Engineering",
      dates: "2023 - 2027",
      details: ["6th Semester", "8.3+ CGPA"],
    },
    {
      institution: "St. Joseph's Convent Higher Secondary School, Chittaranjan",
      // TODO: Add school dates or program details if you want them shown.
    },
  ],
  achievements: ["8.3+ CGPA at KRMU"],
  certifications: [
    "Google UX Design",
    "Azure Fundamentals",
    "Deloitte Cyber Simulation",
    "Codetantra C++",
  ],
};
