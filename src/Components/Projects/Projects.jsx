// Projects.jsx
import React from 'react';
import './Projects.scss';
import cruisin from '../../assets/cruisin.png'; // Import your project images

function Projects() {
  return (
    <div className="projects">
      <div className="projects__container">
        <h2 className="projects__title" id="projects">Projects</h2>
        <div className="projects__card-container">
          {/* Card 1 */}
          <div className="projects__card">
            <img src={cruisin} alt="Project 1" className="projects__image" />
            <div className="projects__info">
              <h3>Cruisin'</h3>
              <p>My first full-stack project I created using React, Express.js, Node.js and MySQL.</p>
              <p>Deployed front-end using Netlify and back-end using Heroku</p>
              <p><a href="https://cruisin.netlify.app/">Click here</a></p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="projects__card">
            <img src={cruisin} alt="Project 2" className="projects__image" />
            <div className="projects__info">
              <h3>Project 2</h3>
              <p>Description of Project 2.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="projects__card">
            <img src={cruisin} alt="Project 3" className="projects__image" />
            <div className="projects__info">
              <h3>Project 3</h3>
              <p>Description of Project 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
