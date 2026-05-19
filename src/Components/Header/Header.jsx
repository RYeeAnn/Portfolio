import React, { useState, useEffect } from 'react';
import './Header.scss';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/about') {
        setActiveSection('about-page');
        return;
      }
      if (location.pathname === '/contact') {
        setActiveSection('contact-page');
        return;
      }

      const sections = ['hero', 'about', 'projects'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && isElementInViewport(element)) {
          setActiveSection(section);
          break;
        }
      }

      if (window.scrollY === 0) {
        setActiveSection('hero');
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    } else if (location.pathname === '/about') {
      setActiveSection('about-page');
    } else if (location.pathname === '/contact') {
      setActiveSection('contact-page');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.3;
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
        <RouterLink
          to="/"
          className="header__name"
          onClick={() => {
            closeMenu();
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          Ryan Yee
        </RouterLink>

        <div className="header__links">
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

          <span className="header__divider">|</span>

          <a
            href="https://drive.google.com/file/d/1-jvlkDtfYQB3PQtwKlE2uwoaptDXDvOe/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="header__social-link"
          >
            Resume
          </a>
          <a
            href="https://github.com/RYeeAnn"
            target="_blank"
            rel="noopener noreferrer"
            className="header__social-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ryeean/"
            target="_blank"
            rel="noopener noreferrer"
            className="header__social-link"
          >
            LinkedIn
          </a>
        </div>

        <button
          className={`header__burger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

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
          <a
            href="https://drive.google.com/file/d/1-jvlkDtfYQB3PQtwKlE2uwoaptDXDvOe/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="header__mobile-link"
            onClick={closeMenu}
          >
            Resume
          </a>
          <a
            href="https://github.com/RYeeAnn"
            target="_blank"
            rel="noopener noreferrer"
            className="header__mobile-link"
            onClick={closeMenu}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ryeean/"
            target="_blank"
            rel="noopener noreferrer"
            className="header__mobile-link"
            onClick={closeMenu}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
