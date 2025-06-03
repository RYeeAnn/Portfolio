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

    const resumeLink = "https://drive.google.com/file/d/1WmKGiLJ194f2dC2XvqkPaCvsA2UAlauE/view?usp=sharing";
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
                        <div className="about__experience">
                            <h2 className="about__title">Work Experience</h2>
                            <div className="about__text">
                                <p><strong>Atria Community</strong> — <em>Software Developer (May 2024 – Present)</em></p>
                                <p>
                                Led full-stack development of <a href="https://atriacoop.netlify.app" target="_blank" rel="noopener noreferrer">Townhall</a>, a scalable volunteering platform connecting users to local community initiatives. 
                                Built 15+ RESTful APIs with Django, developed mobile-first UIs from Figma with Next.js, and shipped core features including onboarding, posts, comments, media uploads, and real-time chat using WebSockets and Redis.
                                </p>

                                <p><strong>Code Ninjas</strong> — <em>Code Instructor (Sept 2024 – Present)</em></p>
                                <p>Teach kids aged 7–14 the foundations of JavaScript, Unity, and game development through hands-on lessons in a high-energy, mentor-style environment.</p>

                                <p><strong>Sniff & Bark</strong> — <em>Web Developer (Feb 2024 – May 2024)</em></p>
                                <p>Improved Shopify site performance by 50% and built tools for order automation, pricing logic, and GDPR compliance using JavaScript and XLSX exports.</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
