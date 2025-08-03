import "./About.css"
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { SiFiverr, SiGmail } from "react-icons/si";
import { useState, useEffect, useRef } from "react"

function About() {
  const [displayedJob, setDisplayedJob] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [isContactHovered, setIsContactHovered] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
const jobs = ["Full-Stack Developer", "3ʳᵈ Year Undergraduate", "Freelancer", "Cyber Security Enthusiast"];
  const typingRef = useRef(null)

  useEffect(() => {
    let timer
    const currentJob = jobs[loopNum % jobs.length]

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedJob(currentJob.substring(0, displayedJob.length - 1))
      }, typingSpeed / 2)
    } else {
      timer = setTimeout(() => {
        setDisplayedJob(currentJob.substring(0, displayedJob.length + 1))
      }, typingSpeed)
    }

    // If typing is complete
    if (!isDeleting && displayedJob === currentJob) {
      // Pause at the end of typing
      timer = setTimeout(() => {
        setIsDeleting(true)
        setTypingSpeed(100)
      }, 2000)
    }
    // If deleting is complete
    else if (isDeleting && displayedJob === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setTypingSpeed(150)
    }

    return () => clearTimeout(timer)
  }, [displayedJob, isDeleting, loopNum, typingSpeed, jobs])

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Navigate to contact section
  const navigateToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80; // Offset for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }

  // Style for the hire me button that changes based on contact hover state
  const hireMeStyle = isContactHovered ? {
    backgroundColor: "rgb(4, 4, 4)",
    color: "#00f7ff",
    border: "1px solid #00f7ff"
  } : {};

  return (
    <div id="home" className="container">
      <div className="about-main">
        <div className="about_left">
          <div className="al_name slide-in-left">
            <h2 className="al_name_base">Hi, I&apos;m <span className="name-highlight" style={{ color: "#00e5ff" }}>Pathum</span></h2>
          </div>
          <div className="al_job_role slide-in-left">
            <h3 className="al_job_details">
              <span className="typing-effect" ref={typingRef}>
                {displayedJob}
              </span>
            </h3>
          </div>
          <div className="al_description slide-in-left">
            <p>
              Third-year IT undergraduate at the University of Moratuwa, passionate about Full-Stack development, UI/UX design, and CyberSecurity. I love creating secure, user-friendly web experiences and constantly exploring new challenges to grow as a developer.
            </p>
          </div>
          <div className="al_social slide-in-left">
            <a href="https://www.linkedin.com/in/pathumscj" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/JayaweeraWGHMPSC" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="mailto:pathumwghm@gmail.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <SiGmail size={24} />
            </a>
            <a href="https://www.fiverr.com/pathum_10/buying?source=avatar_menu_profile" className="social-icon" target="_blank" rel="noopener noreferrer">
              <SiFiverr size={24} />
            </a>
          </div>
          <div className="al_contact_way slide-in-left">
            <div className="al_hire_me">
              <a href="/cv.pdf" style={{ textDecoration: "none" }} download><button style={hireMeStyle}>Download Resume</button></a>
            </div>
            <div className="al_contact">
              <button
                onMouseEnter={() => setIsContactHovered(true)}
                onMouseLeave={() => setIsContactHovered(false)}
                onClick={navigateToContact}
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>

        <div className="about_right">
          <div className="profile-image slide-in-right">
            <img src="/profile_picture.jpg" alt="Pathum Profile Picture" />
          </div>
        </div>
      </div>
      
      <div className="al_statistics slide-in-left">

        <div className="stat-card">
          <div className="stat-icon"><img src="/project.png" alt="Project Icon" /></div>
          <div className="stat-number">6+</div>
          <div className="stat-title">Projects</div>
          <div className="stat-description">
            Built a range of full-stack, mobile, and experimental applications fueled by caffeine, curiosity, and creativity.
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><img src="/experience.png" alt="Experience Icon" /></div>
          <div className="stat-number">2+</div>
          <div className="stat-title">Years Client Experience</div>
          <div className="stat-description">
            Over two years of hands-on, client-facing work coding, problem-solving, and shipping real-world solutions.
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><img src="/programming.png" alt="Coding Icon" /></div>
          <div className="stat-number">1000+</div>
          <div className="stat-title">Coding Hours</div>
          <div className="stat-description">
            Mastered through persistence. Spent countless hours debugging, building, and learning across tech stacks and tools.
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}

export default About