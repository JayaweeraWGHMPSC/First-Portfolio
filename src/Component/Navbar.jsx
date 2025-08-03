import { useState, useRef, useEffect } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
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
    // After first scroll, it's no longer initial load
    if (isInitialLoad && scrollPosition > 0) {
      setIsInitialLoad(false);
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
            <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#education" onClick={(e) => handleSmoothScroll(e, 'education')}>
              Education
            </a>
          </li>
          <li>
            <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')}>
              Services
            </a>
          </li>
          <li>
            <a href="#websites" onClick={(e) => handleSmoothScroll(e, 'websites')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>
              Contact<span className="contact-me-text"> Me</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;