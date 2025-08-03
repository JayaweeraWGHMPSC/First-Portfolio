import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AnimatedBackground from './Component/AnimatedBackground.jsx'
import Navbar from './Component/Navbar.jsx'
import About from './Component/About.jsx'
import Education from './Component/Education.jsx'
import Services from './Component/Services.jsx'
import Skills from './Component/Skills.jsx'
import Contact from './Component/Contact.jsx'
import Footer from './Component/Footer.jsx'
import Project from './Component/Project.jsx'

console.log('Main.jsx is loading...')
const rootElement = document.getElementById('root')
console.log('Root element:', rootElement)

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <AnimatedBackground />
      <Navbar />
      <About />
      <Education />
      <Services />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </StrictMode>,
  )
} else {
  console.error('Root element not found!')
}
