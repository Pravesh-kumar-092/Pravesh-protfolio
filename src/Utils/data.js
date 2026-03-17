import { 
    
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaAndroid,
    FaJava,
    FaApple,
    FaReact,
    FaGithub,
    FaWindows,
    FaLinux,

} from 'react-icons/fa';
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb, SiExpress, SiMysql,SiWebpack,SiParrotsecurity } from "react-icons/si";
import { VscVscode , VscCommentUnresolved , VscTerminalPowershell} from "react-icons/vsc";
import { FaGitAlt , FaXTwitter, FaDribbble } from "react-icons/fa6";
import { MdAndroid, MdGroups3, MdJavascript } from "react-icons/md";
import TaskManager from '../assets/task-manager.avif'
import LMS from '../assets/LMs.png'
import Cover from '../assets/Cover.png'
import Uidg from '../assets/UIdg.png'
import { IoLogoWhatsapp } from "react-icons/io";
import Ludo from "../assets/Ludo.png"
import Food from "../assets/Food.png"
import Taxi from "../assets/Taxi.png"
import Plant from "../assets/Plant.png"
import UI from "../assets/ui.png"
import Dashboard from "../assets/mms.png"



//Menu items

export const MENU_LINKS = [
    {id:"01", label: "Home", offset:-100, to:"hero"},
    {id:"02", label: "Skills", offset:-100, to:"skills"},
    {id:"03", label: "About us", offset:-100, to:"about"},
    {id:"04", label: "Project", offset:-100, to:"project"},
    {id:"05", label: "Contact", offset:-100, to:"contact"},
];
// Stats 

export const STATS = [
    {id:"01", count:"0-1" , label: `Year of \nExprience`},
    {id:"02", count:"10" , label: `Certification \nEarned`},
    {id:"03", count:"12" , label: `Projects \nComplrted`},
    // {id:"04", count:"37" , label: `Happly \nClients`}
];

// Skillls tab

export const SKILL_TABS = [
    {id: "01" , label: "All" , value: "all"},
    {id: "02" , label: "Frontend" , value: "frontend"},
    {id: "03" , label: "Backend" , value: "backend"},
    {id: "04" , label: "Tool" , value: "tool"},
    {id: "05" , label: "Skill" , value: "soft-skills"},
    {id: "06" , label: "OS" , value: "os"},

];

// Skills

export const SKILLS = [
    {
        id:"01",
        icon:FaReact,
        skill: "React js",
        progress: 95,
        type: "frontend",
        description:"Experienced in building scalable, component-driven web applications using React.js. Proficient in using React Hooks, Context API, Redux, and React Router, with a strong focus on performance optimization, reusable components, and clean architecture. ",
    },
    {
        id:"02",
        icon:FaHtml5,
        skill: "Html",
        progress: 99,
        type: "frontend",
        description:"Expert in structuring web content with semantic HTML, ensuring accessibility and SEO optimization by employing ARIA roles and attributes, semantic landmarks and headings, responsive layout techniques, and performance best practices to improve usability and search rankings.",
    },
    {
        id:"03",
        icon:FaCss3,
        skill: "Css",
        progress: 65,
        type: "frontend",
        description:"Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SASS and LESS, with expertise in Flexbox, Grid, animations, and modern UI/UX best practices.",
    },
    {
        id:"04",
        icon:MdJavascript,
        skill: "JavaScript",
        progress: 68,
        type: "frontend",
        description:"Skilled in writing clean, modular, and efficient JavaScript code to create interactive web functionality, improve user engagement, and maintain scalable application architecture.",
    },
    {
        id:"05",
        icon:FaNodeJs,
        skill: "Node.Js",
        progress: 95,
        type: "backend",
        description:"Skilled in building scalable and high-performance server-side applications using Node.js, experienced in designing RESTful APIs, integrating MongoDB/SQL databases, and implementing authentication, security, and performance optimization best practices",
    },
    {
        id:"06",
        icon:SiExpress,
        skill: "Express.js",
        progress: 98,
        type: "backend",
        description:"Proficient in developing RESTful APIs and middleware using Express.js. Focused on creating secure, scalable, and efficient backend services with robust authentication, authorization, and error-handling mechanisms, while ensuring seamless integration with frontend applications and databases.",
    },
    {
        id:"07",
        icon:SiMongodb,
        skill: "MongoDB",
        progress: 95,
        type: "backend",
        description:"Experienced in designing and managing NoSQL databases using MongoDB. Skilled in schema design, query optimization, indexing, and implementing aggregation pipelines to ensure scalable and high-performance applications, with hands-on experience in data modeling, replication, and sharding for fault-tolerant architectures.",
    },
    {
        id:"08",
        icon:SiMysql,
        skill: "SQL",
        progress: 90,
        type: "backend",
        description:"Proficient in working with relational databases using SQL. Experienced in writing complex queries, stored procedures, triggers, and optimizing database performance for large-scale applications.",
    },
    {
        id:"09",
        icon:FaGithub,
        skill: "Git & Github",
        progress: 75,
        type: "tool",
        description:"Proficient in using Git and GitHub for version control, managing branches, collaborating with teams, resolving merge conflicts, and maintaining clean, organized, and efficient codebases.",
    },
    {
        id:"10",
        icon:VscVscode,
        skill: "Visual Studio Code",
        progress: 95,
        type: "tool",
        description:"Proficient in using Visual Studio Code for efficient development, debugging, and code management, leveraging extensions, version control integration, and productivity-enhancing features.",
    },
    {
        id:"11",
        icon:SiWebpack,
        skill: "Webpack",
        progress: 70,
        type: "tool",
        description:"Proficient in configuring and optimizing Webpack for modern web applications, managing asset bundling, code splitting, and build performance to enhance development efficiency and application speed.",
    },
    {
        id:"12",
        icon:MdAndroid,
        skill: "Android Studio",
        progress: 85,
        type: "tool",
        description:"Experienced in developing, testing, and debugging Android applications using Android Studio, implementing intuitive UI/UX designs, integrating APIs, and optimizing performance for seamless mobile experiences.",
    },
    {
        id:"13",
        icon:VscCommentUnresolved,
        skill: "Problem-Solving",
        progress: 85,
        type: "soft-skills",
        description:"Strong analytical skills to identify and resolve technical challenges efficiently, approaching problems with a structured, logical mindset to deliver innovative, reliable, and effective solutions consistently.",
    },
    {
        id:"14",
        icon:MdGroups3,
        skill: "Collabration",
        progress: 70,
        type: "soft-skills",
        description:"Experienced in collaborating within teams, contributing ideas, integrating feedback, and communicating effectively to ensure smooth project execution, alignment, and shared success across all stakeholders.",
    },
    {
        id:"15",
        icon:VscTerminalPowershell,
        skill: "Attention to Detail",
        progress: 83,
        type: "soft-skills",
        description:"Meticulous in writing clean, maintainable code and ensuring UI/UX consistency, focused on delivering high-quality, precise, and thorough work across all projects and tasks.",
    },
    {
        id:"16",
        icon:FaLinux,
        skill: "Kali Linux",
        progress: 70,
        type: "os",
        description:"Experienced in using Kali Linux for ethical hacking, penetration testing, and cybersecurity assessments, leveraging built-in tools for vulnerability scanning, network analysis, and security auditing.",
    },
    {
        id:"17",
        icon:FaWindows,
        skill: "Windows OS",
        progress: 70,
        type: "os",
        description:"Proficient in using Windows OS for software development, testing, and productivity, utilizing native tools, command-line utilities, and multitasking features for efficient workflow and project management.",
    },
    {
        id:"18",
        icon:FaApple,
        skill: "Mac OS",
        progress: 30,
        type: "os",
        description:"Proficient in using Mac OS for software development, multitasking, and productivity, leveraging its native tools, terminal, and ecosystem for efficient workflow and project management.",
    },
    {
        id:"19",
        icon:SiParrotsecurity,
        skill: "Parrot OS",
        progress: 60,
        type: "os",
        description:"Experienced in using Parrot OS for ethical hacking, penetration testing, and security assessments, leveraging built-in tools for network analysis, vulnerability testing, and digital forensics.",
    },
];

