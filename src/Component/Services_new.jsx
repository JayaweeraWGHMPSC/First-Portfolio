import "./Services.css";
import { useState, useEffect } from "react";
import { FaCode, FaServer, FaLayerGroup, FaPalette, FaPuzzlePiece, FaMobile } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

function Services() {
  const [activeCard, setActiveCard] = useState(0);
  const [isAutoSwapping, setIsAutoSwapping] = useState(true);

  const services = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <FaCode />,
      description: "Creating stunning, responsive user interfaces with modern frameworks like React, Vue, and Angular. I focus on pixel-perfect designs, smooth animations, and exceptional user experiences that captivate your audience and drive engagement."
    },
    {
      id: 2,
      title: "Backend Development",
      icon: <FaServer />,
      description: "Building robust server-side solutions with scalable architectures, secure APIs, and efficient databases. I ensure your applications handle high traffic, maintain data integrity, and provide lightning-fast performance for optimal user satisfaction."
    },
    {
      id: 3,
      title: "Full-Stack Development",
      icon: <FaLayerGroup />,
      description: "Delivering complete end-to-end solutions that seamlessly integrate frontend and backend technologies. From concept to deployment, I create comprehensive applications that are scalable, maintainable, and perfectly aligned with your business objectives."
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
      description: "Analyzing complex technical challenges and delivering innovative solutions that streamline processes and boost efficiency. I approach every problem with creative thinking and proven methodologies to turn obstacles into opportunities for growth."
    },
    {
      id: 6,
      title: "Mobile App Development",
      icon: <FaMobile />,
      description: "Creating powerful mobile applications for iOS and Android platforms using cutting-edge technologies. I develop feature-rich, user-friendly apps that provide seamless experiences across all devices and help you reach customers anywhere, anytime."
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
    if (!isAutoSwapping) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoSwapping, services.length]);

  const handleCardHover = () => {
    setIsAutoSwapping(false);
  };

  const handleCardLeave = () => {
    setIsAutoSwapping(true);
  };

  const handleDotClick = (index) => {
    setActiveCard(index);
    setIsAutoSwapping(false);
    // Resume auto-swapping after 5 seconds
    setTimeout(() => setIsAutoSwapping(true), 5000);
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
            <h2 className="intro-title">Services</h2>
            <p className="intro-description">
                I strive to improve my solution-oriented thinking every day, enabling me to help clients achieve their goals efficiently and effectively. I deliver end-to-end digital solutions that cover frontend and backend development, full-stack applications, UI/UX design, mobile app development, SEO optimization, and strategic problem-solving. My approach emphasizes scalable architecture, user-centric design, and impactful, results-driven execution—turning ideas into powerful and engaging digital experiences.
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
            onTouchStart={handleCardHover}
            onTouchEnd={handleCardLeave}
          >
            <div className="service-card-container">
              <div className="service-card-header">
                <div className="service-icon">
                  {services[activeCard].icon}
                </div>
                <h3 className="service-card-title">{services[activeCard].title}</h3>
              </div>
              
              <div className="service-card-body">
                <p className="service-card-description">
                  {services[activeCard].description}
                </p>
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
    </div>
  );
}

export default Services;
