import "./Skills.css";
import { useState } from "react";

function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [animationKey, setAnimationKey] = useState(0);

  const skillsData = {
    Frontend: ['HTML5', 'CSS3', 'JavaScript','Reactjs','Nextjs','Tailwind CSS', 'Bootstrap','Material UI'],
    Backend: ['Nodejs','Expressjs', 'Python', 'PHP', 'Java', 'Ballerina'],
    Database: ['MySQL', 'MongoDB', 'MSSQL','Firebase'],
    Programming: ['C', 'C++', 'Python', 'JavaScript'],
    Tools: ['Git', 'Figma', 'Blender','Jupyter', 'Photoshop','ChatGPT','Canva','Gimp'],
    'Soft Skills': ['Communication', 'Teamwork', 'Problem Solving', 'Self Learning']
  };

  const categories = Object.keys(skillsData);

  // Reset animation when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setAnimationKey(prev => prev + 1); // Force re-render to restart animation
  };

  return (
    <div id="skills" className="skills-container">
      <h1 className="skills-title">Skills</h1>
      
      {/* Category Navigation */}
      <div className="skills-nav">
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
      <div key={animationKey} className="skills-grid">
        {skillsData[activeCategory].map((skill, index) => (
          <div key={index} className="skill-card">
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