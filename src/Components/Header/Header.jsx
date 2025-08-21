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
      // Determine which section is currently in view based on scroll position
      const sections = ['hero', 'about', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && isElementInViewport(element)) { setActiveSection(section); break; }
      }

      // Check if scroll position is at the top, and if so, manually set activeSection to "hero"
      if (window.scrollY === 0) { setActiveSection('hero'); }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
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
    const offsets = { about: -150, projects: -80, contact: 0, hero: -200 };
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
            onClick={closeMenu}
          >
            Ryan Yee
          </RouterLink>
        </div>

        {/* Desktop Navigation */}
        <div className="header__links desktop-nav">
          <button
            type="button"
            className={activeSection === 'about' ? 'header__link active' : 'header__link'}
            onClick={() => handleNavigateSection('about')}
          >
            About
          </button>
          <button
            type="button"
            className={activeSection === 'projects' ? 'header__link active' : 'header__link'}
            onClick={() => handleNavigateSection('projects')}
          >
            Projects
          </button>
          <button
            type="button"
            className={activeSection === 'contact' ? 'header__link active' : 'header__link'}
            onClick={() => handleNavigateSection('contact')}
          >
            Contact
          </button>
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
          <button
            type="button"
            className={activeSection === 'about' ? 'header__mobile-link active' : 'header__mobile-link'}
            onClick={() => handleNavigateSection('about')}
          >
            About
          </button>
          <button
            type="button"
            className={activeSection === 'projects' ? 'header__mobile-link active' : 'header__mobile-link'}
            onClick={() => handleNavigateSection('projects')}
          >
            Projects
          </button>
          <button
            type="button"
            className={activeSection === 'contact' ? 'header__mobile-link active' : 'header__mobile-link'}
            onClick={() => handleNavigateSection('contact')}
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
