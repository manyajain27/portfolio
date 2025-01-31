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
  git,
  QPL,
  djbeats,
  unicode,
  expo,
  litsoc,
  carrent,
  jobit,
  firebase,
  tripguide,
  threejs,
  django,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Tech Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "expo",
    icon: expo,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Quickyearning Private Limited",
    icon: QPL,
    iconBg: "#383E56",
    date: "November 2024 - January 2025",
    points: [
      "Collaborated with the development team to integrate frontend components with backend APIs.",
      "Contributed to 1000+ lines of code for the company's main website.",
      "Ensured effective communication and teamwork in a fast-paced development environment.",
    ],
  },
  {
    title: "Technical Co-Committee Member",
    company_name: "DJ Literary Society",
    icon: litsoc,
    iconBg: "#1E293B",
    date: "October 2024 - Present",
    points: [
      "Developing and maintaining a full-stack website for the literary society.",
    ],
  },
  {
    title: "Artist",
    company_name: "DJS Beats",
    icon: djbeats,
    iconBg: "#1C1C28",
    date: "October 2024 - Present",
    points: [
      "Keyboard and guitar artist contributing to the college music club performances.",
    ],
  },
  {
    title: "Full Stack Django Mentee",
    company_name: "DJ Unicode",
    icon: unicode,
    iconBg: "#27272A",
    date: "August 2024 - Present",
    points: [
      "Exploring both frontend and backend development with Django.",
      "Collaborating with team members and other committees on various projects.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tinder Clone",
    description:
      "Developed a fully functional Tinder clone using React Native Expo and Firebase, featuring a swiping card interface, matching algorithm, and live chat functionality for matched users.",
    tags: [
      { name: "react-native", color: "text-blue-500" },
      { name: "firebase", color: "text-yellow-500" },
    ],
    image: "path/to/tinder_clone_image.png",
    source_code_link: "https://github.com/your-tinder-clone-link",
  },
  {
    name: "Brew Your Experiences",
    description:
      "Designed and developed a website for a travel company to enable users to book customized travel plans. Integrated features like email newsletter subscriptions and framer motion animations for better engagement.",
    tags: [
      { name: "reactjs", color: "text-green-500" },
      { name: "django", color: "text-purple-500" },
      { name: "seo", color: "text-yellow-600" },
    ],
    image: "path/to/brew_your_experiences_image.png",
    source_code_link: "https://www.brewyourexperiences.com",
  },
  {
    name: "FitCut Fitness Website",
    description:
      "Developed a fitness platform using ReactJS and Django, integrating Gemini AI for personalized meal, fitness, and diet plans. Implemented interactive graphs to visualize user fitness progress.",
    tags: [
      { name: "reactjs", color: "text-green-500" },
      { name: "django", color: "text-purple-500" },
      { name: "AI", color: "text-blue-600" },
    ],
    image: "path/to/fitcut_image.png",
    source_code_link: "https://github.com/your-fitcut-link",
  },
  {
    name: "Resume Builder Website",
    description:
      "Created a resume builder platform in ReactJS and Django. Implemented features allowing users to build and preview resumes in real-time and extract data from uploaded resumes automatically.",
    tags: [
      { name: "reactjs", color: "text-green-500" },
      { name: "django", color: "text-purple-500" },
    ],
    image: "path/to/resume_builder_image.png",
    source_code_link: "https://resume-builder-taupe-nine.vercel.app/",
  },
];


export { services, technologies, experiences, testimonials, projects };
