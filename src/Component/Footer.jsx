import "./Footer.css";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiFiverr } from "react-icons/si";

function Footer() {
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        
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
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Social Media Icons */}
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/pathumscj" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:pathumwghm@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <SiGmail />
                    </a>
                    <a href="https://wa.me/+94750798576" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.fiverr.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <SiFiverr />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100073889082993" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/pathum_scj?igsh=MWNrOWdhN2Nxa3pwMg==" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaInstagram />
                    </a>
                </div>

                {/* Navigation Links */}
                <nav className="footer-nav">
                    <a href="#home" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a>
                    <a href="#services" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'services')}>Services</a>
                    <a href="#contact" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
                    <a href="#websites" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'websites')}>Projects</a>
                    <a href="#skills" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'skills')}>Skills</a>
                </nav>

                {/* Copyright */}
                <div className="copyright">© {new Date().getFullYear()} Pathum Sri Chathuranga | All Rights Reserved</div>
            </div>
        </footer>
    );
}

export default Footer;
