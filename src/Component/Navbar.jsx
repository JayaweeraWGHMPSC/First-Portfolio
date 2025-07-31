import { useState, useRef, useEffect } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Show vertical navbar when scrolled down more than 200px
    setIsScrolled(scrollPosition > 200);
    // After first scroll, it's no longer initial load
    if (isInitialLoad && scrollPosition > 0) {
      setIsInitialLoad(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar${isScrolled ? ' scrolled' : ''}${isInitialLoad ? ' initial-load' : isScrolled ? ' vertical-animate' : ' horizontal-animate'}`} ref={menuRef}>
      <div className="logo">Port<span className="logoName">folio</span></div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <div className="navbar_list">
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" onClick={toggleMenu} data-tooltip="Home">
              {(isScrolled && window.innerWidth >= 1025) ? '⌂' : 'Home'}
            </a>
          </li>
          <li>
            <a href="#education" onClick={toggleMenu} data-tooltip="Education">
              {(isScrolled && window.innerWidth >= 1025) ? '◉' : 'Education'}
            </a>
          </li>
          <li>
            <a href="#services" onClick={toggleMenu} data-tooltip="Services">
              {(isScrolled && window.innerWidth >= 1025) ? '⚙' : 'Services'}
            </a>
          </li>
          <li>
            <a href="#websites" onClick={toggleMenu} data-tooltip="Projects">
              {(isScrolled && window.innerWidth >= 1025) ? '◈' : 'Projects'}
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu} data-tooltip="Skills">
              {(isScrolled && window.innerWidth >= 1025) ? '◆' : 'Skills'}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu} data-tooltip="Contact">
              {(isScrolled && window.innerWidth >= 1025) ? '✉' : 'Contact'}
            </a>
          </li>
        </ul>
      </div>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </nav>
  );
};

export default Navbar;