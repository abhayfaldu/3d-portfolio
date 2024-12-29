import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  dell,
  chanda_kaudi,
  shopzon_backend,
  vue,
  express,
  mysql,
  socketio,
  bootstrap,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development", 
    icon: backend,
  },
  {
    title: "Full Stack Development",
    icon: creator,
  },
  {
    title: "SPA Development",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Vue.js",
    icon: vue,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Socket.io",
    icon: socketio,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Web Ledger Solutions Pvt. Ltd.",
    icon: web,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Designed and developed scalable web applications using Vue.js, Adonis.js, and TypeScript for financial platforms.",
      "Built advanced custom recurrence scheduling systems with TypeScript and optimized MySQL queries, improving performance and scalability.",
      "Delivered responsive UI/UX designs using Bootstrap, reusable Vue.js components, and user-centric workflows.",
      "Collaborated with cross-functional teams to gather requirements, plan sprints, and deploy high-impact features within deadlines.",
    ],
  },
  {
    title: "Full-Stack Web Development",
    company_name: "Masai School",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Dec 2022",
    points: [
      "Completed intensive full-stack web development training with focus on MERN stack.",
      "Developed multiple projects including e-commerce platforms and real-time applications.",
      "Learned and implemented modern web development practices, version control, and agile methodologies.",
      "Participated in coding challenges and hackathons, securing 3rd place in Game Development Hackathon.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Abhay demonstrated exceptional skill in developing our financial platform. His expertise in Vue.js and TypeScript significantly improved our application's performance.",
    name: "Rajesh Kumar",
    designation: "Tech Lead",
    company: "Web Ledger Solutions",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Working with Abhay was a great experience. His attention to detail and ability to optimize complex database queries made our scheduling system much more efficient.",
    name: "Priya Sharma",
    designation: "Project Manager",
    company: "FinTech Solutions",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    testimonial:
      "Abhay's full-stack expertise and commitment to delivering user-centric solutions made him an invaluable team member. His work on real-time features was particularly impressive.",
    name: "Amit Patel",
    designation: "Senior Developer",
    company: "Tech Innovations Ltd",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Dell.com Clone",
    description: "Built a comprehensive e-commerce platform allowing users to browse and purchase laptops and accessories. Developed key features like product filtering, sorting, and search functionality for enhanced user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: dell,
    source_code_link: "https://github.com/abhayfaldu/Dell.com_clone",
  },
  {
    name: "Chanda-Kaudi Game",
    description: "Developed a digital adaptation of a traditional Indian board game during a 2-day hackathon. Implemented real-time multiplayer gameplay with live chat functionality using Socket.io.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: chanda_kaudi,
    source_code_link: "https://github.com/abhayfaldu/Chanda_kaudi_game",
  },
  {
    name: "E-commerce Backend",
    description: "Designed and implemented a robust backend using MVC architecture to support user authentication and product management. Developed APIs for functionalities like login, signup, filtering, sorting, and order processing.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: shopzon_backend,
    source_code_link: "https://github.com/abhayfaldu/shopzon-backend",
  },
];

export { services, technologies, experiences, testimonials, projects };
