
import {
  // logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  ModularRec,
  mysql,
  dotnet,
  // express,
  aws,
  mui,
  schumacher,
  CoreReceiving,
  framer,
  figma,
  git,
  html,
  javascript,
  // mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  ccs
} from '../assets'


// Import Tekisky separately
// import tekisky from "../assets/company/tekisky.png";


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
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
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Express Js",
  //   icon: express,
  // },
  {
    name: "AWS",
    icon: aws,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "DotNet",
    icon: dotnet,
  },
  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "CoreCentric Engineering Solutions.",
    icon: ccs,
    iconBg: "#383E56",
    date: "Oct 2022 - present",
    points: [
      "💻 Developing and maintaining web applications using React.js for the frontend and ASP.NET Core API for the backend.",
      "🤝 Collaborating with cross-functional teams, including designers, product managers, and backend developers, to deliver high-quality, scalable solutions.",
      "📱 Implementing responsive designs and ensuring seamless cross-browser compatibility for an optimal user experience.",
      "🔍 Participating in code reviews and providing constructive feedback to maintain clean, efficient, and maintainable codebases.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Schumacher Portal",
    description:
      "Schumacher Portal is a web-based platform that allows users to search, explore, and Edit Schumacher's various process data, offering a seamless and efficient Dashboard view.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "ASP.Net Core",
        color: "pink-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      },
    ],
    image: schumacher,
    source_code_link: "https://github.com/CoreCentric-Solutions/Schumacher_Portal_UI",
  },
  {
    name: "Core Receiving",
    description:
      "it's a web application for receiving various items under different conditions such as scrap, pass, and visual inspection, with some items linked to serial numbers for categorization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
       {
        name: "MUI/Bootstrap",
        color: "white-text-gradient",
      },
      {
        name: "ASP.Net Core",
        color: "pink-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      }
    ],
    image: CoreReceiving,
    source_code_link: "https://github.com/CoreCentric-Solutions/SS_Core_Qc_Receiving_UI",
  },
  {
    name: "Modular Receiving",
    description:
      "Modular Receiving is an all-in-one solution for managing receiving operations across multiple clients, featuring workcell selection and multi-language support",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
           {
        name: "MUI/Bootstrap",
        color: "white-text-gradient",
      },
      {
        name: "ASP.Net Core",
        color: "pink-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      }
    ],
    image: ModularRec,
    source_code_link: "https://github.com/CoreCentric-Solutions/Modular_Receiving_UI",
  },
];

export { services, technologies, experiences, testimonials, projects };
