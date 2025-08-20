import React, { useContext, useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Header.scss';
import { ThemeContext } from '../../App';

function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine which section is currently in view based on scroll position
      const sections = ['hero', 'about', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && isElementInViewport(element)) {
          setActiveSection(section);
          break;
        }
      }
  
      // Check if scroll position is at the top, and if so, manually set activeSection to "hero"
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
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Check if element is partially visible in the viewport
    return (
      rect.top <= windowHeight * 0.3 && // Element top is in the upper 30% of viewport
      rect.bottom >= windowHeight * 0.3  // Element bottom is below the upper 30% of viewport
    );
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    closeMenu();
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            offset={-200}
            className={activeSection === 'hero' ? 'header__link active' : 'header__link'}
            onClick={handleNavClick}
          >
            Ryan Yee
          </ScrollLink>
        </div>
        
        {/* Desktop Navigation */}
        <div className="header__links desktop-nav">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-150}
            className={activeSection === 'about' ? 'header__link active' : 'header__link'}
            onClick={handleNavClick}
          >
            About
          </ScrollLink>

          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className={activeSection === 'projects' ? 'header__link active' : 'header__link'}
            onClick={handleNavClick}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={0}
            className={activeSection === 'contact' ? 'header__link active' : 'header__link'}
            onClick={handleNavClick}
          >
            Contact
          </ScrollLink>
        </div>

        <div className="header__controls">
          <button 
            className="header__theme-toggle" 
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          
          {/* Mobile Burger Menu Button */}
          <button 
            className={`header__burger ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`header__mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="header__mobile-links">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-150}
            className={activeSection === 'about' ? 'header__mobile-link active' : 'header__mobile-link'}
            onClick={handleNavClick}
          >
            About
          </ScrollLink>

          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            className={activeSection === 'projects' ? 'header__mobile-link active' : 'header__mobile-link'}
            onClick={handleNavClick}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={0}
            className={activeSection === 'contact' ? 'header__mobile-link active' : 'header__mobile-link'}
            onClick={handleNavClick}
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
