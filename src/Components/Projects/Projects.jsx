// Projects.jsx
import React from 'react';
import './Projects.scss';
import cruisin from '../../assets/cruisin.png';
import brainflix from '../../assets/brainflix.png';
import bandsite from '../../assets/bandsite.png';
import instock from '../../assets/instock.png'

function Projects() {
  return (
    <div className="projects">
      <div className="projects__container">
        <h2 className="projects__title" id="projects">Projects</h2>
        <div className="projects__card-container">
          {/* Card 1 */}
          <div className="projects__card">
            <a href="https://cruisin.netlify.app/"><img src={cruisin} alt="Project 1" className="projects__image" /></a>
            <div className="projects__info">
              <h3>Cruisin'</h3>
              <p>My first full-stack project I created with the purpose of helping driver's with their vehicle concerns.</p>
              <p>Deployed front-end using Netlify and back-end using Heroku.</p>
              <p><b>React, Express, MySQL</b></p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="projects__card">
            <a href="https://github.com/RYeeAnn/brainstation-BrainFlix"><img src={brainflix} alt="Project 2" className="projects__image" /></a>
            <div className="projects__info">
              <h3>BrainFlix</h3>
              <p>BrainFlix is a full-stack, fully responsive project built to mimic youtube during my enrollment in BrainStation's intensive web developement bootcamp.</p>
              <p><b>React, Express, JSON</b></p>
              <p><a href="https://github.com/RYeeAnn/brainstation-BrainFlix-api">Click here for the back-end repo</a></p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="projects__card">
            <img src={bandsite} alt="Project 3" className="projects__image" />
            <div className="projects__info">
              <h3>BandSite</h3>
              <p>BandSite is a fully responsive project built to mimic a fanpage for a mock band, built during my enrollment in BrainStation's intensive web development bootcamp.</p>
              <p><b>HTML, CSS, Vanilla JavaScript</b></p>
              <p><a href="https://github.com/RYeeAnn/brainstation-bandsite">Click here for github repo</a></p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="projects__card">
            <a href="https://github.com/RYeeAnn/brainstation-instock"><img src={instock} alt="Project 4" className="projects__image" /></a>
            <div className="projects__info">
              <h3>Instock</h3>
              <p>Instock is a full-stack, fully responsive collaborative project with a team of 3 developers built to mimic a warehouse and inventory tracker.</p>
              <p><b>React, Express, MySQL</b></p>
              <p><a href="https://github.com/RYeeAnn/brainstation-instock-server">Click here for the back-end repo</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
