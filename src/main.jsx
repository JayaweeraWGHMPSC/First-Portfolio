import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Component/Navbar.jsx'
import About from './Component/About.jsx'
import Education from './Component/Education.jsx'
import Services from './Component/Services.jsx'
import Skills from './Component/Skills.jsx'
import Contact from './Component/Contact.jsx'
import Footer from './Component/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <About />
    <Education />
    <Services />
    <Skills />
    <Contact />
    <Footer />
  </StrictMode>,
)
