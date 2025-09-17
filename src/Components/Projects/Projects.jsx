// Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';
import cruisin from '../../assets/cruisin.png';
import shnakeGif from '../../assets/shnake-gif.gif';
import simonSays from '../../assets/simon-says.gif';
import DinoType from '../../assets/DynoType.png';
import Speedie from '../../assets/speedie.png'
import Atria from '../../assets/Atria.png'
import ApplyingAssistant from '../../assets/ApplyingAssistant.gif'

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
          {/* Applying Assistant Project */}
          <Link to="/project/applying-assistant" className="projects__project projects__project--linkable">
            <div className="projects__project-image projects__project-image--extension">
              <img src={ApplyingAssistant} alt="Applying Assistant Chrome Extension" />
            </div>
            <div className="projects__project-content">
              <div className="projects__project-header">
                <h3 className="projects__project-title">Applying Assistant</h3>
                <div className="projects__project-tags">
                  <span className="projects__tag projects__tag--extension">Extension</span>
                  <span className="projects__tag projects__tag--frontend">Frontend</span>
                </div>
              </div>
              <p className="projects__project-description">
                A Chrome extension that automates job application form filling with smart field detection and one-click professional templates. Reduces application time from 20+ minutes to 3-5 minutes.
              </p>
              <div className="projects__project-tech">
                {renderTechStack("JavaScript, Chrome Extensions API, HTML, CSS")}
              </div>
              <div className="projects__project-links">
                <span className="projects__link projects__link--secondary">View Details →</span>
              </div>
            </div>
          </Link>

          {/* Townhall Project */}
          <Link to="/project/townhall" className="projects__project projects__project--linkable">
            <div className="projects__project-image">
              <img src={Atria} alt="Atria Townhall Platform" />
            </div>
            <div className="projects__project-content">
              <div className="projects__project-header">
                <h3 className="projects__project-title">Townhall</h3>
                <div className="projects__project-tags">
                  <span className="projects__tag projects__tag--fullstack">Full Stack</span>
                  <span className="projects__tag projects__tag--ux">UX Research</span>
                </div>
              </div>
              <p className="projects__project-description">
                A full-stack community platform built for volunteer collaboration, featuring user onboarding, post/comment creation, media uploads, and more. I led API development, frontend UI implementation from Figma, and helped architect the backend using Django with a layered structure.
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
              <img src={Speedie} alt="Speedie App" />
            </div>
            <div className="projects__project-content">
              <div className="projects__project-header">
                <h3 className="projects__project-title">Speedie</h3>
                <div className="projects__project-tags">
                  <span className="projects__tag projects__tag--frontend">Frontend</span>
                  <span className="projects__tag projects__tag--ux">UX Design</span>
                </div>
              </div>
              <p className="projects__project-description">
                Speedie is an app designed to help everyday drivers understand their car better. It features an interactive dashboard that explains vehicle warning lights with urgency levels, repair advice, and educational videos.
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

          {/* Cruisin Project */}
          <Link to="/project/cruisin" className="projects__project projects__project--linkable">
            <div className="projects__project-image">
                <img src={cruisin} alt="cruisin" />
            </div>
            <div className="projects__project-content">
              <div className="projects__project-header">
                <h3 className="projects__project-title">Cruisin'</h3>
                <div className="projects__project-tags">
                  <span className="projects__tag projects__tag--fullstack">Full Stack</span>
                  <span className="projects__tag projects__tag--first">First Project</span>
                </div>
              </div>
              <p className="projects__project-description">
                My first full-stack project created with the purpose of helping drivers with their vehicle concerns. Deployed front-end using Netlify and back-end using Heroku.
              </p>
              <div className="projects__project-tech">
                {renderTechStack("React, Express, Sass, MySQL")}
              </div>
              <div className="projects__project-links">
                <a href="https://cruisin.netlify.app/" className="projects__link projects__link--primary" onClick={(e) => e.stopPropagation()}>View Live</a>
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
                <div className="projects__project-tags">
                  <span className="projects__tag projects__tag--game">Game Dev</span>
                  <span className="projects__tag projects__tag--learning">Learning</span>
                </div>
              </div>
              <p className="projects__project-description">
                Currently in the process of building a type racer game for fun! A personal project to explore game development and Python programming.
              </p>
              <div className="projects__project-tech">
                {renderTechStack("Python, Pygame")}
              </div>
              <div className="projects__project-links">
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
                <div className="projects__project-tags">
                  <span className="projects__tag projects__tag--game">Game Dev</span>
                  <span className="projects__tag projects__tag--first">First Game</span>
                </div>
              </div>
              <p className="projects__project-description">
                A simple snake game inspired by classic games that was played as a kid. Created and coded using Javascript and React.js. My first ever "game" I have coded.
              </p>
              <div className="projects__project-tech">
                {renderTechStack("JavaScript, React, Sass")}
              </div>
              <div className="projects__project-links">
                <span className="projects__link projects__link--secondary">View Details →</span>
              </div>
            </div>
          </Link>

          {/* Simon Says Project */}
          <Link to="/project/simon-says" className="projects__project projects__project--linkable">
            <div className="projects__project-image">
              <img src={simonSays} alt="Simon Says Game" />
            </div>
            <div className="projects__project-content">
              <div className="projects__project-header">
                <h3 className="projects__project-title">Simon Says</h3>
                <div className="projects__project-tags">
                  <span className="projects__tag projects__tag--game">Game Dev</span>
                  <span className="projects__tag projects__tag--classic">Classic</span>
                </div>
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
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
