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
                A professional website built for my mother's private hair salon business. Features online booking, service showcase, and a modern interface to help transition from manual notebook scheduling to a professional digital presence.
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
              <img src={SpeedieFigma} alt="Speedie App" />
            </div>
            <div className="projects__project-content">
              <div className="projects__project-header">
                <h3 className="projects__project-title">Speedie</h3>
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
                A type racer game built with Pygame and hosted on GitHub Pages using Pygbag. Players can test their typing speed in an interactive dinosaur-themed interface. Simply click the link to play directly in your browser!
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
                A simple snake game inspired by classic games that was played as a kid. Created and coded using Javascript and React.js. My first ever "game" I have coded.
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
