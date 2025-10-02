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
                    <h1 className="about-page__title">Meet the Developer!</h1>
                    
                    <div className="about-page__main">
                        <div className="about-page__image">
                            <img src={ryan2} alt="Ryan Yee" />
                        </div>
                        
                        <div className="about-page__text">
                            <div className="about-page__story">
                                <p>
                                    I'm Ryan, a software developer based in Vancouver, BC. My path into tech wasn't exactly the typical route. I studied Electrical Engineering at UBC and worked in the automotive industry before jumping into software. That switch happened after I did a 12-week bootcamp at BrainStation, and that's what got me started on this path.
                                </p>
                                
                                <p>
                                    Since then I've built stuff like a community platform for volunteers, tools that help drivers understand their cars better, and some fun learning games. What I really love is creating things that people actually find useful and enjoy using.
                                </p>
                                
                                <p>
                                    In my spare time, you'll find me checking out new coffee shops around the city, working on my car, playing games, playing badminton, or playing volleyball.
                                </p>
                                
                                <p>
                                    I hand-coded this portfolio using React and SCSS to showcase my journey as a software developer.
                                </p>
                            </div>
                            
                            <div className="about-page__location">
                                <span>– Based in Vancouver, BC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage; 