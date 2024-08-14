import React from 'react';
import './About.scss';
import ryan from '../../assets/ryan.jpg';
import name from '../../assets/name.png';
import location from '../../assets/location.png';
import title from '../../assets/title.png';
import resume from '../../assets/resume.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

function About() {
    

    const resumeLink = "https://drive.google.com/file/d/1xhBA6OaxKkVJsRNp6iT9AYymrcOqiXHq/view?usp=sharing";
    const linkedinLink = "https://www.linkedin.com/in/ryeean/";
    const githubLink = "https://github.com/RYeeAnn";

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
                                    <p><img src={title} alt="Title" className="about__icons" />Software Developer</p>
                                    <a href={resumeLink}>
                                    <p><img src={resume} alt="Resume" className="about__icons" /><b>Resume</b><i>Click me!</i></p>
                                    </a>
                                    <a href={linkedinLink}>
                                    <p><img src={linkedin} alt="Linkedin" className="about__icons" /><b>Linkedin</b></p>
                                    </a>
                                    <a href={githubLink}>
                                        <p><img src={github} alt="Github" className="about__icons" /><b>Github</b></p>
                                    </a>
                                </div>
                            </div>
                                <div className="about__me">
                                <h2 className="about__title">About Me</h2>
                                <div className="about__text">
                                    {/* <p>Reminiscing back to the '90s brings memories of CD-based gaming consoles, dial-up internet, and the era of Windows 95. It was a time when technology was on the rise, poised to change the world forever. As a child, I was exposed to the wonders of dial-up internet, Game Boys, and flip phones. Needless to say, I was in love with technology. I spent countless hours in front of the computer, captivated by the screen and all it had to offer.</p> */}
                                    {/* <p>However, my fascination wasn't limited to technology alone; I had another passion—cars. Growing up, I was drawn to automobiles, and I chose a career path deeply intertwined with the world of cars. Just as cars were evolving, so was technology. The days of waiting for the internet to dial up were long gone, games had evolved significantly, and we transitioned from simple flip phones to smartphones that have become indispensable in our lives.</p> */}
                                    <p>My journey began by dipping my toes into self-learning HTML and CSS. Eventually, I committed all my time and energy to a 12-week intensive software development bootcamp at BrainStation in the summer of 2023. Along the way, I've grown and evolved, but I'm fully aware that this is just the beginning. The learning will never stop, and I couldn't be more excited about it. My journey as a developer has only just begun, and I'm eager to see where it leads.</p>
                                    <p>Growing up, I was drawn to automobiles, and I chose a career path deeply intertwined with the world of cars. As much as I love cars, I realized that I wanted to keep them as a beloved hobby while finding myself on a new journey as a developer. Initially, I hesitated, thinking it might be too late for me to transition into a new career after dedicating so much time to something else. For years, fear held me back, and I kept pushing aside my dreams. However, I finally mustered the courage to pursue my true passion.</p>
                                    <a href="/blog"><p className="about__blog"><b>Check out my blog!</b></p></a>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About