import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.scss';

function AboutPage() {
    return (
        <div className="about-page">
            <div className="about-page__container">
                <div className="about-page__header">
                    <Link to="/" className="about-page__back-link">← Back to Portfolio</Link>
                    <h1 className="about-page__title">Meet the Developer</h1>
                </div>

                <div className="about-page__content">
                    <div className="about-page__story">
                        <p>
                            Hey there! I'm Ryan, a software developer based in Vancouver, BC. My path into tech wasn't exactly the typical route. I studied Electrical Engineering at UBC and worked in the automotive industry before jumping into software. That switch happened after I did a 12-week bootcamp at BrainStation, and that's what got me started on this path.
                        </p>
                        
                        <p>
                            Since then I've built stuff like a community platform for volunteers, tools that help drivers understand their cars better, and some fun learning games. What I really love is creating things that people actually find useful and enjoy using.
                        </p>
                        
                        <p>
                            In my spare time, you'll find me checking out new coffee shops around the city, working on my car, playing games or playing volleyball.
                        </p>
                        
                        <p className="about-page__location">
                            Based in Vancouver, BC
                        </p>
                    </div>

                    <div className="about-page__mission">
                        <h3 className="about-page__mission-title">What I Care About</h3>
                        
                        <div className="about-page__values">
                            <div className="about-page__value-item">
                                <div className="about-page__value-icon">🎯</div>
                                <div className="about-page__value-content">
                                    <h4>Solving Real Problems</h4>
                                    <p>I love figuring out how to make things work better and actually help people in their daily lives.</p>
                                </div>
                            </div>
                            
                            <div className="about-page__value-item">
                                <div className="about-page__value-icon">🤝</div>
                                <div className="about-page__value-content">
                                    <h4>Building Community</h4>
                                    <p>Creating tools and platforms that bring people together and make it easier to work as a team.</p>
                                </div>
                            </div>
                            
                            <div className="about-page__value-item">
                                <div className="about-page__value-icon">👤</div>
                                <div className="about-page__value-content">
                                    <h4>User-First Design</h4>
                                    <p>Making sure the stuff I build is actually easy and enjoyable for people to use.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage; 