import {
    Code2,
    GraduationCap,
    Laptop ,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
} from 'lucide-react';


import {FiGithub, FiLinkedin, FiTwitter} from 'react-icons/fi'

import PROJECT1 from '../assets/images/SEA.webp'
import PROJECT2 from '../assets/images/SOE.webp'
import Nexora from '../assets/images/nexora.PNG'
import Car from '../assets/images/Car.PNG'


export const SKILLS_CATEGORY = [
    {
        title: 'FrontEnd',
        icon: Code2,
        description : "Crafting beautiful , responsive user interfaces",
        skills : [
            { name: "React", level: 95, color: "bg-sky-400" },
            { name: "JavaScript ES6", level: 90, color: "bg-yellow-400"},
            { name: "Bootstrap", level: 88, color: "bg-purple-600"},
            { name: "Tailwind CSS", level: 92, color: "bg-cyan-500"},
            { name: "Framer Motion", level: 85, color: "bg-pink-600"},
        ]
    },
    {
        title: 'BcakEnd',
        icon: Server,
        description : "Building fast, secure, and scalable systems",
        skills : [
            { name: "PHP", level: 65, color: "bg-indigo-400" },
            { name: "Laravel", level: 78, color: "bg-red-600" },
            { name: "MySQL", level: 80, color: "bg-orange-500" },
            { name: "SQL Server", level: 70, color: "bg-red-700" },
        ]
    },
]

export const TECH_STACK = [
    "React",
    "React Router",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "Bootstrap",
    "JavaScript",
    "Java",
    "C++",
    "HTML",
    "CSS",
]

export const STATS = [
    { number: "10+", label: "Projects Completed"},
    { number: "3+", label: "Years Experience"},
    { number: "20+", label: "Technologies"},
    { number: "100%", label: "Client Satisfaction"},
]

export const PROJECTS = [
        {
        id: 4,
        title: "NEXORA",
        description:
            "A modern, responsive landing page for a digital systems and software brand, featuring an animated particle background, a sleek dark interface, and interactive solutions sections built to showcase innovative digital technologies.",
        image: Nexora,
        tags:  ["React", "Vite", "Tailwind CSS", "OGL", "tsparticles", "Lucide React"],
        liveUrl: "https://ibrahemmohammad09.github.io/NEXORA/",
        featured: true,
        category: "Front End"
    },
    {
        id: 3,
        title: "SEA DETAILING",
        description:
            "A responsive service website for car and furniture cleaning, featuring service showcases, an image-rich portfolio, customer reviews, and an interactive booking flow with dedicated confirmation pages.",
        image: PROJECT1,
        tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Swiper", "Redux Toolkit", "Firebase"],
        liveUrl: "https://ibrahemmohammad09.github.io/SEA_Detailing",
        featured: true,
        category: "Front End",
    },
    {
        id: 2,
        title: "Star Of Elegance",
        description:
            "A modern furniture and interior design website showcasing custom furniture, design projects, and client reviews. Features service and project details, customer inquiry forms, order management, and an administrative dashboard with protected routes and authentication state.",
        image: PROJECT2,
        tags: ["React", "React Router", "Tailwind CSS", "Redux Toolkit", "Axios", "Framer Motion", "Swiper"],
        liveUrl: "https://ibrahemmohammad09.github.io/star_of_elegance/",
        featured: true,
        category: "Front End",
    },
    {
        id: 1,
        title: "Car Rental Demo",
        description:
            "A bilingual car rental web application built with React, featuring vehicle browsing, search, booking workflows, and a demo dashboard for managing cars, brands, and reservations. Supports Arabic and English with browser-based data persistence.",
        image: Car,
        tags: ["React", "React Router", "Vite", "Bootstrap", "Material UI", "Tailwind CSS", "i18next"],
        liveUrl: "https://ibrahemmohammad09.github.io/Car/",
        featured: true,
        category: "Front End",
    },

]

export const JOURNEY_STEPS = [
    {
        id : 3, 
        year: "2023",
        title: "Started working at Spark",
        company:{title: "Spark Company", url : "https://sparkcompany.tech/"},
        description: "Web Development Leader — guiding the web team with deep React expertise to deliver high-quality, scalable applications, combining strong leadership with technical excellence.",
        icon: Code2,
        color: "bg-[#00FFFF]"
    },
    {
        id : 2,
        year: "2023",
        title: "Studying a set of courses",
        company: {title: "Coursera", url : "https://www.coursera.org/user/dbb6fd84242c9d3eed3c161fb5540017"},
        description: "I have completed a diverse set of courses and developed a wide range of projects.",
        icon: Laptop,
        color: "bg-[#2563EB]"
    },
    {
        id : 1,
        year: "2016 - 2022",
        title: "University studies began",
        company: {title : "Tishreen University", url : "https://latakia-univ.edu.sy/"},
        description: " Bachelor's degree in IT, Software Engineering Department",
        icon: GraduationCap,
        color: "bg-[#00BFFF]"
    },
    
]

export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "I strive to create interfaces that feel natural, intuitive, and effortless for users, ensuring every interaction is both meaningful and enjoyable."
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "I enjoy breaking down complex challenges into clear, effective solutions by combining analytical thinking with creativity and clean code practices."
    },
    {
        icon: BookOpen,
        title: "Continuous Learing",
        description: "I’m committed to constantly expanding my skills and staying up-to-date with the latest tools, technologies, and best practices to build better digital experiences every day"
    },
]

export const SOCIAL_LINKS =[
    {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com/IbrahemMohammad09",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/ibrahem-mohamad/",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10",
    },
    {
        name: "Email",
        icon: Mail,
        url: "Mailto:ibrahem.a.mohamad@gmail.com",
        color: "hover:text-green-400",
        bgColor: "hover:bg-gree-500/10",
    }
]

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "Oberste Höfe 14, 34225 Baunatal, Deutschland"
    },
    {
        icon: Mail,
        label: "Email",
        value: "ibrahem.a.mohamad@gmail.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+49 1776 906703"
    }
]