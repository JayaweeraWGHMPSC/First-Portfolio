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

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ message: "", isError: false }) // Clear status after 5 seconds
      }, 5000)

      return () => clearTimeout(timer) // Cleanup timeout
    }
  }, [status.message])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const sendEmail = async (e) => {
    e.preventDefault()

    try {
      // Replace these with your actual EmailJS service details
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
      }
    } catch (error) {
      setStatus({
        message: "Failed to send message. Please try again.",
        isError: true,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await sendEmail(e)
  }

  return (
    <div className="contact-container">
      <h1 className="contact-title">
        Contact <span className="highlight">Me</span>
      </h1>

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
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
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
                required
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
    </div>
  )
}

export default Contact
