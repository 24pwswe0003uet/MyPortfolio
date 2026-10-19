import zombieSurvival1 from "../assets/projects/zombie-survival/zombie-1.png";
import zombieSurvival2 from "../assets/projects/zombie-survival/zombie-2.png";
import zombieSurvivalVideo from "../assets/projects/zombie-survival/zombie-3.mp4";
import tailorShop1 from "../assets/projects/tailor-shop-saas/tailor-shop-1.png";
import tailorShop2 from "../assets/projects/tailor-shop-saas/tailor-shop-2.png";
import tailorShop3 from "../assets/projects/tailor-shop-saas/tailor-shop-3.png";
import sims1 from "../assets/projects/sims/sims-1.png";
import sims2 from "../assets/projects/sims/sims-2.png";
import sims3 from "../assets/projects/sims/sims-3.png";
import xoneCafe1 from "../assets/projects/xone-cafe/xone-cafe-1.png";
import xoneCafe2 from "../assets/projects/xone-cafe/xone-cafe-2.png";
import xoneCafe3 from "../assets/projects/xone-cafe/xone-cafe-3.png";
import starCollectorVideo from "../assets/projects/star-collector/star-collector.mp4";
import alienRushVideo from "../assets/projects/alien-rush/alien-rush.mp4";
import flappyBirdVideo from "../assets/projects/flappy-bird/flappy-bird.mp4";

export const hero = {
  eyebrow: "Software Engineering Student @ UET Peshawar",
  name: "Malak Saad Khan",
  roles: ["Flutter Developer", "Game Developer", "Full-Stack Enthusiast", "AI & Software Engineering Student"],
  intro:
    "Software Engineering student at UET Peshawar building real-world applications across mobile, web, and game development — from client-facing business systems to interactive Unity games. Passionate about clean architecture, scalable systems, and exploring artificial intelligence.",
  cta: [
    { label: "View Projects", href: "#projects" },
    { label: "Download CV", href: "/MalakSaadKhan-CV.pdf" },
  ],
  socials: [
    { name: "Linkedin", href: "https://www.linkedin.com/in/malaksaad-khan-44795339a/" },
    { name: "Github", href: "https://github.com/24pwswe0003uet" },
    { name: "Email", href: "mailto:24pwswe0003@uetpeshawar.edu.pk" },
  ],
};

export const about = {
  heading: "About Me",
  body: "I'm a Software Engineering undergraduate at the University of Engineering and Technology Peshawar, currently maintaining a 4.00/4.00 CGPA. My work spans mobile app development with Flutter, full-stack web systems with PHP/Node.js and MySQL, and game development in Unity with C#. Beyond the classroom, I lead the Software Excellence Society as President, where I organize technical workshops, seminars, and student development programs. I'm especially drawn to building software that solves real business problems — from digitizing a tailoring workflow to managing solar installment plans for real clients.",
};

export const education = [
  {
    period: "2021 – 2023",
    location: "Peshawar, Pakistan",
    title: "Intermediate in Pre-Engineering",
    institution: "Cadet College Warsak",
    link: "https://fsccw.edu.pk/",
  },
  {
    period: "16/09/2024 – Present",
    location: "Peshawar, Pakistan",
    title: "Bachelors in Software Engineering",
    institution: "University of Engineering and Technology Peshawar",
    details: "Current CGPA: 4.00/4.00 (4th Semester Result Pending)",
    coursework: [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Software Engineering",
      "Software Design & Architecture",
      "Computer Architecture",
      "Computer Networks (CCNA Fundamentals)",
      "Digital Logic Design",
      "UML",
      "ICT",
    ],
    link: "https://www.uetpeshawar.edu.pk/",
  },
];

export const skills = [
  {
    category: "Languages & Programming",
    items: [
      { name: "C", icon: "code" },
      { name: "C++", icon: "code" },
      { name: "C#", icon: "code" },
      { name: "Dart", icon: "code" },
      { name: "SQL", icon: "database" },
    ],
  },
  {
    category: "Frameworks, Tools & Platforms",
    items: [
      { name: "Flutter", icon: "smartphone" },
      { name: "Unity Engine", icon: "gamepad" },
      { name: "MySQL", icon: "database" },
      { name: "Docker", icon: "container" },
      { name: "REST API", icon: "link" },
      { name: "Web Dev + Vibe Coding", icon: "sparkles" },
    ],
  },
  {
    category: "Concepts",
    items: [
      { name: "Object-Oriented Programming", icon: "layers" },
      { name: "Database Management Systems", icon: "database" },
      { name: "UML", icon: "diagram" },
      { name: "Software Architecture", icon: "building" },
    ],
  },
  {
    category: "Professional Skills",
    items: [
      { name: "Leadership", icon: "users" },
      { name: "Teamwork", icon: "users" },
      { name: "Project Coordination", icon: "clipboard" },
      { name: "App Development", icon: "smartphone" },
    ],
  },
];

