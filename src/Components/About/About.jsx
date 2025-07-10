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
    const resumeLink = "https://drive.google.com/file/d/1SBqvBvS_H9eLMScSFnNsdtIoQGz8JRaB/view?usp=sharing";
    const linkedinLink = "https://www.linkedin.com/in/ryeean/";
    const githubLink = "https://github.com/RYeeAnn";

    return (
        <div className="about" id="about">
            <div className="about__container">

                <div className="about__left">
                    <img className="about__profile-pic" src={ryan} alt="Ryan Yee" />

                    <div className="about__info-line">
                        <img src={name} alt="Name" /> <span>Ryan Yee</span>
                    </div>
                    <div className="about__info-line">
                        <img src={location} alt="Location" /> <span>Vancouver, BC</span>
                    </div>
                    <div className="about__info-line">
                        <img src={title} alt="Title" /> <span>Software Developer</span>
                    </div>
                    <div className="about__info-line">
                        <img src={resume} alt="Resume" /> 
                        <a href={resumeLink} target="_blank" rel="noopener noreferrer">Resume (PDF)</a>
                    </div>
                    <div className="about__info-line">
                        <img src={linkedin} alt="Linkedin" />
                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                    <div className="about__info-line">
                        <img src={github} alt="Github" />
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>

                <div className="about__right">
                    <h2 className="about__title">Work Experience</h2>

                    <div className="about__job-card">
                        <p className="job-title">Atria Community — Software Developer</p>
                        <p className="job-dates">May 2024 – Present</p>
                        <p>
                            Led full-stack development of <a href="https://atriacoop.netlify.app" target="_blank" rel="noopener noreferrer">Townhall</a>, 
                            a scalable volunteering platform connecting users to local community initiatives. Built 15+ RESTful APIs with Django, 
                            developed mobile-first UIs from Figma with Next.js, and shipped core features including onboarding, posts, comments, 
                            media uploads, and real-time chat using WebSockets and Redis.
                        </p>
                    </div>

                    <div className="about__job-card">
                        <p className="job-title">Code Ninjas — Code Instructor</p>
                        <p className="job-dates">Sept 2024 – Present</p>
                        <p>
                            Teach kids aged 7–14 the foundations of JavaScript, Unity, and game development through hands-on lessons in a high-energy, mentor-style environment.
                        </p>
                    </div>

                    <div className="about__job-card">
                        <p className="job-title">Sniff & Bark — Web Developer</p>
                        <p className="job-dates">Feb 2024 – May 2024</p>
                        <p>
                            Built custom features and internal tools for a Shopify-based e-commerce store, including solutions for order automation, dynamic pricing, and GDPR compliance, using JavaScript and XLSX integrations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
