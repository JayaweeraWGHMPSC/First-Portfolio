import { useState, useEffect, useRef } from 'react';
import './Project.css';

const Project = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Animation states for scroll-triggered animations
  const [isVisible, setIsVisible] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const containerRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);

            // Sequence the animations
            setTimeout(() => setShowTitle(true), 200);
            setTimeout(() => setShowProjects(true), 800);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '-50px 0px -50px 0px' // Add some margin for better timing
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [isVisible]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sample project data - you can replace with your actual projects
  const projects = [
    {
      id: 1,
      name: "AutoMeet",
      duration: "8 months",
      workType: "Group",
      status: "Completed",
      role: "Full Stack Project",
      contribution: "Full Stack Developer",
      image: "/images/automeet.jpg", // Replace with your actual image path
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
      image: "/images/lakpura.jpg", // Replace with your actual image path
      shortDescription: "A responsive e-commerce website for traditional Sri Lankan handicraft masks.",
      fullDescription: "Developed a responsive e-commerce website focused on promoting and selling traditional Sri Lankan handicraft masks. Implemented user authentication, product listing, cart management, and order tracking using Firebase. Designed an intuitive user interface with Bootstrap to ensure mobile compatibility and visual appeal.\n\nThe platform serves as a digital marketplace that preserves and promotes Sri Lankan cultural heritage through traditional mask craftsmanship. Features include secure user registration and login, comprehensive product catalog with detailed descriptions and images, shopping cart functionality with real-time updates, and complete order management system from purchase to delivery tracking.\n\nBuilt with a focus on responsive design and user experience, the website ensures seamless functionality across all devices. The Bootstrap framework provides consistent styling and mobile-first approach, while Firebase backend services handle authentication, database operations, and real-time data synchronization. The clean and intuitive interface makes it easy for customers to browse, select, and purchase authentic Sri Lankan masks while learning about their cultural significance.",
      technologies: ["HTML", "CSS", "Bootstrap", "Firebase"],
    },
    {
      id: 3,
      name: "SecureZip",
      duration: "1 months",
      workType: "Individual",
      status: "Completed",
      role: "Full Stack Developer",
      contribution: "Designed and developed both the AES-256 encryption/decryption logic and a modern desktop UI.",
      image: "/images/securezip.jpg", // Replace with your actual image path
      shortDescription: "A secure file encryption and compression desktop application ensuring complete offline data privacy using AES-256.",
      fullDescription: "SecureZip is a desktop application designed to provide strong encryption and compression for text, files, and folders, ensuring data security without requiring any internet connection or backend storage. The application uses the AES-256 encryption algorithm as the core method, giving users military-grade security for their sensitive data.\n\nKey features include password-based AES-256 encryption, file integrity verification using hash checks, and optional QR code generation for secure key sharing. For folders, SecureZip first compresses the contents into a single ZIP archive before encrypting, making the process efficient and secure. The application guarantees zero quality loss for media files like images, videos, and audio during encryption and decryption.\n\nThe system was developed using Electron.js for the cross-platform desktop interface, JavaScript for frontend interactions, and .NET for implementing high-performance AES-256 encryption. This hybrid approach ensures a responsive UI and robust encryption performance, making SecureZip suitable for both personal and professional use.",
      technologies: ["Electron.js", "JavaScript", ".NET", "AES-256"]
    },
    {
      id: 4,
      name: "My Portfolio Site",
      duration: "4 month",
      workType: "Individual",
      status: "Completed",
      role: "Frontend Project",
      contribution: "Frontend Developer",
      image: "/images/portfolio.png", // Replace with your actual image path
      shortDescription: "A modern, responsive personal portfolio website showcasing my projects and skills.",
      fullDescription: "Developed a comprehensive personal portfolio website to showcase my development skills, projects, and professional experience. The site features a modern, responsive design with interactive components including project showcases, skills visualization, service offerings, and contact information. Built with a focus on user experience and mobile-first design principles.\n\nThe portfolio includes several key sections: an engaging hero section with personal introduction, detailed project cards with status indicators and technology badges, an interactive services carousel with work type classifications, a comprehensive skills section with visual representations, and a contact form with social media integration. Each section is designed to provide visitors with a clear understanding of my capabilities and experience.\n\nBuilt using React for dynamic functionality, modern CSS for responsive styling, and various interactive components for enhanced user engagement. The site features smooth animations, mobile-optimized layouts, project filtering capabilities, and popup modals for detailed project information. The clean, professional design ensures optimal viewing across all devices while maintaining fast loading times and accessibility standards.",
      technologies: ["React", "CSS", "Bootstrap", "JavaScript", "EmailJS"]
    },
    {
      id: 5,
      name: "Solo Runner Website",
      duration: "4 month",
      workType: "Individual",
      status: "Completed",
      role: "Frontend Project",
      contribution: "Frontend Developer",
      image: "/images/solo.jpg",
      shortDescription: "A responsive web application for athletes to track and review their running performance data.",
      fullDescription: "The Solo Runner project includes a custom-built web application designed to help athletes track and review their performance data. The site is fully responsive and accessible on both mobile and desktop devices, making it easy for users to view their running history, reaction times, and progress anytime, anywhere.\n\nThe web app consists of five main pages: a registration page, login page, timing details page, image display page, and a graph page showing progress over time. Users can securely log in to view detailed records of each run, including start time, leg release time, finish time, and an indication of false starts. Captured images during the start phase are also viewable, giving runners visual feedback on their performance.\n\nThe web application was developed using HTML, CSS, JavaScript, and Firebase for backend data management. Firebase handles user authentication, stores timing data, and manages images captured by the ESP32-CAM. The clean and intuitive UI was designed for simplicity and performance, helping runners easily navigate through their data and visualize their athletic progress over time.",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"]
    },
    {
      id: 6,
      name: "Solo Runner IoT Project",
      duration: "8 month",
      workType: "Group",
      status: "Completed",
      role: "IoT Project",
      contribution: "Audio Player, PCB Design, Component Integration",
      image: "/images/harware.png",
      shortDescription: "An IoT-based sprint training system for athletes to practice independently with automated timing.",
      fullDescription: "Solo Runner is an IoT-based sprint training system designed to help athletes practice independently without requiring external assistance. The system addresses the common challenge faced by short-distance runners during training accurately starting, stopping, and recording their performance. By automating the entire timing process, the project ensures precision in capturing start position, leg release, and finish times.\n\nThe system uses an ESP32 board along with ultrasonic sensors to detect when the runner is in the correct start position. Once detected, a DFPlayer Mini module plays the start command, and an ESP32-CAM captures the runner's movement. A limit switch identifies the exact leg release time, while a laser and LDR setup at the finish line accurately detects the runner crossing the endpoint. All captured times and actions are processed to determine false starts and calculate valid run durations.\n\nSolo Runner is powered by 18650 rechargeable batteries, with a custom-designed charging and power circuit to ensure stable operation. Real-time feedback is provided through LCD displays placed at both the start and finish points. The entire system was programmed using Arduino C/C++, focusing on accuracy, automation, and usability for solo athletes seeking to improve their performance without external support. My specific responsibilities included designing the audio player system, creating custom PCB layouts, and integrating all hardware components for seamless operation.",
      technologies: ["ESP32", "ESP32-CAM", "Arduino C/C++", "DFPlayer Mini", "PCB Design", "Sensors"]
    }
  ];

  const openPopup = (project) => {
    setSelectedProject(project);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProject(null);
  };

  const toggleProjectsView = () => {
    setShowAllProjects(!showAllProjects);
  };

  // Determine which projects to show
  const projectsToShow = isMobile && !showAllProjects ? projects.slice(0, 2) : projects;

  return (
    <div id="websites" className="project-container" ref={containerRef}>
      <h2 className={`project-title ${showTitle ? 'animate-title' : 'hidden-title'}`}>
        My <span className="highlight">Projects</span>
      </h2>

      <div className={`projects-grid ${showProjects ? 'animate-projects' : 'hidden-projects'}`}>
        {projectsToShow.map((project) => (
          <div key={project.id} className="project-card animate-project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNDQ0Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                }}
                onClick={() => openPopup(project)}
              />
              <div className={`project-status-badge ${project.status.toLowerCase()}`}>
                {project.status}
              </div>
            </div>

            <div className="project-content">
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
              </div>

              <p className="project-description">
                {project.shortDescription}{' '}
                <span
                  className="see-more-link"
                  onClick={() => openPopup(project)}
                >
                  See more ...
                </span>
              </p>

              <div className="project-tech">
                <div className="tech-section">
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Toggle Button */}
      {isMobile && (
        <div className="mobile-toggle-container">
          <button
            className="mobile-toggle-btn"
            onClick={toggleProjectsView}
          >
            {showAllProjects ? 'Show Less Projects' : 'See More Projects'}
          </button>
        </div>
      )}

      {/* Popup Modal */}
      {showPopup && selectedProject && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
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
    </div>
  );
};

export default Project;
