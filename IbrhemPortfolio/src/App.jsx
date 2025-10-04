import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSections from './components/Sections/HeroSections'
import SkillsSections from './components/Sections/SkillsSections'

const App = () => {
  return (
      <ThemeProvider>
        <div className='pb-[100vh]'>
          <Navbar />
          <HeroSections />
          <SkillsSections />
        </div>
      </ThemeProvider>

  )
}

export default App