import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSections from './components/Sections/HeroSections'
import SkillsSections from './components/Sections/SkillsSections'
import ProjectsSections from './components/Sections/ProjectsSections'
import AboutSections from './components/Sections/AboutSections'
import ContactSection from './components/Sections/ContactSection'

const App = () => {
  return (
      <ThemeProvider>
        <div className='pb-[100vh]'>
          <Navbar />
          <HeroSections />
          <SkillsSections />
          <ProjectsSections />
          <AboutSections />
          <ContactSection />
        </div>
      </ThemeProvider>

  )
}

export default App