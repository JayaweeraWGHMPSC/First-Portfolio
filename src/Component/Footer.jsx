import "./Footer.css";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiFiverr } from "react-icons/si";

function Footer() {
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
                    <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaFacebook />
                    </a>
                    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaInstagram />
                    </a>
                </div>

                {/* Navigation Links */}
                <nav className="footer-nav">
                    <a href="/faq" className="nav-link">FAQ</a>
                    <a href="/services" className="nav-link">Services</a>
                    <a href="/about" className="nav-link">About Me</a>
                    <a href="/contact" className="nav-link">Contact</a>
                    <a href="/skills" className="nav-link">Skills</a>
                </nav>

                {/* Copyright */}
                <div className="copyright">© {new Date().getFullYear()} Pathum Sri Chathuranga | All Rights Reserved</div>
            </div>
        </footer>
    );
}

export default Footer;
