import React, { useContext, useState, useEffect } from 'react';
import './Header.scss';
import { ThemeContext } from '../../App';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // If we're on a specific page, set the appropriate active section
      if (location.pathname === '/about') {
        setActiveSection('about-page');
        return;
      }
      if (location.pathname === '/contact') {
        setActiveSection('contact-page');
        return;
      }

      // Determine which section is currently in view based on scroll position
      const sections = ['hero', 'about', 'projects'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && isElementInViewport(element)) { setActiveSection(section); break; }
      }

      // Check if scroll position is at the top, and if so, manually set activeSection to "hero"
      if (window.scrollY === 0) { setActiveSection('hero'); }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    } else if (location.pathname === '/about') {
      setActiveSection('about-page');
    } else if (location.pathname === '/contact') {
      setActiveSection('contact-page');
    }
    
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, [location.pathname]);

  // Function to check if an element is in the viewport
  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.3);
  };

  const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };
  const closeMenu = () => { setIsMenuOpen(false); };

  const handleNavigateSection = (section) => {
    const offsets = { about: -150, projects: -80, hero: -200 };
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: section, offset: offsets[section] || 0 } });
    } else {
      const el = document.getElementById(section);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY + (offsets[section] || 0);
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    closeMenu();
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <RouterLink
            to="/"
            className={activeSection === 'hero' ? 'header__link active' : 'header__link'}
            onClick={() => {
              closeMenu();
              // If we're already on the home page, scroll to top
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            Ryan Yee
          </RouterLink>
        </div>

        {/* Centered Desktop Navigation */}
        <div className="header__center">
          <div className="header__links desktop-nav">
            <RouterLink
              to="/about"
              className={activeSection === 'about-page' ? 'header__link active' : 'header__link'}
              onClick={closeMenu}
            >
              About
            </RouterLink>
            <button
              type="button"
              className={activeSection === 'about' ? 'header__link active' : 'header__link'}
              onClick={() => handleNavigateSection('about')}
            >
              Experience
            </button>
            <button
              type="button"
              className={activeSection === 'projects' ? 'header__link active' : 'header__link'}
              onClick={() => handleNavigateSection('projects')}
            >
              Projects
            </button>
            <RouterLink
              to="/contact"
              className={activeSection === 'contact-page' ? 'header__link active' : 'header__link'}
              onClick={closeMenu}
            >
              Contact
            </RouterLink>
          </div>
        </div>

        <div className="header__controls">
          {/* Social Links */}
          <div className="header__social">
            <a
              href="/Ryan_Yee_Resume.pdf"
              download="Ryan_Yee_Resume.pdf"
              className="header__social-link"
              aria-label="Download Resume"
              title="Resume"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10,19L12,15H9V10H15V15L13,19H10Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ryeean/"
              target="_blank"
              rel="noopener noreferrer"
              className="header__social-link"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
            </a>
            <a
              href="https://github.com/RYeeAnn"
              target="_blank"
              rel="noopener noreferrer"
              className="header__social-link"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
            </a>
          </div>

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
          <RouterLink
            to="/about"
            className={activeSection === 'about-page' ? 'header__mobile-link active' : 'header__mobile-link'}
            onClick={closeMenu}
          >
            About
          </RouterLink>
          <button
            type="button"
            className={activeSection === 'about' ? 'header__mobile-link active' : 'header__mobile-link'}
            onClick={() => handleNavigateSection('about')}
          >
            Experience
          </button>
          <button
            type="button"
            className={activeSection === 'projects' ? 'header__mobile-link active' : 'header__mobile-link'}
            onClick={() => handleNavigateSection('projects')}
          >
            Projects
          </button>
          <RouterLink
            to="/contact"
            className={activeSection === 'contact-page' ? 'header__mobile-link active' : 'header__mobile-link'}
            onClick={closeMenu}
          >
            Contact
          </RouterLink>

          {/* Social Links in Mobile Menu */}
          <div className="header__mobile-social">
            <a
              href="/Ryan_Yee_Resume.pdf"
              download="Ryan_Yee_Resume.pdf"
              className="header__mobile-social-link"
              onClick={closeMenu}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10,19L12,15H9V10H15V15L13,19H10Z" />
              </svg>
              <span>Resume</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ryeean/"
              target="_blank"
              rel="noopener noreferrer"
              className="header__mobile-social-link"
              onClick={closeMenu}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/RYeeAnn"
              target="_blank"
              rel="noopener noreferrer"
              className="header__mobile-social-link"
              onClick={closeMenu}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
