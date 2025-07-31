import "./Skills.css";
import { useState } from "react";

function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skillsData = {
    Frontend: ['HTML5', 'CSS3', 'JavaScript','React.js','Node.js','Tailwind CSS', 'Bootstrap','Material UI'],
    Backend: ['Node.js','Express.js', 'Python', 'PHP', 'Java', 'Ballerina'],
    Database: ['MySQL', 'MongoDB', 'MSSQL','Firebase'],
    Programming: ['C', 'C++', 'Python', 'JavaScript'],
    Tools: ['Git', 'Figma', 'Blender', 'Photoshop','ChatGPT','Canva','Gimp','Jupyter'],
    'Soft Skills': ['Communication', 'Teamwork', 'Problem Solving']
  };

  const categories = Object.keys(skillsData);

  return (
    <div id="skills" className="skills-container">
      <h1 className="skills-title">Skills</h1>
      
      {/* Category Navigation */}
      <div className="skills-nav">
        {categories.map((category) => (
          <button
            key={category}
            className={`skills-nav-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skillsData[activeCategory].map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">
              <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🔧</div>
            </div>
            <span className="skill-name">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
