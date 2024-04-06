// Projects.jsx
import React from 'react';
import './Projects.scss';
import cruisin from '../../assets/cruisin.png';
import cruisinVideo from '../../assets/cruisinVideo.mp4'
import brainflix from '../../assets/brainflix.png';
import bandsite from '../../assets/bandsite.png';
import instock from '../../assets/instock.png';
import shnakeGif from '../../assets/shnake-gif.gif';
import simonSays from '../../assets/simon-says.gif';
import theCozyCorner from '../../assets/thecozycorner.png';
import awsProject from '../../assets/RyanTalks.gif';
import myPR from '../../assets/MyPR.png';

function Projects() {
  return (
    <div className="projects">
      <div className="projects__container">
        <h2 className="projects__title" id="projects">Projects</h2>
        <div className="projects__card-container">

          {/* Card 1 */}
          <div className="projects__card">
          <video controls className="projects__image" poster={cruisin}>
            <source src={cruisinVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            <div className="projects__info">
              <a href="https://cruisin.netlify.app/"><h3>Cruisin'</h3></a>
              <p>My first full-stack project I created with the purpose of helping driver's with their vehicle concerns.</p>
              <p>Deployed front-end using Netlify and back-end using Heroku.</p>
              <p><b>React, Express, Sass, MySQL</b></p>
              <p><a href="https://github.com/RYeeAnn/brainstation-capstone">Click here for front-end repo</a></p>
              <p><a href="https://github.com/RYeeAnn/brainstation-capstone-server">Click here for back-end repo</a></p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="projects__card">
            <img src={myPR} alt="Project 2" className="projects__image" />
            <div className="projects__info">
              <h3>MyPR</h3>
              <p>Sign into your account and start logging in your personal records from your workouts.</p>
              <p><b>React, JavaScript, PostgreSQL, Node.js</b></p>
              <p><a href="https://github.com/RYeeAnn/MyPR">Click here for github repo</a></p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="projects__card">
            <img src={theCozyCorner} alt="Project 3" className="projects__image" />
            <div className="projects__info">
              <h3>The Cozy Corner</h3>
              <p>The Cozy Corner is a website designed to feel just like your favorite neighborhood coffee shop. It's a welcoming online spot where customers can check out a handpicked selection of delicious coffees, homemade pastries, and tasty snacks.</p>
              <p><b>HTML, CSS, Python, Flask, MongolDB, JavaScript</b></p>
              <p><a href="https://github.com/RYeeAnn/Ryan-Cafe">Click here for github repo</a></p>
            </div>
          </div>

          {/* Card 3 */}
          {/* <div className="projects__card">
            <img src={awsProject} alt="Project 3" className="projects__image" />
            <div className="projects__info">
              <h3>RyanTalks</h3>
              <p>Enhancing the learning experience with AWS services integration for authentication and data handling. It features a user-friendly interface with secure sign-in capabilities and an engaging chat environment that echoes messages back to the sender for interaction testing.</p>
              <p><b>AWS, JavaScript, React</b></p>
              <p><a href="https://github.com/RYeeAnn/Ryan-Talks">Click here for github repo</a></p>
            </div>
          </div> */}

          {/* Card 4 */}
          <div className="projects__card">
            <img src={shnakeGif} alt="Project 4" className="projects__image" />
            <div className="projects__info">
              <h3>Shnake</h3>
              <p>A simple snake game inspired by classic games that was played as a kid. Created and coded using Javascript and React.js.</p>
              <p>This is a project created to challenged my self with the purpose of self-learning. This is my first ever "game" I have coded and wanted to start out with a simple game that everyone knows.</p>
              <p><b>JavaScript, React, Sass</b></p>
              <p><a href="https://github.com/RYeeAnn/Shnake">Click here for github repo</a></p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="projects__card">
            <img src={simonSays} alt="Project 5" className="projects__image" />
            <div className="projects__info">
              <h3>Simon Says</h3>
              <p>A simple and classic game to test your short-term memory skills.</p>
              <p><b>JavaScript, React, Sass</b></p>
              <p><a href="https://github.com/RYeeAnn/simon-says">Click here for github repo</a></p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="projects__card">
            <img src={brainflix} alt="Project 6" className="projects__image" />
            <div className="projects__info">
              <h3>BrainFlix</h3>
              <p>BrainFlix is a full-stack, fully responsive project built to mimic youtube.</p>
              <p><b>React, Express, Sass, JSON</b></p>
              <p><a href="https://github.com/RYeeAnn/brainstation-BrainFlix">Click here for the front-end repo</a></p>
              <p><a href="https://github.com/RYeeAnn/brainstation-BrainFlix-api">Click here for the back-end repo</a></p>
            </div>
          </div>

          {/* Card 7 */}
          {/* <div className="projects__card">
            <img src={bandsite} alt="Project 7" className="projects__image" />
            <div className="projects__info">
              <h3>BandSite</h3>
              <p>BandSite is a fully responsive project built to mimic a fanpage for a mock band.</p>
              <p><b>HTML, CSS, Vanilla JavaScript</b></p>
              <p><a href="https://github.com/RYeeAnn/brainstation-bandsite">Click here for github repo</a></p>
            </div>
          </div> */}

          {/* Card 7 */}
          <div className="projects__card">
            <img src={instock} alt="Project 7" className="projects__image" />
            <div className="projects__info">
              <h3>Instock</h3>
              <p>Instock is a full-stack, fully responsive collaborative project with a team of 3 developers built to mimic a warehouse and inventory tracker.</p>
              <p><b>React, Express, MySQL</b></p>
              <p><a href="https://github.com/RYeeAnn/brainstation-instock">Click here for the front-end repo</a></p>
              <p><a href="https://github.com/RYeeAnn/brainstation-instock-server">Click here for the back-end repo</a></p>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Projects;
