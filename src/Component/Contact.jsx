import "./Contact.css"
import { useState, useRef, useEffect } from "react"
import emailjs from "@emailjs/browser"

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
      setShowPopup(true)
      return false
    }

    setValidationErrors(errors)
    return isValid
  }

  const sendEmail = async (e) => {
    e.preventDefault()

    try {
      const result = await emailjs.sendForm("service_wf5jpmj", "template_adah41g", form.current, "aXIH89B0VxmHZEaO8")

      if (result.text === "OK") {
        setStatus({
          message: "Message sent successfully!",
          isError: false,
        })
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
    } catch (error) {
      setStatus({
        message: "Failed to send message. Please try again.",
        isError: true,
        error: error.text || "Unknown error",
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      await sendEmail(e)
    }
  }

  return (
    <div className="contact-container">
      <h1 className="contact-title">
        Contact <span className="highlight">Me</span>
      </h1>

      {/* Popup Message */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-message">
            <p>{popupMessage}</p>
          </div>
        </div>
      )}

      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-left">
            <div className="form-group">
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

            <div className="form-group">
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

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
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

          <div className="form-right">
            <div className="form-group">
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

        {status.message && (
          <div className={`status-message ${status.isError ? "error" : "success"}`}>
            {status.message}
          </div>
        )}

        <button type="submit" className="submit-button">
          Send Message
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
        }

        .popup-message p {
          margin: 0;
          color: #ffffff;
          font-size: 16px;
          font-weight: 500;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .error-border {
          border-color: #ff4444 !important;
          box-shadow: 0 0 5px rgba(255, 68, 68, 0.3);
        }
      `}</style>
    </div>
  )
}

export default Contact