import { useState, useRef, useEffect } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu if open
    
    // Handle home section - scroll to top
    if (targetId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    // For other sections, find the element and scroll to it
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Offset for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = ['home', 'education', 'services', 'websites', 'skills', 'contact'];
    
    // After first scroll, it's no longer initial load
    if (isInitialLoad && scrollPosition > 0) {
      setIsInitialLoad(false);
    }

    // Determine active section based on scroll position
    if (scrollPosition < 100) {
      setActiveSection('home');
      return;
    }

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollPosition;
        const elementBottom = elementTop + element.offsetHeight;
        
        // Check if the section is in view (with some offset for navbar height)
        if (scrollPosition + 100 >= elementTop && scrollPosition + 100 < elementBottom) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className={`navbar${isInitialLoad ? ' initial-load' : ''}`} ref={menuRef}>
      <div className="logo">Port<span className="logoName">folio</span></div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <div className="navbar_list">
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleSmoothScroll(e, 'home')}
              className={activeSection === 'home' ? 'active-nav' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#education" 
              onClick={(e) => handleSmoothScroll(e, 'education')}
              className={activeSection === 'education' ? 'active-nav' : ''}
            >
              Education
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              onClick={(e) => handleSmoothScroll(e, 'services')}
              className={activeSection === 'services' ? 'active-nav' : ''}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#websites" 
              onClick={(e) => handleSmoothScroll(e, 'websites')}
              className={activeSection === 'websites' ? 'active-nav' : ''}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              onClick={(e) => handleSmoothScroll(e, 'skills')}
              className={activeSection === 'skills' ? 'active-nav' : ''}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className={activeSection === 'contact' ? 'active-nav contact-btn' : 'contact-btn'}
            >
              Contact<span className="contact-me-text"> Me</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;