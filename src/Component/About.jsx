import "./About.css"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { useState, useEffect, useRef } from "react"

function About() {
  const [displayedJob, setDisplayedJob] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [isContactHovered, setIsContactHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const jobs = ["Full Stack Developer", "UI/UX Designer", "Freelancer"]
  const typingRef = useRef(null)
  const sectionRef = useRef(null)

  // Intersection Observer for triggering animations
  useEffect(() => {
    const currentSection = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: "0px 0px -100px 0px"
      }
    )

    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])

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

  // Style for the hire me button that changes based on contact hover state
  const hireMeStyle = isContactHovered ? {
    backgroundColor: "rgb(4, 4, 4)",
    color: "#00f7ff",
    border: "1px solid #00f7ff"
  } : {};

  return (
    <div className="container" ref={sectionRef}>
      <div className="about_left">
        <div className={`al_name ${isVisible ? 'slide-in-left' : ''}`}>
          <h2 className="al_name_base">Hi, I&apos;m <span style={{color: '#00f7ff'}}>Pathum</span></h2>
        </div>
        <div className={`al_job_role ${isVisible ? 'slide-in-left' : ''}`}>

          <h3 className="al_job_details">
            <span className="typing-effect" ref={typingRef}>
              {displayedJob}
            </span>
          </h3>
        </div>
        <div className={`al_description ${isVisible ? 'slide-in-left' : ''}`}>
          <p>
            I craft interfaces with the spirit of poetry and logic. Bring designs into forms you can feel on screen.
          </p>
        </div>
        <div className={`al_social ${isVisible ? 'slide-in-left' : ''}`}>
          <a href="https://www.linkedin.com/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.fiverr.com/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <SiFiverr size={24} />
          </a>
        </div>
        <div className={`al_contact_way ${isVisible ? 'slide-in-left' : ''}`}>
          <div className="al_hire_me">
            <button style={hireMeStyle}>Downloard CV</button>
          </div>
          <div className="al_contact">
            <button
              onMouseEnter={() => setIsContactHovered(true)}
              onMouseLeave={() => setIsContactHovered(false)}
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>

      <div className="about_right">
        <div className={`profile-image ${isVisible ? 'slide-in-right' : ''}`}>
        </div>
      </div>
    </div>
  )
}

export default About