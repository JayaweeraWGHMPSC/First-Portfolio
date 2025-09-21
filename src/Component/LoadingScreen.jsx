import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingPhase, setLoadingPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  const loadingPhases = [
    { text: "Preparing Portfolio...", duration: 1500 },
    { text: "Welcome to My Portfolio", duration: 1000 }
  ];

  useEffect(() => {
    // Show logo after initial delay
    const logoTimer = setTimeout(() => setShowLogo(true), 200);
    
    // Show progress bar after logo appears
    const progressTimer = setTimeout(() => setShowProgress(true), 500);

    // Progress animation with faster loading
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Shorter delay before fade out
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onLoadingComplete();
            }, 600); // Shorter fade out
          }, 300); // Shorter wait before starting fade
          return 100;
        }
        // Faster progress
        const increment = Math.random() * 2 + 1.5; // 1.5 to 3.5
        return Math.min(prev + increment, 100);
      });
    }, 50); // Faster progress updates

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(progressTimer);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  useEffect(() => {
    const phaseTimer = setTimeout(() => {
      setLoadingPhase(1); // Switch to "Welcome My Portfolio" after delay
    }, 1500); // Show "Preparing Portfolio..." for 1.5 seconds

    return () => clearTimeout(phaseTimer);
  }, []);

  return (
    <div className={`modern-loading-screen ${!isVisible ? 'fade-out' : ''}`}>
      {/* Neural Network Background */}
      <div className="neural-network">
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`neuron neuron-${i + 1}`}>
            <div className="neuron-core"></div>
            <div className="neuron-pulse"></div>
          </div>
        ))}
        {[...Array(20)].map((_, i) => (
          <div key={`connection-${i}`} className={`connection connection-${i + 1}`}></div>
        ))}
      </div>

      {/* Matrix Rain Effect */}
      <div className="matrix-rain">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="matrix-column" style={{ left: `${(i * 3.33)}%` }}>
            <div className="matrix-char">0</div>
            <div className="matrix-char">1</div>
            <div className="matrix-char">0</div>
            <div className="matrix-char">1</div>
            <div className="matrix-char">0</div>
          </div>
        ))}
      </div>

      <div className="loading-content">
        {/* Modern Logo Animation */}
        <div className={`modern-logo ${showLogo ? 'show' : ''}`}>
          <div className="logo-container">
            <div className="logo-text">
              <span className="logo-p">P</span>
              <span className="logo-a">a</span>
              <span className="logo-t">t</span>
              <span className="logo-h">h</span>
              <span className="logo-u">u</span>
              <span className="logo-m">m</span>
              <span className="logo-space"> </span>
              <span className="logo-s">S</span>
              <span className="logo-c">C</span>
            </div>
            <div className="logo-underline"></div>
            <div className="logo-subtitle">Full Stack Developer</div>
          </div>
        </div>

        {/* Holographic Loading Animation */}
        <div className="holographic-loader">
          <div className="holo-ring holo-ring-1"></div>
          <div className="holo-ring holo-ring-2"></div>
          <div className="holo-ring holo-ring-3"></div>
          <div className="holo-center">
            <div className="holo-dot"></div>
          </div>
        </div>

        {/* Advanced Progress System */}
        <div className={`progress-system ${showProgress ? 'show' : ''}`}>
          <div className="progress-wrapper">
            <div className="progress-track">
              <div className="progress-glow" style={{ width: `${progress}%` }}></div>
              <div className="progress-bar-modern" style={{ width: `${progress}%` }}>
                <div className="progress-particle"></div>
              </div>
            </div>
            <div className="progress-info">
              <span className="progress-percentage">{Math.floor(progress)}%</span>
              <span className="progress-label">Loading Experience</span>
            </div>
          </div>
        </div>

        {/* Dynamic Loading Text */}
        <div className="loading-phase">
          <div className="phase-text">{loadingPhases[loadingPhase]?.text}</div>
          <div className="typing-indicator">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        {/* Floating Code Elements */}
        <div className="code-particles">
          {['&lt;/&gt;', '{ }', '[ ]', '&amp;&amp;', '||', '===', '=&gt;', 'fn()', 'var'].map((code, i) => (
            <div key={i} className={`code-particle code-${i + 1}`}>
              <span dangerouslySetInnerHTML={{ __html: code }} />
            </div>
          ))}
        </div>
      </div>

      {/* Scanline Effect */}
      <div className="scanlines"></div>
      
      {/* Glitch Effect Overlay */}
      <div className="glitch-overlay"></div>
    </div>
  );
};

LoadingScreen.propTypes = {
  onLoadingComplete: PropTypes.func.isRequired,
};

export default LoadingScreen;