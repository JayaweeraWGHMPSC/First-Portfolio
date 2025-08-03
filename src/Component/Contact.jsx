/* eslint-disable react/no-unknown-property */
import "./Contact.css"
import { useState, useRef, useEffect } from "react"
import emailjs from "@emailjs/browser"
import AnimatedBackground from "./AnimatedBackground"

function Contact() {
  const form = useRef()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState({
    message: "",
    isError: false,
  })
  const [validationErrors, setValidationErrors] = useState({})
  const [showPopup, setShowPopup] = useState(false)
  const [popupMessage, setPopupMessage] = useState("")
  const [popupType, setPopupType] = useState("info") // "success", "error", "info"
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Animation states for scroll-triggered animations
  const [isVisible, setIsVisible] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const [showForm, setShowForm] = useState(false)
  
  const containerRef = useRef(null)

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            
            // Sequence the animations
            setTimeout(() => setShowTitle(true), 200)
            setTimeout(() => setShowForm(true), 800)
          }
        })
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '-50px 0px -50px 0px' // Add some margin for better timing
      }
    )

    const currentContainer = containerRef.current
    if (currentContainer) {
      observer.observe(currentContainer)
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ message: "", isError: false })
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [status.message])

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false)
        setPopupMessage("")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [showPopup])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: false,
      }))
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    const errors = {}
    let isValid = true

    // Check required fields (excluding phone)
    const requiredFields = ['fullName', 'email', 'subject', 'message']
    
    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        errors[field] = true
        isValid = false
      }
    })

    // Check email format if email is provided
    if (formData.email.trim() && !validateEmail(formData.email)) {
      setPopupMessage("Please enter a valid email address")
      setPopupType("error")
      setShowPopup(true)
      return false
    }

    setValidationErrors(errors)
    return isValid
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await emailjs.sendForm("service_wf5jpmj", "template_adah41g", form.current, "aXIH89B0VxmHZEaO8")

      if (result.text === "OK") {
        setPopupMessage("Message sent successfully! Thank you for contacting me.")
        setPopupType("success")
        setShowPopup(true)
        // Clear form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
        setValidationErrors({})
      }
    } catch {
      setPopupMessage("Failed to send message. Please try again later.")
      setPopupType("error")
      setShowPopup(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!isSubmitting && validateForm()) {
      await sendEmail(e)
    }
  }

  const closePopup = () => {
    setShowPopup(false)
    setPopupMessage("")
  }

  return (
    <div id="contact" className="contact-container" ref={containerRef}>
      <AnimatedBackground />
      <h1 className={`contact-title ${showTitle ? 'animate-title' : 'hidden-title'}`}>
        Contact <span className="highlight">Me</span>
      </h1>

      {/* Popup Message */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className={`popup-message ${popupType}`} onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={closePopup}>
              ×
            </button>
            <p>{popupMessage}</p>
          </div>
        </div>
      )}

      <form ref={form} className={`contact-form ${showForm ? 'animate-form' : 'hidden-form'}`} onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-left animate-form-left">
            <div className="form-group animate-form-item">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className={validationErrors.fullName ? 'error-border' : ''}
                style={{
                  borderColor: validationErrors.fullName ? '#ff4444' : ''
                }}
              />
            </div>

            <div className="form-group animate-form-item">
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                className={validationErrors.email ? 'error-border' : ''}
                style={{
                  borderColor: validationErrors.email ? '#ff4444' : ''
                }}
              />
            </div>

            <div className="form-group animate-form-item">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group animate-form-item">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={validationErrors.subject ? 'error-border' : ''}
                style={{
                  borderColor: validationErrors.subject ? '#ff4444' : ''
                }}
              />
            </div>
          </div>

          <div className="form-right animate-form-right">
            <div className="form-group animate-form-item">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={validationErrors.message ? 'error-border' : ''}
                style={{
                  borderColor: validationErrors.message ? '#ff4444' : ''
                }}
              ></textarea>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-button animate-form-item" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .popup-message {
          background: linear-gradient(135deg, #00c8deff 0%, #00e5ff 100%);
          padding: 20px 30px;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          max-width: 400px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: popupSlideIn 0.3s ease-out;
          position: relative;
        }

        .popup-close-btn {
          position: absolute;
          top: 8px;
          right: 12px;
          background: none;
          border: none;
          font-size: 24px;
          font-weight: bold;
          color: #000000;
          cursor: pointer;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .popup-close-btn:hover {
          background-color: rgba(0, 0, 0, 0.1);
          transform: scale(1.1);
        }

        .popup-message.success {
          background: #00e5ff;
          border: 1px solid rgba(0, 255, 255, 0.4);
          
        }

        .popup-message.error {
          background: #ff5252;
          border: 1px solid rgba(255, 107, 107, 0.4);
        }

        .popup-message.info {
          background: #00e5ff;
          border: 1px solid rgba(0, 229, 255, 0.4);
        }

        @keyframes popupSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .popup-message p {
          margin: 0;
          color: #000000ff;
          font-size: 16px;
          font-weight: 500;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .error-border {
          border-color: #ff4444 !important;
          box-shadow: 0 0 5px rgba(255, 68, 68, 0.3);
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
          box-shadow: none !important;
        }

        .submit-button:disabled:hover {
          transform: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </div>
  )
}

export default Contact