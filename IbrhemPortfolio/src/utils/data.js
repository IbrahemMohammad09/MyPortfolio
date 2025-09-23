import {
    Code2,
    GraduationCap,
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

import PROJECT1 from '../assets/images/PH.webp'
import PROJECT2 from '../assets/images/PH.webp'
import PROJECT3 from '../assets/images/PH.webp'
import PROJECT4 from '../assets/images/PH.webp'
import PROJECT5 from '../assets/images/PH.webp'
import PROJECT6 from '../assets/images/PH.webp'
import PROJECT7 from '../assets/images/PH.webp'

export const SKILLS_CATEGORY = [
    {
        title: 'FrontEnd',
        icon: Code2,
        description : "Crafting beautiful , responsive user interfaces",
        skills : [
            { name: "React", level: 95, color: "bg-blue-500" },
            { name: "TypeScript", level: 90, color: "bg-blue-600"},
            { name: "Next.js", level: 88, color: "bg-gray-500"},
            { name: "Tailwind CSS", level: 92, color: "bg-cyan-500"},
            { name: "Framer Motion", level: 85, color: "bg-pink-500"},
        ]
    },
    {
        title: 'FrontEnd',
        icon: Code2,
        description : "Crafting beautiful , responsive user interfaces",
        skills : [
            { name: "React", level: 95, color: "bg-blue-500" },
            { name: "TypeScript", level: 90, color: "bg-blue-600"},
            { name: "Next.js", level: 88, color: "bg-gray-500"},
            { name: "Tailwind CSS", level: 92, color: "bg-cyan-500"},
            { name: "Framer Motion", level: 85, color: "bg-pink-500"},
        ]
    },
]

export const TECH_STACK = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Sass",
    "Webpack",
    "Vite",
    "Jest",
    "Cypress",
    "Figma",
    "Adobe XD",
    "Notion",
    "Slack",
]

export const STATS = [
    { number: "50+", label: "Projects Completed"},
    { number: "3+", label: "Years Experience"},
    { number: "20+", label: "Technologies"},
    { number: "100%", label: "Client Satisfaction"},
]

export const PROJECTS = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
        image: PROJECT1,
        tags: ["react", "Tailwind", "Farmer motion"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack",
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        description:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
        image: PROJECT1,
        tags: ["react", "Tailwind", "Farmer motion"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack",
    },
]

export const JOURNEY_STEPS = [
    {
        year: "2021",
        title: "Started Coding Journey",
        company: "Self-taught",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
        icon: Code2,
        color: "bg-blue-500"
    },
    {
        year: "2022",
        title: "Started Coding Journey",
        company: "Self-taught",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
        icon: Code2,
        color: "bg-green-500"
    },
]

export const PASSIONS = []