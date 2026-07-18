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
    ],
  },
  {
    category: "Frameworks, Tools & Platforms",
    items: [
      { name: "Flutter", icon: "smartphone" },
      { name: "Unity", icon: "gamepad" },
      { name: "Node.js", icon: "server" },
      { name: "Express.js", icon: "server" },
      { name: "React", icon: "code" },
      { name: "MySQL", icon: "database" },
      { name: "PHP", icon: "code" },
      { name: "Docker", icon: "container" },
      { name: "REST API", icon: "link" },
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

export const projects = [
  {
    title: "Zombie Survival Game",
    tags: ["Unity", "C#", "Game Development"],
    description:
      "A survival-style game built in Unity featuring AI-driven enemy behavior, player mechanics, and game systems designed from the ground up.",
    link: "https://www.linkedin.com/posts/malaksaad-khan-44795339a_unity3d-gamedevelopment-ai-activity-7470944735877160960-FP-I",
    badge: "Personal Project",
    inProgress: false,
  },
  {
    title: "Tailor Shop SaaS",
    tags: ["PHP", "MySQL", "Docker"],
    description:
      'A SaaS web application ("Helix Shop") that digitizes a complete tailoring business workflow — customer management, measurement records, order tracking, stitching task assignment, receipt generation, reporting & analytics, and role-based access control.',
    link: "https://github.com/24pwswe0003uet/Tailor-Shop-SAAS",
    badge: "Personal Project",
    inProgress: false,
  },
  {
    title: "SIMS (Solar Installment Management System)",
    tags: ["Flutter", "Dart", "Node.js", "Express.js", "MySQL", "REST API"],
    description:
      "A full-stack system streamlining customer management, solar project tracking, installment payments, invoices, receipts, warranties, and reporting through a centralized dashboard. Built a responsive Flutter frontend integrated with REST APIs and MySQL, with secure authentication and clean, scalable architecture.",
    link: "https://github.com/24pwswe0003uet",
    badge: "Client Project",
    inProgress: false,
  },
  {
    title: "Xone Cafe (Cafe Management System)",
    tags: ["React", "TypeScript", "Node.js", "Express.js", "MySQL", "REST API"],
    description:
      "A modern cafe management system covering customer management, menu management, order processing, billing, and administrative dashboards. Built a responsive React frontend with a REST API backend, focused on clean UI/UX, reusable components, and performance optimization.",
    link: "https://github.com/24pwswe0003uet",
    badge: "Client Project",
    inProgress: true,
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
      name: "ICCIIOT 2025",
      date: "16/02/2026 – 17/02/2026",
      location: "Peshawar",
      description:
        "Assisted in planning, coordinating, and managing technical conferences, workshops, and university events through collaboration with faculty, organizers, and student volunteers.",
    },
    {
      name: "ICET 2024",
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
