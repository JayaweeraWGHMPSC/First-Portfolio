import "./Footer.css";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone, FaExternalLinkAlt } from "react-icons/fa";
import { SiGmail, SiFiverr } from "react-icons/si";
import { useState } from "react";

function Footer() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    // Complete project data - matching Project.jsx
    const projects = [
        {
            id: 1,
            name: "AutoMeet",
            duration: "8 months",
            workType: "Group",
            status: "Completed",
            role: "Full Stack Project",
            contribution: "Full Stack Developer",
            image: "/src/images/automeet.jpg",
            shortDescription: "A full-stack application for scheduling and managing meetings.",
            fullDescription: "AutoMeet was designed to solve the complex and time-consuming process of scheduling meetings among multiple participants, especially across varying availability, time zones, and organizational roles. Traditional meeting tools often lacked intelligent coordination and flexibility, frequently resulting in delays, overlaps, or inefficiencies. Furthermore, managing external and internal users, facilitating real-time communication, and documenting post-meeting activities posed additional challenges for institutions and teams working in hybrid environments.\n\nTo address these issues, AutoMeet introduced an AI-powered, full-stack meeting scheduling platform that supports Direct, Group, and Round-Robin meetings. The system enables participants to mark availability via an intuitive calendar interface, while the backend intelligently detects conflicts and suggests optimal times. Additional features include JWT-based secure authentication, a real-time chat module for in-meeting communication, Google Calendar integration, and smart notifications through in-app and email channels. Admins benefit from a powerful dashboard to monitor usage, and an analytics module automatically generates meeting transcripts and insights using an AI model trained by the team.\n\nBuilt using Next.js (React) for the frontend, Ballerina for the backend services, and MongoDB for persistent storage, the platform is scalable, responsive, and secure. Real-time functionality is achieved through Web Sockets, while Firebase and Cloudinary support media and data services. The browser extension adds further convenience, letting users create meetings directly from their browser after login. Through this cohesive and modular architecture, AutoMeet delivers seamless and intelligent meeting management experience for modern teams and organizations.",
            technologies: ["Next.js", "Ballerina", "MongoDB", "Cloudinary", "Web Sockets"],
        },
        {
            id: 2,
            name: "Lakpura",
            duration: "3 months",
            workType: "Group",
            status: "Completed",
            role: "Frontend Project",
            contribution: "Frontend Developer",
            image: "/src/images/lakpura.jpg",
            shortDescription: "A responsive e-commerce website for traditional Sri Lankan handicraft masks.",
            fullDescription: "Developed a responsive e-commerce website focused on promoting and selling traditional Sri Lankan handicraft masks. Implemented user authentication, product listing, cart management, and order tracking using Firebase. Designed an intuitive user interface with Bootstrap to ensure mobile compatibility and visual appeal.\n\nThe platform serves as a digital marketplace that preserves and promotes Sri Lankan cultural heritage through traditional mask craftsmanship. Features include secure user registration and login, comprehensive product catalog with detailed descriptions and images, shopping cart functionality with real-time updates, and complete order management system from purchase to delivery tracking.\n\nBuilt with a focus on responsive design and user experience, the website ensures seamless functionality across all devices. The Bootstrap framework provides consistent styling and mobile-first approach, while Firebase backend services handle authentication, database operations, and real-time data synchronization. The clean and intuitive interface makes it easy for customers to browse, select, and purchase authentic Sri Lankan masks while learning about their cultural significance.",
            technologies: ["HTML", "CSS", "Bootstrap", "Firebase"],
        },
        {
            id: 3,
            name: "My Portfolio Site",
            duration: "4 month",
            workType: "Individual",
            status: "Completed",
            role: "Frontend Project",
            contribution: "Frontend Developer",
            image: "/src/images/portfolio.png",
            shortDescription: "A modern, responsive personal portfolio website showcasing my projects and skills.",
            fullDescription: "Developed a comprehensive personal portfolio website to showcase my development skills, projects, and professional experience. The site features a modern, responsive design with interactive components including project showcases, skills visualization, service offerings, and contact information. Built with a focus on user experience and mobile-first design principles.\n\nThe portfolio includes several key sections: an engaging hero section with personal introduction, detailed project cards with status indicators and technology badges, an interactive services carousel with work type classifications, a comprehensive skills section with visual representations, and a contact form with social media integration. Each section is designed to provide visitors with a clear understanding of my capabilities and experience.\n\nBuilt using React for dynamic functionality, modern CSS for responsive styling, and various interactive components for enhanced user engagement. The site features smooth animations, mobile-optimized layouts, project filtering capabilities, and popup modals for detailed project information. The clean, professional design ensures optimal viewing across all devices while maintaining fast loading times and accessibility standards.",
            technologies: ["React", "CSS","Bootstrap", "JavaScript", "EmailJS"]
        },
        {
            id: 4,
            name: "Solo Runner Website",
            duration: "4 month",
            workType: "Individual",
            status: "Completed",
            role: "Frontend Project",
            contribution: "Frontend Developer",
            image: "/src/images/solo.jpg",
            shortDescription: "A responsive web application for athletes to track and review their running performance data.",
            fullDescription: "The Solo Runner project includes a custom-built web application designed to help athletes track and review their performance data. The site is fully responsive and accessible on both mobile and desktop devices, making it easy for users to view their running history, reaction times, and progress anytime, anywhere.\n\nThe web app consists of five main pages: a registration page, login page, timing details page, image display page, and a graph page showing progress over time. Users can securely log in to view detailed records of each run, including start time, leg release time, finish time, and an indication of false starts. Captured images during the start phase are also viewable, giving runners visual feedback on their performance.\n\nThe web application was developed using HTML, CSS, JavaScript, and Firebase for backend data management. Firebase handles user authentication, stores timing data, and manages images captured by the ESP32-CAM. The clean and intuitive UI was designed for simplicity and performance, helping runners easily navigate through their data and visualize their athletic progress over time.",
            technologies: ["HTML", "CSS", "JavaScript", "Firebase"]
        },
        {
            id: 5,
            name: "Solo Runner IoT project",
            duration: "8 month",
            workType: "Group",
            status: "Completed",
            role: "IoT Project",
            contribution: "Audio Player, PCB Design, Component Integration",
            image: "/src/images/harware.png",
            shortDescription: "An IoT-based sprint training system for athletes to practice independently with automated timing.",
            fullDescription: "Solo Runner is an IoT-based sprint training system designed to help athletes practice independently without requiring external assistance. The system addresses the common challenge faced by short-distance runners during training accurately starting, stopping, and recording their performance. By automating the entire timing process, the project ensures precision in capturing start position, leg release, and finish times.\n\nThe system uses an ESP32 board along with ultrasonic sensors to detect when the runner is in the correct start position. Once detected, a DFPlayer Mini module plays the start command, and an ESP32-CAM captures the runner's movement. A limit switch identifies the exact leg release time, while a laser and LDR setup at the finish line accurately detects the runner crossing the endpoint. All captured times and actions are processed to determine false starts and calculate valid run durations.\n\nSolo Runner is powered by 18650 rechargeable batteries, with a custom-designed charging and power circuit to ensure stable operation. Real-time feedback is provided through LCD displays placed at both the start and finish points. The entire system was programmed using Arduino C/C++, focusing on accuracy, automation, and usability for solo athletes seeking to improve their performance without external support. My specific responsibilities included designing the audio player system, creating custom PCB layouts, and integrating all hardware components for seamless operation.",
            technologies: ["ESP32", "ESP32-CAM", "Arduino C/C++", "DFPlayer Mini", "PCB Design", "Sensors"]
        }
    ];

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

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setShowPopup(true);
    };

    const closeProjectModal = () => {
        setSelectedProject(null);
        setShowPopup(false);
    };

    return (
        <footer className="footer">
            <div className="footer-top">
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
            </div>

            {/* Bottom Section - Content Grid */}
            <div className="footer-content">
                <div className="footer-grid">
                    {/* Contact Section */}
                    <div className="footer-section">
                        <h3 className="footer-title">Contact</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <FaUser className="contact-icon" />
                                <span>Pathum Sri Chathuranga</span>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <span>Moratuwa, Sri Lanka</span>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <a href="mailto:pathumwghm@gmail.com" className="contact-link">
                                    pathumwghm@gmail.com
                                </a>
                            </div>
                            <div className="contact-item">
                                <FaPhone className="contact-icon" />
                                <a href="tel:+94750798576" className="contact-link">
                                    +94 75 079 8576
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="footer-section">
                        <h3 className="footer-title">Projects</h3>
                        <ul className="project-list">
                            {projects.map((project) => (
                                <li key={project.id} className="project-item">
                                    <button 
                                        onClick={() => handleProjectClick(project)}
                                        className="project-link"
                                    >
                                        {project.name}
                                        <FaExternalLinkAlt className="external-icon" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div className="footer-section">
                        <h3 className="footer-title">Services</h3>
                        <ul className="service-list">
                            <li className="service-item">Frontend Development</li>
                            <li className="service-item">Backend Development</li>
                            <li className="service-item">Full Stack Development</li>
                            <li className="service-item">UI/UX Design</li>
                            <li className="service-item">Problem Solving</li>
                        </ul>
                    </div>

                    {/* Navigation Section */}
                    <div className="footer-section">
                        <h3 className="footer-title">Quick Links</h3>
                        <nav className="footer-nav">
                            <a href="#home" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'home')}>About Me</a>
                            <a href="#about" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'education')}>My Journey</a>
                            <a href="#services" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'services')}>My Services</a>
                            <a href="#websites" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'websites')}>My Projects</a>
                            <a href="#skills" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'skills')}>My Skills</a>
                        </nav>
                    </div>
                </div>

                {/* Copyright */}
                <div className="copyright">
                    © {new Date().getFullYear()} Pathum Sri Chathuranga | All Rights Reserved
                </div>
            </div>

            {/* Project Popup Modal - Same as Project.jsx */}
            {showPopup && selectedProject && (
                <div className="popup-overlay" onClick={closeProjectModal}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="popup-close" onClick={closeProjectModal}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        
                        <div className="popup-header">
                            <h2>{selectedProject.name}</h2>
                            <div className="popup-header-badges">
                                <span className={`popup-work-type ${selectedProject.workType.toLowerCase()}`}>
                                    {selectedProject.workType}
                                </span>
                            </div>
                        </div>
                        
                        <div className="popup-image-container">
                            <img 
                                src={selectedProject.image} 
                                alt={selectedProject.name}
                                className="popup-project-image"
                                onError={(e) => {
                                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNDQ0Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                                }}
                            />
                            <div className={`popup-status-badge ${selectedProject.status.toLowerCase()}`}>
                                {selectedProject.status}
                            </div>
                        </div>
                        
                        <div className="popup-body">
                            <h3>Project Details</h3>
                            <p>{selectedProject.fullDescription}</p>
                            
                            <div className="popup-info-grid">
                                <div className="popup-info-section">
                                    <h4>Duration</h4>
                                    <p>{selectedProject.duration}</p>
                                </div>
                                
                                <div className="popup-info-section">
                                    <h4>Category</h4>
                                    <p>{selectedProject.role}</p>
                                </div>
                                
                                <div className="popup-info-section">
                                    <h4>Contribution</h4>
                                    <p>{selectedProject.contribution}</p>
                                </div>
                            </div>
                            
                            <div className="popup-tech">
                                <div className="popup-tech-section">
                                    <h4>Technologies</h4>
                                    <div className="popup-tech-tags">
                                        {selectedProject.technologies.map((tech, index) => (
                                            <span key={index} className="popup-tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
}

export default Footer;
