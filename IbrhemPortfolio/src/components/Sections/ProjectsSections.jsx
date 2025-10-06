import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
    ArrowUpRight,
    Code2,
    Globe,
    Zap,
    Users
} from "lucide-react"

import { useTheme } from "../../context/ThemeContext"
import { PROJECTS } from "../../utils/data"
import ProjectCard from "../ProjectCard"
import { containerVariants, itemVariants } from "../../utils/helper"

const ProjectsSections = () => {
    const { isDarkMode } = useTheme();
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, {once: true, margin: "-100px"})

  return <section
    id="work"
    ref={sectionRef}
    className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-95 text-white" : "bg-gray-50 text-gray-900"
    } relative overflow-hidden`}
  >
    {/* Bckground Elements */}
    <div className="">
        <div
            className={``}
        >

        </div>
    </div>

  </section>
}

export default ProjectsSections