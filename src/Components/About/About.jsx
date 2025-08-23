import React, { useState } from 'react';
import './About.scss';
import ryan from '../../assets/ryan.jpg';
import location from '../../assets/location.png';
import resume from '../../assets/resume.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import atriaLogo from '../../assets/atriaLogo.jpeg';
import codeninjasLogo from '../../assets/codeninjasLogo.jpeg';
import sniffandbarkLogo from '../../assets/sniffandbarkLogo.jpeg';

function About() {
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleExperienceClick = (experience) => {
        setSelectedExperience(experience);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedExperience(null);
    };

    // Experience data
    const experiences = [
        {
            id: 0,
            role: 'Software Developer',
            company: 'Atria Community',
            dates: 'May 2024 – Present',
            logo: atriaLogo,
            description: 'Led full-stack development of Townhall, a scalable volunteering platform connecting users to local community initiatives. Built 15+ RESTful APIs with Django, developed mobile-first UIs from Figma with Next.js, and shipped core features including onboarding, posts, comments, media uploads, and real-time chat using WebSockets and Redis.',
            techStack: ['Python', 'Django', 'React', 'Next.js', 'JavaScript', 'PostgreSQL', 'Redis', 'REST APIs', 'Websockets', 'Cloudinary'],
            link: 'https://atriacoop.netlify.app'
        },
        {
            id: 1,
            role: 'Code Instructor',
            company: 'Code Ninjas',
            dates: 'Sept 2024 – Present',
            logo: codeninjasLogo,
            description: 'Teach kids aged 7–14 the foundations of JavaScript, Unity, and game development through hands-on lessons in a high-energy, mentor-style environment.',
            techStack: ['JavaScript', 'Unity']
        },
        {
            id: 2,
            role: 'Web Developer',
            company: 'Sniff & Bark',
            dates: 'Feb 2024 – May 2024',
            logo: sniffandbarkLogo,
            description: 'Built custom features and internal tools for a Shopify-based e-commerce store, including solutions for order automation, dynamic pricing, and GDPR compliance, using JavaScript and XLSX integrations.',
            techStack: ['JavaScript', 'Shopify', 'XLSX']
        }
    ];

    const resumeLink = "https://drive.google.com/file/d/1SBqvBvS_H9eLMScSFnNsdtIoQGz8JRaB/view?usp=sharing";
    const linkedinLink = "https://www.linkedin.com/in/ryeean/";
    const githubLink = "https://github.com/RYeeAnn";

    return (
        <div className="about" id="about">
            <div className="about__container">
                {/* Profile Section - Left Side */}
                <div className="about__profile">
                    <div className="about__profile-image">
                        <img src={ryan} alt="Ryan Yee" />
                    </div>
                    
                    <div className="about__profile-info">
                        <h1 className="about__name">Ryan Yee</h1>
                        <h2 className="about__title">Software Developer</h2>
                        <p className="about__location">
                            <img src={location} alt="Location" />
                            Vancouver, BC
                        </p>
                        
                        <div className="about__links">
                            <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="about__link">
                                <img src={resume} alt="Resume" />
                                Resume
                            </a>
                            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="about__link">
                                <img src={linkedin} alt="LinkedIn" />
                                LinkedIn
                            </a>
                            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="about__link">
                                <img src={github} alt="GitHub" />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Experience Section - Right Side */}
                <div className="about__experience">
                    <h2 className="about__section-title">Experience</h2>
                    
                    <div className="experience__timeline">
                        {experiences.map((experience) => (
                            <div key={experience.id} className="experience__item" onClick={() => handleExperienceClick(experience)}>
                                <div className="experience__header">
                                    <div className="experience__logo">
                                        <img src={experience.logo} alt={experience.company} />
                                    </div>
                                    <div className="experience__details">
                                        <h3 className="experience__role">{experience.role}</h3>
                                        <p className="experience__company">{experience.company}</p>
                                        <p className="experience__dates">{experience.dates}</p>
                                    </div>
                                    <div className="experience__click-hint">
                                        <span>Click to view details</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Experience Modal */}
            {isModalOpen && selectedExperience && (
                <div className="experience-modal" onClick={closeModal}>
                    <div className="experience-modal__content" onClick={(e) => e.stopPropagation()}>
                        <button className="experience-modal__close" onClick={closeModal}>
                            <span>×</span>
                        </button>
                        
                        <div className="experience-modal__header">
                            <div className="experience-modal__logo">
                                <img src={selectedExperience.logo} alt={selectedExperience.company} />
                            </div>
                            <div className="experience-modal__info">
                                <h2 className="experience-modal__role">{selectedExperience.role}</h2>
                                <h3 className="experience-modal__company">{selectedExperience.company}</h3>
                                <p className="experience-modal__dates">{selectedExperience.dates}</p>
                            </div>
                        </div>
                        
                        <div className="experience-modal__body">
                            <p className="experience-modal__description">
                                {selectedExperience.link ? (
                                    <>
                                        {selectedExperience.description.split('Townhall')[0]}
                                        <a href={selectedExperience.link} target="_blank" rel="noopener noreferrer">Townhall</a>
                                        {selectedExperience.description.split('Townhall')[1]}
                                    </>
                                ) : (
                                    selectedExperience.description
                                )}
                            </p>
                            
                            <div className="experience-modal__tech">
                                <h4>Technologies & Skills</h4>
                                <div className="experience-modal__tech-tags">
                                    {selectedExperience.techStack.map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default About;
