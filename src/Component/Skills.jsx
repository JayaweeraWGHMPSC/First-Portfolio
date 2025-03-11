import "./Skills.css";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava 
} from "react-icons/fa";
import { TbBrandNextjs, TbSql } from "react-icons/tb";
import { 
  SiExpress, SiTailwindcss, SiC, SiCplusplus, SiMongodb, SiFirebase, SiFigma 
} from "react-icons/si";

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>

      <div className="skills-grid">
        {/* HTML Card */}
        <div className="skill-card">
          <div className="skill-icon html">
            <FaHtml5 color="#E34F26" size={100}/>
          </div>
          <span className="skill-name">HTML</span>
        </div>

        {/* CSS Card */}
        <div className="skill-card">
          <div className="skill-icon css">
            <FaCss3Alt color="#1572B6" size={100}/>
          </div>
          <span className="skill-name">CSS</span>
        </div>

        {/* JavaScript Card */}
        <div className="skill-card">
          <div className="skill-icon javascript">
            <FaJs color="#F7DF1E" size={100}/>
          </div>
          <span className="skill-name">JavaScript</span>
        </div>

        {/* React Card */}
        <div className="skill-card">
          <div className="skill-icon react">
            <FaReact color="#61DAFB" size={100}/>
          </div>
          <span className="skill-name">React JS</span>
        </div>

        {/* Node.js Card */}
        <div className="skill-card">
          <div className="skill-icon nodejs">
            <FaNodeJs color="#339933" size={100}/>
          </div>
          <span className="skill-name">Node.js</span>
        </div>

        {/* Next.js Card */}
        <div className="skill-card">
          <div className="skill-icon nextjs">
            <TbBrandNextjs size={100}/>
          </div>
          <span className="skill-name">Next.js</span>
        </div>

        {/* Express.js Card */}
        <div className="skill-card">
          <div className="skill-icon expressjs">
            <SiExpress size={100}/>
          </div>
          <span className="skill-name">Express.js</span>
        </div>

        {/* Tailwind CSS Card */}
        <div className="skill-card">
          <div className="skill-icon tailwind">
            <SiTailwindcss color="#38B2AC" size={100}/>
          </div>
          <span className="skill-name">Tailwind CSS</span>
        </div>

        {/* Python Card */}
        <div className="skill-card">
          <div className="skill-icon python">
            <FaPython color="#3776AB" size={100}/>
          </div>
          <span className="skill-name">Python</span>
        </div>

        {/* C Card */}
        <div className="skill-card">
          <div className="skill-icon c">
            <SiC color="#A8B9CC" size={100}/>
          </div>
          <span className="skill-name">C</span>
        </div>

        {/* C++ Card */}
        <div className="skill-card">
          <div className="skill-icon cpp">
            <SiCplusplus color="#00599C" size={100}/>
          </div>
          <span className="skill-name">C++</span>
        </div>

        {/* Java Card */}
        <div className="skill-card">
          <div className="skill-icon java">
            <FaJava color="#007396" size={100}/>
          </div>
          <span className="skill-name">Java</span>
        </div>

        {/* SQL Card */}
        <div className="skill-card">
          <div className="skill-icon sql">
            <TbSql size={100}/>
          </div>
          <span className="skill-name">SQL</span>
        </div>

        {/* MongoDB Card */}
        <div className="skill-card">
          <div className="skill-icon mongodb">
            <SiMongodb color="#47A248" size={100}/>
          </div>
          <span className="skill-name">MongoDB</span>
        </div>

        {/* Firebase Card */}
        <div className="skill-card">
          <div className="skill-icon firebase">
            <SiFirebase color="#FFCA28" size={100}/>
          </div>
          <span className="skill-name">Firebase</span>
        </div>

        {/* WebSockets Card */}
        <div className="skill-card">
          <div className="skill-icon websocket">
            <SiFigma size={100}/>
          </div>
          <span className="skill-name">Figma</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