// About me 
export const ABOUT_ME = {
    content : `I'm a passionate Frontend Developer with a strong foundation in building responsive, user-friendly web applications. With a keen eye for design and performance, I specialize in crafting seamless digital experiences using modern technologies like React.js, JavaScript, and Tailwind CSS. My goal is to bridge the gap between aesthetics and functionality, ensuring every project I work on is both visually appealing and highly performant.
    \nMy journey in web development started with a simple curiosity-how does the web work? Fast forward to today, I have built dynamic applications, collaborated with teams, and honed my skills in frontend and backend development. I love tackling challenges, optimizing user experiences, and bringing creative ideas to life through code. Let's build something amazing together!`,

    socilaLinks : [
        {id:"01", label:"Whatsapp", icon:IoLogoWhatsapp, link:"https://wa.me/qr/46UZMALCUYBYF1"},
        {id:"02", label:"Instagram", icon:FaInstagram, link:"https://www.instagram.com/techmytic_x/"},
        {id:"03", label:"Github", icon:FaGithub , link:"https://github.com/Pravesh-kumar-092"},
        {id:"04", label:"LinkedIn", icon:FaLinkedin, link:"https://www.linkedin.com/in/pravesh-kumar-29a03423a/"},
        
    ],
    email: "praveshkumar09263@gmail.com",
    phone: "+91-9720538057",
    website: "https://pravesh-protfolio.vercel.app/"
};

export const PROJECTS = [
    {
        id:1,
        titel:"Skilify For Education & Learning Management System (Community) | MongoDB , Express, React.js , Node JS",
        image:LMS,
        tags:["React","Express.js", "MongoDB", "Node.js"],
    },
    {
        id:2,
        titel:"A mobile UI design concept built in Figma to make ride booking effortless and modern.",
        image:UI,
        tags:["Figma","UIDesign", "UXDesign", "Illustrator"],
    },
    {
        id:3,
        titel:"Foodies Grocery App, a dual mobile application built for both Admin and Customer users. | Android Develoment",
        image:Food,
        tags:["Kotlin","Firebase", "Phonepay", "MVVM"],
    },
    {
        id:4,
        titel:"A mobile UI design concept built in Figma to make ride booking effortless and modern.",
        image:Plant,
        tags:["Figma","UIDesign", "UXDesign", "Illustrator"],
    },
    {
        id:5,
        titel:"This classic board game is reimagined with smooth gameplay, modern UI, and real-time multiplayer support 🕹️",
        image:Ludo,
        tags:["Unity","Firebase", "Photon", "Cashfree"],
    },
    {
        id:6,
        titel:"Designing a smooth and intuitive cab booking experience was the goal behind RIDEZEE — a mobile UI design concept built in Figma to make ride booking effortless and modern.",
        image:Taxi,
        tags:["Figma","UIDesign", "UXDesign", "Illustrator"],
    },
    {
        id:7,
        titel:"Dashboard web App using MERN | MongoDB , Express, React.js , Node JS",
        image:Dashboard,
        tags:["React","Express.js", "MongoDB", "Node.js"],
    },
];

