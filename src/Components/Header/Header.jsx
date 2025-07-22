import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Header.scss';

function Header() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Determine which section is currently in view based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && isElementInViewport(element)) {
          setActiveSection(section);
          break;
        }
      }
  
      // Check if scroll position is at the top, and if so, manually set activeSection to "home"
      if (window.scrollY === 0) {
        setActiveSection('hero');
      }
    };
  
    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  // Function to check if an element is in the viewport
  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  return (
    <div className="header">
      <h1>Ryan Yee</h1>
      <div className="header__nav">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          offset={-200}
          className={activeSection === 'hero' ? 'clickable-link active' : 'clickable-link'}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-150}
          className={activeSection === 'about' ? 'clickable-link active' : 'clickable-link'}
        >
          Experience
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          offset={-80}
          className={activeSection === 'skills' ? 'clickable-link active' : 'clickable-link'}
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          offset={-80}
          className={activeSection === 'projects' ? 'clickable-link active' : 'clickable-link'}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={0}
          className={activeSection === 'contact' ? 'clickable-link active' : 'clickable-link'}
        >
          Contact
        </ScrollLink>
        {/* <div className="header__blog">
          <a href="blog">
            <b>Blog</b>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
