import { useState } from 'react'
import LoadingScreen from './Component/LoadingScreen.jsx'
import AnimatedBackground from './Component/AnimatedBackground.jsx'
import Navbar from './Component/Navbar.jsx'
import About from './Component/About.jsx'
import Education from './Component/Education.jsx'
import Services from './Component/Services.jsx'
import Skills from './Component/Skills.jsx'
import Contact from './Component/Contact.jsx'
import Footer from './Component/Footer.jsx'
import Project from './Component/Project.jsx'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {!isLoading && (
        <>
          <AnimatedBackground />
          <Navbar />
          <About />
          <Education />
          <Services />
          <Project />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;