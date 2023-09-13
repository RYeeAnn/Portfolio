import React from 'react';
import './About.scss';
import ryan from '../../assets/ryan.jpg';
import name from '../../assets/name.png';
import location from '../../assets/location.png';
import title from '../../assets/title.png';
import resume from '../../assets/resume.png';
import linkedin from '../../assets/linkedin.png';

function About() {

    const resumeLink = "https://drive.google.com/file/d/1YLNnL5thRIONX3Do5VcZj5_r0Nc7_8_H/view?usp=sharing";
    const linkedinLink = "https://www.linkedin.com/in/ryeean/";

    return (
        <div className="about" id="about">
            <div className="about__container">
                <div className="about__text-container">
                    <div className="about__inside-container">
                        <img className='about__image' src={ryan} alt="Ryan" />
                            <div className="about__information">
                                <div className="about__paragraphs">
                                    <p><img src={name} alt="Name" className="about__icons" />Ryan Yee</p>
                                    <p><img src={location} alt="Location" className="about__icons" />Vancouver, BC</p>
                                    <p><img src={title} alt="Title" className="about__icons" />Full-Stack Developer</p>
                                    <a href={resumeLink}>
                                    <p><img src={resume} alt="Resume" className="about__icons" />Resume</p>
                                    </a>
                                    <a href={linkedinLink}>
                                    <p><img src={linkedin} alt="Linkedin" className="about__icons" />Linkedin</p>
                                    </a>
                                </div>
                            </div>
                                <div className="about__me">
                                <h2 className="about__title">About Me</h2>
                                <div className="about__text">
                                    <p>Hello, I'm Ryan, an automotive enthusiast turned developer. My journey began with an intensive 12-week bootcamp at BrainStation, where I delved headfirst into the world of software development. The transition from the world of cars to code was an exhilarating ride, and it kickstarted my path as a developer. I'm passionate about both machines and technology, and I'm excited to merge these interests in my work.</p>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About