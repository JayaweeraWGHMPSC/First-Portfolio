import "./Services.css";
import { useState, useEffect } from "react";
import { FaCode, FaServer, FaLayerGroup, FaPalette, FaPuzzlePiece, FaMobile } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

function Services() {
  const [activeCard, setActiveCard] = useState(0);
  const [isAutoSwapping, setIsAutoSwapping] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <FaCode />,
      description: "Creating responsive user interfaces with modern frameworks like React, Vue, and Angular. Focus on pixel-perfect designs and exceptional user experiences."
    },
    {
      id: 2,
      title: "Backend Development",
      icon: <FaServer />,
      description: "Building robust server-side solutions with scalable architectures, secure APIs, and efficient databases for optimal performance."
    },
    {
      id: 3,
      title: "Full-Stack Development",
      icon: <FaLayerGroup />,
      description: "Delivering complete end-to-end solutions that integrate frontend and backend technologies from concept to deployment."
    },
    {
      id: 4,
      title: "UI/UX Design",
      icon: <FaPalette />,
      description: "Crafting intuitive and visually stunning user experiences through strategic design thinking. I transform complex user journeys into simple, elegant interfaces that not only look beautiful but also convert visitors into loyal customers."
    },
    {
      id: 5,
      title: "Problem Solving",
      icon: <FaPuzzlePiece />,
      description: "Analyzing technical challenges and delivering innovative solutions that streamline processes and boost efficiency."
    },
    {
      id: 6,
      title: "Mobile App Development",
      icon: <FaMobile />,
      description: "Creating mobile applications for iOS and Android platforms using cutting-edge technologies for seamless user experiences."
    },
    {
      id: 7,
      title: "SEO Optimization",
      icon: <MdSearch />,
      description: "Boosting your online visibility through strategic search engine optimization techniques. I implement proven SEO strategies that improve your search rankings, increase organic traffic, and help your business get discovered by the right audience."
    }
  ];

  // Auto-swap functionality
  useEffect(() => {
    if (!isAutoSwapping || isAnimating) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setAnimationClass('slide-out-left'); // Current card fades out
      
      setTimeout(() => {
        setActiveCard((prev) => (prev + 1) % services.length);
        setAnimationClass('slide-in-center'); // New card fades in directly
        
        setTimeout(() => {
          setIsAnimating(false);
          setAnimationClass('');
        }, 600);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoSwapping, services.length, isAnimating]);

  const handleCardHover = () => {
    setIsAutoSwapping(false);
  };

  const handleCardLeave = () => {
    setIsAutoSwapping(true);
  };

  const handleDotClick = (index) => {
    if (isAnimating || index === activeCard) return;
    
    setIsAnimating(true);
    setIsAutoSwapping(false);
    setAnimationClass('slide-out-left'); // Current card fades out
    
    setTimeout(() => {
      setActiveCard(index);
      setAnimationClass('slide-in-center'); // New card fades in directly
      
      setTimeout(() => {
        setIsAnimating(false);
        setAnimationClass('');
        // Resume auto-swapping after 5 seconds
        setTimeout(() => setIsAutoSwapping(true), 5000);
      }, 600);
    }, 400);
  };

  const handleDescriptionClick = () => {
    if (isMobile) {
      setShowPopup(true);
      setIsAutoSwapping(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setIsAutoSwapping(true);
  };

  // Swipe functionality for mobile
  const handleTouchStart = (e) => {
    if (isMobile) {
      setTouchStart(e.targetTouches[0].clientX);
      setIsAutoSwapping(false);
    }
  };

  const handleTouchMove = (e) => {
    if (isMobile) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (!isMobile || !touchStart || !touchEnd || isAnimating) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe || isRightSwipe) {
      setIsAnimating(true);
      setAnimationClass('slide-out-left'); // Current card fades out
      
      setTimeout(() => {
        if (isLeftSwipe) {
          // Swipe left - next card
          setActiveCard((prev) => (prev + 1) % services.length);
        } else if (isRightSwipe) {
          // Swipe right - previous card
          setActiveCard((prev) => (prev - 1 + services.length) % services.length);
        }
        
        setAnimationClass('slide-in-center'); // New card fades in directly
        
        setTimeout(() => {
          setIsAnimating(false);
          setAnimationClass('');
          // Resume auto-swapping after 3 seconds
          setTimeout(() => setIsAutoSwapping(true), 3000);
        }, 600);
      }, 400);
    }

    // Reset touch values
    setTouchStart(0);
    setTouchEnd(0);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="services-container">
      <h1 className="services-title">My <span style={{ color: "cyan" }}>Services</span></h1>
      
      <div className="services-content">
        {/* Left Section */}
        <div className="services-left">
          <div className="services-intro">
            <p className="intro-description">
              I continuously strengthen my solution-oriented thinking to help clients reach their goals effectively. I offer full digital solutions across frontend/backend development, UI/UX design, mobile apps, SEO, and strategic problem-solving always focusing on scalable architecture, user-centric design, and results-driven execution to turn ideas into impactful digital experiences.
            </p>
          </div>

          <div className="services-expectations">
            <h3 className="expectations-title">What you can expect</h3>
            <ul className="expectations-list">
              <li>Optimized solutions</li>
              <li>Clean code</li>
              <li>Unmatched support</li>
            </ul>
          </div>
          
        </div>

        {/* Right Section */}
        <div className="services-right">
          <div 
            className="service-carousel"
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={`service-card-container ${animationClass}`}>
              <div className="service-card-header">
                <div className="service-icon">
                  {services[activeCard].icon}
                </div>
                <h3 className="service-card-title">{services[activeCard].title}</h3>
              </div>
              
              <div className="service-card-body">
                <p 
                  className="service-card-description"
                  onClick={handleDescriptionClick}
                  style={{ cursor: isMobile ? 'pointer' : 'default' }}
                >
                  {services[activeCard].description}
                </p>
                {isMobile && (
                  <span className="read-more-hint">Tap to read more...</span>
                )}
              </div>
              
              <div className="service-card-footer">
                <button className="contact-btn" onClick={scrollToContact}>
                  Contact Me
                </button>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="dots-container">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${activeCard === index ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Popup */}
      {showPopup && isMobile && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <div className="popup-icon">
                {services[activeCard].icon}
              </div>
              <h3 className="popup-title">{services[activeCard].title}</h3>
              <button className="popup-close" onClick={closePopup}>×</button>
            </div>
            <div className="popup-body">
              <p className="popup-description">
                {services[activeCard].description}
              </p>
            </div>
            <div className="popup-footer">
              <button className="popup-contact-btn" onClick={scrollToContact}>
                Contact Me
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
