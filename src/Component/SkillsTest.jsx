import "./Skills.css";
import { FaReact } from "react-icons/fa";

function SkillsTest() {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills Test</h1>
      
      <div className="skills-nav">
        <button className="skills-nav-btn active">
          Frontend
        </button>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <div className="skill-icon">
            <FaReact color="#61DAFB" size={80}/>
          </div>
          <span className="skill-name">React</span>
        </div>
      </div>
    </div>
  );
}

export default SkillsTest;
