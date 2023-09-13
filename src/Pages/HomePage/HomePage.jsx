import React, { useState } from 'react';
import { Element } from 'react-scroll';
import About from '../../Components/About/About';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Projects from '../../Components/Projects/Projects';
import Skills from '../../Components/Skills/Skills';
import './HomePage.scss';
import Footer from '../../Components/Footer/Footer';
import Contact from '../../Components/Contact/Contact';

function HomePage() {
  const [activeSection, setActiveSection] = useState('hero'); // Initialize with the default section name

  // Function to handle section changes
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="home-page">
      <div className="home-page__header">
        <Header activeSection={activeSection} handleSectionChange={handleSectionChange} />
        <Hero />
        <Element name="about">
          <About />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
