import { useState, useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import "./Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [, setActiveLink] = useState('');
    const menuRef = useRef(null);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };


    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleLinkClick = (href) => {
      setActiveLink(href);
      setIsMenuOpen(false);
      
      // Clear active state after a short delay to prevent permanent highlighting
      setTimeout(() => {
        setActiveLink('');
      }, 100);
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    return (
      <nav className="navbar" ref={menuRef}>
        <div className="logo">Mr. <span className="logoName">Main</span></div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <div className="navbar_list">
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li className="close-menu-item">
              <button className="close-menu-btn" onClick={toggleMenu}>
                <FaTimes />
              </button>
            </li>
            <li><a href="#home" onClick={() => handleLinkClick('#home')}>Home</a></li>
            <li><a href="#education" onClick={() => handleLinkClick('#education')}>Education</a></li>
            <li><a href="#services" onClick={() => handleLinkClick('#services')}>Services</a></li>
            <li><a href="#websites" onClick={() => handleLinkClick('#websites')}>Projects</a></li>
            <li><a href="#skills" onClick={() => handleLinkClick('#skills')}>Skills</a></li>
            <li><a href="#contact" onClick={() => handleLinkClick('#contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;