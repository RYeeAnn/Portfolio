import React, { useEffect } from 'react';
import './AboutPage.scss';
import ryan2 from '../../assets/ryan2.jpg';

function AboutPage() {
    useEffect(() => {
        // Always scroll to top when About page loads
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            <div className="about-page__container">
                <div className="about-page__content">
                    <h1 className="about-page__title">About Me</h1>
                    
                    <div className="about-page__main">
                        <div className="about-page__image">
                            <img src={ryan2} alt="Ryan Yee" />
                        </div>
                        
                        <div className="about-page__text">
                            <div className="about-page__story">
                                <p>
                                    I'm a Full Stack Developer with experience building SaaS platforms, AI-powered features, and scalable web applications. My work spans React/TypeScript frontends, Express.js and PostgreSQL backends, and AI integrations using OpenAI GPT-4 and Azure AI Search.
                                </p>

                                <p>
                                    My path to software wasn't linear. I studied Electrical Engineering at UBC, worked in the automotive industry, then made the jump through BrainStation's intensive bootcamp.
                                </p>

                                <p>
                                    I build things that solve real problems. A Chrome extension that cuts job applications from 20 minutes to 5. A booking website for my mom's hair salon. A volunteer platform with real-time chat. I care about the details, both in the architecture and the user experience.
                                </p>

                                <p>
                                    Outside of work, I'm either on a volleyball court, exploring Vancouver's coffee scene, or tinkering with my car.
                                </p>
                            </div>

                            <div className="about-page__location">
                                <span>Vancouver, BC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
