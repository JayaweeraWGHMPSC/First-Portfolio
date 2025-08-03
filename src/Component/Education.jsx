import "./Education.css";
import { useState, useEffect, useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";

function Education() {
    const [activeCategory, setActiveCategory] = useState('Education');
    const [isLoading, setIsLoading] = useState(false);
    const [expandedCards, setExpandedCards] = useState(new Set());
    const [showAllCertificates, setShowAllCertificates] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    // Animation states
    const [isVisible, setIsVisible] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [showCards, setShowCards] = useState(false);
    
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
                        setTimeout(() => setShowNav(true), 600);
                        setTimeout(() => setShowCards(true), 1000);
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

    // Handle mobile detection
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const educationData = {
        Education: [
            {
                id: 1,
                title: "Bachelor of Information Technology (UG)",
                institution: "University of Moratuwa",
                location: "Moratuwa, Sri Lanka",
                period: "Present",
                description: "Currently pursuing a Bachelor's degree in Information Technology with focus on Software Engineering and Computer Networks.",
                grade: "Current GPA: 3.51/4.0",
                logo: "/images/uom.png" // Add your University of Moratuwa logo
            },
            {
                id: 2,
                title: "Web development and Python Programming",
                institution: "Open Learning Platform UoM",
                location: "Online Platform - UoM",
                period: "2023",
                description: "Completed Web development and Python Programming courses with a focus on practical applications.",
                grade: "Completed with Distinction",
                logo: "/images/uom.png" // Add your school logo
            },
            {
                id: 3,
                title: "Ethical Hacking",
                institution: "Cisco Networking Academy",
                location: "Online Platform - CNA",
                period: "Present",
                description: "Currently pursuing Ethical Hacking certification with focus on penetration testing, vulnerability assessment, and cybersecurity defense strategies.",
                grade: "Ongoing",
                logo: "/images/cisco.png" // Add your Cisco Networking Academy logo
            },
            {
                id: 4,
                title: "Ordinary Level (O/L)",
                institution: "Medirigiriya National College",
                location: "Medirigiriya, Sri Lanka", 
                period: "2018",
                description: "Completed Ordinary Level examination with excellent results in Science and Mathematics subjects.",
                grade: "Results: 7A's & 2B's ",
                logo: "/images/meda.png" // Add your school logo
            },
            {
                id: 5,
                title: "Advanced Level (A/L)",
                institution: "Medirigiriya National College",
                location: "Medirigiriya, Sri Lanka",
                period: "2021",
                description: "Completed Advanced Level in Physical Science stream with Mathematics, Physics, and Chemistry.",
                grade: "Results: B B C",
                logo: "/images/meda.png" // Add your school logo
            },
            
            

        ],
        Experience: [
            {
                id: 1,
                title: "Freelance Web Developer",
                institution: "Freelance Projects",
                period: "2023 - Present",
                description: "Developed custom websites and web applications for various clients using modern technologies like React, HTML, CSS, and JavaScript. Created responsive designs and implemented user-friendly interfaces.",
                grade: "Multiple Projects Completed",
                logo: "./src/images/freelance-logo.png" // Add freelance logo
            },
            {
                id: 2,
                title: "Full Stack Web Developer",
                institution: "Project Given by WSO2",
                period: "2024",
                description: "Developed a comprehensive full-stack web application for a project assigned by WSO2. Implemented both frontend and backend functionalities using modern web technologies and frameworks.",
                grade: "Project Successfully Completed",
                logo: "./src/images/wso2-logo.png" // Add WSO2 logo
            },
            {
                id: 3,
                title: "Programming Tutor",
                institution: "Private Tutoring",
                period: "2023 - Present",
                description: "Providing programming tutorials covering Python, Java, and software development concepts. Helping students understand programming fundamentals and problem-solving techniques.",
                grade: "10+ Students Mentored",
                logo: "./src/images/programming-tutor-logo.png" // Add programming tutor logo
            }
        ],
        Certificate: [
            {
                id: 1,
                title: "Python Programming Certification",
                institution: "Open Learning Platform - University of Moratuwa",
                description: "Completed comprehensive Python programming course covering fundamentals, data structures, algorithms, and practical applications. Gained proficiency in Python syntax, object-oriented programming, and problem-solving techniques.",
                certificateImage: "/images/uompython.jpeg" // Add certificate image
            },
            {
                id: 2,
                title: "Web Development Certification",
                institution: "Open Learning Platform - University of Moratuwa",
                description: "Completed web development course covering HTML, CSS, JavaScript, and modern web technologies. Learned responsive design principles, frontend frameworks, and full-stack development concepts.",
                certificateImage: "/images/uomweb.jpeg" // Add certificate image
            },
            {
                id: 3,
                title: "JavaScript Certification",
                institution: "HackerRank",
                description: "Successfully completed the JavaScript (Basic) certification on HackerRank. Demonstrated proficiency in JavaScript fundamentals including syntax, data types, functions, arrays, objects, control structures, and basic programming concepts. Achieved certification through rigorous coding assessments and problem-solving challenges.",
                certificateImage: "/images/javascript-.png" // Add certificate image
            },
            {
                id: 4,
                title: "Introduction to Cybersecurity",
                institution: "Cisco Networking Academy",
                description: "Completed introductory cybersecurity course covering fundamental security concepts, threat detection, network security principles, and basic ethical hacking techniques. Gained understanding of cybersecurity frameworks and defense strategies.",
                certificateImage: "/images/cisco.jpg" // Add certificate image
            },
            {
                id: 5,
                title: "CodeRush Programming Competition",
                institution: "INTEC - Faculty of IT, University of Moratuwa",
                description: "Participated and achieved recognition in CodeRush programming competition organized by INTEC. Demonstrated problem-solving skills and programming proficiency in competitive programming challenges using various programming languages.",
                certificateImage: "/images/code2023.jpeg" // Add certificate image
            },
            {
                id: 6,
                title: "AlgoXplore 1.0 - Hackathon & CTF Challenge",
                institution: "Hackathon Hub - NSBM Green University",
                description: "Participated in AlgoXplore 1.0, a comprehensive Hackathon and Capture the Flag (CTF) challenge. Demonstrated skills in algorithm design, cybersecurity, problem-solving, and innovative solution development in a competitive environment.",
                certificateImage: "/images/x.jpeg" // Add certificate image
            },
        ]
    };

    const categories = Object.keys(educationData);

    const handleCategoryChange = (category) => {
        if (category === activeCategory) return;
        
        setIsLoading(true);
        setExpandedCards(new Set()); // Reset expanded cards when changing category
        setShowCards(false); // Hide cards before switching
        setShowAllCertificates(false); // Reset certificate view when changing category
        
        // Add a slight delay for animation effect
        setTimeout(() => {
            setActiveCategory(category);
            setIsLoading(false);
            // Show cards after category change
            setTimeout(() => setShowCards(true), 100);
        }, 200);
    };

    const toggleCardExpansion = (cardId) => {
        const newExpandedCards = new Set(expandedCards);
        if (newExpandedCards.has(cardId)) {
            newExpandedCards.delete(cardId);
        } else {
            newExpandedCards.add(cardId);
        }
        setExpandedCards(newExpandedCards);
    };

    const handleViewMoreCertificates = () => {
        setShowAllCertificates(true);
    };

    const handleHideCertificates = () => {
        setShowAllCertificates(false);
    };

    // Function to get certificates to display based on mobile view
    const getCertificatesToShow = () => {
        if (activeCategory !== 'Certificate') return educationData[activeCategory];
        
        const certificates = educationData.Certificate;
        
        if (isMobile && !showAllCertificates) {
            return certificates.slice(0, 2);
        }
        return certificates;
    };

    return (
        <div id="education" className="education-container" ref={containerRef}>
            <AnimatedBackground />
            <h1 className={`education-title ${showTitle ? 'animate-title' : 'hidden-title'}`}>
                My <span style={{ color: "cyan" }}>Journey</span>
            </h1>
            
            {/* Category Navigation */}
            <div className={`education-nav ${showNav ? 'animate-nav' : 'hidden-nav'}`}>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`education-nav-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Education Cards */}
            <div className={`education-grid ${isLoading ? 'loading' : ''} ${showCards ? 'animate-cards' : 'hidden-cards'}`}>
                {isLoading ? (
                    <div className="loading-spinner">
                        <div className="spinner"></div>
                    </div>
                ) : (
                    getCertificatesToShow().map((item) => (
                        <div key={`${activeCategory}-${item.id}`} className={`education-card ${activeCategory === 'Certificate' ? 'certificate-card' : ''} fade-in-card`}>
                            {activeCategory === 'Certificate' ? (
                            // Certificate Card Layout
                            <>
                                <div className="certificate-image-container">
                                    <img src={item.certificateImage} alt={`${item.title} certificate`} className="certificate-image" />
                                </div>
                                <div className="certificate-content" onClick={() => toggleCardExpansion(`${activeCategory}-${item.id}`)}>
                                    <h3 className="card-title">{item.title}</h3>
                                    <div className={`card-description ${expandedCards.has(`${activeCategory}-${item.id}`) ? 'expanded' : ''}`}>
                                        {item.description}
                                    </div>
                                    <div className="expand-indicator">
                                        {expandedCards.has(`${activeCategory}-${item.id}`) ? 'Tap to collapse' : 'Tap to expand'}
                                    </div>
                                </div>
                            </>
                        ) : (
                            // Regular Card Layout (Education & Experience)
                            <>
                                <div className="card-header">
                                    <div className="card-header-left">
                                        {activeCategory === 'Education' && (
                                            <div className="card-logo">
                                                <img src={item.logo} alt={`${item.institution} logo`} />
                                            </div>
                                        )}
                                        <div className="card-title-section">
                                            <div className="card-institution-container">
                                                <h3 className="card-title">{item.title}</h3>
                                                <div className="card-institution">{item.institution}</div>
                                                {activeCategory === 'Education' && item.location && (
                                                    <div className="card-location">{item.location}</div>
                                                )}
                                            </div>
                                            {activeCategory === 'Education' && (
                                                <span className="card-period-bottom">{item.period}</span>
                                            )}
                                        </div>
                                    </div>
                                    {activeCategory !== 'Education' && activeCategory !== 'Experience' && (
                                        <span className="card-period">{item.period}</span>
                                    )}
                                </div>
                                <div className="card-description">{item.description}</div>
                                <div className="card-grade">{item.grade}</div>
                            </>
                        )}
                    </div>
                ))
                )}
            </div>

            {/* View More/Hide Buttons for Certificates in Mobile */}
            {!isLoading && activeCategory === 'Certificate' && isMobile && (
                <div className="certificate-mobile-controls">
                    {!showAllCertificates ? (
                        <button 
                            className="view-more-btn certificate-btn"
                            onClick={handleViewMoreCertificates}
                        >
                            View More Certificates
                        </button>
                    ) : (
                        <button 
                            className="hide-btn certificate-btn"
                            onClick={handleHideCertificates}
                        >
                            Hide Certificates
                        </button>
                    )}
                </div>
            )}

            {/* LinkedIn Button for Certificate Section */}
            {!isLoading && activeCategory === 'Certificate' && (
                <div className="linkedin-button-container">
                    <button 
                        className="linkedin-btn"
                        onClick={() => window.open('https://www.linkedin.com/in/pathumscj', '_blank')}
                    >
                        <span className="linkedin-btn-text">View All Certifications and Achievements</span>
                        <span className="linkedin-btn-icon">→</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default Education;