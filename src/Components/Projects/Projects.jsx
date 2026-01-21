// Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';
import shnakeGif from '../../assets/ShnakeGif.gif';
// import simonSays from '../../assets/simon-says.gif';
import DinoType from '../../assets/DynoType.png';
import RHSFigma from '../../assets/RHS-Figma.png'
import ApplyingAssistantFigma from '../../assets/ApplyingAssistant-Figma.png'
import AtriaFigma from '../../assets/Atria-Figma.png'
import SpeedieFigma from '../../assets/Speedie-Figma.png'
import SolidryHero from '../../assets/Solidry.png'

function renderTechStack(techString) {
  return techString.split(',').map(tech => (
    <span className="projects__tech-pill" key={tech.trim()}>{tech.trim()}</span>
  ));
}

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects__container">
        <div className="projects__header">
          <h2 className="projects__title">Projects</h2>
          <p className="projects__subtitle">A showcase of my work in full-stack development, UX research, and creative problem-solving.</p>
        </div>

                <div className="projects__grid">
          {/* Solidry Project */}
          <Link to="/project/solidry" className="projects__project projects__project--linkable">
            <div className="projects__project-image">
              <img src={SolidryHero} alt="Solidry Code Review Assistant" />
            </div>
            <div className="projects__project-content">
              <div className="projects__project-header">
                <h3 className="projects__project-title">Solidry</h3>
              </div>
              <p className="projects__project-description">
                An AI-powered code review assistant built with Next.js, React, and Claude 3.5 Sonnet for intelligent analysis of SOLID/DRY principles, code hygiene, and complexity issues. Features dual-mode analysis (AI + pattern-based demo), unique confidence scoring for result transparency, real-time quality grades (A-F), line-by-line annotations, and git diff support. Built to automate my personal workflow of maintaining strict SOLID principle adherence in daily development.
              </p>
              <div className="projects__project-tech">
                {renderTechStack("Next.js, React, TypeScript, Tailwind CSS, Anthropic Claude SDK, Vitest")}
              </div>
              <div className="projects__project-links">
                <a href="https://solidry.netlify.app" className="projects__link projects__link--primary" onClick={(e) => e.stopPropagation()}>View Live</a>
                <span className="projects__link projects__link--secondary">View Details →</span>
              </div>
            </div>
          </Link>

          {/* Ruby's Hair Salon Project */}
          <Link to="/project/ruby-hair-salon" className="projects__project projects__project--linkable">
            <div className="projects__project-image">
              <img src={RHSFigma} alt="Ruby's Hair Salon" />
            </div>
            <div className="projects__project-content">
              <div className="projects__project-header">
                <h3 className="projects__project-title">Ruby's Hair Salon</h3>
              </div>
              <p className="projects__project-description">
                A freelance project for my mother's private hair salon business. Features online booking integration, service showcase, and responsive design. Helped transition from manual notebook scheduling to a digital booking system, reducing scheduling conflicts and missed appointments.
              </p>
              <div className="projects__project-tech">
                {renderTechStack("React, TypeScript, Tailwind CSS")}
              </div>
              <div className="projects__project-links">
                <a href="https://www.rubyshairsalon.ca/" className="projects__link projects__link--primary" onClick={(e) => e.stopPropagation()}>View Live</a>
                <span className="projects__link projects__link--secondary">View Details →</span>
              </div>
            </div>
          </Link>

          {/* Applying Assistant Project */}
          <Link to="/project/applying-assistant" className="projects__project projects__project--linkable">
            <div className="projects__project-image projects__project-image--extension">
              <img src={ApplyingAssistantFigma} alt="Applying Assistant Chrome Extension" />
            </div>
            <div className="projects__project-content">
              <div className="projects__project-header">
                <h3 className="projects__project-title">Applying Assistant</h3>
              </div>
              <p className="projects__project-description">
                A Chrome extension that automates job application form filling with smart field detection and one-click professional templates. Reduces application time from 20+ minutes to 3-5 minutes. <a href="https://chromewebstore.google.com/detail/applying-assistant/jemddgjafimcndlkmbjkpimnedbmccee" className="projects__inline-link" onClick={(e) => e.stopPropagation()}>Get it on Chrome Web Store</a>
              </p>
              <div className="projects__project-tech">
                {renderTechStack("JavaScript, Chrome Extensions API, HTML, CSS")}
              </div>
              <div className="projects__project-links">
                <a href="https://applyingassistant.netlify.app/" className="projects__link projects__link--primary" onClick={(e) => e.stopPropagation()}>View Live</a>
                <span className="projects__link projects__link--secondary">View Details →</span>
              </div>
            </div>
          </Link>

          {/* Townhall Project */}
          <Link to="/project/townhall" className="projects__project projects__project--linkable">
            <div className="projects__project-image">
              <img src={AtriaFigma} alt="Atria Townhall Platform" />
            </div>
            <div className="projects__project-content">
              <div className="projects__project-header">
                <h3 className="projects__project-title">Townhall</h3>
              </div>
              <p className="projects__project-description">
                A full-stack community platform connecting volunteers to local initiatives. Built 15+ RESTful APIs, implemented real-time chat with WebSockets, and developed mobile-first UIs from Figma designs. Led API development and helped architect the backend using Django with a scalable layered structure.
              </p>
              <div className="projects__project-tech">
                {renderTechStack("Python, Django, Django Channels, React/Next.js, JavaScript, REST APIs, PostgreSQL/SQLite, Render, WebSockets, Redis, Netlify, Cloudinary")}
              </div>
              <div className="projects__project-links">
                <a href="https://atriacoop.netlify.app/" className="projects__link projects__link--primary" onClick={(e) => e.stopPropagation()}>View Live</a>
                <span className="projects__link projects__link--secondary">View Details →</span>
              </div>
            </div>
          </Link>

          {/* Speedie Project */}
          <Link to="/project/speedie" className="projects__project projects__project--linkable">
            <div className="projects__project-image">
              <img src={SpeedieFigma} alt="Speedie App" />
            </div>
            <div className="projects__project-content">
              <div className="projects__project-header">
                <h3 className="projects__project-title">Speedie</h3>
              </div>
              <p className="projects__project-description">
                An educational app helping everyday drivers understand vehicle warning lights. Features an interactive dashboard with urgency levels, repair cost estimates, and curated educational videos. Built with progressive disclosure UX patterns to reduce information overwhelm for non-technical users.
              </p>
              <div className="projects__project-tech">
                {renderTechStack("React, TypeScript, Tailwind")}
              </div>
              <div className="projects__project-links">
                <a href="https://speedie.vercel.app/" className="projects__link projects__link--primary" onClick={(e) => e.stopPropagation()}>View Live</a>
                <span className="projects__link projects__link--secondary">View Details →</span>
              </div>
            </div>
          </Link>

          {/* DinoType Project */}
          <Link to="/project/dinotype" className="projects__project projects__project--linkable">
            <div className="projects__project-image">
              <img src={DinoType} alt="DinoType Game" />
            </div>
            <div className="projects__project-content">
              <div className="projects__project-header">
                <h3 className="projects__project-title">DinoType</h3>
              </div>
              <p className="projects__project-description">
                A typing speed game built with Python/Pygame and deployed to the web using Pygbag for WebAssembly compilation. Features real-time WPM tracking and an engaging dinosaur-themed interface. Demonstrates cross-platform deployment of desktop Python games to the browser.
              </p>
              <div className="projects__project-tech">
                {renderTechStack("Python, Pygame, Pygbag")}
              </div>
              <div className="projects__project-links">
                <a href="https://ryeeann.github.io/DinoType/" className="projects__link projects__link--primary" onClick={(e) => e.stopPropagation()}>Play Game</a>
                <span className="projects__link projects__link--secondary">View Details →</span>
              </div>
            </div>
          </Link>

          {/* Shnake Project */}
          <Link to="/project/shnake" className="projects__project projects__project--linkable">
            <div className="projects__project-image">
              <img src={shnakeGif} alt="Shnake Game" />
            </div>
            <div className="projects__project-content">
              <div className="projects__project-header">
                <h3 className="projects__project-title">Shnake</h3>
              </div>
              <p className="projects__project-description">
                A classic snake game built with React, featuring keyboard controls, score tracking, and increasing difficulty. My first game development project that taught me state management patterns, game loop architecture, and collision detection algorithms.
              </p>
              <div className="projects__project-tech">
                {renderTechStack("JavaScript, React, Sass")}
              </div>
              <div className="projects__project-links">
                <a href="https://shnakey.netlify.app/" className="projects__link projects__link--primary" onClick={(e) => e.stopPropagation()}>View Live</a>
                <span className="projects__link projects__link--secondary">View Details →</span>
              </div>
            </div>
          </Link>

          {/* Simon Says Project */}
          {/* <Link to="/project/simon-says" className="projects__project projects__project--linkable">
            <div className="projects__project-image">
              <img src={simonSays} alt="Simon Says Game" />
            </div>
            <div className="projects__project-content">
              <div className="projects__project-header">
                <h3 className="projects__project-title">Simon Says</h3>
              </div>
              <p className="projects__project-description">
                A simple and classic game to test your short-term memory skills. Built with React and JavaScript for interactive gameplay.
              </p>
              <div className="projects__project-tech">
                {renderTechStack("JavaScript, React, Sass")}
              </div>
              <div className="projects__project-links">
                <span className="projects__link projects__link--secondary">View Details →</span>
              </div>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
