// Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';
import DinoType from '../../assets/DynoType.png';
import RHSFigma from '../../assets/RHS-Figma.png'
import ApplyingAssistantFigma from '../../assets/ApplyingAssistant-Figma.png'
import SpeedieFigma from '../../assets/Speedie-Figma.png'
import TownhallHero from '../../assets/Townhall.png'

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
        </div>

        <div className="projects__grid">
          {/* Townhall Project */}
          <Link to="/project/townhall" className="projects__project projects__project--linkable">
            <div className="projects__project-image">
              <img src={TownhallHero} alt="Townhall Community Platform" />
            </div>
            <div className="projects__project-content">
              <div className="projects__project-header">
                <h3 className="projects__project-title">Townhall</h3>
              </div>
              <p className="projects__project-description">
                A full-stack community platform I'm actively contributing to, built in collaboration with the Vancouver Food Justice Coalition (VFJC). Took ownership of both the frontend and backend, building 15+ RESTful APIs, implementing real-time chat with WebSockets, and translating Figma designs into responsive UIs.
              </p>
              <div className="projects__project-tech">
                {renderTechStack("Python, Django, React, Next.js, PostgreSQL, WebSockets, Redis, Cloudinary")}
              </div>
              <div className="projects__project-links">
                <a href="https://atriacoop.netlify.app/" className="projects__link projects__link--primary" onClick={(e) => e.stopPropagation()}>View Live</a>
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
                A freelance project for my mother's private hair salon. Replaced her manual notebook scheduling with an online booking system. Clients can now browse services and book appointments without calling.
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
                A Chrome extension that auto-fills job application forms with one-click templates. Cuts application time from 20+ minutes to under 5. <a href="https://chromewebstore.google.com/detail/applying-assistant/jemddgjafimcndlkmbjkpimnedbmccee" className="projects__inline-link" onClick={(e) => e.stopPropagation()}>Available on the Chrome Web Store.</a>
              </p>
              <div className="projects__project-tech">
                {renderTechStack("JavaScript, Chrome Extensions API, HTML, CSS")}
              </div>
              <div className="projects__project-links">
                <a href="https://chromewebstore.google.com/detail/applying-assistant/jemddgjafimcndlkmbjkpimnedbmccee" className="projects__link projects__link--primary" onClick={(e) => e.stopPropagation()}>View Live</a>
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
                An app that helps everyday drivers understand their car's warning lights. Features an interactive dashboard with urgency levels, repair cost estimates, and educational videos.
              </p>
              <div className="projects__project-tech">
                {renderTechStack("React, TypeScript, Tailwind CSS")}
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
                A typing speed game built with Python and Pygame, compiled to WebAssembly with Pygbag so it runs directly in the browser with no install needed.
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
        </div>
      </div>
    </div>
  );
}

export default Projects;
