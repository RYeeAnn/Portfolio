import React, { useState } from 'react';
import './About.scss';
import ryan from '../../assets/ryan.jpg';
import name from '../../assets/name.png';
import location from '../../assets/location.png';
import title from '../../assets/title.png';
import resume from '../../assets/resume.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import atriaLogo from '../../assets/atriaLogo.jpeg';
import codeninjasLogo from '../../assets/codeninjasLogo.jpeg';
import sniffandbarkLogo from '../../assets/sniffandbarkLogo.jpeg';

function About() {
    const [openIndex, setOpenIndex] = useState(null);
    const handleToggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    // Placeholder tech stack logos
    const techStacks = {
        atria: [
            'Python', 'Django', 'React', 'Next.js', 'JavaScript', 'PostgreSQL', 'Redis', 'REST APIs', 'Websockets', 'Cloudinary'
        ],
        codeninjas: [
            'JavaScript', 'Unity'
        ],
        sniffandbark: [
            'JavaScript', 'Shopify', 'XLSX'
        ],
    };

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
                    <h2 className="about__title">Experience</h2>
                    <div className="timeline">
                        {/* Atria Community */}
                        <div className={`timeline__item${openIndex === 0 ? ' timeline__item--open' : ''}`}>
                            <div className="timeline__icon">
                                <img src={atriaLogo} alt="Atria Community Logo" className="timeline__logo-img" />
                            </div>
                            <div className="timeline__content about__job-card" onClick={() => handleToggle(0)} style={{cursor:'pointer'}}>
                                <div className="timeline__header">
                                    <span className="job-title">Software Developer</span>
                                    <span className="timeline__company">@ Atria Community</span>
                                    <span className="job-dates">May 2024 – Present</span>
                                    <span className={`timeline__chevron${openIndex === 0 ? ' open' : ''}`}>▼</span>
                                </div>
                                {openIndex === 0 && (
                                    <div className="timeline__dropdown">
                                        <p>
                                            Led full-stack development of <a href="https://atriacoop.netlify.app" target="_blank" rel="noopener noreferrer">Townhall</a>, a scalable volunteering platform connecting users to local community initiatives. Built 15+ RESTful APIs with Django, developed mobile-first UIs from Figma with Next.js, and shipped core features including onboarding, posts, comments, media uploads, and real-time chat using WebSockets and Redis.
                                        </p>
                                        <div className="timeline__techstack">
                                            {techStacks.atria.map((tech) => (
                                                <span key={tech} className="timeline__tech-pill">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Code Ninjas */}
                        <div className={`timeline__item${openIndex === 1 ? ' timeline__item--open' : ''}`}>
                            <div className="timeline__icon">
                                <img src={codeninjasLogo} alt="Code Ninjas Logo" className="timeline__logo-img" />
                            </div>
                            <div className="timeline__content about__job-card" onClick={() => handleToggle(1)} style={{cursor:'pointer'}}>
                                <div className="timeline__header">
                                    <span className="job-title">Code Instructor</span>
                                    <span className="timeline__company">@ Code Ninjas</span>
                                    <span className="job-dates">Sept 2024 – Present</span>
                                    <span className={`timeline__chevron${openIndex === 1 ? ' open' : ''}`}>▼</span>
                                </div>
                                {openIndex === 1 && (
                                    <div className="timeline__dropdown">
                                        <p>
                                            Teach kids aged 7–14 the foundations of JavaScript, Unity, and game development through hands-on lessons in a high-energy, mentor-style environment.
                                        </p>
                                        <div className="timeline__techstack">
                                            {techStacks.codeninjas.map((tech) => (
                                                <span key={tech} className="timeline__tech-pill">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Sniff & Bark */}
                        <div className={`timeline__item${openIndex === 2 ? ' timeline__item--open' : ''}`}>
                            <div className="timeline__icon">
                                <img src={sniffandbarkLogo} alt="Sniff & Bark Logo" className="timeline__logo-img" />
                            </div>
                            <div className="timeline__content about__job-card" onClick={() => handleToggle(2)} style={{cursor:'pointer'}}>
                                <div className="timeline__header">
                                    <span className="job-title">Web Developer</span>
                                    <span className="timeline__company">@ Sniff & Bark</span>
                                    <span className="job-dates">Feb 2024 – May 2024</span>
                                    <span className={`timeline__chevron${openIndex === 2 ? ' open' : ''}`}>▼</span>
                                </div>
                                {openIndex === 2 && (
                                    <div className="timeline__dropdown">
                                        <p>
                                            Built custom features and internal tools for a Shopify-based e-commerce store, including solutions for order automation, dynamic pricing, and GDPR compliance, using JavaScript and XLSX integrations.
                                        </p>
                                        <div className="timeline__techstack">
                                            {techStacks.sniffandbark.map((tech) => (
                                                <span key={tech} className="timeline__tech-pill">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
