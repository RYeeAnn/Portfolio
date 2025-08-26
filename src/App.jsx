import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import AboutPage from './Components/About/AboutPage';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import ProjectDetail from './Components/Projects/ProjectDetail';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

export const ThemeContext = createContext();

function ScrollHandler() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/' && location.state && location.state.scrollTo) {
      const { scrollTo, offset = 0 } = location.state;
      // Give the DOM a tick to render
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY + offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 0);
    }
  }, [location]);
  return null;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <Router>
        <ScrollHandler />
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
