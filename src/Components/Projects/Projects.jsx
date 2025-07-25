// Projects.jsx
import React from 'react';
import './Projects.scss';
import cruisin from '../../assets/cruisin.png';
import cruisinVideo from '../../assets/cruisinVideo.mp4'
// import brainflix from '../../assets/brainflix.png';
// import instock from '../../assets/instock.png';
import shnakeGif from '../../assets/shnake-gif.gif';
import simonSays from '../../assets/simon-says.gif';
import DinoType from '../../assets/DynoType.png';
import Speedie from '../../assets/speedie.png'
import Atria from '../../assets/Atria.png'

function renderTechStack(techString) {
  return techString.split(',').map(tech => (
    <span className="projects__tech-pill" key={tech.trim()}>{tech.trim()}</span>
  ));
}

function Projects() {
  return (
    <div className="projects">
      <div className="projects__container">
        <h2 className="projects__title" id="projects">Projects</h2>
        <div className="projects__card-container">

        <div className="projects__card">
            <img src={Atria} alt="Project" className="projects__image" />
            <div className="projects__info">
              <h3>Townhall</h3>
              <p>A full-stack community platform built for volunteer collaboration, featuring user onboarding, post/comment creation, media uploads, and more. I led API development, frontend UI implementation from Figma, and helped architect the backend using Django with a layered structure.</p>
              <p>{renderTechStack("Python, Django, Django Channels, React/Next.js, JavaScript, REST APIs, PostgreSQL/SQLite, Render, WebSockets, Redis, Netlify, Cloudinary")}</p>
              <p><a href="https://atriacoop.netlify.app/">Website</a></p>
            </div>
          </div>

        <div className="projects__card">
            <img src={Speedie} alt="Project" className="projects__image" />
            <div className="projects__info">
              <h3>Speedie</h3>
              <p>Speedie is an app designed to help everyday drivers understand their car better. It features an interactive dashboard that explains vehicle warning lights with urgency levels, repair advice, and educational videos. Speedie also includes a playful radial menu that lays the foundation for future tools like a service scheduler, AI mechanic assistant, and mileage tracker.</p>
              <p>{renderTechStack("React, TypeScript, Tailwind")}</p>
              <p><a href="https://speedie.vercel.app/">Website</a></p>
            </div>
          </div>

        <div className="projects__card">
            <img src={DinoType} alt="Project" className="projects__image" />
            <div className="projects__info">
              <h3>DinoType</h3>
              <p>Currently in the process of building a type racer game for fun!</p>
              <p>{renderTechStack("Python, Pygame")}</p>
              <p><a href="https://github.com/RYeeAnn/dinotype">Click here for github repo</a></p>
            </div>
          </div>

          {/* <div className="projects__card">
            <img src={myPR} alt="Project" className="projects__image" />
            <div className="projects__info">
              <h3>MyPR</h3>
              <p>A fitness application aimed at assisting users in tracking their workouts and personal records (PRs). With personalized user profiles, workout logging, the capability to export logs to Excel, and interactive calendar functionality to enhance task management. The application provides a seamless experience for users to effectively monitor their fitness progress alongside managing their daily routines and schedules.</p>
              <p>{renderTechStack("React, JavaScript, PostgreSQL, Node.js, Auth0")}</p>
              <p><a href="https://github.com/RYeeAnn/MyPR">Click here for github repo</a></p>
            </div>
          </div> */}

          {/* <div className="projects__card">
            <img src={ApplyD} alt="Project" className="projects__image" />
            <div className="projects__info">
              <h3>ApplyD</h3>
              <p>Realizing I hadn't been keeping track of the jobs I've applied to, I decided to create this application specifically for managing the companies to which I've applied. Users must log in to access the dashboard, where they can seamlessly log their job applications. They'll input essential details like the company name, position applied for, and the current application status. Once logged in, users can view real-time data visualized in a bar graph using Chart.js, offering them a comprehensive overview of their application history.</p>
              <p>{renderTechStack("React, TypeScript, PostgreSQL, Node.js, Auth0")}</p>
              <p><a href="https://github.com/RYeeAnn/applyd">Click here for github repo</a></p>
            </div>
          </div> */}

          <div className="projects__card">
          <video controls className="projects__image" poster={cruisin}>
            <source src={cruisinVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            <div className="projects__info">
              <a href="https://cruisin.netlify.app/"><h3>Cruisin'</h3></a>
              <p>My first full-stack project I created with the purpose of helping driver's with their vehicle concerns.</p>
              <p>Deployed front-end using Netlify and back-end using Heroku.</p>
              <p>{renderTechStack("React, Express, Sass, MySQL")}</p>
              <p><a href="https://github.com/RYeeAnn/brainstation-capstone">Click here for front-end repo</a></p>
              <p><a href="https://github.com/RYeeAnn/brainstation-capstone-server">Click here for back-end repo</a></p>
            </div>
          </div>

          {/* <div className="projects__card">
            <img src={awsProject} alt="Project" className="projects__image" />
            <div className="projects__info">
              <h3>RyanTalks</h3>
              <p>Enhancing the learning experience with AWS services integration for authentication and data handling. It features a user-friendly interface with secure sign-in capabilities and an engaging chat environment that echoes messages back to the sender for interaction testing.</p>
              <p>{renderTechStack("AWS, JavaScript, React")}</p>
              <p><a href="https://github.com/RYeeAnn/Ryan-Talks">Click here for github repo</a></p>
            </div>
          </div> */}

          <div className="projects__card">
            <img src={shnakeGif} alt="Project" className="projects__image" />
            <div className="projects__info">
              <h3>Shnake</h3>
              <p>A simple snake game inspired by classic games that was played as a kid. Created and coded using Javascript and React.js.</p>
              <p>This is a project created to challenged my self with the purpose of self-learning. This is my first ever "game" I have coded and wanted to start out with a simple game that everyone knows.</p>
              <p>{renderTechStack("JavaScript, React, Sass")}</p>
              <p><a href="https://github.com/RYeeAnn/Shnake">Click here for github repo</a></p>
            </div>
          </div>

          <div className="projects__card">
            <img src={simonSays} alt="Project" className="projects__image" />
            <div className="projects__info">
              <h3>Simon Says</h3>
              <p>A simple and classic game to test your short-term memory skills.</p>
              <p>{renderTechStack("JavaScript, React, Sass")}</p>
              <p><a href="https://github.com/RYeeAnn/simon-says">Click here for github repo</a></p>
            </div>
          </div>

          {/* <div className="projects__card">
            <img src={brainflix} alt="Project" className="projects__image" />
            <div className="projects__info">
              <h3>BrainFlix</h3>
              <p>BrainFlix is a full-stack, fully responsive project built to mimic youtube.</p>
              <p>{renderTechStack("React, Express, Sass, JSON")}</p>
              <p><a href="https://github.com/RYeeAnn/brainstation-BrainFlix">Click here for the front-end repo</a></p>
              <p><a href="https://github.com/RYeeAnn/brainstation-BrainFlix-api">Click here for the back-end repo</a></p>
            </div>
          </div> */}

          {/* <div className="projects__card">
            <img src={bandsite} alt="Project" className="projects__image" />
            <div className="projects__info">
              <h3>BandSite</h3>
              <p>BandSite is a fully responsive project built to mimic a fanpage for a mock band.</p>
              <p><b>HTML, CSS, Vanilla JavaScript</b></p>
              <p><a href="https://github.com/RYeeAnn/brainstation-bandsite">Click here for github repo</a></p>
            </div>
          </div> */}

          {/* <div className="projects__card">
            <img src={instock} alt="Project" className="projects__image" />
            <div className="projects__info">
              <h3>Instock</h3>
              <p>Instock is a full-stack, fully responsive collaborative project with a team of 3 developers built to mimic a warehouse and inventory tracker.</p>
              <p><b>React, Express, MySQL</b></p>
              <p><a href="https://github.com/RYeeAnn/brainstation-instock">Click here for the front-end repo</a></p>
              <p><a href="https://github.com/RYeeAnn/brainstation-instock-server">Click here for the back-end repo</a></p>
            </div>
          </div>   */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
