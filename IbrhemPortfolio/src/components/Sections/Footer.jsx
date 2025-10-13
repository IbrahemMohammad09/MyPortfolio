import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { 
    Mail,
    Heart,
    ArrowUp,
    Code2
} from 'lucide-react'
import { useTheme } from "../../context/ThemeContext"

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import { itemVariants, containerVariants } from "../../utils/helper"

const Footer = () => {

    const { isDarkMode } = useTheme();
    const footerRef = useRef();
    const isInView = useInView(footerRef, { once: true, margin: "-50px"});

    
  return (
    <div>Footer</div>
  )
}

export default Footer
