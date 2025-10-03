import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSections from './components/Sections/HeroSections'

const App = () => {
  return (
      <ThemeProvider>
        <div>
          <Navbar />
          <HeroSections />
          
        </div>
      </ThemeProvider>

  )
}

export default App