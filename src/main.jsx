import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Component/Navbar.jsx'
import About from './Component/About.jsx'
import Education from './Component/Education.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <About />
    <Education/>
  </StrictMode>,
)
