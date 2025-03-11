import "./Footer.css";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Social Media Icons */}
                <div className="social-icons">
                    <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaWhatsapp />
                    </a>
                    <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaFacebook />
                    </a>
                    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaInstagram />
                    </a>
                    <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaTiktok />
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
