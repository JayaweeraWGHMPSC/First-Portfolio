import "./Services.css"

function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">Services</h1>

      <div className="services-grid">
        {/* Web Development Card */}
        <div className="service-card">
          <h2 className="service-heading">Web Development</h2>
          <p className="service-description">
            I provide tailored web development services, creating responsive, user-friendly websites and applications.
            Specializing in front-end and back-end development, I deliver secure, scalable solutions, including
            e-commerce and custom functionality. I collaborate closely with clients to ensure impactful digital
            experiences that meet their goals and drive success.
          </p>
        </div>

        {/* UI/UX Design Card */}
        <div className="service-card">
          <h2 className="service-heading">UI / UX Design</h2>
          <p className="service-description">
            I offer UI/UX design services that focus on creating intuitive and visually appealing digital experiences.
            By understanding client goals and target audiences, I deliver user-friendly interfaces and optimized user
            flows to enhance engagement and drive business success.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services

