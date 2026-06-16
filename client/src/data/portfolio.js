export const about = {
  name: "Roshan Singh",
  title: "Software Engineer",
  tagline: "Engineer. Learner. Builder.",
  bio: "I transform ideas into effective software solutions through clean code and thoughtful design. Focused on backend development, problem solving, and creating meaningful impact through technology.",
  profileImage:
    "https://api.dicebear.com/9.x/initials/svg?seed=RS&backgroundColor=4F46E5&textColor=ffffff&fontSize=42",
  resumeUrl: "https://drive.google.com/file/d/1b38SoCDPL1Z5PUOezZNAoy1c1Dir_fhl/view?usp=drive_link",
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/rsh2801", icon: "FaGithub" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/roshan-singh-822094258", icon: "FaLinkedin" },
    { platform: "Twitter", url: "https://x.com/Roshan43841431", icon: "FaTwitter" },
    { platform: "Email", url: "mailto:sghrsh28@gmail.com", icon: "FaEnvelope" },
  ],
};

export const experiences = [
  {
    id: 1,
    company: "UKG (Ultimate Kronos Group)",
    role: "Software Developer Intern",
    location: "Noida, UP",
    startDate: "Jan 2026",
    endDate: "Present",
    description: [
      "Developed and delivered a secondary authentication feature for a key customer within the Unified Device Manager (UDM) platform, which manages device actions and on-site clock data",
      "Resolved multiple S2 and S3 severity defects including critical customer-reported issues, improving platform stability",
      "Worked within Agile SDLC — participating in sprint planning, code reviews, and production deployments",
      "Contributed to automation efforts and production support workflows for the UDM team",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "MedCare",
    description:
      "A comprehensive full-stack hospital management system with patient portal, admin dashboard, appointment scheduling, and role-based access control with JWT authentication and Cloudinary integration.",
    techTags: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary"],
    liveUrl: "https://medcare-hms-rs.netlify.app/",
    githubUrl: "https://github.com/rsh2801/MEDCARE_HMS_SYSTEM",
    image: "/images/medcare.png",
    featured: true,
  },
  {
    id: 2,
    title: "SmartTrip",
    description:
      "An AI-powered travel planning web app with personalized recommendations, real-time location services using Gemini AI and GoMaps API, and Firebase authentication.",
    techTags: ["Firebase", "React", "shadcn/UI", "Gemini AI", "GoMaps API"],
    liveUrl: null,
    githubUrl: "https://github.com/rsh2801/SMARTTRIP",
    image: "https://placehold.co/600x400/06B6D4/ffffff?text=SmartTrip",
    featured: true,
  },
  {
    id: 3,
    title: "ShopSphere",
    description:
      "A full-stack food application with modular architecture — a Spring Boot backend with JWT authentication and Spring Security, a React.js customer-facing client for shopkeepers, and an admin panel for managing products, orders, and users.",
    techTags: ["Java", "Spring Boot", "Spring Security", "MongoDB", "React", "JWT"],
    liveUrl: "https://shop-sphere-client-gamma.vercel.app/",
    githubUrl: "#",
    image: "/images/shopsphere.png",
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "A modern personal portfolio website with smooth animations, dark mode, responsive design, and an interactive particle hero section.",
    techTags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/images/portfolio.png",
    featured: true,
  },
];

export const codingProfiles = [
  {
    id: 1,
    platform: "LeetCode",
    username: "rsh-sgh28",
    url: "https://leetcode.com/u/rsh-sgh28/",
    icon: "SiLeetcode",
    color: "#FFA116",
    stats: [
      { label: "Problems Solved", value: "500+" },
      { label: "Max Rating", value: 1854 },
      { label: "Badge", value: "Knight" },
    ],
  },
  {
    id: 2,
    platform: "Codeforces",
    username: "aabnrml",
    url: "https://codeforces.com/profile/aabnrml",
    icon: "SiCodeforces",
    color: "#1F8ACB",
    stats: [
      { label: "Problems Solved", value: "250+" },
    ],
  },
  {
    id: 3,
    platform: "GeeksforGeeks",
    username: "aabnrml1",
    url: "https://www.geeksforgeeks.org/profile/aabnrml1",
    icon: "SiGeeksforgeeks",
    color: "#2F8D46",
    stats: [
      { label: "Problems Solved", value: "250+" },
    ],
  },
];

export const techStack = [
  {
    id: 1,
    category: "Frontend",
    items: [
      { name: "React", icon: "SiReact", proficiency: 95 },
      { name: "Next.js", icon: "SiNextdotjs", proficiency: 85 },
      { name: "TypeScript", icon: "SiTypescript", proficiency: 90 },
      { name: "Tailwind CSS", icon: "SiTailwindcss", proficiency: 95 },
      { name: "JavaScript", icon: "SiJavascript", proficiency: 95 },
      { name: "HTML5", icon: "SiHtml5", proficiency: 95 },
      { name: "CSS3", icon: "SiCss", proficiency: 90 },
    ],
  },
  {
    id: 2,
    category: "Backend",
    items: [
      { name: "Java", icon: "SiOpenjdk", proficiency: 85 },
      { name: "Spring Boot", icon: "SiSpringboot", proficiency: 80 },
      { name: "Node.js", icon: "SiNodedotjs", proficiency: 90 },
      { name: "Express", icon: "SiExpress", proficiency: 90 },
    ],
  },
  {
    id: 3,
    category: "Database",
    items: [
      { name: "MongoDB", icon: "SiMongodb", proficiency: 90 },
      { name: "PostgreSQL", icon: "SiPostgresql", proficiency: 80 },
      { name: "Redis", icon: "SiRedis", proficiency: 75 },
      { name: "Firebase", icon: "SiFirebase", proficiency: 70 },
    ],
  },
  {
    id: 4,
    category: "DevOps & Tools",
    items: [
      { name: "Git", icon: "SiGit", proficiency: 90 },
      { name: "Docker", icon: "SiDocker", proficiency: 80 },
      { name: "GitHub Actions", icon: "SiGithubactions", proficiency: 80 },
      { name: "VS Code", icon: "SiVscodium", proficiency: 95 },
    ],
  },
];