export const services = [
  {
    n: "01",
    name: "Mobile App Development",
    desc: "Building cross-platform mobile applications with Flutter, from clean architecture to polished, responsive interfaces — like the solar installment system I shipped for a real client.",
  },
  {
    n: "02",
    name: "Web Development",
    desc: "Designing and developing full-stack web applications with React, PHP/Node.js and MySQL, focused on clean UI/UX, reusable components, and performance.",
  },
  {
    n: "03",
    name: "Game Development",
    desc: "Creating interactive games in Unity with C#, including AI-driven enemy behavior, player mechanics, and game systems built from the ground up.",
  },
  {
    n: "04",
    name: "Database Design & Management",
    desc: "Structuring and managing databases with MySQL to ensure data integrity, scalability, and efficient querying across business applications.",
  },
  {
    n: "05",
    name: "Technical Problem Solving",
    desc: "Analyzing complex technical challenges and delivering clear, efficient, and well-thought-out solutions — from business workflows to platform integrations.",
  },
];

export const projects = [
  {
    title: "Star Collector",
    category: "Game",
    tags: ["Unity 2D", "C#", "Player Movement", "Collectibles"],
    description:
      "Star Collector is a 2D Unity game focused on player movement and collectible-based gameplay. The project established my understanding of Unity's physics, collision detection, player controllers, interactive GameObjects, and fundamental gameplay programming in C#. The core objective is to navigate the environment and collect stars, providing a foundation for more advanced gameplay systems.",
    link: "",
    badge: "Internship @ AppTech Media",
    inProgress: false,
    video: starCollectorVideo,
    images: [],
  },
  {
    title: "Alien Rush",
    category: "Game",
    tags: ["Unity 2D", "C#", "Enemy Spawning", "Arcade"],
    description:
      "Alien Rush is a 2D arcade survival game developed in Unity where the player must navigate an increasingly active environment while enemies enter the level from multiple spawn locations. The project focuses on enemy spawning, player movement, collision systems, game-state management, and dynamic gameplay.",
    link: "",
    badge: "Internship @ AppTech Media",
    inProgress: false,
    video: alienRushVideo,
    images: [],
  },
  {
    title: "Flappy Bird",
    category: "Game",
    tags: ["Unity 2D", "C#", "Mobile", "Game States"],
    description:
      "Flappy Bird is a 2D mobile-oriented arcade game developed in Unity and C#. The project implements physics-based bird movement, continuously moving and repositioning pipe obstacles, trigger-based scoring, sprite animation, audio feedback, game-state management, and complete menu/game-over UI. The game supports mouse, keyboard, and mobile touch input and is configured for Android deployment.",
    link: "",
    badge: "Internship @ AppTech Media",
    inProgress: false,
    video: flappyBirdVideo,
    images: [],
  },
  {
    title: "Zombie Survival Game",
    category: "Game",
    tags: ["Unity", "C#", "Game Development"],
    description:
      "A survival-style game built in Unity featuring AI-driven enemy behavior, player mechanics, and game systems designed from the ground up.",
    link: "https://www.linkedin.com/posts/malaksaad-khan-44795339a_unity3d-gamedevelopment-ai-activity-7470944735877160960-FP-I",
    badge: "Personal Project",
    inProgress: false,
    video: zombieSurvivalVideo,
    images: [zombieSurvival1, zombieSurvival2, zombieSurvival2],
  },
  {
    title: "Tailor Shop SaaS",
    category: "Web App",
    tags: ["PHP", "MySQL", "Docker"],
    description:
      'A SaaS web application ("Helix Shop") that digitizes a complete tailoring business workflow — customer management, measurement records, order tracking, stitching task assignment, receipt generation, reporting & analytics, and role-based access control.',
    link: "https://github.com/24pwswe0003uet/Tailor-Shop-SAAS",
    badge: "Personal Project",
    inProgress: false,
    images: [tailorShop1, tailorShop2, tailorShop3],
  },
  {
    title: "SIMS (Solar Installment Management System)",
    category: "Mobile App",
    tags: ["Flutter", "Dart", "Node.js", "Express.js", "MySQL", "REST API"],
    description:
      "A full-stack system streamlining customer management, solar project tracking, installment payments, invoices, receipts, warranties, and reporting through a centralized dashboard. Built a responsive Flutter frontend integrated with REST APIs and MySQL, with secure authentication and clean, scalable architecture.",
    link: "https://github.com/24pwswe0003uet",
    badge: "Client Project",
    inProgress: false,
    images: [sims1, sims2, sims3],
  },
  {
    title: "Xone Cafe (Cafe Management System)",
    category: "Web App",
    tags: ["React", "TypeScript", "Node.js", "Express.js", "MySQL", "REST API"],
    description:
      "A modern cafe management system covering customer management, menu management, order processing, billing, and administrative dashboards. Built a responsive React frontend with a REST API backend, focused on clean UI/UX, reusable components, and performance optimization.",
    link: "https://github.com/24pwswe0003uet",
    badge: "Client Project",
    inProgress: true,
    images: [xoneCafe1, xoneCafe2, xoneCafe3],
  },
];

