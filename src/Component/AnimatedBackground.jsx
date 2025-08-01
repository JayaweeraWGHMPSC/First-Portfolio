const AnimatedBackground = () => {
  return (
    <>
      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(9)].map((_, index) => (
          <div key={`particle-${index}`} className="particle"></div>
        ))}
      </div>

      {/* Background Shapes */}
      <div className="background-shapes">
        {[...Array(4)].map((_, index) => (
          <div key={`shape-${index}`} className="shape"></div>
        ))}
      </div>

      {/* Pulsing Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
    </>
  );
};

export default AnimatedBackground;
