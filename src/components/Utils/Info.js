import works1 from "../../assets/work-eg-3.png";
import works2 from "../../assets/work-eg-6.png";
import works3 from "../../assets/works3.png";
import works4 from "../../assets/Work4.png";
import works5 from "../../assets/work-5.png";
import works6 from "../../assets/Works7.png";
import reactlogo from "../../assets/Reactlogo.png";
import Html5logo from "../../assets/HTMLlogo.png";
import nodelogo from "../../assets/nodelogo.png";
import Csslogo from "../../assets/csslogo.png";
import JSlogo from "../../assets/JSlogo.png";
import JQuerylogo from "../../assets/JQuery.png";
import Postgreslogo from "../../assets/PostgreSQL.png";
import Bootstraplogo from "../../assets/bootstraplogo.png";
import TSlogo from "../../assets/TSlogo.png";
import Gitlogo from "../../assets/Gitlogo.png";

export const MyWorks = [
  {
    title: "Carpooling Application",
    image: works4,
    description:
      "RideMyWay is a full-stack carpooling platform built with React, Node.js, and PostgreSQL that connects drivers offering rides with passengers seeking transport. It features secure authentication with email verification, role-based access for drivers and passengers, and cookie-based sessions. Drivers can easily create and manage ride offers, while passengers can request, join, or cancel rides, all supported by real-time updates.",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/seanralph007/ridemyway-frontend",
    demo: "https://ridemyway-frontend.vercel.app/",
  },
  {
    title: "Clothing Store App",
    image: works6,
    description:
      "Elegant Fits is a stylish frontend clothing store built with React, TypeScript, and Redux. Users can browse outfits, add them to a cart, and manage their selections through a modern cart system. The cart opens in a sleek modal, showing chosen items, total price, and quantity controls for a smooth shopping experience.",
    tags: ["React", "TypeScript"],
    github: "https://github.com/seanralph007/Elegant-Fits",
    demo: "https://elegant-fits.vercel.app/",
  },
  {
    title: "Multi StopWatch",
    image: works5,
    description:
      "ReactTimer is a frontend application built with React and TypeScript that allows users to create and manage multiple stopwatches simultaneously. Each timer can be customized with a name and duration, and all timers can run independently or together, providing a smooth and interactive time-tracking experience.",
    tags: ["React", "TypeScript"],
    github: "https://github.com/seanralph007/Simple-Timer",
    demo: "https://simple-timer-roan.vercel.app/",
  },
  {
    title: "Countries Travel Tracker",
    image: works3,
    description:
      "TravelTracker enables users to record and manage a list of countries they’ve visited. It features a clean and responsive interface, allowing users to add entries and store them in a PostgreSQL database. The app is built with a React frontend and a Node.js + Express backend, ensuring smooth performance and reliable data handling.",
    tags: ["ReactJS", "PostgreSQL", "Express"],
    github: "#",
    demo: "#",
  },
  {
    title: "Note App",
    image: works1,
    description:
      "This application allows users to enter a note title and content, then save it for future reference. Designed with simplicity and functionality in mind, the app features a clean user interface that ensures a smooth note-taking experience. It’s ideal for quick memos, to-dos, or ideas on the go.",
    tags: ["React", "CSS", "Vite"],
    github: "https://github.com/Ify01/Bank-web",
    demo: "https://dashboard-demo-link.vercel.app",
  },
  {
    title: "Simple To-Do List",
    image: works2,
    description:
      "This app enables users to add, view, and manage their to-do items in a clean, responsive interface. Designed for simplicity and ease of use, the To-Do List App helps users stay organized and track their progress efficiently. With just a click tasks can be removed when completed, offering essential functionality for personal task management.",
    tags: ["React", "CSS", "Vite"],
    github: "https://github.com/your-bank-repo",
    demo: "https://hoobank-demo-link.vercel.app",
  },
];

export const MyEdu = [
  {
    title: "HTML & CSS",
    organization: "FreeCodeCamp",
    year: "2022",
  },
  {
    title: "Node & Postgres",
    organization: "Udemy",
    year: "2022 - 2023",
  },
  {
    title: "FullStack Web Development",
    organization: "Udemy",
    year: "2023 - 2024",
  },
  {
    title: "Bsc Computer Science",
    organization: "Nnamdi Azikiwe Federal University, Nigeria",
    year: "2019 - 2024",
  },
];

export const MySkills = [
  {
    PNG: reactlogo,
    name: "React",
    alter: "Reactlogo",
  },
  {
    PNG: TSlogo,
    name: "TypeScript",
    alter: "typescriptlogo",
  },
  {
    PNG: nodelogo,
    name: "NodeJS",
    alter: "nodelogo",
  },
  {
    PNG: Postgreslogo,
    name: "PostgreSQL",
    alter: "Postgreslogo",
  },
  {
    PNG: JSlogo,
    name: "JavaScript",
    alter: "javascriptlogo",
  },
  {
    PNG: Html5logo,
    name: "HTML",
    alter: "HTML5logo",
  },
  {
    PNG: Csslogo,
    name: "CSS",
    alter: "csslogo",
  },
  {
    PNG: Gitlogo,
    name: "Git",
    alter: "gitlogo",
  },
  {
    PNG: JQuerylogo,
    name: "JQuery",
    alter: "Jquerylogo",
  },
  {
    PNG: Bootstraplogo,
    name: "BootStrap",
    alter: "Bootstraplogo",
  },
];