export const experiences = [
  {
    role: "Software Developer (Client Work)",
    location: "Peshawar, Pakistan",
    period: "2025 – Present",
    details: [
      "Delivered full-stack software solutions for real clients, including a Flutter-based solar installment management system and a React-based cafe management platform.",
      "Worked across the full development lifecycle: frontend implementation, backend API integration, and database design.",
      "Collaborated within development teams to deliver features on schedule, applying clean architecture and scalable coding practices.",
    ],
  },
  {
    role: "Team Collaboration & Web Development",
    location: "Peshawar, Pakistan",
    period: "2024 – Present",
    details: [
      "Contributed to team-based development projects, coordinating with other developers on shared codebases and version control.",
      "Built and maintained responsive web interfaces, focusing on clean UI/UX and reusable component architecture.",
    ],
  },
  {
    role: "President — Software Excellence Society",
    location: "Peshawar, Pakistan",
    period: "2024 – Present",
    details: [
      "Led the Software Excellence Society in planning and organizing technical and academic activities.",
      "Coordinated workshops, seminars, and student development programs.",
      "Managed student teams and collaborated with faculty members and university administration.",
      "Organized and supported major university events, conferences, and technical initiatives.",
      "Strengthened leadership, communication, and project coordination skills through active student engagement.",
    ],
  },
];

export const experience = {
  role: "President — Software Excellence Society",
  location: "Peshawar, Pakistan",
  period: "2024 – Present",
  details: [
    "Led the Software Excellence Society in planning and organizing technical and academic activities.",
    "Coordinated workshops, seminars, and student development programs.",
    "Managed student teams and collaborated with faculty members and university administration.",
    "Organized and supported major university events, conferences, and technical initiatives.",
    "Strengthened leadership, communication, and project coordination skills through active student engagement.",
  ],
  conferences: [
    {
      name: "ICCIIOT 2026",
      date: "16/02/2026 – 17/02/2026",
      location: "Peshawar",
      description:
        "Assisted in planning, coordinating, and managing technical conferences, workshops, and university events through collaboration with faculty, organizers, and student volunteers.",
    },
    {
      name: "ICET 2025",
      date: "2024",
      location: "Peshawar",
      description:
        "Assisted in planning, coordinating, and managing technical conferences, workshops, and university events through collaboration with faculty, organizers, and student volunteers."
    },
  ],
};

export const awards = [
  { title: "Prime Minister Laptop Scheme Recipient", date: "25/02/2026" },
  { title: "Honhaar Scholarship Recipient", date: "2025" },
];

export const contact = {
  heading: "Let's Connect",
  subheading: "Open to internships, freelance projects, and collaboration opportunities.",
  email: "24pwswe0003@uetpeshawar.edu.pk",
  phone: "(+92) 3279165160",
  location: "Peshawar, Pakistan",
  linkedin: "https://www.linkedin.com/in/malaksaad-khan-44795339a/",
  github: "https://github.com/24pwswe0003uet",
};
