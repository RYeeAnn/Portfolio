import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.scss';

function AboutPage() {
    useEffect(() => {
        // Always scroll to top when About page loads
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            <div className="about-page__container">
                <div className="about-page__header">
                    <Link to="/" className="about-page__back-link">← Back to Portfolio</Link>
                    <h1 className="about-page__title">Meet the Developer</h1>
                </div>

                <div className="about-page__content">
                    <div className="about-page__story">
                        <div className="about-page__story-section">
                            <h2 className="about-page__story-heading">My Journey</h2>
                            <p>
                                Hey there! I'm Ryan, a software developer based in Vancouver, BC. My path into tech wasn't exactly the typical route. I studied Electrical Engineering at UBC and worked in the automotive industry before jumping into software. That switch happened after I did a 12-week bootcamp at BrainStation, and that's what got me started on this path.
                            </p>
                        </div>
                        
                        <div className="about-page__story-section">
                            <h2 className="about-page__story-heading">What I Build</h2>
                            <p>
                                Since then I've built stuff like a community platform for volunteers, tools that help drivers understand their cars better, and some fun learning games. What I really love is creating things that people actually find useful and enjoy using.
                            </p>
                        </div>
                        
                        <div className="about-page__story-section">
                            <h2 className="about-page__story-heading">Beyond Code</h2>
                            <p>
                                In my spare time, you'll find me checking out new coffee shops around the city, working on my car, playing games, playing badminton, or playing volleyball.
                            </p>
                        </div>

                        <div className="about-page__story-section">
                            <h2 className="about-page__story-heading">This Portfolio</h2>
                            <p>
                                I hand-coded this portfolio using HTML, CSS, and JavaScript to showcase my journey as a software developer.
                            </p>
                        </div>
                        
                        <div className="about-page__location">
                            <span className="about-page__location-icon">📍</span>
                            Based in Vancouver, BC
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage; 