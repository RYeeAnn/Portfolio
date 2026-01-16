import React, { useState } from 'react';
import './About.scss';
import dnaLogo from '../../assets/dnaLogo.png';
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

    // Experience data with full details for modal
    const experiences = [
        {
            id: 0,
            role: 'Full Stack Developer',
            company: 'Dynamic Needs Analysis',
            dates: 'Nov 2025 – Present',
            logo: dnaLogo,
            description: 'Full-stack SaaS financial planning platform with React, TypeScript, and Azure PostgreSQL',
            fullDescription: 'Contributing to a full-stack SaaS financial planning platform using React, TypeScript, Express.js, and Azure PostgreSQL, spanning 30+ REST API endpoints and 500+ UI components used by financial advisors. Collaborated on Helix, an AI conversational assistant leveraging OpenAI GPT-4 and Azure AI Search (RAG) for semantic retrieval and context-aware conversations. Implemented internationalization (i18n) across 3 languages. Contributed to a shared design system with Tailwind CSS and Radix UI across 60+ components. Supported security hardening with JWT auth and Zod validation.',
            techStack: ['React', 'TypeScript', 'Express.js', 'Azure PostgreSQL', 'OpenAI GPT-4', 'Azure AI Search', 'Tailwind CSS', 'Radix UI', 'i18next', 'Zod', 'JWT', 'Webflow']
        },
        {
            id: 1,
            role: 'Software Developer',
            company: 'Atria Community',
            dates: 'May 2024 – Nov 2025',
            logo: atriaLogo,
            description: 'Full-stack development of community platform with Django, React, and PostgreSQL',
            fullDescription: 'Led full-stack development of Townhall, a scalable volunteering platform connecting users to local community initiatives. Built 15+ RESTful APIs with Django, developed mobile-first UIs from Figma with Next.js, and shipped core features including onboarding, posts, comments, media uploads, and real-time chat using WebSockets and Redis.',
            techStack: ['Python', 'Django', 'React', 'Next.js', 'JavaScript', 'PostgreSQL', 'Redis', 'REST APIs', 'WebSockets', 'Cloudinary'],
            link: 'https://atriacoop.netlify.app'
        },
        {
            id: 2,
            role: 'Code Instructor',
            company: 'Code Ninjas',
            dates: 'Sept 2024 – Present',
            logo: codeninjasLogo,
            description: 'Teaching JavaScript and Unity to kids aged 7-14',
            fullDescription: 'Teach kids aged 7–14 the foundations of JavaScript, Unity, and game development through hands-on lessons in a high-energy, mentor-style environment.',
            techStack: ['JavaScript', 'Unity']
        },
        {
            id: 3,
            role: 'Web Developer',
            company: 'Sniff & Bark',
            dates: 'Feb 2024 – May 2024',
            logo: sniffandbarkLogo,
            description: 'Built custom Shopify features and automation tools',
            fullDescription: 'Built custom features and internal tools for a Shopify-based e-commerce store, including solutions for order automation, dynamic pricing, and GDPR compliance, using JavaScript and XLSX integrations.',
            techStack: ['JavaScript', 'Shopify', 'XLSX']
        }
    ];

    return (
        <div className="about" id="about">
            <div className="about__container">
                <div className="about__header">
                    <h2 className="about__title">Experience</h2>
                    <p className="about__subtitle">Professional journey and key roles</p>
                </div>
                
                <div className="about__content">
                    <div className="about__experience">
                        {experiences.map((experience) => (
                            <div key={experience.id} className="experience__item" onClick={() => handleExperienceClick(experience)}>
                                <div className="experience__content">
                                    <div className="experience__header">
                                        <div className="experience__logo">
                                            <img src={experience.logo} alt={experience.company} />
                                        </div>
                                        <div className="experience__details">
                                            <h3 className="experience__role">{experience.role}</h3>
                                            <span className="experience__dates">{experience.dates}</span>
                                        </div>
                                    </div>
                                    <p className="experience__company">{experience.company}</p>
                                    <p className="experience__description">{experience.description}</p>
                                    <div className="experience__click-hint">
                                        <span>Click to view more details</span>
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
                                        {selectedExperience.fullDescription.split('Townhall')[0]}
                                        <a href={selectedExperience.link} target="_blank" rel="noopener noreferrer">Townhall</a>
                                        {selectedExperience.fullDescription.split('Townhall')[1]}
                                    </>
                                ) : (
                                    selectedExperience.fullDescription
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
