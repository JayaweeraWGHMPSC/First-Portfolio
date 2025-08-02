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


createRoot(document.getElementById('root')).render(
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
