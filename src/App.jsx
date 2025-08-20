import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import ProjectDetail from './Components/Projects/ProjectDetail';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

export const ThemeContext = createContext();

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
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
