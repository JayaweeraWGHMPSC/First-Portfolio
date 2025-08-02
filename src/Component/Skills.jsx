import "./Skills.css";
import { useState, useEffect, useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";

function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [animationKey, setAnimationKey] = useState(0);

  // Animation states for scroll-triggered animations
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

  const skillsData = {
    Frontend: ['HTML5', 'CSS3', 'JavaScript','Reactjs','Nextjs','Tailwind CSS', 'Bootstrap','Material UI'],
    Backend: ['Nodejs','Expressjs', 'Python', 'PHP', 'Java', 'Ballerina'],
    Database: ['MySQL', 'MongoDB', 'MSSQL','Firebase'],
    Programming: ['C', 'Java', 'Python', 'JavaScript'],
    Tools: ['Git', 'Figma', 'Blender','Jupyter', 'Photoshop','ChatGPT','Canva','Gimp'],
    'Soft Skills': ['Communication', 'Teamwork', 'Problem Solving', 'Self Learning']
  };

  const categories = Object.keys(skillsData);

  // Reset animation when category changes
  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;
    
    setShowCards(false); // Hide cards before switching
    setTimeout(() => {
      setActiveCategory(category);
      setAnimationKey(prev => prev + 1); // Force re-render to restart animation
      // Show cards after category change
      setTimeout(() => setShowCards(true), 100);
    }, 200);
  };

  return (
    <div id="skills" className="skills-container" ref={containerRef}>
      <AnimatedBackground />
      <h1 className={`skills-title ${showTitle ? 'animate-title' : 'hidden-title'}`}>
        Skill<span style={{ color: '#00ffff' }}>s</span>
      </h1>

      {/* Category Navigation */}
      <div className={`skills-nav ${showNav ? 'animate-nav' : 'hidden-nav'}`}>
        {categories.map((category) => (
          <button
            key={category}
            className={`skills-nav-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div key={animationKey} className={`skills-grid ${showCards ? 'animate-cards' : 'hidden-cards'}`}>
        {skillsData[activeCategory].map((skill, index) => (
          <div key={index} className="skill-card animate-skill-card">
            <div className="skill-icon">
              <div>
                <img src={`src/skillsIMG/${skill}.png`} alt={skill} />
              </div>
            </div>
            <span className="skill-name">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;