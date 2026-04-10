import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import AboutPage from './Components/About/AboutPage';
import Projects from './Components/Projects/Projects';
import ProjectDetail from './Components/Projects/ProjectDetail';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.state && location.state.scrollTo) {
      const { scrollTo, offset = 0 } = location.state;
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY + offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.state]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
